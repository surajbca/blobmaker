function rangeElement1() {
  const poly = document.getElementById("circle1");

  const transform = `translate(${getRandomArbitrary(
    0,
    100
  )} ${getRandomArbitrary(0, 100)}) scale(${getRandomArbitrary(
    1,
    5
  )} ${getRandomArbitrary(1, 5)})`;

  //alert(poly);
  poly.setAttribute("transform", transform);
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function rangeElement2() {
  const poly = document.getElementById("circle1");

  const transform = `translate(${getRandomArbitrary(
    0,
    100
  )} ${getRandomArbitrary(0, 100)}) scale(${getRandomArbitrary(
    1,
    5
  )} ${getRandomArbitrary(1, 5)})`;

  //alert(poly);
  poly.setAttribute("transform", transform);
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function rangeElement3() {
  const poly = document.getElementById("circle1");

  const transform = `translate(${getRandomArbitrary(
    0,
    100
  )} ${getRandomArbitrary(0, 100)}) scale(${getRandomArbitrary(
    1,
    5
  )} ${getRandomArbitrary(1, 5)})`;

  //alert(poly);
  poly.setAttribute("transform", transform);
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
