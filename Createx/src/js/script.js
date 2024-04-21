$('.team__slider').slick({
   arrows: false,
   slidesToShow: 4,
   infinite: true,
   draggable: false,
   waitForAnimate: false,
})
$('.team__slider-prev').on('click', function (e) {
   e.preventDefault()
   $('.team__slider').slick('slickPrev')
})
$('.team__slider-next').on('click', function (e) {
   e.preventDefault()
   $('.team__slider').slick('slickNext')
})

$('.program__acc-link').on('click', function (e) {
   e.preventDefault()
   $(this).toggleClass('program__acc-link--active')
   $(this).children('.program__acc-text').slideToggle()
})