$(".tabs__title").on('click', function() {

    let windowWidth = $(window).width()

    // Logic for desktop and tabs into mobile menu
    if (windowWidth >= 991.98 || $(this).hasClass('tabs__title-menumobile')) {
        if (!$(this).hasClass('active')) {

            $(".tabs__title").removeClass("active")
            $(this).addClass("active")
    
            let tabId = $(this).attr("data-tab-id")
    
            $(".tab.active").removeClass("active")
            $(`.tab[data-tab-id=${tabId}]`).addClass('active')

            
    
        }
    } else {
        // Logic for mobile
        $(this).toggleClass('active')
    }
})