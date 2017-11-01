$('[rel=tooltip]').tooltipster({
    theme: 'tooltipster-shadow',
    trigger: 'click'
});


function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

$(document).ready(function() {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop: true,
        margin: 10,
        items: 1,
        nav: false,
    });


    $('.customNextBtn').click(function() {
        owl.trigger('next.owl.carousel');
        $('[rel=tooltip]').tooltipster({
            theme: 'tooltipster-shadow',
            trigger: 'click'
        });
    });

    $('.customPrevBtn').click(function() {
        owl.trigger('prev.owl.carousel');
        $('[rel=tooltip]').tooltipster({
            theme: 'tooltipster-shadow',
            trigger: 'click'
        });
    });


    var headLine = getParameterByName('hl');
    $('.headline-data').html(headLine);
});
