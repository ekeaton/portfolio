'use strict'; 

$(document).ready(function() {

//when the page loads the circle append to the DOM
$(circlesAppear);
function circlesAppear() {
$('.circles').append(`<li></li>
       <li></li>
       <li></li>
       <li></li>
       <li></li>
       <li></li>
       <li></li>
       <li></li>
      <li></li>
      <li></li>`)};


//hamburger menu appears
$(hamburger);
function hamburger() {
$('.hamburger').click(event => {
 event.preventDefault();
 $('.mobileNav').toggleClass('hidden');
      });

   }

  //remove the opened hamburger menu
  //when the viewport expands from mobile
  $(window).resize(function () {
      var viewportWidth = $(window).width();
      if (viewportWidth < 768) {
              $(".mobileNav").addClass("hidden");
      }
  });

});


