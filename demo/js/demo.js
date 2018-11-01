$('.title').on('click', 'li', function() {
    $(this).click(function() {
        var idx = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $('.conts li').eq(idx).css('display', 'block').siblings('li').css('display', 'none');
    })
})