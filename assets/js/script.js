$(function(){
    $('#menu_btn').on('click', function(){
        $('#main_menu ul').toggleClass('active')
        $('nav .logo').toggleClass('active_logo')
    })
})
//-- slick script start//
$(function(){
    $('.banner_slider').slick({
        prevArrow:'<ul><li class="li_arrow"><i class="fa-solid fa-chevron-left arrows"></i></li></ul>',
        nextArrow:'<ul><li class="li_arrow"><i class="fa-solid fa-chevron-right arrows"></i></li></ul>'
    })
})

// slick script end--//