/*global importScripts, PhiloGL*/
importScripts('./philogl.js');

var dim = 45,
    cube = dim * dim * dim,
    nlat = 10,
    nlong = 10,
    colors = [],
    sphereVertices = [],
    sphereNormals = [],
    sphereIndices = [],
    lastIndex = 0,
    slice = Array.prototype.slice,
    rgbPositions = [],
    hsvPositions = [],
    hslPositions = [],
    hcvPositions = [],
    hclPositions = [];

function createSphere() {
  var shape = new PhiloGL.O3D.IcoSphere({
    iterations: 1
  }),
  vertices = slice.call(shape.vertices),
  normals = slice.call(shape.normals),
  indices = slice.call(shape.indices);

  sphereVertices.push.apply(sphereVertices, vertices);
  sphereNormals.push.apply(sphereNormals, normals);
  sphereIndices.push.apply(sphereIndices, indices);
}

function createRGB() {
  for (var i = 0; i <= dim; i++) {
    for(var j = 0; j <= dim; j++) {
      for(var k = 0; k <= dim; k++) {
        rgbPositions.push((i / dim - 0.5) * 2,
                          (j / dim - 0.5) * 2,
                          (k / dim - 0.5) * 2);
        colors.push(k / dim, j / dim, i / dim);
      }
    }
  }
}

function createHueMaps() {
  var sin = Math.sin,
      cos = Math.cos,
      atan2 = Math.atan2,
      min = Math.min,
      max = Math.max,
      sqrt = Math.sqrt;

  for (var i = 0, lc = colors.length; i < lc; i+=3) {
    var r = colors[i   ],
        g = colors[i +1],
        b = colors[i +2],

        alpha = 0.5 * (2 * r - g - b),
        beta = 0.866025 * (g - b),

        h = atan2(beta, alpha),
        c = sqrt(alpha * alpha + beta * beta),
        v = max(r, g, b),
        l = 0.5 * (v + min(r, g, b)),

        x = cos(h) * c * 1.5,
        yv = -1.5 + 3 * v,
        yl = -1.5 + 3 * l,
        z = sin(h) * c * 1.5;

    hsvPositions.push(x, yv, z);
    hslPositions.push(x, yl, z);
  }
}

onmessage = function(e) {
  createSphere();
  createRGB();
  createHueMaps();

  postMessage({
    sphereVertices: sphereVertices,
    sphereNormals: sphereNormals,
    colors: colors,
    rgb: rgbPositions,
    hsv: hsvPositions,
    hsl: hslPositions,
    indices: sphereIndices
  });
};
