import * as flsFunctions from './modules/functions.js';
import * as burger from './modules/burger.js';
import * as tabs from './modules/tabs.js';
import * as catalog from './modules/catalog.js';
import * as configurator from './modules/configurator.js';

flsFunctions.isWebp()

import Swiper, {Navigation, Pagination} from 'swiper';
Swiper.use([Navigation, Pagination]);

new Swiper('.product__swiper', {
    slidesPerView: 3,
    // spaceBetween: 20,

    navigation: {
        nextEl: '.product-button-next',
        prevEl: '.product-button-prev',
    },

    breakpoints: {
        480: {
            spaceBetween: 20,
        }
    }
});


new Swiper('.viewed__swiper', {
    slidesPerView: 2,
    spaceBetween: 20,

    navigation: {
        nextEl: '.viewed-button-next',
        prevEl: '.viewed-button-prev',
    },
    
});

// Header
let headerHeight = $('header').height()
$('.backing').css("height", headerHeight + "px")
$(document).on('scroll', function() {
    let headerHeight = $('header').height()
    $('.backing').css("height", headerHeight + "px")
})


$(".menu__item-droplist").on('click', function(){
    $(this).toggleClass("active")
})

$(".header__info-btn").on('click', function() {
    $(".section__form-contact").addClass('active')
    $("body").addClass('lock')
})

$(".form__cancel").on('click', function() {
    $(".section__form-contact").removeClass('active')
    $("body").removeClass('lock')

})

$(".about__read-more").on('click', function() {
    $(this).toggleClass('less')
    $(".about__item.right__item .about__text").toggleClass('show')

    if ($(this).hasClass('less')) {
        $(this).children("span").text("Скрыть")
    } else {
        $(this).children("span").text("Читать далее")
    }
})

$(".products__bar-item").on('click', function() {
    if (!$(this).hasClass('active')) {
        // Get active tab's id
        let prevId = $(".products__bar-item.active").attr('data-id') 
        $(".products__bar-item.active").removeClass('active')
        $(this).addClass('active')
        // Get new tab's id
        let currentId = $(this).attr('data-id')

        $(".products__tab[data-id=" + prevId + "]").removeClass('active')
        $(".products__tab[data-id=" + currentId + "]").addClass('active')
    }

})

// Pagination
function pagination() {
    let paginationElements = $(".pagination__item")
    let paginationElementsCount = $(".pagination__item").length
    if (paginationElementsCount > 8) {
        let firstId = 1
        let lastId = paginationElementsCount
        let activeId =  $(".pagination__item.active").attr("data-id")
        // If the first page
        if (activeId == firstId) {
            paginationElements.each(function(index) {
                let elementId = $(this).attr('data-id')
                if (elementId >= 8 && elementId < lastId) {
                    $(this).addClass('hidden')
                }
                $('.pagination__dots[data-place="end"]').removeClass('hidden')
            })
        } else
        // If the last page
        if (activeId == lastId) {
            paginationElements.each(function(index) {
                let elementId = $(this).attr('data-id')
                if (elementId <= lastId - 7 && elementId > firstId) {
                    $(this).addClass('hidden')
                }
                $('.pagination__dots[data-place="start"]').removeClass('hidden')
            })
        } else {
        // If the page in the middle
            if (activeId - firstId >= 4 && lastId - activeId >= 4) {
                $('.pagination__dots[data-place="end"]').removeClass('hidden')
                $('.pagination__dots[data-place="start"]').removeClass('hidden')
                paginationElements.each(function(index) {
                    let elementId = $(this).attr('data-id')
                    if ((elementId <= activeId - 3 && elementId != firstId ) || (elementId >= parseInt(activeId) + 3 && elementId != lastId)) {
                        $(this).addClass('hidden')
                    }
                })
            } else if (activeId - firstId < 4) {
                paginationElements.each(function(index) {
                    let elementId = $(this).attr('data-id')
                    if (elementId >= 8 && elementId < lastId) {
                        $(this).addClass('hidden')
                    }
                    $('.pagination__dots[data-place="end"]').removeClass('hidden')
                })
            } else if (lastId - activeId < 4) {
                paginationElements.each(function(index) {
                    let elementId = $(this).attr('data-id')
                    if (elementId <= lastId - 7 && elementId > firstId) {
                        $(this).addClass('hidden')
                    }
                    $('.pagination__dots[data-place="start"]').removeClass('hidden')
                })
            }
        }

    }
}

// Questions

$('.question').on('click', function() {
    $(this).toggleClass('open')
})


// Parametrs
$('.card__params-table').scroll(function(){
    $('.card__params-scrollbar').css("transform", "translate(" + $(this).scrollLeft() + "px," + $(this).scrollTop() + "px)")
    // $('.card__params-scrollbar').css("transform", "translateX(" + $(this).scrollLeft() + "px)")
})


// Product image
$(".product__swiper .swiper-slide").on('click', function() {
    let imgUrl = $(this).children('.slide').children('.slide__img').children('img').attr('src')
    $('.product__images-main img').attr('src', imgUrl)
})

// Mobile menu
function hideManufacturers(manufacturers) {
    manufacturers.each(function(index) {
        if (index + 1 > 3) {
            $(`.menumobile .catalog__manufacturer[data-config-id=${index+1}]`).addClass('hidden')
            $(`.menumobile .catalog__manufacturer[data-config-id=${index+1}]`).removeClass('active')
            $(`.menumobile .configurator[data-id=${index+1}]`).removeClass('active')
        }
    })
}

let manufacturers = $(".menumobile .catalog__manufacturer")
let manufacturerCount = manufacturers.length
if (manufacturerCount > 3) {
    $('.menumobile__btn').removeClass('hidden')
    hideManufacturers(manufacturers)
}

$('.menumobile__btn').on('click', function() {
    // Open manufacturers
    if ($(this).hasClass("menumobile__btn-more")) {
        $(this).removeClass("menumobile__btn-more")
        $(this).addClass("menumobile__btn-hide")
        $(this).children('span').text("СКРЫТЬ")
        manufacturers.removeClass('hidden')
    } 
    // Hide manufacturers
    else if ($(this).hasClass("menumobile__btn-hide")) {
        $(this).removeClass("menumobile__btn-hide")
        $(this).addClass("menumobile__btn-more")
        $(this).children('span').text("ПОКАЗАТЬ ЕЩЕ")
        hideManufacturers(manufacturers)
    }
})

// Category
function hideSubcategories(subcategories) {
    subcategories.each(function(index) {
        if (index + 1 > 3) {
            $(`.section__category .category__item[data-id=${index+1}]`).addClass('hidden')
        }
    })
}

let subcategories = $(".section__category .category__item")
let subcategoriesCount = subcategories.length
if (subcategoriesCount > 3) {
    $(".category__btn").removeClass('hidden')
    hideSubcategories(subcategories)
}

$('.category__btn').on('click', function() {
    // Open subcategories
    if ($(this).hasClass("category__btn-more")) {
        $(this).removeClass("category__btn-more")
        $(this).addClass("category__btn-hide")
        $(this).children('span').text("СКРЫТЬ")
        subcategories.removeClass('hidden')
    } else if ($(this).hasClass("category__btn-hide")) {
        // Hide subcategories
        $(this).removeClass("category__btn-hide")
        $(this).addClass("category__btn-more")
        $(this).children('span').text("ПОКАЗАТЬ ЕЩЕ")
        hideSubcategories(subcategories)
    }
})