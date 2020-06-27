$(document).ready(function() {

  // var tween = new TimelineMax();

  // tween
  //   .fromTo('.promo_content h1', 2, {y: -400, opacity: 0}, {y: 0, opacity: 1}, "-=0.7")
  //   .fromTo('.promo_text', 2, {y: 400, opacity: 0}, {y: 0, opacity: 1}, "-=0.7");
  $('.promo_content').addClass('activate fadeInUp');

  // Menu popup
  $('.search label').click(function(){
    $('.search').toggleClass('active');
  });
  $('.toggle').click(function(){
    $('.popup').addClass('active');
  });
  $('.close').click(function(){
    $('.popup').removeClass('active');
  });

  // Slick Slider
  $('.promo_slider').slick({
    infinite: true,
    arrows: true,
    dots: false,
    responsive: [
    {
      breakpoint: 1370,
      settings: {
        dots: true,
        arrows: false
      }
    },
    {
      breakpoint: 767,
      settings: "unslick"
    }
    ]
  });

  $('.promo_slider').on('afterChange', function(event, slick, currentSlide) {
    $('.promo_content').removeClass('off');
    $('.promo_content').addClass('activate fadeInUp');
  });   

  $('.promo_slider').on('beforeChange', function(event, slick, currentSlide) {
    $('.promo_content').removeClass('activate fadeInUp');
    $('.promo_content').addClass('off');
  });

  $('#certif-doc_slider1').slick({
    infinite: true,
    prevArrow: $('#certif-doc_item1 .arrow-prev'),
    nextArrow: $('#certif-doc_item1 .arrow-next')
  });

  $('#certif-doc_slider2').slick({
    infinite: true,
    prevArrow: $('#certif-doc_item2 .arrow-prev'),
    nextArrow: $('#certif-doc_item2 .arrow-next')
  });

  $('#certif-doc_slider3').slick({
    infinite: true,
    prevArrow: $('#certif-doc_item3 .arrow-prev'),
    nextArrow: $('#certif-doc_item3 .arrow-next')
  });

  // Tabs UI 
  $('.services_tabs').tabs();

  // Beefup accordion
  $('.accordion').beefup({
    openSingle: true,
    onOpen: function($border) {
      $border.addClass('active');
    },
    onClose: function($border) {
      $border.removeClass('active');
    }
  });

  // sticky header

  $(window).on('scroll', function () {
    if($(window).scrollTop() > 200) {
      $('.header_bt').addClass('sticky');
    } else {
      $('.header_bt').removeClass('sticky');
    }
  });

  // AOS animate

  AOS.init({
    disable: function () {
      maxWidth = 750;
      return window.innerWidth < maxWidth;
    },
    once: true
  });


  // TEXT Animation with GSAP
  
  var els = $(".title_main");
  iw=0;
  var arr = [];
  
  $(els).each(function (index) { 
    // Записываем в массив расстояние до объекта (заголовока)
    iw++;
    arr.push($(this).offset().top+','+iw);
  
   // Записываем  id (заголовока)
    $(this).attr("id",'db'+iw);
      var characters = $(this).text().split("");
      $this = $(this);
      $this.empty();
      $.each(characters, function (i, el) {
      $this.append("<div class='letter' data-id='d"+i+"'>" + el + "</div>");
    });
  });
  
  $(window).on('scroll', function () { 
      //Первый элемент
    k=0;
    for (i = 0; i < arr.length; i++) {
      massiveelement = arr[i];
      razbitie = massiveelement.split(',');
         
      maxHeight = parseInt(razbitie[0]) - $(window).height();
      if(  $(document).scrollTop()> maxHeight) {    
      var tl = new TimelineMax(),
          title_elm = $('#db'+parseInt(razbitie[1])+' .letter'); 
          tl.staggerFromTo(title_elm, 1, {y: 70, opacity: 0}, {y: 0, opacity: 1, ease: Back.easeOut.config(4)}, 0.05);
      arr.splice(i, 1);
      } k++;
    }
  });

}); 

// API Yandex Map
$(document).ready(function() {
  ymaps.ready(init);
  var myMap;

  function init(){     
    myMap = new ymaps.Map("map", {
      center: [[44.60364807460527,33.523212999999956]],
      zoom: 16
    });
    myMap.controls
    .remove('zoomControl')
    myMap.behaviors.disable([
      'drag',
      'scrollZoom'
      ]);
    var myPlacemark = new ymaps.Placemark([[44.60364807460527,33.523212999999956]], { 
      balloonContentBody: 'Дюкер & Нинель',
      hintContent: 'Дюкер & Нинель'
    });
  }
});