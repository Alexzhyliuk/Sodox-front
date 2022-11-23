$('.burger span').on('click', function() {
    $(this).toggleClass('active')
    $('.menumobile').toggleClass('active')

    if ($(this).hasClass('active')) {
        $('main').attr('style', 'display: none;')
    } else {
        $('main').attr('style', '')
    }

    // $('.menu').toggleClass('burger-active')
    // $('.navbar__btns').toggleClass('burger-active')
    // $('body').toggleClass('lock')
})

let width = $(window).width()

if (width <= 991.98) {
    $('.menu__item').on('click', function() {
        $('main').attr('style', '')
        $('.burger span').removeClass('active')
        $('.menumobile').removeClass('active')
    })
}
