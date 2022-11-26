$(".btn-menu").click(function(){
    $(this).toggleClass('active');
    $(".nav-menu").toggleClass('panelactive');
});

$(".nav-menu a").click(function(){
    $(".btn-menu").removeClass('active');
    $(".nav-menu").removeClass('panelactive');
});