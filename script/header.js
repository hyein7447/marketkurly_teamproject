
const category = document.querySelector('.category')
const gnb = document.querySelector('.gnb')
const gnb_bg = document.querySelector('.gnb_bg')
const lnb = document.querySelectorAll('.lnb_wrap .lnb')
const gnb_li = document.querySelectorAll('.gnb_cate')
const gnb_icon = document.querySelectorAll('.gnb_icon')
const icon_img  = document.querySelectorAll('.gnb_icon img')
const category_bg = document.querySelector('.category_bg')
const gnb_wrap = document.querySelector('.gnb_wrap')
console.log(lnb, gnb_li,gnb_icon,icon_img)

// 초기 nav 가리기
gnb_bg.style.display = 'none'
lnb[26].style.display = 'none'

function onoff(target, num, status){
    return target.childeren[0].src = `./images/main/icon/category/cate_${num}_${status}.png`
}

// 카테고리 icon 마우스오버 시 gnb 출력
category_bg.addEventListener('mouseover',()=>{
    gnb_bg.style.display = 'block'
    gnb.style.display = 'block'
    category.classList.add('color_active')
    
})

category.addEventListener('mouseout',()=>{
    gnb_bg.style.display = 'none'
    gnb.style.display = 'none'
    category.classList.remove('color_active')
    for(let j of lnb ){j.style.display='none'}
})

// gnb 마우스오버 시 lnb 출력

gnb_li.forEach((t, i)=>{
    t.addEventListener('mouseover',()=>{
        for(let j of lnb ){j.style.display='none'}
        lnb[i].style.display = 'block'
        gnb_wrap.style.display ='block'
        t.classList.add('gnb_active')
        gnb_icon[i].children[1].classList.add('gnb_active')
    })
})
gnb_li.forEach((t, i)=>{
    t.addEventListener('mouseout',()=>{
        t.classList.remove('gnb_active')
        gnb_icon[i].children[1].classList.remove('gnb_active')
    })
})

gnb_bg.addEventListener('mouseout',()=>{
    gnb_bg.style.display = 'none'
})

gnb_li[26].addEventListener('mouseover',()=>{
    lnb[26].style.display = 'flex'
})
gnb_li[26].addEventListener('mouseout',()=>{
    lnb[26].style.display = 'none'
})
