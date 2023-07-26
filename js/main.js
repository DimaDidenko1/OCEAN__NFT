let burger_menu = document.getElementById("burger__menu__listener");
let content = document.querySelector('.content');
let isBurgerMenuOpen = false;


let activeButton = null;

function changeIMG_btn(button) {
   
    if (activeButton !== null) {
        activeButton.classList.remove('active__button__col');
    }

    
    button.classList.add('active__button__col');
    activeButton = button;

    const collectionImage = document.getElementById('collectionImage');
    const buttonText = button.textContent;
    const imagePath = `./img/Colection/${buttonText}.png`; 
    collectionImage.setAttribute('src', imagePath);
}


window.addEventListener('load', function() {
    const defaultActiveButton = document.querySelector('.active__button__col');
    if (defaultActiveButton) {
        activeButton = defaultActiveButton;
    }
});




const swiper = new Swiper('.swiper', {
  
  loop: true,
  freemode: true,
  breakpoints: {
    320: {
      slidesPerView: 1.2,
      
    },
    992: {
      slidesPerView: 2,
      
      
    },
    1600: {
      slidesPerView: 3, 
      
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

 
});















function timerInPage() {
  var hoursElement = document.getElementById("Hours");
  var minsElement = document.getElementById("Mins");
  var secsElement = document.getElementById("Secs");
  
  
  var hoursText = hoursElement.textContent;
  var minsText = minsElement.textContent;
  var secsText = secsElement ? secsElement.textContent : "";
  
  var hours = parseInt(hoursText);
  var mins = parseInt(minsText);
  var secs = parseInt(secsText);

  if(secs <= 0){
    if(mins <=0){
      if(hours){

      }
      hours -= 1;
      mins = 59;
      hoursElement.innerText = hours.toString();
      minsElement.innerText = mins.toString();
    }
    else{
      mins -= 1;
      secs = 59;
      minsElement.innerText = mins.toString();
      secsElement.innerText = secs.toString();
    }
  }
  else{
    secs -= 1;
    secsElement.innerText = secs.toString();
  }
}

setInterval(timerInPage, 1000);











function Active__burger__menu(){
    
    if (burger_menu.classList.contains("active__burger__menu")) {
        burger_menu.classList.remove("active__burger__menu");
        content.style.display = 'flex'; 
       
      } else {
        burger_menu.classList.add("active__burger__menu");
        content.style.display = 'none';
      }

      
     

}