function getCategoriesInCatalogId() {
    let categoriesIds = []
    $('.categories').each((index) => {
        categoriesIds.push(index+1)
    })

    return categoriesIds
}

$('.catalog__manufacturer').on('click', function() {
    let id = $(this).attr('data-config-id')
    if ($(this).hasClass('active')) {
        $('.configurator[data-id='+ id + ']').removeClass('active')
        $(this).removeClass('active')
    } else {
        // Clean configurator
        $('.catalog__manufacturer').removeClass('active')
        $('.configurator').removeClass('active')
        // Open our manufacturer
        $('.configurator[data-id='+ id + ']').addClass('active')
        $(this).addClass('active')
        // Show categories in catalog
        let categoriesIds = getCategoriesInCatalogId()
        if (categoriesIds.indexOf(parseInt(id)) != -1) {
            $(".categories").removeClass('active')
            $(`.categories[data-id=${id}]`).addClass('active')
        }
    }
})

$(".configurator__item-title").on('click', function() {
    $(this).parents('.configurator__item').toggleClass('open')
})

$(".additional__title").on('click', function() {
    $(this).parents('.additional').toggleClass('open')
})

$(".configurator__list li").on('click', function() {
    $(this).toggleClass('checked')
})

$(".reset").on('click', function() {
    $(".configurator__list li").removeClass('checked')
})