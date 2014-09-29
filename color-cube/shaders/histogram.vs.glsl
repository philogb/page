#define DIM 45.0

attribute vec3 sphereVertices;
attribute vec3 sphereNormals;
attribute vec3 colors;
attribute vec3 rgb;
attribute vec3 hsl;
attribute vec3 hsv;
attribute float histogram;

uniform mat4 worldMatrix;
uniform mat4 projectionMatrix;
uniform mat4 worldInverseTransposeMatrix;

uniform float from;
uniform float to;
uniform float delta;
uniform float size;

varying vec4 vTransformedNormal;
varying vec4 vPosition;
varying vec3 vColor;


void main(void) {
  vec3 fromPos;
  if (from == 0.0) {
    fromPos = rgb;
  } else if (from == 1.0) {
    fromPos = hsl;
  } else {
    fromPos = hsv;
  }

  vec3 toPos;
  if (to == 0.0) {
    toPos = rgb;
  } else if (to == 1.0) {
    toPos = hsl;
  } else {
    toPos = hsv;
  }

  vec3 translation = vec3(fromPos.x + (toPos.x - fromPos.x) * delta,
                          fromPos.y + (toPos.y - fromPos.y) * delta,
                          fromPos.z + (toPos.z - fromPos.z) * delta);


  float r = size + log(histogram * 10.0 + 1.) * 10.;
  if (histogram <= 0.0 &&
     ((colors.r == 1.0 || colors.r == 0.0) && (colors.g == 1.0 || colors.g == 0.0)) ||
     ((colors.r == 1.0 || colors.r == 0.0) && (colors.b == 1.0 || colors.b == 0.0)) ||
     ((colors.b == 0.0 || colors.b == 1.0) && (colors.g == 1.0 || colors.g == 0.0)) ||

     ((colors.r == 1.0 || colors.r == 0.0) && (colors.g == colors.b)) ||
     ((colors.g == 1.0 || colors.g == 0.0) && (colors.r == colors.b)) ||
     ((colors.b == 0.0 || colors.b == 1.0) && (colors.r == colors.g))) {
    r = 0.1;
    vPosition = worldMatrix * vec4(translation + (sphereVertices / DIM * r), 1.0);
    vTransformedNormal = worldInverseTransposeMatrix * vec4(sphereNormals, 1.0);
    vColor = vec3(0.2);
  } else {
    vPosition = worldMatrix * vec4(translation + (sphereVertices / DIM * r), 1.0);
    vTransformedNormal = worldInverseTransposeMatrix * vec4(sphereNormals, 1.0);
    vColor = colors;
}

  gl_Position = projectionMatrix * vPosition;
}
