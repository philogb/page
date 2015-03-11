attribute vec3 modelDot;
attribute vec2 pos;

uniform mat4 worldMatrix;
uniform mat4 projectionMatrix;

uniform bool enablePicking;

varying vec3 vColor;

vec3 sphere(vec2 cart) {
  return vec3(
    sin(cart.x * 2.) * cos(cart.y),
    sin(cart.x * 2.) * sin(cart.y),
    cos(cart.x * 2.)
  );
}

void main(void) {
  vec3 p = sphere(pos) *  modelDot * 1.1;
  vColor = (p + 1.) / 2.;
  gl_PointSize = 10.;
  if (enablePicking) {
    gl_PointSize = 0.;
  }
  gl_Position = projectionMatrix * worldMatrix * vec4(p, 1.0);
}

