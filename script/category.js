// left 영역 변수
const cate_top_a = document.querySelectorAll('.top > .cate_list > a')
const aside_arrow1 = document.querySelector('.list1 > .list_title > span > [class$=chevron-up]')
const aside_arrow2 = document.querySelector('.list2 > .list_title > span > [class$=chevron-up]')
const aside_arrow3 = document.querySelector('.list3 > .list_title > span > [class$=chevron-up]')
const aside_arrow4 = document.querySelector('.list4 > .list_title > span > [class$=chevron-up]')
const aside_arrow5 = document.querySelector('.list5 > .list_title > span > [class$=chevron-up]')
const ul_1 = document.querySelector('.list1 > ul')
const ul_li_a1 = ul_1.querySelectorAll('li > .btn_chk')
const ul_li_img1 = ul_1.querySelectorAll('li > .btn_chk > img')
const ul_2_title = document.querySelector('.list2 > .brand')
const brand_a = ul_2_title.querySelectorAll('.brand > a')
const ul_2_atoz = document.querySelector('.list2 > .atoz_btn')
const atoz_btn_a = ul_2_atoz.querySelectorAll('.atoz_btn > a')
const ul_2_ul = document.querySelector('.list2 > .box')
const brand_tab_box = document.querySelectorAll('.list2 > .box')
const brand_tab_box_ul = document.querySelectorAll('.list2 > .box > ul')
const ul_li_a2 = ul_2_ul.querySelectorAll('li > .btn_chk')
const ul_li_img2 = ul_2_ul.querySelectorAll('li > .btn_chk > img')
const ul_3 = document.querySelector('.list3 > ul')
const ul_li_a3 = ul_3.querySelectorAll('li > .btn_circle')
const ul_li_img3 = ul_3.querySelectorAll('li > .btn_circle > img')
const ul_4 = document.querySelector('.list4 > ul')
const ul_li_a4 = ul_4.querySelectorAll('li > .btn_chk')
const ul_li_img4 = ul_4.querySelectorAll('li > .btn_chk > img')
const ul_5 = document.querySelector('.list5 > ul')
const ul_li_a5 = ul_5.querySelectorAll('li > .btn_chk')
const ul_li_img5 = ul_5.querySelectorAll('li > .btn_chk > img')
const chk_reset = document.querySelector('.container > .left > .title > p')
const ul = document.querySelectorAll('.best > .container > .left > .list > ul')
const li = document.querySelectorAll('.best > .container > .left > .list > ul > li')
const btn_chk_a = document.querySelector('.btn_chk')
const changeImg = btn_chk_a.querySelectorAll('img')
const popup = document.querySelector('.popup')
const cart_pop = document.querySelector('.cart_pop')
const cart_result_pop = document.querySelector('.cart_result_pop')
const brand_pop = document.querySelector('.brand_pop')
const brand_tab_a = brand_pop.querySelectorAll('.wrap_top > .wrap > .tab > a')
const brand_subtab_a = brand_pop.querySelectorAll('.wrap_top > .tab_sub > a')
const cate_pop = document.querySelector('.best > .popup > .cate_pop')
const cate_more_btn = ul_1.querySelector('.more_btn > a ')
const brand_more_btn = ul_2_ul.querySelector('.more_btn > li > a ')
const cate_pop_btn_reset = cate_pop.querySelector('.btn_wrap > .btn_reset ')
const cate_pop_btn_ok = cate_pop.querySelector('.btn_wrap > .btn_ok')
const brand_pop_btn_ok = brand_pop.querySelector('.btn_wrap > .btn_ok')
const cate_more_x_btn = cate_pop.querySelector('.wrap_top > a')
const brand_more_x_btn = brand_pop.querySelector('.wrap_top > .wrap > a ')
const btn_cancel = cart_pop.querySelector('.btn_cancel')
const btn_cart_r = cart_pop.querySelector('.btn_cart_r')
console.log(aside_arrow1,ul_1,ul_2_title,ul_2_atoz)
console.log(atoz_btn_a,ul_2_atoz)
// rigth 영역 변수
const product_cart_btn = document.querySelector('.btn_c')
const product = document.querySelectorAll('.product')
const pc_array_a = document.querySelectorAll('.right > .lnb > .array > a')
const pc_array_q = document.querySelector('.right > .lnb > .array > a > [class$=question]')
const quest_box = document.querySelector('.right > .lnb > .array > .quest_box')


