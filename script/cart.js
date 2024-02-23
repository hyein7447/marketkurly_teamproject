const title = document.querySelectorAll('.product_wrap .title a')
const product = document.querySelectorAll('.product')
const product_wrap = document.querySelector('.product_wrap')
const all_num = document.querySelector('.all_num')
const sele_num = document.querySelector('.sele_num')
const check_icon = document.querySelectorAll('.checkboxs')
const all_check = document.querySelector('#all_check')
const btm_all_check = document.querySelector('#btm_all_check')
const order_btn = document.querySelector('#order_btn')
const btn_txt = document.querySelector('.btn_txt')
console.log(title, product, product_wrap.childNodes.length,check_icon)

// 냉동/냉장/상온 title 클릭시 하단 아이템 출력/숨김
title.forEach((t, i)=>{
    t.addEventListener('click',()=>{
        product[i].classList.toggle('open_toggle')
    })
})

//전체아이템 개수 출력
all_num.innerHTML = `/ ${product_wrap.children.length}`

//선택 아이템 개수 출력
let count = 0;
for(let c of check_icon){
    c.addEventListener('change',(e)=>{
        if(e.target.checked){
            count++;
            sele_num.innerHTML = count

            //체크박스 활성화 시 주문하기 버튼 활성화
            order_btn.classList.add('bg_active')
            btn_txt.classList.add('color_w')
            btn_txt.innerText = '주문하기'
        }else{
            count--
            sele_num.innerHTML = count
            
            //체크박스 비활성화 시 주문하기 버튼 비활성화
            order_btn.classList.remove('bg_active')
            btn_txt.classList.remove('color_w')
            btn_txt.innerText = '상품을 선택해주세요'
        }
    })
}

// 상단 전체선택 icon 클릭시 개별 icon 활성화, 선택 아이템 개수 출력, 주문하기 버튼 활성화
all_check.addEventListener('change',(e)=>{
    if(e.target.checked){
        //주문하기 버튼 활성화
        order_btn.classList.add('bg_active')
        btn_txt.classList.add('color_w')
        btn_txt.innerText = '주문하기'
        for(let a of check_icon){
            //개별icon, 하단전체 선택 활성화
            a.checked = true
            btm_all_check.checked = true
            
            //선택아이템 개수 출력
            count++;
            sele_num.innerHTML = count
        }
    }else { 
        //주문하기 버튼 비활성화
        order_btn.classList.remove('bg_active')
        btn_txt.classList.remove('color_w')
        btn_txt.innerText = '상품을 선택해주세요'
        for(let a of check_icon){
            //개별icon, 하단전체 선택 비활성화
            btm_all_check.checked = false
            a.checked = false
            
            //선택아이템 개수 출력
            count--
            sele_num.innerHTML = count
        }
    }
})

//하단 전체선택 icon 클릭시 개별 icon 활성화 , 선택 아이템 개수 출력

btm_all_check.addEventListener('change',(e)=>{
    if(e.target.checked){
        //주문하기 버튼 활성화
        order_btn.classList.add('bg_active')
        btn_txt.classList.add('color_w')
        btn_txt.innerText = '주문하기'

        for(let a of check_icon){
            //개별icon, 하단전체 선택 활성화
            all_check.checked = true
            a.checked = true

            //선택아이템 개수 출력
            count++;
            sele_num.innerHTML = count
        }
    }else {
        for(let a of check_icon){
            //주문하기 버튼 비활성화
            order_btn.classList.remove('bg_active')
            btn_txt.classList.remove('color_w')
            btn_txt.innerText = '상품을 선택해주세요'
            
            //개별icon, 하단전체 선택 비활성화
            all_check.checked = false
            a.checked = false

            //선택아이템 개수 출력
            count--
            sele_num.innerHTML = count
        }
    }
})

// 수량 증감
const minus = document.querySelectorAll('.minus')
const plus = document.querySelectorAll('.plus')
const a_num = document.querySelectorAll('.product .num')
const item_num = document.querySelectorAll('.item_num')
console.log(minus,plus,item_num,a_num)

let num = 1
item_num[0].innerHTML = num
item_num[1].innerHTML = num
item_num[2].innerHTML = num

plus[0].addEventListener('click',()=>{
    num++
    item_num[0].innerHTML = num
})
minus[0].addEventListener('click',()=>{
    if(num > 1){
        num--
        item_num[0].innerHTML = num
    }
})
plus[1].addEventListener('click',()=>{
    num++
    item_num[1].innerHTML = num
})
minus[1].addEventListener('click',()=>{
    if(num > 1){
        num--
        item_num[1].innerHTML = num
    }
})
plus[2].addEventListener('click',()=>{
    num++
    item_num[2].innerHTML = num
})
minus[2].addEventListener('click',()=>{
    if(num > 1){
        num--
        item_num[2].innerHTML = num
    }
})
