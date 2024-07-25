/*=============== SHOW MENU ===============*/
const navMenu= document.getElementById('nav-menu'),
      navToggle= document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
  navToggle.addEventListener("click",()=>{
    navMenu.classList.add('show-menu')
    // console.log("hello");
  })
}


/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
  navClose.addEventListener("click",()=>{
    navMenu.classList.remove('show-menu')
    // console.log("hello");
  })
}



/*=============== HOME SWIPER ===============*/

var homeSwiper = new Swiper(".home-swiper", {
    spaceBetween: 30,
    loop: 'true',

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')

    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}

window.addEventListener('scroll',scrollHeader)

/*=============== NEW SWIPER ===============*/
var newSwiper = new Swiper(".new-swiper", {
  spaceBetween: 16,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: 'true',
  autoplay: true,
  
});

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');

  if(this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll',scrollUp)

/*=============== LIGHT BOX ===============*/


/*=============== QUESTIONS ACCORDION ===============*/


/*=============== STYLE SWITCHER ===============*/
var TrandingSlider = new Swiper('.tranding-slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
  },
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  }
});  
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".options button");
  const chipsImage1 = document.getElementById("chips-image-1");
  const chipsImage2 = document.getElementById("chips-image-2");
  const foodElement = document.getElementById("food-element");
  const foodElement2 = document.getElementById("food-element-2");
  const foodElement3 = document.getElementById("food-element-3");
  const landingSubtitle = document.getElementById("landing__subtitle");
  const landingTitle = document.getElementById("landing__title");
  const landingDescription = document.getElementById("landing__descripton");

  const images = {
      'sour-cream': {
          src1: 'assets/bgremove/TURMURIC_POWDER.png',
          src2: 'assets/bgremove/TURMURIC_POWDER.png',
          foodSrc: 'assets/bgremove/TUR.png',
          foodSrc2: 'assets/bgremove/turmu.png',
          foodSrc3: 'assets/bgremove/TUR.png',
          landing__title: 'Organic Turmeric Powder',
          landing__subtitle: 'Versatile Superfood Spice',
          landing__descripton: 'Experience the vibrant color and rich flavor of our Organic Turmeric Powder. Sourced from the finest organic farms, our turmeric is ground from whole rhizomes to ensure maximum potency and freshness.'
      },
      'spicy': {
          src1: 'assets/bgremove/RED_CHILLI.png',
          src2: 'assets/bgremove/RED_CHILLI.png',
          foodSrc: 'https://freepngdesign.com/content/uploads/images/chili-pepper-9422.png',
          foodSrc2: 'assets/bgremove/red_b.png',
          foodSrc3: 'https://freepngdesign.com/content/uploads/images/chili-pepper-9422.png',
          landing__title: 'Fiery Red Chilli Powder',
          landing__subtitle: 'Bold Heat and Flavor',
          landing__descripton: 'Experience the intense heat and vibrant color of our Fiery Red Chilli Powder. Sourced from the finest red chillies, it adds a spicy kick to any dish while offering natural vitamins and antioxidants.'
      },
      'original': {
          src1: 'assets/bgremove/coriander.png',  
          src2: 'assets/bgremove/coriander.png',
          foodSrc: 'assets/bgremove/coril.png',
          foodSrc2: 'assets/bgremove/dhan.png',
          foodSrc3: 'assets/bgremove/coril.png',
          landing__title: 'Premium Green Cardamom',
          landing__subtitle: 'Aromatic Spice for Culinary Excellence',
          landing__descripton: 'Elevate your dishes with our Premium Green Cardamom Pods. These handpicked pods offer a sweet, spicy flavor perfect for both sweet and savory recipes. Ideal for baking, cooking, and brewing, our cardamom enhances your culinary creations with its rich aroma and taste.'
      }
  };

  buttons.forEach(button => {
      button.addEventListener("click", () => {
          const flavor = button.dataset.flavor;
          updateContent(flavor);

          buttons.forEach(btn => btn.classList.remove('selected'));
          button.classList.add('selected');
      });
  });

  function updateContent(flavor) {
      const { src1, src2, foodSrc, foodSrc2, foodSrc3, landing__title, landing__subtitle, landing__descripton } = images[flavor];

      // Reset animation
      [chipsImage1, chipsImage2, foodElement, foodElement2, foodElement3].forEach(img => {
          img.classList.remove('show');
      });

      // Update sources
      chipsImage1.src = src1;
      chipsImage2.src = src2;
      foodElement.src = foodSrc;
      foodElement2.src = foodSrc2;
      foodElement3.src = foodSrc3;

      // Wait for next frame to reapply animation
      requestAnimationFrame(() => {
          [chipsImage1, chipsImage2, foodElement, foodElement2, foodElement3].forEach(img => {
              img.classList.add('show');
          });
      });

      // Update text content
      landingSubtitle.textContent = landing__subtitle;
      landingTitle.textContent = landing__title;
      landingDescription.textContent = landing__descripton;
  }

  // Ensure the first button is selected by default
  updateContent('sour-cream');
});
