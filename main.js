$(document).ready(function(){
    var sidebar = $('#sidebar');
    $('.getMenu').click(() => {
        sidebar.toggleClass("toggled");
        $(".content").toggleClass('content-toggled');
    });
});