$(function () {
  $(".works__link").hover(function () {
    $(this).css("transition", "0.2s");
  });
  $(window).scroll(function () {
    $(".skills__circle").each(function () {
      var i = $(this);
      t = $(this).offset().top;
      if ($(window).scrollTop() > t - $(window).height() + 150) {
        setTimeout(function () {
          $(i).is('[data-progress="90"]') &&
            $(i).addClass("skills__circle-90").addClass("skills__circle-max"),
            $(i).is('[data-progress="80"]') &&
              $(i).addClass("skills__circle-80").addClass("skills__circle-max"),
            $(i).is('[data-progress="70"]') &&
              $(i).addClass("skills__circle-70").addClass("skills__circle-max"),
            $(i).is('[data-progress="60"]') &&
              $(i).addClass("skills__circle-60").addClass("skills__circle-max"),
            $(i).is('[data-progress="50"]') &&
              $(i).addClass("skills__circle-50"),
            $(i).is('[data-progress="40"]') &&
              $(i).addClass("skills__circle-40"),
            $(i).is('[data-progress="30"]') &&
              $(i).addClass("skills__circle-30");
        }, 500);
      }
    });
  });

  $(".skills__circle").hover(
    function () {
      $(this).find(".skill_per").fadeIn();
    },
    function () {
      $(this).find(".skill_per").fadeOut();
    }
  );

  $('a[href^="#"]').click(function () {
    var section = $(this).attr("href");
    i = $("#" == section || "" == section ? "html" : section);
    top_ = i.offset().top - 40;
    return $("body,html").animate({ scrollTop: top_ }, 400, "swing");
  });

  $(".wrapper").hide().fadeIn(1000);

  var $allMsg = $(".top__title");
  var $wordList = $(".top__title").html().split("");
  $(".top__title").html("");
  $.each($wordList, function (idx, elem) {
    var newEL = $("<span/>").text(elem).css({ opacity: 0 });
    newEL.appendTo($allMsg);
    newEL.delay(idx * 100);
    newEL.animate({ opacity: 1 }, 1100);
  });

  function fadein_blocks(s) {
    $(window).scroll(function () {
      $(s).each(function (s) {
        var i = $(this).offset().top;
        $(window).scrollTop() > i - $(window).height() + 200 &&
          $(this)
            .delay(300 * s)
            .queue(function () {
              $(this).addClass("is-fadein");
            });
      });
    });
  }
  !(function (s) {
    $(window).scroll(function () {
      $(s).each(function () {
        var s = $(this).offset().top;
        $(window).scrollTop() > s - $(window).height() + 200 &&
          $(this).addClass("is-fadein");
      });
    });
  })(".js-fadein");

  fadein_blocks(".technotes__block");
  fadein_blocks(".works__link");
});

window.onclick = function (event) {
    const modals = document.querySelectorAll(".modal");

    modals.forEach(function (modal) {
        if (event.target == modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });
}

//Šeƒ‚[ƒ_ƒ‹“à‚Ì‰æ‘œØ‚è‘Ö‚¦
const modalImages = {

    modal1: [
        {
            type: "video",
            src: "./assets/movie/C++.mp4"
        },
        {
            type: "image",
            src: "./assets/images/Web_Work_Second SemesterC++.png",

        },
        {
            type: "image",
            src: "./assets/images/Web_Work_Second SemesterC++_2.png",

        },
        {
            type: "image",
            src: "./assets/images/Web_Work_Second SemesterC++_3.png"

        }
    ],

    modal2: [
        {
            type: "video",
            src: "./assets/movie/movp4.mp4"
        },
        {
            type: "image",
            src: "./assets/images/Web_Work_First SemesterC++.png",

        },
        {
            type: "image",
            src: "./assets/images/Web_Work_First SemesterC++_1.png",

        },
        {
            type: "image",
            src: "./assets/images/Web_Work_First SemesterC++_2.png"

        }
    ],

    modal3: [
        {
            type: "video",
            src: "./assets/movie/team_playmovie.mp4"
        },
        {
            type: "image",
            src: "./assets/images/Web_Work_teamC++.png",

        },
        {
            type: "image",
            src: "./assets/images/Web_Work_teamC++_1.png",

        },
        {
            type: "image",
            src: "./assets/images/Web_Work_teamC++_2.png",

        },
        {
            type: "image",
            src: "./assets/images/Web_Work_teamC++_3.png",

        },
        {
            type: "image",
            src: "./assets/images/Web_Work_teamC++_4.png"

        }
    ],

    modal4: [
        {
            type: "video",
            src: "./assets/movie/Onikai Village.mp4"
        },
        {
            type: "image",
            src: "./assets/images/Web_Work_team_C.png",

        },
        {
            type: "image",
            src: "./assets/images/Web_Work_team_C_1.png",

        },
        {
            type: "image",
            src: "./assets/images/Web_Work_team_C_2.png",

        },
        {
            type: "image",
            src: "./assets/images/Web_Work_team_C_3.png"

        }
    ],

    modal5: [
        {
            type: "video",
            src: "./assets/movie/move.mp4"
        },
        {
            type: "image",
            src: "./assets/images/Web_Work_2DAct_C.png",

        },
        {
            type: "image",
            src: "./assets/images/Web_Work_2DAct_C_1.png",

        },
        {
            type: "image",
            src: "./assets/images/Web_Work_2DAct_C_2.png",

        },
        {
            type: "image",
            src: "./assets/images/Web_Work_2DAct_C_3.png"

        }
    ],

    modal6: [
        {
            type: "video",
            src: "./assets/movie/Unity.mp4"
        },
        {
            type: "image",
            src: "./assets/images/Web_Work_Unity.png"
        },
        {
            type: "image",
            src: "./assets/images/Web_Work_Unity_1.png"
        },
        {
            type: "image",
            src: "./assets/images/Web_Work_Unity_2.png"
        }
    ]

};

let currentModal = "";
let currentImage = 0;

function openModal(modalId) {

    currentModal = modalId;
    currentImage = 0;

    document.getElementById(modalId).style.display = "flex";

    document.body.style.overflow = "hidden";

    showImage();
}

function closeModal() {

    document.querySelectorAll(".modal").forEach(modal => {
        modal.style.display = "none";
    });

    document.body.style.overflow = "auto";
}

function showImage() {

    const viewer = document.querySelector(
        `#${currentModal} .modal__viewer`
    );

    const media =
        modalImages[currentModal][currentImage];

    if (media.type === "video") {

        viewer.innerHTML = `
            <video
                class="modal__video"
                controls
                autoplay
                muted
            >
                <source src="${media.src}" type="video/mp4">
            </video>
        `;

    } else {

        viewer.innerHTML = `
            <img
                class="modal__img"
                src="${media.src}"
            >
        `;
    }
}

function nextImage() {

    currentImage++;

    if (currentImage >= modalImages[currentModal].length) {
        currentImage = 0;
    }

    showImage();
}

function prevImage() {

    currentImage--;

    if (currentImage < 0) {
        currentImage =
            modalImages[currentModal].length - 1;
    }

    showImage();
}