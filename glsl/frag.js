const fragment = /* glsl */ ` 

#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;

#define PI 3.1415926535

void main() {
	vec2 uv = gl_FragCoord.xy/u_resolution;
	gl_FragColor = vec4(uv.x, uv.y, 1.0, 1.0);
}`;

export default fragment;
