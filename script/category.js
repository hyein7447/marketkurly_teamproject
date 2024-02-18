const cate_top_a = document.querySelectorAll('.top > .cate_list > a')
const pc_array_a = document.querySelectorAll('.right > .lnb > .array > a')
const pc_array_q = document.querySelector('.right > .lnb > .array > a > [class$=question]')
const quest_box = document.querySelector('.right > .lnb > .array > .quest_box')
console.log(cate_top_a,pc_array_a,pc_array_q,quest_box)

// ------------------------------- 데스크탑 버전 -----------------------------------
console.log('----------------- 데스크탑 버전 -----------------')

// 베스트 카테고리 상단 top의 메뉴(a) 클릭 시 컬러 변경
// 초기 값 -> TOP300 글씨 보라색으로 활성화
cate_top_a[0].classList.add('top_active')

// 아래 forEach에서 클릭 시 보라색으로 글씨 활성화되는 classList 제거 함수 호출용
const top_a_hide = ()=>{
    for(let a of cate_top_a){
        a.classList.remove('top_active')
    }
}
console.log(cate_top_a)
// a 클릭 시 초기값 제거 -> 클릭 대상만 보라색으로 글씨 활성화
cate_top_a.forEach((o,i)=>{
    o.addEventListener('click',()=>{
        top_a_hide()
        cate_top_a[i].classList.add('top_active')
    })
})

// 카테고리 추천순 | 신상품순 | ... | 높은가격순 클릭 시 컬러 변경
// 초기 값 -> 추천순 글씨 블랙
// pc_array_a[0].classList.add('array_active')
pc_array_a[0].style.color = '#333333';
pc_array_a[0].style.fontWeight = '500';

// 아래 forEach에서 클릭 시 블랙으로 글씨 활성화 제거 함수 호출용
const pc_array_hide = ()=>{
    for(let a of pc_array_a){
        // a.classList.remove('array_active')
        a.style.color = '#999999';
        a.style.fontWeight = '400';
    }
}
// a 클릭 시 초기값 제거 -> 클릭 대상만 블랙으로 글씨 활성화
pc_array_a.forEach((o,i)=>{
    o.addEventListener('click',()=>{
        pc_array_hide()
        // pc_array_a[i].classList.add('array_active')
        pc_array_a[i].style.color = '#333333';
        pc_array_a[i].style.fontWeight = '500';
    })
})
// 추천순옆 ? 아이콘에 마우스오버시 설명박스 활성화
// 초기값 -> 박스 비활성화
quest_box.style.display = 'none';
// 마우스 오버시 박스 활성화
pc_array_q.addEventListener('mouseover',()=>{
    quest_box.style.display = 'block';
})
pc_array_q.addEventListener('mouseout',()=>{
    quest_box.style.display = 'none';
})

const ul = document.querySelectorAll('.best > .container > .left > .list > ul')
const li = document.querySelectorAll('.best > .container > .left > .list > ul > li')
const btn_chk_a = document.querySelector('.btn_chk')
const changeImg = btn_chk_a.querySelector('img')
console.log(btn_chk_a,changeImg,li)

// 카테고리 어사이드 메뉴 클릭시 체크이미지 변경
let btn_chk_img_status = false;

btn_chk_a.addEventListener('click',()=>{
    if(btn_chk_img_status == false){
        changeImg.src = './images/sub/icon_check2.png';
        // changeImgBasic();
        btn_chk_img_status = !btn_chk_img_status;
    }else{
        changeImg.src = './images/sub/icon_check1.png';
        btn_chk_img_status = !btn_chk_img_status;
    }
})
btn_chk_a.addEventListener('click',()=>{
    changeImg.src = './images/sub/icon_check2.png';
})

// 담기 버튼 클릭 시 팝업 활성화
const product_cart_btn = document.querySelector('.btn_c')
const cart_pop = document.querySelector('.cart_pop')
const popup = document.querySelector('.popup')
const btn_cancel = cart_pop.querySelector('.btn_cancel')
const btn_cart_r = cart_pop.querySelector('.btn_cart_r')
console.log(product_cart_btn, cart_pop, btn_cancel)

popup.style.display = 'none';
cart_pop.style.display = 'none';
product_cart_btn.addEventListener('click',()=>{
    popup.style.display = 'flex';
    cart_pop.style.display = 'block';
    btn_cancel.addEventListener('click',()=>{
        popup.style.display = 'none';
        cart_pop.style.display = 'none';
    })
    // btn_cart_r.addEventListener('click',()=>{

    // })
})

// ------------------------------- 모바일 버전 -----------------------------------
console.log('----------------- 모바일 버전 -----------------')
// test 
/* const li = document.querySelectorAll('.best_mobile > .tab_slide > li ') 
const btn_chk = document.querySelector('.best_mobile > .tab_slide > .bg .btn_chk ')
const chnImg = btn_chk.querySelector('img')
console.log(li,btn_chk,chnImg)
btn_chk.addEventListener('click',()=>{
    chnImg.src = './images/sub/icon_check2.png';
    console.log('---')
}) */