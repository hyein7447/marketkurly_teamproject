// 카테고리 icon 마우스 오버 시 gnb 출력

const category = document.querySelector('.category')
const gnb = document.querySelector('.gnb')
const gnb_bg = document.querySelector('.gnb_bg')
console.log(gnb)

gnb_bg.style.display = 'none'
gnb.style.display = 'none'

category.addEventListener('mouseover',()=>{
    gnb_bg.style.display = 'block'
})
category.addEventListener('mouseout',()=>{
    gnb_bg.style.display = 'none'
})