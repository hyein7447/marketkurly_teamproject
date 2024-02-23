// 냉동/냉장/상온 title 클릭시 하단 아이템 출력/숨김

const title = document.querySelectorAll('.product_wrap .title a')
const product = document.querySelectorAll('.product')
console.log(title, product)



title.forEach((t, i)=>{
    t.addEventListener('click',()=>{
        product[i].classList.toggle('open_toggle')
    })
})