(function ($) {
  "use strict";
  var skills = {
    ht: 75,
    jq: 25,
    sk: 90,
    ph: 75,
    il: 90,
    in: 85,
    fl: 75,
    nd: 90,
    flsk: 70
  };
  /* My Skill Animation*/
  function mySkillsAnimaiton() {
    $.each(skills, function (key, value) {
      var skillbar = $("." + key);
      skillbar.animate({ width: value + "%" }, 3000,
        function () {
          $(".speech-bubble").fadeIn();
        })
    })
  }
  /* Function create carousel list portfolio*/
  function carouselListPortfolip() {
    $(".portfolio-ca").owlCarousel({
      items: 3,
      loop: false,
      dots: true,
      margin: 30
    })
  }
  /*Function couterup*/
  function counterUpStart() {
    if ($(".counter")[0]) {
      $(".counter").counterUp({
        delay: 10,
        time: 2000
      })
    } else {
      return;
    }
  }
  /*Function slider resume modal*/
  function sliderResumeModal() {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
      items: 1,
      loop: false,
      center: true,
      nav: true,
      URLhashListener: true,
      autoplayHoverPause: true,
      startPosition: 'URLHash'
    })
    // Listen to owl events:
    owl.on('changed.owl.carousel', function (event) {
      counterUpStart(".counter");
    })
  }
  /*Function resume modal*/
  function showHideResumeModal() {
    var modalSelect = $(".showmodal");
    var modalContent = $(".content-modal");
    var closerModal = $(".closer-resume");
    modalSelect.on("click", function () {
      modalContent.show();
      sliderResumeModal();
    })
    closerModal.on("click", function () {
      modalContent.hide();
    })
  }
  /*Funtion animate bg text*/
  function animateBgText() {
    if ($(".text-free")[0]) {
      $(".text-free").scramble(500, 120, "alphabet", true);
    } else {
      return;
    }
  }
  /*Function show portfolio detail*/
  function showHidePortfolioDetail() {
    var modalPortfolioSelect = $("figure a");
    var modalPortfolioContent = $(".popup-detail-portfolio");
    var closerModal = $(".closer-popup-port");
    modalPortfolioSelect.on("click", function () {
      modalPortfolioContent.show();
      sliderResumeModal();
    })
    closerModal.on("click", function () {
      modalPortfolioContent.hide();
    })
  }
  /*Function add particales js*/
  function addParticales() {
    // ParticlesJS Config.
    particlesJS("particles-js", {
      "particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 700
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 6,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "grab"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 140,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    });
  }
  /**
   * Function Menubar
   */
  function menuBar() {
    $('#bars').on('click', function () {
      var $el = $(this);
      $el.stop().toggleClass('on');
      $el.parent().stop().toggleClass("on");
      $('.body-overlay').stop().toggleClass('open');
    })
  }
  /**
   * Function Loading page
   */
  function loadingPage() {
    if ($(window).width() >= 992) {
      $('#loading').addClass('loaded fadeOutRight');
      $(".sidebar-left").addClass('fadeInLeft');
      $(".vcard-box").addClass("fadeInLeft");
      $(".content-wrap").addClass("fadeInLeft");
    }
  }
  /**
   * Function resize window
   */
  function getDebounce(func, wait, immediate) { // Resize Debounce
    var timeout;
    return function () {
      var context = this, args = arguments;
      var later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  /**
   * Scripts ready
   */
  $(document).ready(function () {
    var resizeDebounce = getDebounce(function () {
      setInterval(function () {
        loadingPage();
      }, 500);
    }, 250);
    window.addEventListener("resize", resizeDebounce);

    setInterval(function () {
      loadingPage();
    }, 500);
    mySkillsAnimaiton();
    carouselListPortfolip();
    showHideResumeModal();
    //counter up about
    counterUpStart(".counter");
    animateBgText();
    showHidePortfolioDetail();
    addParticales();
    menuBar();
  });
  $(window).load(function () {
    setInterval(function () {
      loadingPage();
    }, 500);
  });
})(jQuery); // End of use strict