console.log('----------------- 데스크탑 버전 -----------------')

/* 
    ******** 상단 영역 js
*/
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

/* 
    ******** 왼쪽 어사이드 영역 js
*/

// 브랜드 가나다순 상품많은순 클릭시 글씨컬러 변경
// 초기값 -> 가나다순 컬러 활성화
brand_a[0].classList.add('name_active')
// 활성화 제거 함수 호출용
const ul_2_title_remove = ()=>{
    brand_a[0].classList.remove('name_active')
    brand_a[1].classList.remove('name_active')
}
// 초기값 활성화 제거 -> 클릭한 대상 컬러 활성화
for (let i of brand_a){
    i.addEventListener('click',()=>{
        ul_2_title_remove()
        i.classList.add('name_active')
    })
}

// ---------------------- 구분선 --------------------------

// 브랜드 atoz_btn 클릭시 박스컬러 & 글씨컬러 활성화
// 초기값 -> 전체박스 활성화
atoz_btn_a[0].classList.add('atoz_active')
const atoz_btn_a_remove = ()=>{
    for (let i of atoz_btn_a){
        i.classList.remove('atoz_active')
    }
}
for (let a of atoz_btn_a){
    a.addEventListener('click',()=>{
        atoz_btn_a_remove()
        a.classList.add('atoz_active')
    })
}

// ---------------------- 구분선 --------------------------

// 브랜드 atoz_btn 클릭시 서브탭 활성화 ------------------>>>>>>>>>>> 작업중★
const brand_ul_hide = ()=>{
    for (let a of brand_tab_box_ul){
        a.style.display = 'none'
    }
    // brand_tab_box_ul[0].style.display = 'none';
}
let box_ul_status = false;
brand_tab_box_ul[0].style.display = 'block';
for(let i of brand_tab_box_ul){
    for (let a of atoz_btn_a){
        a.addEventListener('click',()=>{
            console.log(i,'-----',brand_tab_box_ul[i])
            if(box_ul_status = false){
                i.style.display = 'block';
                box_ul_status = !box_ul_status;
            }else{
                console.log(i,'--111---')
                i.style.display = 'none';
                box_ul_status = !box_ul_status;
            }
        })
    }
}
// ---------------------- 구분선 --------------------------

