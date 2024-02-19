const category_bg = document.querySelector('.category_bg')
const category = document.querySelector('.category')
const gnb_bg = document.querySelector('.gnb_bg')
const gnb_wrap = document.querySelector('.gnb_wrap')
const gnb = document.querySelector('.gnb')
const gnb_li = document.querySelectorAll('.gnb_cate')
const gnb_icon = document.querySelectorAll('.gnb_icon')
const lnb = document.querySelectorAll('.header_btm .lnb_wrap .lnb')
const menu = document.querySelectorAll ('.header_top .left .menu > a')
const map_icon = document.querySelector('.map_icon')
const wish = document.querySelector('.wish')
const cart = document.querySelector('.cart')
const gnb_menu = document.querySelectorAll('.theme li > a')
console.log(lnb, gnb_li, gnb_icon[0].firstElementChild,menu,map_icon.firstElementChild)

// 초기 gnb 가리기
gnb.style.display ='none'
for(let l of lnb){l.style.display = 'none'}


// 카테고리 icon 마우스오버 시 gnb 출력
category_bg.addEventListener('mouseover',()=>{
    gnb_bg.style.display = 'block'
    gnb.style.display = 'block'

    // 카테고리 txt active 적용
    category.classList.add('color_active')
    
})

category_bg.addEventListener('mouseout',()=>{
    // 카테고리 icon 마우스아웃 시 gnb 제거
    gnb_bg.style.display = 'none'
    gnb.style.display = 'none'

    // 카테고리 icon 마우스아웃 시 lnb 제거
    for(let j of lnb ){j.style.display='none'}

    // 카테고리 txt active 제거
    category.classList.remove('color_active')
})

// gnb 마우스오버 시 lnb 출력
gnb_li.forEach((t, i)=>{
    t.addEventListener('mouseover',()=>{
        for(let j of lnb ){j.style.display='none'} //초기 lnb 전체숨김
        lnb[i].style.display = 'block' //해당 lnb만 출력
        
        // gnb li active 적용
        t.classList.add('gnb_active')
        gnb_icon[i].children[1].classList.add('gnb_active')

        // gnb icon active 적용
        console.log(t,i)
        console.log(t.firstElementChild.firstElementChild.src)
        t.firstElementChild.firstElementChild.src = onoff(i+1, 'on')

    })
})
// gnb 마우스아웃 시 lnb 제거
gnb_li.forEach((t, i)=>{
    t.addEventListener('mouseout',()=>{
        lnb[i].style.display = 'none'
        
        // gnb li active 제거
        t.classList.remove('gnb_active')
        gnb_icon[i].children[1].classList.remove('gnb_active')

        // gnb icon active 제거
        t.firstElementChild.firstElementChild.src = onoff(i+1, 'off')
    })
})

gnb_li[26].addEventListener('mouseover',()=>{
    lnb[26].style.display = 'flex'
})
gnb_li[26].addEventListener('mouseout',()=>{
    lnb[26].style.display = 'none'
})


//  icon 마우스오버시 활성화

function onoff(num, status){
    return `./images/main/icon/category/cate_${num}_${status}.png`
}
function icon_onoff(name, status){
    return `./images/main/icon/icon_${name}_${status}.svg`
}

// 카테고리 img 활성화
menu[1].addEventListener('mouseover',()=>{
    menu[1].classList.add('color_active')
})
menu[1].addEventListener('mouseout',()=>{
    menu[1].classList.remove('color_active')
})
// 맵 활성화
map_icon.addEventListener('mouseover',()=>{
    map_icon.firstElementChild.src = icon_onoff('map','on')
})
map_icon.addEventListener('mouseout',()=>{
    map_icon.firstElementChild.src = icon_onoff('map','off')
})
// 위시리스트 활성화
wish.addEventListener('mouseover',()=>{
    wish.firstElementChild.src = icon_onoff('wish','on')
})
wish.addEventListener('mouseout',()=>{
    wish.firstElementChild.src = icon_onoff('wish','off')
})
// 장바구니 활성화
cart.addEventListener('mouseover',()=>{
    cart.firstElementChild.src = icon_onoff('cart','on')
})
cart.addEventListener('mouseout',()=>{
    cart.firstElementChild.src = icon_onoff('cart','off')
})
// 신상품 ~ 특가/혜택 활성화

gnb_menu.forEach((t,i)=>{
    t.addEventListener('mouseover',()=>{
        gnb_menu[i].classList.add('lnb_active')
    })
})
gnb_menu.forEach((t,i)=>{
    t.addEventListener('mouseout',()=>{
        gnb_menu[i].classList.remove('lnb_active')
    })
})