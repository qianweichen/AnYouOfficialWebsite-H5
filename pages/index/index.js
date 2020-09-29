//载入
$('#header').load('/template/header/header.html');
$('#footer').load('/template/footer/footer.html');
//轮播
var swiper = new Swiper('.swiper-banner', {
  pagination: {
    el: '.swiper-pagination',
  },
});
var swiper = new Swiper('.swiper-about', {
  scrollbar: {
    el: '.swiper-scrollbar',
    hide: true,
  },
});
//初始化地图
chinaMapConfig.names.henan.color = "5CB632";
$('#ChinaMap').SVGMap({
  mapWidth: 322,
  mapHeight: 275
});