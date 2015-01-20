#ifdef GL_ES
precision highp float;
#endif

#define LIGHT_MAX 2

varying vec3 vColor;
varying vec4 vTransformedNormal;
varying vec4 vPosition;
varying vec2 vUv;
varying vec2 viUv;
varying float delta;

uniform float shininess;

uniform vec3 ambientColor;
uniform vec3 directionalColor;
uniform vec3 lightingDirection;

uniform vec3 pointLocation[LIGHT_MAX];
uniform vec3 pointColor[LIGHT_MAX];
uniform vec3 pointSpecularColor[LIGHT_MAX];
uniform int numberPoints;

uniform sampler2D sampler1;
uniform sampler2D sampler2;

uniform mat4 viewMatrix;
uniform mat4 objectMatrix;
uniform float fadeIn;

void main(void) {
  vec3 lightWeighting;
  vec3 lightDirection;
  float specularLightWeighting = 0.0;
  float diffuseLightWeighting = 0.0;
  vec3  specularLight = vec3(0.0, 0.0, 0.0);
  vec3  diffuseLight = vec3(0.0, 0.0, 0.0);

  vec3 transformedPointLocation;
  vec3 normal = vTransformedNormal.xyz;

  vec3 eyeDirection = normalize(-vPosition.xyz);
  vec3 reflectionDirection;

  transformedPointLocation = (viewMatrix * vec4(pointLocation[0], 1.0)).xyz;
  lightDirection = normalize(transformedPointLocation - vPosition.xyz);

  reflectionDirection = reflect(-lightDirection, normal);
  specularLightWeighting = pow(max(dot(reflectionDirection, eyeDirection), 0.0), shininess);
  specularLight += specularLightWeighting * pointSpecularColor[0];

  diffuseLightWeighting = max(dot(normal, lightDirection), 0.0);
  diffuseLight += diffuseLightWeighting * pointColor[0];

  lightWeighting = ambientColor + diffuseLight + specularLight;

  vec4 texel = texture2D(sampler2, viUv);
  vec2 p = viUv - 0.5;
  float dp = dot(p, p);
  texel.rgb -= dp;

  float change = (1. - delta * (min(texture2D(sampler1, vUv).a, texture2D(sampler1, vec2(vUv.x, vUv.y - 0.003)).a)));
  gl_FragColor = vec4(mix(texture2D(sampler1, vUv), vec4(vColor, 1), change).xyz * lightWeighting, 1);
  gl_FragColor = mix(gl_FragColor, texel, fadeIn);
}
