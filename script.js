function getSent() {
  var data = document.getElementById('essay').value;
  let sentenceNum = data.split(".").length - 1;
  
  document.getElementById('num').value = `Number of Sentences: ${sentenceNum}`;
}
