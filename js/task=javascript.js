window.addEventListener("load", function() {
 const getNode = document.getElementById("techgeek-header");
 console.log(getNode);
 getNode.append("追加しました");
document.getElementById("click-change").onclick = function() {
  Document.getElementById("techgeek-header").innerHTML = <h1>テックギーク</h1>;
}
 getNode.innerHTML = `<h1>テックギーク</h1>`;
}
)