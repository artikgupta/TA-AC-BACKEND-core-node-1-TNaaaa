function areaOfSquare(n) {
  return n * n;
}

function areaOfRectangle(l, b) {
  return l * b;
}

function areaOfCircle(radius) {
  return radius * Math.pi * 2;
}

module.exports = {
  areaOfSquare: areaOfSquare,
  areaOfRectangle: areaOfRectangle,
  areaOfCircle: areaOfCircle,
};
