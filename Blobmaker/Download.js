function downloadImage() {
  let buttonDiv = document.getElementById("buttonDiv");
  buttonDiv.style.display = "none";
  let content = document.getElementById("svgImg");
  //alert("content : " + content);
  domtoimage.toBlob(content).then(function (blob) {
    window.saveAs(blob, "my-node.svg");
  });
}
