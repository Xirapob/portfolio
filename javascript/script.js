//var
const filter_btns = document.querySelectorAll(".filter-btn");


//genre work


filter_btns.forEach( btn => btn.addEventListener("click", () => {
    filter_btns.forEach(button => button.classList.remove("active"));
    btn.classList.add('active');

    let filterValue = btn.dataset.filter;
    
    $(".grid").isotope({ filter: filterValue});
}))

//video mouseon mouseout
// const clip = document.querySelectorAll('.clip');

// for(let i = 0; i < clip.length; i++){
//     clip[i].addEventListener('mouseenter', function(e)){
//         clip[i].play()
//     }
//     clip[i].addEventListener('mouseout', function(e)){
//         clip[i].pause()
//     }
// }

// Isotope JS
$('.grid').isotope({
    itemSelector: '.grid-item',
    layoutMode: 'masonry',
    transitionDuration: "0.5s",

  });
$('.grid-cer').isotope({
    itemSelector: '.grid-item-cer',
    layoutMode: 'masonry',
    transitionDuration: "0.5s",

  });


// Scroll Nav
window.addEventListener("scroll", function(){
    var nav = document.querySelector("nav")
    nav.classList.toggle("sticky",window.scrollY > 0)
});

// Venobox
$(document).ready(function(){
  $('.venobox').venobox({
    closeColor : 'transparent',
    titlePosition : 'bottom',
    spinner : 'wave',
    spinColor : '#FFAE00',
    bgcolor : '#202020',
    // framewidth : '1520px',
    // frameheight : '850px',
  });
});

