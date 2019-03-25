'use strict'; 

//when the page loads the circle append to the DOM
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
function hamburger() {
$('.hamburger').click(event => {
 event.preventDefault();
 $('.mobileNav').toggleClass('hidden');
});

}

$(hamburger);
$(circlesAppear);