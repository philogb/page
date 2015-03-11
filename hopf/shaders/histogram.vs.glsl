attribute vec3 modelVertices;
attribute vec3 modelNormals;
attribute vec2 pos;

uniform mat4 worldMatrix;
uniform mat4 viewMatrix;
uniform mat4 projectionMatrix;
uniform mat4 worldInverseTransposeMatrix;

varying vec4 vTransformedNormal;
varying vec4 vPosition;
varying vec3 vColor;

vec4 hopfInv(float eta, float psi1, float psi2) {
  return vec4(
    cos(psi1 + psi2) * sin(eta),
    sin(psi1 + psi2) * sin(eta),
    cos(psi1 - psi2) * cos(eta),
    sin(psi1 - psi2) * cos(eta)
  );
}

vec3 stereo(vec4 s3p) {
  float div = max(0.1, 1. - s3p.w);
  return vec3(
    s3p.x / div,
    s3p.y / div,
    s3p.z / div
  );
}

vec3 sphere(vec2 cart) {
  return vec3(
    sin(cart.x * 2.) * cos(cart.y),
    sin(cart.x * 2.) * sin(cart.y),
    cos(cart.x * 2.)
  );
}

vec3 rotate(vec4 vectorAngle, vec3 vector) {
  /*mat3 rot = mat3(*/
    /*vec3( cos(alpha) * cos(beta), cos(alpha) * sin(beta) * sin(gamma) - sin(alpha) * cos(gamma), cos(alpha) * sin(beta) * cos(gamma) + sin(alpha) * sin(gamma)),*/
    /*vec3( sin(alpha) * cos(beta), sin(alpha) * sin(beta) * sin(gamma) + cos(alpha) * cos(gamma), sin(alpha) * sin(beta) * cos(gamma) + cos(alpha) * sin(gamma)),*/
    /*vec3( -sin(beta)            , cos(beta) * sin(gamma)                                       , cos(beta) * cos(gamma)                                       )*/
  /*);*/
  float theta = vectorAngle.a;
  vec3 u = vectorAngle.xyz;
  mat3 rot = mat3(
    vec3( cos(theta) + u.x * u.x * (1. - cos(theta)), u.x * u.y * (1. - cos(theta)) - u.z * sin(theta), u.x * u.z * (1. - cos(theta)) + u.y * sin(theta)),
    vec3( u.y * u.x * (1. - cos(theta)) + u.z * sin(theta), cos(theta) + u.y * u.y * (1. - cos(theta)), u.y * u.z * (1. - cos(theta)) - u.x * sin(theta)),
    vec3( u.z * u.x * (1. - cos(theta)) - u.y * sin(theta), u.z * u.y * (1. - cos(theta)) + u.x * sin(theta), cos(theta) + u.z * u.z * (1. - cos(theta)))
  );
  return rot * vector;
}

void main(void) {
  const vec3 diskNormal = vec3(0, 0, 1);
  const float epsilon = 0.01;
  vec3 p = stereo( hopfInv( pos.x, pos.y /2. , modelVertices.x ) );
  vec3 pBefore = stereo( hopfInv( pos.x, pos.y /2. , modelVertices.x - epsilon ) );
  vec3 pAfter  = stereo( hopfInv( pos.x, pos.y /2. , modelVertices.x + epsilon ) );
  vec3 normalizedP = normalize(pAfter - pBefore);
  vec3 crossed = cross(normalizedP, diskNormal);
  float angle  = acos( dot(diskNormal, normalizedP) );
  vec3 rotatedP = rotate(vec4( normalize(crossed), angle), vec3(modelVertices.yz, 0));
  vec3 normal = normalize(rotatedP);
  p += rotatedP / 20.;//vec3(modelVertices.yz / 20., 0);
  vColor = (sphere(pos) / 2. + 0.5);
  vPosition = worldMatrix * vec4(p, 1.0);
  vTransformedNormal = worldInverseTransposeMatrix * vec4(normal, 1.0);
  gl_PointSize = 5.;
  gl_Position = projectionMatrix * vPosition;
}
