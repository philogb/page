#ifdef GL_ES
precision highp float;
#endif

uniform float width;
uniform float height;

uniform sampler2D sampler1;
uniform sampler2D sampler2;

varying vec2 vTexCoord1;

float scale(vec3 color) {
  return color.r - color.b + 1.0;
  /*vec3 colorBlue = vec3(0, 32, 78) / 255.;*/
  /*vec3 colorMiddle = vec3(235, 235, 235) / 255.;*/
  /*vec3 colorRed = vec3(171, 0, 9) / 255.;*/

  /*float valueFrom = 0.;*/
  /*float valueTo = 2.;*/

  /*float ans1 = (distance(color, colorMiddle) / distance(colorBlue, colorMiddle)) * (valueTo - valueFrom) + valueFrom;*/
  /*float ans2 = (distance(color, colorMiddle) / distance(colorRed,  colorMiddle)) * (valueTo - valueFrom) + valueFrom;*/

  /*if (ans1 < valueFrom || ans1 > valueTo) {*/
    /*return clamp(ans2, 0., 2.) + 2.0;*/
  /*}*/
  /*return clamp(-ans1, -2., 0.) + 2.0;*/
}

void main() {
  vec2 p = vTexCoord1;
  /*gl_FragColor = texture2D(sampler1, p);*/
  vec3 color = texture2D(sampler1, p).rgb;
  gl_FragColor = vec4(color, scale(color));
}


