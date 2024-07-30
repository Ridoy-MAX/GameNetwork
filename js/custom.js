


/*===== EXPANDER MENU  =====*/ 
const showMenu = (toggleId, navId)=>{
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId)

  if(toggle && nav){
    toggle.addEventListener('click', ()=>{
      nav.classList.toggle('show')
      toggle.classList.toggle('bx-x')
    })
  }
}
showMenu('header-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
/*Active link*/
navLink.forEach(n => n.classList.remove('active'));
this.classList.add('active');
}
navLink.forEach(n => n.addEventListener('click', linkAction));


/*=============== SCROLL REVEAL ANIMATION ===============*/
// const sr = ScrollReveal({
//   distance: '60px',
//   duration: 2500,
//   delay: 400,
//   reset: true
// })

// sr.reveal(`.easy-writing, .img`,{delay: 400})
// sr.reveal(`.quality`,{delay: 300})
// sr.reveal(`.banner-slider, .footer`,{delay: 300, origin: 'top'})

// sr.reveal(`.work, .products__card, .footer__logo, .footer__content, .footer__copy`,{origin: 'top', interval: 50})
// sr.reveal(`.our-feature, .discount__animate`,{origin: 'left', interval: 50})

// sr.reveal(``,{origin: 'top'})
// sr.reveal(``)


/*=============== banner ===============*/
$(document).ready(function(){ 
      //slider start;
    $('.banner-slider').slick({
        autoplay: true,
        autoplaySpeed: 1800, 
        dots: false,
        slidesToShow: 3,
        arrows:true,
        prevArrow:'<i class="fas fa-chevron-left  previous-arrow"></i>',
        nextArrow:'<i class="fas fa-chevron-right  next-arrow"></i>',
        responsive: [
          {
            breakpoint: 992,
            settings: {
          
            }
          },
          {
            breakpoint: 768,
            settings: {
         
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
    
        });
//slider start;


});     




/*=============== banner ===============*/
$(document).ready(function(){ 
      //slider start;
    $('.banner-slider1').slick({
        autoplay: false,
        autoplaySpeed: 1800, 
        dots: false,
        slidesToShow: 5,
        arrows:true,
        prevArrow:'<i class="fas fa-chevron-left  previous-arrow"></i>',
        nextArrow:'<i class="fas fa-chevron-right  next-arrow"></i>',
        responsive: [
          {
            breakpoint: 992,
            settings: {
          
            }
          },
          {
            breakpoint: 768,
            settings: {
         
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
    
        });
//slider start;
});      



/*=============== banner ===============*/
$(document).ready(function(){ 
      //slider start;
    $('.banner-slider3').slick({
        autoplay: false,
        autoplaySpeed: 1800, 
        dots: false,
        slidesToShow: 4,
        arrows:true,
        prevArrow:'<i class="fas fa-chevron-left  previous-arrow"></i>',
        nextArrow:'<i class="fas fa-chevron-right  next-arrow"></i>',
        responsive: [
          {
            breakpoint: 992,
            settings: {
          
            }
          },
          {
            breakpoint: 768,
            settings: {
         
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
    
        });
//slider start;
});   



/*=============== banner ===============*/
$(document).ready(function(){ 




      //slider start;
    $('.banner-slider4').slick({
        autoplay: false,
        autoplaySpeed: 1800, 
        dots: false,
        slidesToShow: 3,
        arrows:true,
        prevArrow:'<i class="fas fa-chevron-left  previous-arrow"></i>',
        nextArrow:'<i class="fas fa-chevron-right  next-arrow"></i>',
        responsive: [
          {
            breakpoint: 992,
            settings: {
          
            }
          },
          {
            breakpoint: 768,
            settings: {
         
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
    
        });
//slider start;
});     



/*=============== banner ===============*/
$(document).ready(function(){ 
      //slider start;
      $('.banner-slider').slick({
        autoplay: true,
        autoplaySpeed: 1800, 
        dots: false,
        slidesToShow: 12,
        slidesToScroll: 1,
        arrows:true,
        prevArrow:'<i class="fas fa-chevron-left  previous-arrow"></i>',
        nextArrow:'<i class="fas fa-chevron-right  next-arrow"></i>',
        responsive: [
          {
            breakpoint: 992,
            settings: {
          
            }
          },
          {
            breakpoint: 768,
            settings: {
         
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
    
        });
//slider start;
});     
/*=============== banner ===============*/









$(document).ready(function(){ 
      //slider start;
      $('.banner-slider-team').slick({
        autoplay: true,
        autoplaySpeed: 1800, 
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
        prevArrow:'<i class="fas fa-chevron-left  previous-arrow"></i>',
        nextArrow:'<i class="fas fa-chevron-right  next-arrow"></i>',
        responsive: [
          {
            breakpoint: 992,
            settings: {
          
            }
          },
          {
            breakpoint: 768,
            settings: {
         
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
    
        });
//slider start;
});     

$(document).ready(function(){ 
      //slider start;
      const btn = document
      .querySelector('.read-more-btn');
  
  const text = document
      .querySelector('.card__read-more');
  
  const cardHolder = document
      .querySelector('.card-holder');
  
  cardHolder
      .addEventListener('click', e => {
  
          const current = e.target;
  
          const isReadMoreBtn = current.className.includes('read-more-btn');
  
          if (!isReadMoreBtn)
              return;
  
          const currentText = e.target.parentNode.querySelector('.card__read-more');
  
          currentText.classList.toggle('card__read-more--open');
  
          current.textContent = current.textContent.includes('Read More...') ? 'Read Less...' : 'Read More...';
  
      });
//slider start;
});     











 /* Periodic Timer. Period is equal 10 days */
 $("#periodic-timer_period_days").syotimer({
  date: new Date(2015, 0, ),
  layout: "smh",
  periodic: true,
  periodInterval: 10,
  periodUnit: "d",
});