// 카테고리 ^ [chevron-up] 아이콘 클릭 시 탭 활성화 -> 비활성화 / 아이콘 상하 반전
let aside_arrow1_status = false;
aside_arrow1.addEventListener('click',()=>{
    if (aside_arrow1_status == false) {
        ul_1.style.display = 'none'
        aside_arrow1.style.transform = 'rotate(180deg)'
        aside_arrow1.style.transition = '0.4s ease'
        aside_arrow1_status = !aside_arrow1_status;
    }else {
        ul_1.style.display = 'block'
        aside_arrow1.style.transform = 'rotate(0deg)'
        aside_arrow1.style.transition = '0.4s ease'
        aside_arrow1_status = !aside_arrow1_status;
    }
})
let aside_arrow2_status = false;
aside_arrow2.addEventListener('click',()=>{
    if (aside_arrow2_status == false) {
        ul_2_title.style.display = 'none'
        ul_2_atoz.style.display = 'none'
        ul_2_ul.style.display = 'none'
        aside_arrow2.style.transform = 'rotate(180deg)'
        aside_arrow2.style.transition = '0.4s ease'
        aside_arrow2_status = !aside_arrow2_status;
    }else {
        ul_2_title.style.display = 'block'
        ul_2_atoz.style.display = 'block'
        ul_2_ul.style.display = 'block'
        aside_arrow2.style.transform = 'rotate(0deg)'
        aside_arrow2.style.transition = '0.4s ease'
        aside_arrow2_status = !aside_arrow2_status;
    }
})
let aside_arrow3_status = false;
aside_arrow3.addEventListener('click',()=>{
    if (aside_arrow3_status == false) {
        ul_3.style.display = 'none'
        aside_arrow3.style.transform = 'rotate(180deg)'
        aside_arrow3.style.transition = '0.4s ease'
        aside_arrow3_status = !aside_arrow3_status;
    }else {
        ul_3.style.display = 'block'
        aside_arrow3.style.transform = 'rotate(0deg)'
        aside_arrow3.style.transition = '0.4s ease'
        aside_arrow3_status = !aside_arrow3_status;
    }
})
let aside_arrow4_status = false;
aside_arrow4.addEventListener('click',()=>{
    if (aside_arrow4_status == false) {
        ul_4.style.display = 'none'
        aside_arrow4.style.transform = 'rotate(180deg)'
        aside_arrow4.style.transition = '0.4s ease'
        aside_arrow4_status = !aside_arrow3_status;
    }else {
        ul_4.style.display = 'block'
        aside_arrow4.style.transform = 'rotate(0deg)'
        aside_arrow4.style.transition = '0.4s ease'
        aside_arrow4_status = !aside_arrow4_status;
    }
})
let aside_arrow5_status = false;
aside_arrow5.addEventListener('click',()=>{
    if (aside_arrow5_status == false) {
        ul_5.style.display = 'none'
        aside_arrow5.style.transform = 'rotate(180deg)'
        aside_arrow5.style.transition = '0.4s ease'
        aside_arrow5_status = !aside_arrow3_status;
    }else {
        ul_5.style.display = 'block'
        aside_arrow5.style.transform = 'rotate(0deg)'
        aside_arrow5.style.transition = '0.4s ease'
        aside_arrow5_status = !aside_arrow5_status;
    }
})

// ---------------------- 구분선 --------------------------

// 카테고리 어사이드 메뉴 클릭시 체크이미지 변경
// 회색 체크 이미지 클릭 시 -> 보라색 체크 이미지로 이미지경로 변경
let btn_chk_img_status = false;
const chk_reset_basic = ()=>{
    chk_reset.children[0].classList.remove('name_active')
    chk_reset.children[1].classList.remove('name_active')
}
for (let i of ul_li_a1){
    i.addEventListener('click',()=>{
        if (btn_chk_img_status == false){
            chk_reset.children[0].classList.add('name_active')
            chk_reset.children[1].classList.add('name_active')
            i.children[0].src = './images/sub/icon_check4.png';
            btn_chk_img_status = !btn_chk_img_status;
        }else {
            i.children[0].src = './images/sub/icon_check1.png';
            btn_chk_img_status = !btn_chk_img_status;
        }
    })
}
chk_reset_basic()

for (let i of ul_li_a2){
    i.addEventListener('click',()=>{
        if (btn_chk_img_status == false){
            i.children[0].src = './images/sub/icon_check4.png';
            btn_chk_img_status = !btn_chk_img_status;
        }else {
            i.children[0].src = './images/sub/icon_check1.png';
            btn_chk_img_status = !btn_chk_img_status;
        }
    })
}
for (let i of ul_li_a3){
    i.addEventListener('click',()=>{
        if (btn_chk_img_status == false){
            i.children[0].src = './images/sub/icon_circle_on.svg';
            btn_chk_img_status = !btn_chk_img_status;
        }else {
            i.children[0].src = './images/sub/icon_circle_off.svg';
            btn_chk_img_status = !btn_chk_img_status;
        }
    })
}
for (let i of ul_li_a4){
    i.addEventListener('click',()=>{
        if (btn_chk_img_status == false){
            i.children[0].src = './images/sub/icon_check4.png';
            btn_chk_img_status = !btn_chk_img_status;
        }else {
            i.children[0].src = './images/sub/icon_check1.png';
            btn_chk_img_status = !btn_chk_img_status;
        }
    })
}
for (let i of ul_li_a5){
    i.addEventListener('click',()=>{
        if (btn_chk_img_status == false){
            i.children[0].src = './images/sub/icon_check4.png';
            btn_chk_img_status = !btn_chk_img_status;
        }else {
            i.children[0].src = './images/sub/icon_check1.png';
            btn_chk_img_status = !btn_chk_img_status;
        }
    })
}
// 카테고리 어사이드 메뉴의 팝업창 클릭시 체크이미지 변경

