#ifdef GL_ES
precision highp float;
#endif

uniform float width;
uniform float height;
uniform float blurX;
uniform float blurY;
uniform float melange;

uniform sampler2D sampler1;
uniform sampler2D sampler2;

varying vec2 vTexCoord1;

void main() {
  vec4 sum = vec4(0.0);
  vec2 dim = vec2(width, height);
  vec2 blurSize = vec2(blurX, blurY) / dim;
  vec2 p = vTexCoord1;

  if (blurX != 0. || blurY != 0.) {
    sum += texture2D(sampler1, p - 4.0 * blurSize) * 0.05;
    sum += texture2D(sampler1, p - 3.0 * blurSize) * 0.09;
    sum += texture2D(sampler1, p - 2.0 * blurSize) * 0.12;
    sum += texture2D(sampler1, p - 1.0 * blurSize) * 0.15;
    sum += texture2D(sampler1, p                 ) * 0.16;
    sum += texture2D(sampler1, p + 1.0 * blurSize) * 0.15;
    sum += texture2D(sampler1, p + 2.0 * blurSize) * 0.12;
    sum += texture2D(sampler1, p + 3.0 * blurSize) * 0.09;
    sum += texture2D(sampler1, p + 4.0 * blurSize) * 0.05;
  } else {
    sum += texture2D(sampler1, p);
  }

  gl_FragColor = sum;

  if (melange > 0.0) {
    sum *= melange;
    gl_FragColor = sum + texture2D(sampler2, p);
  }
}

