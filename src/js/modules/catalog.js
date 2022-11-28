$('.categories .category').on('click', function() {
    if ($(window).width() >= 991.98) {
        let link = $(this).children('.category__hover').children('.category__hover-btn').attr('href')
        console.log(link)
        location.href = link
    }
})