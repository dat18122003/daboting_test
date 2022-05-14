// header animation
var animations = document.querySelectorAll('.animation');

var cards = document.querySelectorAll('.card')

var body = document.querySelector('.body')
    body.classList.add('body65px')

function ani_show(element) {
    var scroll = getCurrentScroll();
    if(element==document.querySelector('#header')) {  
      if ( scroll > 300 ) {
        element.classList.add('header__ani');
        body.classList.add('body__header')
        body.classList.remove('body65px')    
      }
      else if(scroll<1) {
        element.classList.remove('header__ani');
        body.classList.remove('body__header')
        body.classList.add('body65px')
      }
    }
    else if(element==cards[0]||element==cards[1]||element==cards[2]||element==cards[3]) {
      console.log(132)
        if ( scroll > 350 ) {
          element.classList.add('card__ani');          
        }
        else {
          element.classList.remove('card__ani');
        }
    }  
}

function anis_show() {
  animations.forEach(el=>{
    ani_show(el);
  })
}



function getCurrentScroll() {
  return document.documentElement.scrollTop;
}

window.onscroll = anis_show

// Đăng ký và đăng nhập

const OpenRegister = document.querySelector('.btn_register')
const FormRegister = document.querySelector('.register')
const CloseRegister = document.querySelector('.btn_close-register')

// Hàm hiển thị form đăng ký
function showDangKy() {
    FormRegister.classList.add('openFormRegister')
}
// Hàm đóng form đăng ký
function hideDangKy() {
    FormRegister.classList.remove('openFormRegister')
}

OpenRegister.addEventListener('click', showDangKy)
CloseRegister.addEventListener('click', hideDangKy)



const OpenLogin = document.querySelector('.btn_login')
const FormLogin = document.querySelector('.login')
const CloseLogin = document.querySelector('.btn_close-login')

// Hàm hiển thị form đăng nhập
function showDangNhap() {
    FormLogin.classList.add('openFormLogin')
}
// Hàm đóng form đăng nhập 
function hideDangNhap() {
    FormLogin.classList.remove('openFormLogin')
}

OpenLogin.addEventListener('click', showDangNhap)
CloseLogin.addEventListener('click', hideDangNhap)



/*----------------- CART-------------------- */

// add cart
function addCart(btn) {
  const node = btn.parentElement.parentElement
  const trnode = node.cloneNode(true)
  const name_Product = trnode.querySelector('.title-product')
  const price = trnode.querySelector('.amount')
  const shoe = trnode.querySelector('.img_shoe').attributes
  const div_content = document.createElement('div')
  div_content.classList.add('cart_content')
  div_content.style.display = 'flex'
  div_content.innerHTML = 
  `
  <div class="cart_content-img">
  <img src="${shoe[1].value}" alt="">
  </div>
  <div class="cart_content-detail">
      <span class="name_product">${name_Product.innerText}</span> <br>
      <span class="price_product">
        Price: $<span class="money">${Number(price.getAttribute('data-price'))}</span>
      </span>
  </div>
  <div class="cart_content-delete">
      <i class="fa-solid fa-xmark" onclick="removeCart(this)"></i>
  </div>
  `
  document.querySelector('.cart__hover-list').appendChild(div_content)
  document.querySelector('.no_product').style.display = "none"
  document.querySelector('.cart_payment-pay').style.display = "flex"
  
  count_cart()
  caculateGrandTotal()
}

// remove cart
function removeCart(btn) {
  const node = btn.parentElement.parentElement
  node.remove()

  const a = document.querySelector('.cart__hover-list').childElementCount
  const count = document.querySelector('.count_cart').innerText = a - 1
  if(count == 0) {
    document.querySelector('.no_product').style.display = "flex"
    document.querySelector('.cart_payment-pay').style.display = "none"
  }
  caculateGrandTotal()
}

// count cart
function count_cart() {
  const a = document.querySelector('.cart__hover-list').childElementCount
  document.querySelector('.count_cart').innerText = a - 1
}


function caculateGrandTotal() {
  const CartItemsTable = document.querySelector('.cart__hover-list')
  const amountSpans = CartItemsTable.getElementsByClassName('money')

  let total = 0

  for (const element of amountSpans) {
      total += Number(element.innerText)
  }

  const totalSpan = document.querySelector('.total')
  totalSpan.innerText ="$" + total 
}


// 

