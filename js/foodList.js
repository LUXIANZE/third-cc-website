$(window).on('scroll', function(event) {
    const foodSection = document.getElementById("food")
    const foodRect = foodSection.getBoundingClientRect()
    const scrollTopValue = window.screenY;
    if (scrollTopValue > foodRect.top && scrollTopValue+window.screen.height/2 < foodRect.bottom) {
        $('.section-description').addClass('affix');
    } else {
        $('.section-description').removeClass('affix');
    }
});
