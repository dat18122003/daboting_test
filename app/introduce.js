// Animation header và card
var animations = document.querySelectorAll('.animation');

var body = document.querySelector('.body')

function ani_show(element) {
    var scroll = getCurrentScroll();
    if(element==document.querySelector('#header')) {  
      if ( scroll > 300 ) {
        element.classList.add('header__ani');
        body.classList.add('body__abc') 
      }
      else if(scroll<1) {
        element.classList.remove('header__ani');
        body.classList.remove('body__abc')
      }
    }
    else if(element==cards[0]||element==cards[1]||element==cards[2]||element==cards[3]) {
      console.log(1234)  
      if ( scroll > 350 ) {
          element.classList.add('card__ani');          
        }
        else {
          element.classList.remove('card__ani');
        }
    }  
}

function getCurrentScroll() {
  return document.documentElement.scrollTop;
}

function anis_show() {
  animations.forEach(el=>{
    ani_show(el);
  })
}

window.onscroll = anis_show

