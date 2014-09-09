#define WIDTH 1024.
#define HEIGHT 576.
#define DEGREE 20
#define STEP 3
#define OFFSET 0.1
#define PI 3.14159

attribute vec3 position;
attribute vec3 normal;
attribute vec2 texCoord1;

uniform mat4 worldMatrix;
uniform mat4 objectMatrix;
uniform mat4 projectionMatrix;
uniform mat4 worldInverseTransposeMatrix;
uniform sampler2D sampler1;
uniform sampler2D sampler2;
uniform bool reverse;
uniform float delta;
uniform vec2 bounds;
uniform float increase;

varying vec2 vTexCoord1;
varying vec4 vTransformedNormal;
varying vec4 vPosition;
varying vec4 vColor;

vec4 getElevation(vec2 tex, sampler2D sampler) {
  float pixelOffsetX = 1. / WIDTH;
  float pixelOffsetY = 1. / HEIGHT;
  vec4 acum = vec4(0);
  vec2 pos;
  int count;
  for (int i = -DEGREE; i <= DEGREE; i+=STEP) {
    for (int j = -DEGREE; j <= DEGREE; j+=STEP) {
      pos = vec2( pixelOffsetX * float(i), pixelOffsetY *  float(j) ) + tex;
      pos = vec2(.5 - pos.x, pos.y);
      if (pos.x < 0.) {
        pos.x = 1. + pos.x;
      }
      acum += texture2D(sampler, pos);
      count++;
    }
  }
  acum /= float(count);
  return acum;
}

void main(void) {
  vec2 tex = vec2(atan(position.y, position.x) + PI, acos(position.z)) / vec2(2. * PI, PI);
  tex.x = 0.5 - tex.x;
  if (tex.x < 0.) {
    tex.x = 1. + tex.x;
  }
  vec4 data1 = texture2D(sampler1, tex);
  vec4 data2 = texture2D(sampler2, tex);
  vec4 data = data1 + (data2 - data1) * delta;
  if (reverse) {
    data = data2 + (data1 - data2) * delta;
  }
  float offset = pow(data.a, 0.1);
  vPosition = worldMatrix * vec4(position * ((1. + OFFSET) + offset), 1.0);
  vTransformedNormal = worldInverseTransposeMatrix * vec4(normal, 1.0);
  vTexCoord1 = texCoord1;
  vColor = vec4(data.rgb, 1);

  vec4 objectPosition = objectMatrix * vec4(position * ((1. + OFFSET) + offset), 1.0);
  gl_Position = projectionMatrix * vPosition;
}
