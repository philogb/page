#define DIM 500.0
#define WIDTH 4473.0
#define HEIGHT 2237.0
#define PI 3.1415926535

attribute vec3 sphereVertices;
attribute vec3 sphereNormals;
attribute vec3 colors;
attribute vec3 colors2;
attribute vec4 pos;
attribute float dist;

uniform mat4 worldMatrix;
uniform mat4 viewMatrix;
uniform mat4 projectionMatrix;
uniform mat4 worldInverseTransposeMatrix;
uniform float radius;
uniform float stepN;
uniform float colorDelta;

varying vec4 vTransformedNormal;
varying vec4 vPosition;
varying vec3 vColor;
varying vec2 vUv;
varying vec2 viUv;
varying float delta;

void main(void) {
  float r = pos.z;
  float z = 0.0;
  vec3 color = colors;
  float limit = WIDTH * 0.3 * radius / WIDTH;
  vec3 colorFrom = colors;
  vec3 colorTo = colorFrom;

  delta = 0.0;
  if (dist - radius > 0.) {
    if (dist - radius < limit + r / DIM) {
      if (stepN == 0.0) {
        r *= (((dist - radius) - (limit + r / DIM)) / -(limit + r / DIM));
        z = mix(-100., 0., ((dist - radius) - (limit + r / DIM)) / -(limit + r / DIM));
        delta = ((dist - radius) - (limit + r / DIM)) / -(limit + r / DIM);
        color = vec3(0.2) + (colors - vec3(0.2)) * ((dist - radius) - (limit + r / DIM)) / -(limit + r / DIM);
      } else if (stepN >= 1.0) {
        delta = ((dist - radius) - (limit + r / DIM)) / -(limit + r / DIM);
        color = colorFrom + (colorTo - colorFrom) * delta;
        z += -(1. - abs(((dist - radius) - (limit + r / DIM)) / -(limit + r / DIM) * 2. - 1.)) * 0.02 * DIM;
      }
    } else {
      if (stepN == 0.0) {
        r *= 0.0;
        delta = 0.0;
      } else if (stepN >= 1.0) {
        color = colorFrom;
        delta = 0.0;
      }
    }
  } else {
    if (stepN >= 1.0) {
      color = colorTo;
      delta = 1.0;
    }
    delta = 1.0;
  }
  color = mix(color, colors2, colorDelta);

  float rot = -pos.w / 180. * PI * delta;
  mat2 rotation = mat2(cos(rot), -sin(rot), sin(rot), cos(rot));
  vec3 finalSphereVertices = vec3(rotation * sphereVertices.xy, 0);

  vPosition = worldMatrix * vec4(vec3(pos.x, pos.y, z) / DIM + (finalSphereVertices / DIM * r), 1.0);
  vTransformedNormal = worldInverseTransposeMatrix * vec4(sphereNormals, 1.0);
  vColor = color;
  vUv = (sphereVertices.xy * 2.5 + 1.) / 2.;
  viUv = (sphereVertices.xy * sphereVertices.z + 1.) / 2.;

  gl_Position = projectionMatrix * vPosition;
}
