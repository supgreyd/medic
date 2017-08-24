$('.slick__news').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  dotsClass: "my-dots",
  touchMove: true,
});

$('.slick__slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  dotsClass: "my-dots",
  autoplay: true,
  autoplaySpeed: 5000,
  fade: true,
  speed: 1000,
  touchMove: true,
});