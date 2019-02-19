$(document).ready(function() {
    $('.form-group input').focus(function(){
        $(this).parent().addClass('active');
    });

    $('.form-group input').focusout(function(){
        $(this).parent().removeClass('active');
    });

    $('.form-group__input').change(function(){
        if ($(this).val()) {
            $(this).parent().addClass('input-text');
        } else {
            $(this).parent().removeClass('input-text');
        }
    });

    $(".form-group__input").blur(function(){
        if($(this).val() !== ''){
            $(this).parent().addClass('show');
        } else {
            $(this).parent().removeClass('show');
        }
    });

    $(".form-control").blur(function(){
        if($(this).val() !== ''){
            $(this).parent().addClass('show');
        } else {
            $(this).parent().removeClass('show');
        }
    });
});

$(document).ready(function() {
    $(".pers-acc__header-burger").click(function() {
        $(".pers-acc__header-nav").addClass("active");
    });
});

$(document).ready(function() {
    $(".top-main-menu__burger").click(function() {
        $(".top-main-menu__items").addClass("active");
    });
});

jQuery(function($){
    $(document).mouseup(function (e){
        var div = $(".pers-acc__header-nav");
        if (!div.is(e.target)
            && div.has(e.target).length === 0) {
            $(".pers-acc__header-nav").removeClass("active");
        }
    });

    $(document).mouseup(function (e){
        var div = $(".top-main-menu__items");
        if (!div.is(e.target)
            && div.has(e.target).length === 0) {
            $(".top-main-menu__items").removeClass("active");
        }
    });
});

/////////// кнопка на странице настойки акк
$('.switch-btn').click(function(){
    $(this).toggleClass('switch-on');
    if ($(this).hasClass('switch-on')) {
        $(this).trigger('on.switch');
    } else {
        $(this).trigger('off.switch');
    }
});
//////////

$(window).width(function() {
    if(document.documentElement.clientWidth < 991.98) {
        $(".main-header__animation-human video").remove();
        $(".main-header__animation-human img").remove();
        $('.main-header__animation-human').append('<img src="img/index-page/human-header.png" alt="Описание картинки">');

        $('.new-me-main-text__first p').html('NEW ME — твой персональный помощник моделирования тела');

        $('.new-me-main-text__second p').html('<p>Индивидуально подобранные:</p>' +
            '<ul><li>питание</li><li>тренировки</li><li>организация режима</li></ul>');
    }

    if(document.documentElement.clientWidth < 767.98) {
        $(".main-header__animation-human video").remove();
        $(".main-header__animation-human img").remove();
        $('.main-header__animation-human').append('<img src="img/index-page/human-header-mobil.png" alt="">');

        $('.new-me-main-text__first p').html('NEW ME — твой персональный помощник моделирования тела');

        $('.new-me-main-text__second p').html('<p>Индивидуально подобранные:</p>' +
            '<ul><li>питание</li><li>тренировки</li><li>организация режима</li></ul>');
    }

    if (document.documentElement.clientWidth < 1199.98 && document.documentElement.clientWidth > 767.98 ) {
        jQuery(document).ready(function(){
            $('.row.benefits-list.benefits-list__first').insertAfter('.test1');
            $('.row.benefits-list.benefits-list__second').insertAfter('.test2');
            $(".people-bg__first video").remove();
            $('.people-bg__first').append('<img src="img/index-page/first-piple-pln.svg" alt="">');
            $(".people-bg__second video").remove();
            $('.people-bg__second').append('<img src="img/index-page/second-people__pln.svg" alt="">');
            $(".people-bg__three video").remove();
            $('.people-bg__three').append('<img src="img/index-page/three-people__pln.svg" alt="">');
        });
    }
});

$(document).ready(function () {

    $('.pers-acc-nutrition__switch-checkbox').click(function () {

        if ($(this).prop('checked')) {
            $(".accordion").css("display","none");
            $(".shopping-list").css("display","block");
        }
        else {
            $(".accordion").css("display","block");
            $(".shopping-list").css("display","none");
        }
    });
});

vid1 = document.getElementById('mainVideo');

vid1.addEventListener('mouseenter', function() {
    vid1.play();
});

vid2 = document.getElementById('videoSlim');

vid2.addEventListener('mouseenter', function() {
    vid2.play();
});

vid3 = document.getElementById('videoFit');

vid3.addEventListener('mouseenter', function() {
    vid3.play();
});

vid4 = document.getElementById('videoGain');

vid4.addEventListener('mouseenter', function() {
    vid4.play();
});

$(document).ready(function() {
    $.scrollify({
        section : ".scroll-full",
    });
});

