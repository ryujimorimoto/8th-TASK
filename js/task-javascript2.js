window.addEventListener("load", function() {
  const getNode = document.getElementById("techgeek-header");
  const getButton = document.getElementById("click-change");
  console.log(getNode);
  console.log(getButton);
  // getNode.append("追加しました");
  getButton.onclick = function() {
   getNode.innerHTML = `<h1>テックギーク</h1>`;
  }
});

// window.addEventListener("load", function(){
// const getNode = document.getElementById("get-node");
// console.log(getNode);
// getNode.append("追加しました");
// // getNode.innerHTML = `<h1>JavaScriptの練習</h1>`;
// });
