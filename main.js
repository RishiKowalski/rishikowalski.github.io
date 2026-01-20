$(document).ready(function() {
    console.log( "ready!" );

    $(".extension").hide();
    $(".readless").hide();

    $(".readmore").click(function(e){
        e.preventDefault();
        $(this).next(".extension").show();
        $(this).parent().find(".readless").show();
        $(this).hide();
        $(this).parent().next(".readless").hide();
    });

    $(".readless").click(function(e){
        e.preventDefault();
        $(this).prev(".extension").hide();
        $(this).parent().find(".readmore").show();
        $(this).hide();
    });

});