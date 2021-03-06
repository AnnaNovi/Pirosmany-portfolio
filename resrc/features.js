var homeswiper = new Swiper('.swiper-container-home', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
});

var menuswiper = new Swiper('.swiper-container-menu', {
    slidesPerView: 'auto',
    spaceBetween: 63,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

$('.play_yt').click(function(){
    $(this).hide();
    $('.ytvideo').attr('src', 'https://www.youtube.com/embed/Ynh9rkHhxyQ?autoplay=1&mute=1')
})

jQuery(function(){
    var j = jQuery; //Just a variable for using jQuery without conflicts
    var addInput = '#qty'; //This is the id of the input you are changing
    var n = 1; //n is equal to 1
    
    //Set default value to n (n = 1)
    j(addInput).val(n + "шт.");

    //On click add 1 to n
    j('.plus').on('click', function(){
        j(addInput).val(n++ + 'шт.');
    })

    j('.min').on('click', function(){
        //If n is bigger or equal to 1 subtract 1 from n
        if (n >= 1) {
            j(addInput).val(n-- + 'шт.');
        } else {
        //Otherwise do nothing
        }
    });
});

var reviewswiper = new Swiper(".reviews-swiper", {
    slidesPerView: 2,
    spaceBetween: 17,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
    },
});

jQuery(function(){
    var j = jQuery;
    j('.change-label .label').on('click', function(){
        j(this).toggleClass('active');
        j('.change-label input').toggle();
        if (!$(this).data('status')) {
            $(this).html('Комментарий к заказу');
            $(this).data('status', true);
        }
        else {
            $(this).html('Добавить комментарий.');
            $(this).data('status', false);
        }
    });
    j('.button-line button').on('click', function(){
        j('.button-line button').removeClass('active');
        j(this).addClass('active');

        j('.cart-sidebar form').toggle();
        j('.block-info .cart-change').toggle();
    });

    var n = 1; //n is equal to 1
    
    //Set default value to n (n = 1)
    j('.input_range input').val(n + "шт.");

    //On click add 1 to n
    j('.plus').on('click', function(){
        var gg = 
        j(this).parent('.input_range').find('input').val().replace('шт.', '');
        j(this).parent('.input_range').find('input').val(++gg + 'шт.');
    })

    j('.min').on('click', function(){
        //If n is bigger or equal to 1 subtract 1 from n
        var gg = 
        j(this).parent('.input_range').find('input').val().replace('шт.', '');
        if (gg >= 1) {
            j(this).parent('.input_range').find('input').val(--gg + 'шт.');
        } else {
        //Otherwise do nothing
        }
    });
});

jQuery('.line-block-buttons .tab-b-2').on('click', function(){
    jQuery('.line-block-buttons button').removeClass('active');
    jQuery(this).addClass('active');
    
    jQuery('.line-tabs .line-tab-2').toggle();
    jQuery('.line-tabs .line-tab-1').toggle();
});
jQuery('.line-block-buttons .tab-b-1').on('click', function(){
    jQuery('.line-block-buttons button').removeClass('active');
    jQuery(this).addClass('active');
    
    jQuery('.line-tabs .line-tab-1').toggle();
    jQuery('.line-tabs .line-tab-2').toggle();
});

//mask for time
$(document).ready(function() {
    var input = document.querySelectorAll('#timepicker',)[0];
    var dateInputMask = function dateInputMask(elm) {
        elm.addEventListener('keyup', function(e) {
        if( e.keyCode < 47 || e.keyCode > 57) {
            e.preventDefault();
        }
        
        var len = elm.value.length;
        
        if(len !== 1 || len !== 3) {
            if(e.keyCode == 47) {
            e.preventDefault();
            }
        }
        if(len === 2) {
        if (e.keyCode !== 8 && e.keyCode !== 46) { 
            elm.value = elm.value+':';
        }}
        });
    };   
    dateInputMask(input);
});

//mask for date
$(document).ready(function() {
    var input = document.querySelectorAll('#datepicker')[0];
    var dateInputMask = function dateInputMask(elm) {
        elm.addEventListener('keyup', function(e) {
        if( e.keyCode < 47 || e.keyCode > 57) {
            e.preventDefault();
            }
        
        var len = elm.value.length;
        
            if(len !== 1 || len !== 3) {
            if(e.keyCode == 47) {
                e.preventDefault();
            }
            }
        if(len === 2) {
            if (e.keyCode !== 8 && e.keyCode !== 46) { 
            elm.value = elm.value+'.';
            }}
        
        if(len === 5) {
            if (e.keyCode !== 8 && e.keyCode !== 46) { 
            elm.value = elm.value+'.';
            }}
        });
        };
        
    dateInputMask(input);
    });

//calendar
$( function() {
    $( "#datepicker" ).datepicker({
        showOn: "button",
		buttonImage: "./resrc/calendar-picker.svg",
		buttonImageOnly: true,
        showButtonPanel: true,
        minDate: 0,
        closeText: "",
        prevText: "&#x3C;Пред",
        nextText: "След&#x3E;",
        currentText: "",
        monthNames: [ "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
        "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь" ],
        monthNamesShort: [ "Янв", "Фев", "Мар", "Апр", "Май", "Июн",
        "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек" ],
        dayNames: [ "воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота" ],
        dayNamesShort: [ "вск", "пнд", "втр", "срд", "чтв", "птн", "сбт" ],
        dayNamesMin: [ "Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб" ],
        weekHeader: "Нед",
        dateFormat: "dd.mm.y",
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: "",
        showOtherMonths: true
    });
} );