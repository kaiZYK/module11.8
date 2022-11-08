// 获取html
let html = document.documentElement;
console.log(html);
function setRem() {
  let ui_w = 375;
  let cl_w = document.documentElement.clientWidth || document.body.clientWidth;
  cl_w = cl_w < 370 ? 370 : cl_w;
  cl_w = cl_w > 800 ? 800 : cl_w;
  html.style.fontSize = (cl_w / ui_w) * 10 + "px";
}
let timer = null;
window.onresize = function () {
  clearTimeout(timer);
  timer = setTimeout(setRem, 50);
};
window.onload = setRem;

var mySwiper = new Swiper(".swiper", {
  direction: "horizontal", // 垂直切换选项
  loop: true, // 循环模式选项
  // autoplay:true,
  autoplay: {
    delay: 1500,
    stopOnLastSlide: false,
    disableOnInteraction: false,
  },

  // 如果需要分页器
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // 如果需要前进后退按钮
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
