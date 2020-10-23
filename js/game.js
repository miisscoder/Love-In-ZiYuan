$('.btn-scan').click(function () {
    $('.puzzle').css('opacity', 1);
});
$('.puzzle .piece').click(function () {
    $(this).addClass('out');
});