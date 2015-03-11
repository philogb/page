#ifdef GL_ES
precision highp float;
#endif

varying vec3 vColor;

void main(void) {
  vec2 p = (gl_PointCoord - 0.5) * 2.;
  gl_FragColor = vec4(vColor, 1. - dot(p, p));
}