// ---------------------- 구분선 --------------------------

// 어사이드 카테고리 더보기 클릭 시 팝업창 활성화
// 초기값 -> 비활성화 -> 클릭 시 -> 활성화 -> 닫기버튼 클릭 -> 비활성화
// 카테고리 더보기 >
cate_more_btn.addEventListener('click',()=>{
    popup.style.display = 'flex';
    cate_pop.style.display = 'block';
})
cate_more_x_btn.addEventListener('click',()=>{
    popup.style.display = 'none';
    cate_pop.style.display = 'none';
})
cate_pop_btn_ok.addEventListener('click',()=>{
    popup.style.display = 'none';
    cate_pop.style.display = 'none';
})
// 브랜드 더보기 >
brand_more_btn.addEventListener('click',()=>{
    popup.style.display = 'flex';
    brand_pop.style.display = 'block';
})
brand_more_x_btn.addEventListener('click',()=>{
    popup.style.display = 'none';
    brand_pop.style.display = 'none';
})
brand_pop_btn_ok.addEventListener('click',()=>{
    popup.style.display = 'none';
    brand_pop.style.display = 'none';
})

// ---------------------- 구분선 --------------------------

// 브랜드 더보기 팝업 - 상단 타이틀 글씨 컬러 (퍼플) 변경
// 초기값 -> 1번째 글씨 활성화
brand_tab_a[0].classList.add('top_active')
const brand_tab_a_basic = ()=>{
    brand_tab_a[0].classList.remove('top_active')
    brand_tab_a[1].classList.remove('top_active')
}
// 클릭 -> 이전에 활성화된 a 비활성화 하고 클릭 대상 a가 활성화
for(let i of brand_tab_a){
    i.addEventListener('click',()=>{
        brand_tab_a_basic()
        i.classList.add('top_active')
    })
}
// 브랜드 더보기 팝업 - 상단 박스 컬러 (블랙) 변경
// 초기값 -> 1번째 박스 활성화
brand_subtab_a[0].classList.add('atoz_active')
const brand_subtab_a_basic = ()=>{
    for(let a of brand_subtab_a){
        a.classList.remove('atoz_active')
    }
}
// 클릭 -> 이전에 활성화된 a 비활성화 하고 클릭 대상 a가 활성화
for(let i of brand_subtab_a){
    i.addEventListener('click',()=>{
        brand_subtab_a_basic()
        i.classList.add('atoz_active')
    })
}
// ---------------------- 구분선 --------------------------
/* 
    ******** 오른쪽 영역 js
*/

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

// ---------------------- 구분선 --------------------------

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

// ---------------------- 구분선 --------------------------

// 담기 버튼 클릭 시 팝업 활성화
// 팝업창 초기값 -> 화면 비활성화
popup.style.display = 'none';
cate_pop.style.display = 'none';
cart_pop.style.display = 'none';
brand_pop.style.display = 'none';
cart_result_pop.style.display = 'none';

// 담기 버튼 클릭 시 팝업 활성화
for(let i of product){
    i.children[1].children[0].addEventListener('click',()=>{
        popup.style.display = 'flex';
        cart_pop.style.display = 'block';
        btn_cancel.addEventListener('click',()=>{
            popup.style.display = 'none';
            cart_pop.style.display = 'none';
        })
    })
}
product_cart_btn.addEventListener('click',()=>{
    popup.style.display = 'flex';
    cart_pop.style.display = 'block';
    btn_cancel.addEventListener('click',()=>{
        popup.style.display = 'none';
        cart_pop.style.display = 'none';
    })
})

// ---------------------- 구분선 --------------------------

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