const category_bg = document.querySelector('.category_bg')
const category = document.querySelector('.category')
const gnb_bg = document.querySelector('.gnb_bg')
const gnb_wrap = document.querySelector('.gnb_wrap')
const gnb = document.querySelector('.gnb')
const gnb_li = document.querySelectorAll('.gnb_cate')
const gnb_icon = document.querySelectorAll('.gnb_icon')
const lnb = document.querySelectorAll('.header_btm .lnb_wrap .lnb')
console.log(lnb, gnb_li, gnb_icon[0].children)

// 초기 gnb 가리기
gnb.style.display ='none'

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
    })
})
// gnb 마우스아웃 시 lnb 제거
gnb_li.forEach((t, i)=>{
    t.addEventListener('mouseout',()=>{
        lnb[i].style.display = 'none'
        
        // gnb li active 제거
        t.classList.remove('gnb_active')
        gnb_icon[i].children[1].classList.remove('gnb_active')

    })
})

gnb_li[26].addEventListener('mouseover',()=>{
    lnb[26].style.display = 'flex'
})
gnb_li[26].addEventListener('mouseout',()=>{
    lnb[26].style.display = 'none'
})
