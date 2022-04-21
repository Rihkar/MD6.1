const navHome = document.querySelector<HTMLAnchorElement>('.js-nav-Home');
const navEvents = document.querySelector<HTMLAnchorElement>('.js-nav-Events');
const navAbout = document.querySelector<HTMLAnchorElement>('.js-nav-About');
const navBlog = document.querySelector<HTMLAnchorElement>('.js-nav-Blog');
const navContacts = document.querySelector<HTMLAnchorElement>('.js-nav-Contacts');

const navArray = [navHome.innerText, navEvents.innerText, navAbout.innerText, navBlog.innerText, navContacts.innerText]

const buttonPlay = document.querySelector<HTMLButtonElement>('.js-button-play');
const toast = document.querySelector<HTMLDivElement>('.js-toast');

buttonPlay.addEventListener('click', () => {
toast.style.visibility = 'visible'

})

const slideNext = document.querySelector<HTMLDivElement>('.js-button-next');
const slidePrev = document.querySelector<HTMLDivElement>('.js-button-prev');
const beijing = document.querySelector<HTMLDivElement>('.js-beijing');
const turkey = document.querySelector<HTMLDivElement>('.js-turkey');
const pakistan = document.querySelector<HTMLDivElement>('.js-pakistan');
const countrySlide = document.querySelector<HTMLDivElement>('.js-countrySlide');

let slideNextOrder = 4
let beijingOrder = 1
let turkeyOrder = 2
let pakistanOrder = 3
let slidePrevOrder = 0


slideNext.addEventListener('click', () =>{

if(beijingOrder === 1){
      beijingOrder = 2
  }else if(beijingOrder === 2){
      beijingOrder =3
  } else if (beijingOrder === 3){
      beijingOrder = 1
  };

  if(turkeyOrder === 1 ){
    turkeyOrder = 2
} else if(turkeyOrder === 2){
    turkeyOrder = 3
} else if (turkeyOrder === 3){
    turkeyOrder = 1
};

if(pakistanOrder === 1 ){
    pakistanOrder = 2
} else if(pakistanOrder === 2){
    pakistanOrder = 3
} else if (pakistanOrder === 3){
    pakistanOrder = 1
};  
slidePrev.style.order = slidePrevOrder.toString()
beijing.style.order = beijingOrder.toString();
turkey.style.order = turkeyOrder.toString();
pakistan.style.order = pakistanOrder.toString(); 
slideNext.style.order = slideNextOrder.toString()
}
)


slidePrev.addEventListener('click', () =>{

    if(beijingOrder === 1){
          beijingOrder = 3
      }else if(beijingOrder === 2){
          beijingOrder =1
      } else if (beijingOrder === 3){
          beijingOrder = 2
      };
    
      if(turkeyOrder === 1 ){
        turkeyOrder = 3
    } else if(turkeyOrder === 2){
        turkeyOrder = 1
    } else if (turkeyOrder === 3){
        turkeyOrder = 2
    };
    
    if(pakistanOrder === 1 ){
        pakistanOrder = 3
    } else if(pakistanOrder === 2){
        pakistanOrder = 1
    } else if (pakistanOrder === 3){
        pakistanOrder = 2
    };  
    slidePrev.style.order = slidePrevOrder.toString()
    beijing.style.order = beijingOrder.toString();
    turkey.style.order = turkeyOrder.toString();
    pakistan.style.order = pakistanOrder.toString(); 
    slideNext.style.order = slideNextOrder.toString()
    }
    
    )


const emailInputElement = document.querySelector<HTMLInputElement>('.js-email-input');
const subscribeBtnElement = document.querySelector('.js-subscribe-btn');
const emailUlElement = document.querySelector('.js-email-list');

subscribeBtnElement.addEventListener('click', () => {
  const inputValue = emailInputElement.value;
  const newLiElement = document.createElement('li');
  newLiElement.innerText = inputValue;

  emailUlElement.appendChild(newLiElement);
});


const footerBackground = document.querySelector<HTMLDivElement>('.js-footer')
const inputColor = ['blue', 'orange', 'red','purple', 'yellow']
let counter = 0
emailInputElement.addEventListener('input', () =>{    
    footerBackground.style.background = inputColor[counter]
    if(counter < 4){
        counter += 1
    } else{
        counter = 0
   
    } 
})