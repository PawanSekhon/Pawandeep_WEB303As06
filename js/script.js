$(document).ready(function(){
    //accordian functionality
    $('.accordian h3').click(function(){
        //hide all accordian panels within the same accordian 
        $(this).parent().find('.accordian-panel').slideUp();
        //show the panel associated with the clicked label
        $(this).next('.accordian-panel').slideDown();
    });

    // Add a click event listener to all tab buttons with the class "tab-button"
    $(".tab-button").click(function () {
        // Remove the "active" class from all tab buttons and tab content
        $(".tab-button").removeClass("active");
        $(".tab-content").removeClass("active");

        // Add the "active" class to the clicked tab button
        $(this).addClass("active");

        // Get the data-target attribute value from the clicked button
        var target = $(this).data("target");

        // Add the "active" class to the tab content with the corresponding ID
        $("#" + target).addClass("active");
    });

});