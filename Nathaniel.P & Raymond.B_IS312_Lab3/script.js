/* Group: Team Alpha
Names: John Doe & Jane Smith
Date: April 16, 2025
Lab: IS312 Lab 3 - Future Technologies
*/

// Use jQuery document ready event for each HTML file
$(document).ready(function() {
    console.log("Future Tech Script Active: Document Ready.");

    // Toggle Dark Mode Event
    $('#darkModeBtn').click(function() {
        // Toggle body classes for dark mode
        $('body').toggleClass('bg-dark text-light');
        
        // Update Jumbotron contrast during dark mode
        $('.jumbotron').toggleClass('bg-secondary');
        
        // Change button label and style
        if($('body').hasClass('bg-dark')) {
            $(this).text('Switch to Light Mode').removeClass('btn-outline-secondary').addClass('btn-light');
        } else {
            $(this).text('Toggle Dark Mode').removeClass('btn-light').addClass('btn-outline-secondary');
        }
    });
});