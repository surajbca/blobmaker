content = document.getElementById("svgImg");
function downloadImage() {
  alert("svgImg");
  domtoimage.toBlob(content).then(function (blob) {
    window.saveAs(blob, "my-node.png");
  });
}
