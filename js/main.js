$(document).ready(function() {
    $(window).scroll( function() {
        var top = $(this).scrollTop();
        if (top > 200) {
            $('.header').addClass('fixed');
        } else {
            $('.header').removeClass('fixed');
        }
    });

    $('.js-partners').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        arrows: true
    });

    $('.js-industry').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true
    });

    /** Order modal **/
    function toggleModal() {
        $('body').toggleClass('no-scroll');
        $('.overlay').toggleClass('overlay--visible');
        $('.order-consult').toggleClass('order-consult--visible ');
    }
    $('#js-order-consult').on('click', function(e) {
        e.preventDefault();
        toggleModal();
    });

    $('.order-close').on('click', function(e) {
        e.preventDefault();
        toggleModal();
    });

    /** First screen animation**/
    /** Wrap every letter in a span **/
    let i = 1;

    function letterAnimation(el) {

        let textWrapper = document.querySelector('.ml1' + i + ' ' + '.letters');
        textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

        anime.timeline({loop: false})
            .add({
                targets: el + ' ' + '.line',
                scaleY: [0,1],
                opacity: [0.5,1],
                easing: "easeOutExpo",
                duration: 700
            })
            .add({
                targets: el + ' ' + '.line',
                translateX: [0, document.querySelector(el + ' ' + '.letters').getBoundingClientRect().width + 10],
                easing: "easeOutExpo",
                duration: 700,
                delay: 500
            }).add({
            targets: el + ' ' + '.letter',
            opacity: [0,1],
            easing: "easeOutExpo",
            duration: 600,
            offset: '-=775',
            delay: (el, i) => 34 * (i+1)
        }).add({
            targets: el,
            opacity: 0,
            duration: 2000,
            easing: "easeOutExpo",
            delay: 2000
        });

    }

    (function setAnimation(callback) {
        $('.ml1' + i).css('opacity', '1');

        letterAnimation('.ml1' + i);

        i++;

        setTimeout(callback(), 5000);
    })(interval);


    function interval() {
        setInterval(function() {
            $('.ml1' + i).css('opacity', '1');

            letterAnimation('.ml1' + i);

            i++;

            if(i > $('.ml1').length) {
                i = 1;
            }

        }, 5000);
    }





});