function addCartOther(btn) {
  const node = btn.parentElement.parentElement
  const trnode = node.cloneNode(true)

  const name_Product = trnode.querySelector('.card__title')
  const price = trnode.querySelector('.card__price')
  const shoe = trnode.querySelector('.card__img-shoe').attributes
  const div_content = document.createElement('div')
  div_content.classList.add('heart_content')
  div_content.innerHTML = 
  `
  <div class="cart_content-img">
  <img src="${shoe[1].value}" alt="">
  </div>
  <div class="cart_content-detail">
      <span class="name_product">${name_Product.innerText}</span> <br>
      <span class="price_product">
        Price: $<span class="money">${Number(price.getAttribute('price'))}</span>
      </span>
  </div>
  <div class="cart_content-delete">
      <i class="fa-solid fa-xmark" onclick="removeCart(this)"></i>
  </div>
  `
  document.querySelector('.cart__hover-list').appendChild(div_content)
  document.querySelector('.no_product').style.display = "none"
  document.querySelector('.cart_payment-pay').style.display = "flex"
  
  count_cart()
  caculateGrandTotal()
}





/*----------------- HEART-------------------- */

// add favorite
function addFavorite(btn) {
  const node = btn.parentElement.parentElement
  const trnode = node.cloneNode(true)

  const name_Product = trnode.querySelector('.title-product')
  const price = trnode.querySelector('.amount')
  const shoe = trnode.querySelector('.img_shoe').attributes
  const div_content = document.createElement('div')
  div_content.classList.add('heart_content')
  div_content.innerHTML = 
  `
  <div class="heart_content-img">
    <img src="${shoe[1].value}" alt="">
  </div>
  <div class="heart_content-detail">
    <p class="heart__name-product" >${name_Product.innerText}</p>
    <p class="heart__price-product" >Price: $${Number(price.getAttribute('data-price'))}</p>
  </div>
  <div class="heart_content-delete">
    <i class="fa-solid fa-xmark" onclick="removeFavorite(this)"></i>
  </div>
  `
  document.querySelector('.heart__hover-list').appendChild(div_content)
  document.querySelector('.no_favorite').style.display = "none"
  document.querySelector('.heart__add-cart').style.display = "flex"
  count_favorite()
}

// remove favorite
function removeFavorite(btn) {
  const node = btn.parentElement.parentElement
  const trnode = node.cloneNode(true)

  const nodeOther = document.querySelector('.sneaker__demo tr')
  const trnodeOther = nodeOther.cloneNode(true)
  const img = trnodeOther.querySelector('.card__img-shoe')
  console.log(img.attributes[1].value)
  const imgOther = trnode.querySelector('.heart_content-img img').attributes[0].value
  console.log(imgOther)
    if (img.attributes[1].value === imgOther) {
      console.log(img.attributes[1].value)
      const other = trnodeOther.querySelector(`.${img.attributes[0].value}`).parentElement.parentElement
      const trother = other.cloneNode(true)
      console.log(trother.querySelector('.like').attributes[0].value)
      trother.querySelector('.like').style.color = "#fff" 
    }
  node.remove()
  const a = document.querySelector('.heart__hover-list').childElementCount
  const count = document.querySelector('.count_favorite').innerText = a - 1
  if(count == 0) {
    document.querySelector('.no_favorite').style.display = "flex"
    document.querySelector('.heart__add-cart').style.display = "none"
  }
  count_favorite()
}

// count favorite
function count_favorite() {
  const a = document.querySelector('.heart__hover-list').childElementCount
  document.querySelector('.count_favorite').innerText = a - 1
}

//
function addFavoriteOther(btn) {
  const node = btn.parentElement.parentElement
  const trnode = node.cloneNode(true)

  const name_Product = trnode.querySelector('.card__title')
  const price = trnode.querySelector('.card__price')
  const shoe = trnode.querySelector('.card__img-shoe').attributes
  const div_content = document.createElement('div')
  div_content.classList.add('heart_content')
  div_content.innerHTML = 
  `
  <div class="heart_content-img">
    <img src="${shoe[1].value}" alt="">
  </div>
  <div class="heart_content-detail">
    <p class="heart__name-product" >${name_Product.innerText}</p>
    <p class="heart__price-product" >Price: $${Number(price.getAttribute('price'))}</p>
  </div>
  <div class="heart_content-delete">
    <i class="fa-solid fa-xmark" onclick="removeFavorite(this)"></i>
  </div>
  `
  document.querySelector('.heart__hover-list').appendChild(div_content)
  document.querySelector('.no_favorite').style.display = "none"
  document.querySelector('.heart__add-cart').style.display = "flex"
  count_favorite()
}



