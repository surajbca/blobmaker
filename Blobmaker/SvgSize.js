// function rangeElement1() {
//   const svgCodeCopy = document.getElementById("svgCodeCopy");
//   alert("svgCodeCopy: " + svgCodeCopy);
//   const svgElement1Id = document.getElementById("circle1");
//   /* let range = document.getElementById("rangeElement1");*/
//   ///alert(circle1);
//   //alert(range.value);
//   /*var matrix = circle1.createSVGMatrix();
//   matrix = matrix.translate(10, 10);
//   rangeElement1.style.height = range.value;*/
//   alert("id  rangeElement1 : " + JSON.stringify(svgElement1Id));
//   svgElement1Id.style.d =
//     "M45.5,-14.2C51,2.1,42,23.7,23.1,39.2C4.2,54.7,-24.6,64.1,-39.1,53.6C-53.7,43.1,-54,12.7,-45.1,-8.3C-36.2,-29.3,-18.1,-40.9,1,-41.2C20,-41.6,40.1,-30.5,45.5,-14.2Z";
// }

function rangeElement1() {
  //const circle1 = document.getElementById("circle1");
  //alert("Id: " + JSON.stringify(circle1));

  //circle1.style.fill = "#24A148";
  circle1.style.border = "30% 70% 70% 30% / 30% 30% 70% 70%";
  //"M50.8,-17.4C59.5,10.4,56,41.3,38.6,54.2C21.1,67.2,-10.2,62.1,-31.5,46C-52.8,29.9,-64.1,2.7,-57.2,-22.6C-50.3,-47.9,-25.2,-71.3,-2.1,-70.6C21,-69.9,42,-45.2,50.8,-17.4Z";
  circle1.style.height = 100;
}

function rangeElement2() {
  const rangeElement2 = document.getElementById("svgCodeCopy");
  alert();
  /*let range = document.getElementById("rangeElement1");*/
  ///alert(circle1);
  //alert(range.value);
  /* var matrix = circle1.createSVGMatrix();
  matrix = matrix.translate(10, 10);
  rangeElement2.style.rx = range.value;*/
  rangeElement2.style.d =
    "M50.8,-17.4C59.5,10.4,56,41.3,38.6,54.2C21.1,67.2,-10.2,62.1,-31.5,46C-52.8,29.9,-64.1,2.7,-57.2,-22.6C-50.3,-47.9,-25.2,-71.3,-2.1,-70.6C21,-69.9,42,-45.2,50.8,-17.4Z";
}
