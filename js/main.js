$(function () {
  //liders__slider start
  $(document).ready(function () {
    // Основной слайдер
    $('.liders__slider').slick({
      arrows: false,
      slidesToShow: 1,
      infinite: true,
      draggable: false,
      dots: true,
      appendDots: ('.liders__slider-dots'),
      swipe: false,
      touchMove: false,
      responsive:
        [
          {
            breakpoint: 1200,
            settings: {
              dots: true,
              appendDots: ('.liders__slider-dots--mobile'),
              slidesToShow: 2,
              swipe: true,
              draggable: true,
              touchMove: true,
            },
          },
          {
            breakpoint: 700,
            settings: {
              dots: true,
              appendDots: ('.liders__slider-dots--mobile'),
              slidesToShow: 1,
              swipe: true,
              draggable: true,
              touchMove: true,
            },
          },

        ]


    });

    $('.liders__slider-arrow--prev').on('click', function (e) {
      e.preventDefault()
      $('.liders__slider ').slick('slickPrev')
    })

    $('.liders__slider-arrow--next').on('click', function (e) {
      e.preventDefault()
      $('.liders__slider ').slick('slickNext')
    })

    $('.liders__slider').on('afterChange', function (event, slick, currentSlide) {
      $('.liders__img-slider').slick('setPosition');
    });

    // Вложенный слайдер
    $('.liders__img-slider').slick({
      arrows: false,
      slidesToShow: 1,
      infinite: true,
      draggable: true,
      autoplay: true,

      responsive:
        [
          {
            breakpoint: 1200,
            settings: {
              // dots: true,
              // appendDots: ('.liders__img-dots--mobile'),

            },
          },

        ]

    });

    $('.liders__img-btn--prev').on('click', function (e) {
      e.preventDefault()
      $('.liders__img-slider').slick('slickPrev')
    })

    $('.liders__img-btn--next').on('click', function (e) {
      e.preventDefault()
      $('.liders__img-slider').slick('slickNext')
    })
  });

  //liders__slider end
  //quiz start

  $('.quiz__slider').slick({
    arrows: false,
    slidesToShow: 1,
    infinite: false,
    draggable: false,
    dots: false,
    fade: true,
    swipe: false,
    touchMove: false,
  });

  $('.quiz__slide-btn--prev').on('click', function (e) {
    e.preventDefault()
    $('.quiz__slider').slick('slickPrev')
  })

  $('.quiz__slide-btn--next').on('click', function (e) {
    e.preventDefault()
    $('.quiz__slider').slick('slickNext')
  })

  //quiz end
  //quiz__form start
  $(document).ready(function () {
    $('#quiz__submit-btn').click(function (event) {
      event.preventDefault(); // Предотвращаем стандартное поведение кнопки

      const formIds = ['quiz__form1', 'quiz__form2', 'quiz__form3', 'quiz__form4', 'quiz__form5'];
      const formData = {};

      formIds.forEach(function (formId) {
        const $form = $('#' + formId);
        if ($form.length) {
          $form.serializeArray().forEach(function (item) {
            formData[item.name] = item.value;
          });
        }
      });



      // Теперь formData содержит все данные из форм
      console.log('Form Data:', formData);
      alert('Успех!');
      // Здесь можно сделать что-то с formData, например, отправить на сервер или обработать иначе
    });
  });
  //quiz__form end

  //accordeon start

  $('.questions__acc-link').on('click', function (e) {
    e.preventDefault()
    if ($(this).hasClass('questions__acc-link--active')) {
      $(this).removeClass('questions__acc-link--active')
      $(this).children('.questions__acc-text').slideUp()
    } else {
      $('.questions__acc-link').removeClass('questions__acc-link--active')
      $('.questions__acc-text').slideUp()
      $(this).addClass('questions__acc-link--active')
      $(this).children('.questions__acc-text').slideDown()
    }
  })

  //accordeon end

  //rewievs sliders start

  $(document).ready(function () {
    // Основной слайдер
    $('.reviews__slider').slick({
      arrows: false,
      slidesToShow: 1,
      infinite: true,
      draggable: false,
      dots: true,
      swipe: false,
      touchMove: false,
      appendDots: ('.reviews__slider-dots'),
      responsive:
        [
          {
            breakpoint: 1200,
            settings: {
              dots: true,
              appendDots: ('.reviews__slider-dots--mobile'),
              slidesToShow: 2,
              swipe: true,
              touchMove: true,
              draggable: true,
            },
          },
          {
            breakpoint: 700,
            settings: {
              dots: true,
              appendDots: ('.reviews__slider-dots--mobile'),
              slidesToShow: 1,
              swipe: true,
              touchMove: true,
              draggable: true,
              
            },
          },


        ]
    });

    $('.reviews__slider-arrow--prev').on('click', function (e) {
      e.preventDefault()
      $('.reviews__slider ').slick('slickPrev')
    })

    $('.reviews__slider-arrow--next').on('click', function (e) {
      e.preventDefault()
      $('.reviews__slider ').slick('slickNext')
    })

    // Вложенный слайдер
    $('.reviews__img-slider').slick({
      arrows: false,
      slidesToShow: 1,
      infinite: true,
      draggable: true,
      autoplay: true,

    });

    $('.reviews__img-btn--prev').on('click', function (e) {
      e.preventDefault()
      $('.reviews__img-slider').slick('slickPrev')
    })

    $('.reviews__img-btn--next').on('click', function (e) {
      e.preventDefault()
      $('.reviews__img-slider').slick('slickNext')
    })
  });


  //rewievs sliders end

  //smooth scroll start

  $(".header__nav-list a, .header__main-btns a").on("click", function (e) {
    e.preventDefault()
    var id = $(this).attr('href'),
      top = $(id).offset().top - 75
    $('body,html').animate({ scrollTop: top }, 1500)
  });

  //smooth scroll end

  //burger-menu start

  $('.header__burger-btn, .overlay__btn--x, .overlay__nav-link').on('click', function (e) {
    e.preventDefault()
    $('.overlay').toggleClass('overlay--open')

  })

  //burger-menu end
});