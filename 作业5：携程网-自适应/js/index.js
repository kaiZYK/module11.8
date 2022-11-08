// 获取html
let html = document.documentElement;
console.log(html);
function setRem() {
  let ui_w = 375;
  let cl_w = document.documentElement.clientWidth || document.body.clientWidth;
  html.style.fontSize = (cl_w / ui_w) * 10 + "px";
}
window.onresize = setRem;
window.onload = setRem;
