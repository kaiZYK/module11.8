// 获取html
let html = document.documentElement;
function setRem() {
  let ui_w = 640;
  let cl_w = document.documentElement.clientWidth || document.body.clientWidth;
  cl_w = cl_w < 250 ? 250 : cl_w;
  cl_w = cl_w > 800 ? 800 : cl_w;
  html.style.fontSize = (cl_w / ui_w) * 10 + "px";
}
let timer = null;
window.onresize = function () {
  clearInterval(timer);
  timer = setTimeout(setRem, 50);
};
window.onload = setRem;
