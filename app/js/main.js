$(document).ready(function () {
  // ПОИСК ТОГГЛ
  $('.search-form__button').on('click', function (e) {
    e.preventDefault()
    $('form').addClass('search-form--open')
    $('nav').addClass('hidden')
    $('input[type="search"]').focus()
  })

  $('input[type="search"]').on('focusout', function (e) {
    $('form').removeClass('search-form--open')
    $('nav').removeClass('hidden')
  })
  // ABOUT SWIPER
  var swiperAbout = new Swiper('.swiper-container--about', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    centeredSlides: false,
    loop: true,
    speed: 600,

    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  })
  // FACTS SWIPER
  var swiperFacts = new Swiper('.swiper-container--facts', {
    slidesPerView: 3,
    spaceBetween: 10,
    slidesPerGroup: 1,
    // loop: true,
    // centeredSlides: false,
    // grabCursor: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    breakpoints: {

      // when window width is >= 640px
      // 640: {
      //   slidesPerView: 'auto',
      //   spaceBetween: 20,
      //   slidesPerGroup: 3
      // },
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
        slidesPerGroup: 1
      },

      1440: {
        slidesPerView: 5,
        spaceBetween: 10,
        slidesPerGroup: 1
      }
    }
  })

  // REVIEWS SLIDER
  var swiper = new Swiper('.swiper-container--reviews', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  })

  // NEWS SLIDER
  var swiperFacts = new Swiper('.swiper-container--news', {
    loop: true,
    centeredSlides: false,
    // grabCursor: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    breakpoints: {
      // when window width is >= 320 px

      1340: {
        slidesPerView: 2,
        spaceBetween: 20,
        slidesPerGroup: 2
      },
      1920: {
        slidesPerView: 3,
        spaceBetween: 10,
        slidesPerGroup: 3
      }
    }
  })
  // PROGRESS CIRCLES
  const circleFirst = document.querySelector('.progress-ring__circle--care')
  const radiusFirst = circleFirst.r.baseVal.value
  const circumferenceFirst = 2 * Math.PI * radiusFirst
  circleFirst.style.strokeDasharray = `${circumferenceFirst} ${circumferenceFirst}`
  circleFirst.style.strokeDashoffset = circumferenceFirst

  const circleSecond = document.querySelector('.progress-ring__circle--products')
  const radiusSecond = circleSecond.r.baseVal.value
  const circumferenceSecond = 2 * Math.PI * radiusSecond
  circleSecond.style.strokeDasharray = `${circumferenceSecond} ${circumferenceSecond}`
  circleSecond.style.strokeDashoffset = circumferenceSecond

  const circleThird = document.querySelector('.progress-ring__circle--customers')
  const radiusThird = circleThird.r.baseVal.value
  const circumferenceThird = 2 * Math.PI * radiusThird
  circleThird.style.strokeDasharray = `${circumferenceThird} ${circumferenceThird}`
  circleThird.style.strokeDashoffset = circumferenceThird

  function setProgress(percent, circumference, circle) {
    const offset = circumference - percent / 100 * circumference
    circle.style.strokeDashoffset = offset
  }
  // hamburger

  $('.navicon').on('click', function (e) {
    e.preventDefault()
    $(this).toggleClass('navicon--active')
    $('.toggle').toggleClass('toggle--active')
  })

  // SVG TOP ANIMATION

  new Vivus(
    'natural', {
      type: 'delayed',
      duration: 500,
      animTimingFunction: Vivus.EASE
    }
  )
  new Vivus(
    'safe', {
      type: 'delayed',
      duration: 500,
      animTimingFunction: Vivus.EASE
    }
  )
  new Vivus(
    'health', {
      type: 'delayed',
      duration: 500,
      animTimingFunction: Vivus.EASE
    }
  )

  // subscribe
  const subscribe = document.querySelector('.subscribe-form__button')
  subscribe.addEventListener('click', () => {
    const root = document.documentElement
    root.style.setProperty('--scale', 'scaleX(1)')
  })

  // in view animation
  AOS.init()
  $('.about__content-items').waypoint({
    handler: function () {
      $(this.element).addClass('start')
    },
    offset: '100%'
  })

  $('.facts').waypoint({
    handler: function () {
      setProgress(-100, circumferenceFirst, circleFirst)
      setProgress(-120, circumferenceSecond, circleSecond)
      setProgress(-110, circumferenceThird, circleThird)
    },
    offset: '80%'
  })
})