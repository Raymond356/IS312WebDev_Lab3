/* Group: Team Alpha
Names: Nathaniel POSANAI & Raymond BONAVAN 
Date: April 16, 2025
Lab: IS312 Lab 3 - Future Technologies
*/

$(document).ready(function(){
$('#darkModeBtn').click(function(){
$('body').toggleClass('bg-dark text-light');
});
});

$(document).ready(function () {

    // Get current page filename
    let currentPage = window.location.pathname.split("/").pop();

    // Loop through nav links
    $('.nav-link').each(function () {
        let linkPage = $(this).attr('href');

        if (linkPage === currentPage) {
            $(this).addClass('active');
            $(this).closest('.nav-item').addClass('active');
        }
    });

});