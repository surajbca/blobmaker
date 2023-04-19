function downloadImage() {
  let content = document.getElementById("svgImg");
  //alert("content : " + content);
  domtoimage.toBlob(content).then(function (blob) {
    window.saveAs(blob, "my-node.svg");
  });
}
