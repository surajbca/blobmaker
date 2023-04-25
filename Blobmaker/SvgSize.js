function rangeElement1() {
  const buttonDiv = document.getElementById("buttonDiv");
  buttonDiv.style.display = "none";
  const poly = document.getElementById("circle1");
  poly.style.transition = "0s";
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
  const buttonDiv = document.getElementById("buttonDiv");
  buttonDiv.style.display = "none";

  const poly1 = document.getElementById("circle1");
  poly1.style.transition = "2s";

  const transform = `translate(${getRandomArbitrary(
    0,
    100
  )} ${getRandomArbitrary(0, 100)}) scale(${getRandomArbitrary(
    1,
    5
  )} ${getRandomArbitrary(1, 5)})`;

  //alert(poly1);
  poly1.setAttribute("transform", transform);
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function rangeElement3() {
  const buttonDiv = document.getElementById("buttonDiv");
  buttonDiv.style.display = "none";

  const poly2 = document.getElementById("circle1");
  poly2.style.transition = "1s";
  const transform = `translate(${getRandomArbitrary(
    0,
    100
  )} ${getRandomArbitrary(0, 100)}) scale(${getRandomArbitrary(
    1,
    5
  )} ${getRandomArbitrary(1, 5)})`;

  //alert(poly2);
  poly2.setAttribute("transform", transform);
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
