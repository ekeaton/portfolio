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

  //expand project details from project thumbnail
  $(listenExpand);

  function listenExpand() {
    $('.project-img').click((e) => {
      $(e.currentTarget).siblings('.tech').find('.tech-list').toggleClass('hidden');
      $(e.currentTarget).siblings('.tech').find('.more-button').toggleClass('hidden');
      listenCollapse();
    });
  }

  //expand and collapse project details from `Learn More` button
  $(listenExpand2);

  function listenExpand2() {
    $('.tech').on('click', '.more-button', (e) => {
      $(e.currentTarget).next('.tech-list').removeClass('hidden');
      $(e.currentTarget).addClass('hidden');
      listenCollapse();
    });
  }

  function listenCollapse() {
    $('.less-button').on('click', (e) => {
      $(e.currentTarget).parent().addClass('hidden');
      $(e.currentTarget).closest('.tech-list').prev().removeClass('hidden');
      listenExpand2();
    });
  }


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


