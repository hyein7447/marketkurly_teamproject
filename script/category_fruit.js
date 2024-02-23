// left 영역 변수
const cate_top_a = document.querySelectorAll('.top > .cate_list > a')
// const aside_arrow1 = document.querySelector('.list1 > .list_title > span > [class$=chevron-up]')
const aside_arrow2 = document.querySelector('.list2 > .list_title > span > [class$=chevron-up]')
const aside_arrow3 = document.querySelector('.list3 > .list_title > span > [class$=chevron-up]')
const aside_arrow4 = document.querySelector('.list4 > .list_title > span > [class$=chevron-up]')
const aside_arrow5 = document.querySelector('.list5 > .list_title > span > [class$=chevron-up]')
// const ul_1 = document.querySelector('.list1 > ul')
// const ul_li_a1 = ul_1.querySelectorAll('li > .btn_chk')
// const ul_li_img1 = ul_1.querySelectorAll('li > .btn_chk > img')
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
const brand_pop = document.querySelector('.best > .popup > .brand_pop')
const brand_pop_li = brand_pop.querySelectorAll('.list_wrap > .tab_sub1 > .contents_list > li > .con > li')
const brand_pop_a = brand_pop.querySelectorAll('.list_wrap > .tab_sub1 > .contents_list > li > .con > li > .btn_chk')
const brand_pop_all_a = brand_pop.querySelectorAll('.list_wrap > .tab_sub2 > .contents_all > li > .btn_chk')
const brand_tab_a = brand_pop.querySelectorAll('.wrap_top > .wrap > .tab > a')
const cate_pop = document.querySelector('.best > .popup > .cate_pop')
const cate_pop_li = cate_pop.querySelectorAll('.list_wrap > ul > li')
const cate_pop_a = cate_pop.querySelectorAll('.list_wrap > ul > li > a')
// const cate_more_btn = ul_1.querySelector('.more_btn > a ')
const brand_more_btn = ul_2_ul.querySelector('.more_btn > a ')
const cate_pop_btn_reset = cate_pop.querySelector('.btn_wrap > .btn_reset ')
const cate_pop_btn_ok = cate_pop.querySelector('.btn_wrap > .btn_ok')
const brand_pop_btn_ok = brand_pop.querySelector('.btn_wrap > .btn_ok')
const cate_more_x_btn = cate_pop.querySelector('.wrap_top > a')
const brand_more_x_btn = brand_pop.querySelector('.wrap_top > .wrap > a ')
const btn_cancel = cart_pop.querySelector('.btn_cancel')
const btn_cart_r = cart_pop.querySelector('.btn_cart_r')
// rigth 영역 변수
const product_cart_btn = document.querySelector('.btn_c')
const product = document.querySelectorAll('.product')
const pc_array_a = document.querySelectorAll('.right > .lnb > .array > a')
const pc_array_q = document.querySelector('.right > .lnb > .array > a > [class$=question]')
const quest_box = document.querySelector('.right > .lnb > .array > .quest_box')
const arrow_num = document.querySelectorAll('.right > .arrow_num > a')
const pop_minus = cart_pop.querySelector('.price_num .num .minus')
const pop_num = cart_pop.querySelector('.price_num .num .p_tab_num')
const pop_plus = cart_pop.querySelector('.price_num .num .plus')
const p_tab_price = document.querySelector('.cart_pop .total .total_result .p_tab_price')
console.log(pop_minus,pop_plus,pop_num,p_tab_price)
console.log('----------------- 데스크탑 버전 -----------------')
/* ---------------------- 구분선 -------------------------- */
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
// a 클릭 시 초기값 제거 -> 클릭 대상만 보라색으로 글씨 활성화
cate_top_a.forEach((o,i)=>{
    o.addEventListener('click',()=>{
        top_a_hide()
        cate_top_a[i].classList.add('top_active')
    })
})
/* ---------------------- 구분선 -------------------------- */
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
/* ---------------------- 구분선 -------------------------- */
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
/* ---------------------- 구분선 -------------------------- */
// 브랜드 atoz_btn 클릭시 서브탭 활성화 ------------------   
// 호출용 함수
/* let box_basic_hide = ()=>{brand_tab_box_ul[0].style.display = 'none';}
let box_hide = ()=>{for(let a of brand_tab_box_ul){a.style.display = 'none';}}
// 초기값 1번 ul 활성화
brand_tab_box_ul[0].style.display = 'block';
let box_ul_status = false;
// atoz_btn_a 클릭시 초기값 숨기고 -> 해당 탭 보이기 -> 클릭시 이전 탭 숨기기
brand_tab_box_ul.forEach(function(idx,arr){
    atoz_btn_a[arr].addEventListener('click',function(){
        box_hide() //모슨 박스 숨기는 함수
        if(box_ul_status == false){
            idx.style.display = 'block';
            box_basic_hide() //초기박스 숨기는 함수 
            box_ul_status = !box_ul_status;
        }else{
            box_hide() //모슨 박스 숨기는 함수
            idx.style.display = 'block';
            box_ul_status = !box_ul_status;
        }
    })
})
atoz_btn_a[0].addEventListener('click',()=>{
    brand_tab_box_ul[0].style.display = 'block';
}) */
// 상품 많은순 클릭 시 atoz_btn_a 리스트 숨기기 -> 가나다순 클릭 시 리스트 보이기
brand_a[1].addEventListener('click',()=>{
    ul_2_atoz.style.display = 'none';
    box_hide()
    brand_tab_box_ul[0].style.display = 'block';
})
brand_a[0].addEventListener('click',()=>{
    ul_2_atoz.style.display = 'block';
})
/* ---------------------- 구분선 -------------------------- */         
// 브랜드 팝업 atoz_btn 클릭시 서브탭 해당 글씨의 위치 보여주기
const brand_pop_list = brand_pop.querySelectorAll('.wrap_top > .list_wrap > .tab_sub1 > .contents_list') //ul //NodeList[]
const brand_subtab_a = brand_pop.querySelectorAll('.wrap_top > .tab_sub > a') //a
let b_pop_ul = brand_pop.children[1].children[0].children //ul잡기
let ul_parent = brand_pop.children[1] //ul 부모 설정
brand_subtab_a.forEach((o,i)=>{
    o.addEventListener('click',(e)=>{
        e.preventDefault()
        ul_parent.scrollTo(0, b_pop_ul[i].offsetTop - 115)
    })
})
/* ---------------------- 구분선 -------------------------- */
// 카테고리 ^ [chevron-up] 아이콘 클릭 시 탭 활성화 -> 비활성화 / 아이콘 상하 반전
/* let aside_arrow1_status = false;
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
}) */
/* ---------------------- 구분선 -------------------------- */
// 카테고리 어사이드 메뉴 클릭시 체크이미지 변경
// 회색 체크 이미지 클릭 시 -> 보라색 체크 이미지로 이미지경로 변경     
// 방법1) 현재 이미지 경로 확인해서 변경하기
/* for (let i of ul_li_a1) {
    i.addEventListener('click', () => {
        // 현재 이미지 경로가 './images/sub/icon_check_on.svg'인지 확인
        if (i.children[0].src.includes('icon_check_on')) {
            i.children[0].src = './images/sub/icon_check_off.svg';
        } else {
            i.children[0].src = './images/sub/icon_check_on.svg';
        }
    });
} */
for (let i of ul_li_a2) {
    i.addEventListener('click', () => {
        // 현재 이미지 경로가 './images/sub/icon_check_on.svg'인지 확인
        if (i.children[0].src.includes('icon_check_on')) {
            i.children[0].src = './images/sub/icon_check_off.svg';
        } else {
            i.children[0].src = './images/sub/icon_check_on.svg';
        }
    });
}
// 방법2) dataset 속성 활용 [dataset 속성을 사용하여 'checked' 속성 값에 따라 이미지 경로를 변경]
for (let i of ul_li_a3) {
    i.addEventListener('click', () => {
        // 'checked' 속성 값을 토글
        i.dataset.checked = i.dataset.checked == 'true' ? 'false' : 'true';
        // 'checked' 속성 값에 따라 이미지 경로 변경
        if (i.dataset.checked == 'true') {
            i.children[0].src = './images/sub/icon_circle_on.svg';
        } else {
            i.children[0].src = './images/sub/icon_circle_off.svg';
        }
    });
}
for (let i of ul_li_a4) {
    i.addEventListener('click', () => {
        i.dataset.checked = i.dataset.checked == 'true' ? 'false' : 'true';
        if (i.dataset.checked == 'true') {
            i.children[0].src = './images/sub/icon_check_on.svg';
        } else {
            i.children[0].src = './images/sub/icon_check_off.svg';
        }
    });
}
for (let i of ul_li_a5) {
    i.addEventListener('click', () => {
        i.dataset.checked = i.dataset.checked == 'true' ? 'false' : 'true';
        if (i.dataset.checked == 'true') {
            i.children[0].src = './images/sub/icon_check_on.svg';
        } else {
            i.children[0].src = './images/sub/icon_check_off.svg';
        }
    });
}
/* ---------------------- 구분선 -------------------------- */
// 어사이드 메뉴의 - 카테고리 - 팝업창 체크 이미지 변경
for (let a of cate_pop_a) {
    a.addEventListener('click', () => {
        // 현재 이미지 경로가 './images/sub/icon_check_on.svg'인지 확인
        if (a.children[0].src.includes('icon_check_on')) {
            a.children[0].src = './images/sub/icon_check_off.svg';
        } else {
            a.children[0].src = './images/sub/icon_check_on.svg';
        }
    });
}
// 어사이드 메뉴의 - 브랜드 - 팝업창 체크 이미지 변경
for (let a of brand_pop_a) {
    a.addEventListener('click', () => {
        // 현재 이미지 경로가 './images/sub/icon_check_on.svg'인지 확인
        if (a.children[0].src.includes('icon_check_on')) {
            a.children[0].src = './images/sub/icon_check_off.svg';
        } else {
            a.children[0].src = './images/sub/icon_check_on.svg';
        }
    });
}
for (let a of brand_pop_all_a) {
    a.addEventListener('click', () => {
        // 현재 이미지 경로가 './images/sub/icon_check_on.svg'인지 확인
        if (a.children[0].src.includes('icon_check_on')) {
            a.children[0].src = './images/sub/icon_check_off.svg';
        } else {
            a.children[0].src = './images/sub/icon_check_on.svg';
        }
    });
}
/* ---------------------- 구분선 -------------------------- */
// 어사이드 카테고리 더보기 클릭 시 팝업창 활성화
// 초기값 -> 비활성화 -> 클릭 시 -> 활성화 -> 닫기버튼 클릭 -> 비활성화
// 카테고리 더보기 >
/* cate_more_btn.addEventListener('click',()=>{
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
}) */
// 브랜드 더보기 >
/* brand_more_btn.addEventListener('click',()=>{
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
}) */
/* ---------------------- 구분선 -------------------------- */
// 브랜드 더보기 팝업 - 상단 타이틀 글씨 컬러 (퍼플) 변경
// 초기값 -> 1번째 글씨 활성화
/* brand_tab_a[0].classList.add('top_active')
// 글씨 컬러 보라색 지우는 함수 호출용
const brand_tab_a_basic = ()=>{
    for(let i of brand_tab_a){i.classList.remove('top_active')}
}
const list_basic = brand_pop.children[1].children[0]
const list_all = brand_pop.children[1].children[1]
const list_total = document.querySelectorAll('.list_wrap .list')
const tab_sub = document.querySelector('.tab_sub')
// 클릭 -> 이전에 활성화된 a 비활성화 하고 클릭 대상 a가 활성화   
brand_tab_a.forEach((t,i)=>{
    t.addEventListener('click',()=>{
        brand_tab_a_basic()
        t.classList.add('top_active')
        for(let a of list_total){a.style.display = 'none';}
        list_total[i].style.display = 'block';
        // 2번째 자식 a인 경우 tab_sub 숨기기
        if (i === 1) {
            tab_sub.style.display = 'none';
        } else if(i === 0){
            tab_sub.style.display = 'block';
        } 
    })
}) */
// 가나다순 클릭 시 tab_sub2 숨기고 tab_sub1 컨테이너 출력
// 상품 많은순 클릭 시 tab_sub1 숨기고 tab_sub2 컨테이너 출력
// brand_tab_a[1].addEventListener('click',()=>{
//     let list_all = brand_pop.children[1].children[1]
//     let list_basic = brand_pop.children[1].children[0]
//     console.log(list_all,list_basic)
//     list_basic.style.display = 'none';
//     list_all.style.display = 'block';
// })
/* ---------------------- 구분선 -------------------------- */
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
/* ---------------------- 구분선 -------------------------- */
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
/* ---------------------- 구분선 -------------------------- */
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
/* ---------------------- 구분선 -------------------------- */
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
        btn_cart_r.addEventListener('click',()=>{
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
/* ---------------------- 구분선 -------------------------- */
// right 컨테이너 하단 버튼 클릭시 컬러 활성화 -> classList 추가하기
// 초기값 -> 1 활성화
let num_basic = ()=>{
    for(let a of arrow_num){
        a.classList.remove('arr_active')
    }
}
arrow_num[2].classList.add('arr_active')
for(let i of arrow_num){
    i.addEventListener('click',()=>{
        num_basic()
        i.classList.add('arr_active')
    })
}

/* ---------------------- 구분선 -------------------------- */  
// 카트 담기 팝업 안에 + - 수량 증가 감소, 가격변경
let p_num = 0;
let pop_total = 0;
let total
let price = 11800;
// 증가
pop_plus.addEventListener('click',()=>{
    if(p_num < 20){
        p_num++ ;
        pop_num.innerText = p_num
        pop_total =  p_num*price
        p_tab_price.innerHTML = `${pop_total.toLocaleString('ko-kr')}<em>원</em>`
    }else{
        alert('최대 구매 수량입니다.')
    }
})
// 감소
pop_minus.addEventListener('click',()=>{
    if(0< p_num){
        p_num--;
        pop_num.innerText = p_num
        pop_total =  p_num*price
        p_tab_price.innerHTML = `${pop_total.toLocaleString('ko-kr')}<em>원</em>`
    }else if(p_num == 0){
        p_tab_price.innerHTML = `0<em>원</em>`;
        pop_num.innerText = `0`;
        // pop_minus.children.setAttribute('fill-opacity', '0.4');
    }
})
console.log('----------------- 모바일 버전 -----------------')
// test
const m_li = document.querySelectorAll('.best_mobile > .tab_slide > li ') 
const btn_chk = document.querySelector('.best_mobile > .tab_slide > .bg .btn_chk ')
// 모바일 변수
const mobile_main = document.querySelector('.best_mobile')
const cate_title = document.querySelectorAll('.cate_title > a')
const filter_nav = document.querySelector('.filter_nav')
const filter_nav_q = document.querySelector('.filter_nav > li > [class$=question]')
const filter_quest_box = document.querySelector('.best_mobile > .quest_box')
const filter_quest_box_btn = document.querySelector('.q_popup > a')
const m_array_a = document.querySelectorAll('.best_mobile > .array > a')
const tab_slide = document.querySelector('.tab_slide')
const tab_slide_bg = document.querySelector('.tab_slide .bg')
const filter_nav_a = document.querySelectorAll('.filter_nav > li > a')
const filter_title = document.querySelectorAll('.filter >.right > a')
const filter_title_arr = document.querySelector('.filter >.right > a > [class$=down]')
let filter_title_span = document.querySelector('.filter >.right > a > span')
const slide_tab_list = document.querySelectorAll('.area > .list')
const slide_tab_list_t = document.querySelectorAll('.area > .list_title > p')
const slide_li_chk = document.querySelectorAll('.area > ul > li > .btn_chk')
const slide_li_cir = document.querySelectorAll('.area > ul > li > .btn_circle')
const slide_brand_title_a = document.querySelectorAll('.tab_slide > .area > .list > .brand > a')
const slide_brand_atoz_box = document.querySelector('.tab_slide > .area > .list > .atoz_btn')
const slide_brand_atoz = document.querySelectorAll('.tab_slide > .area > .list > .atoz_btn > a')
const slide_brand_list = document.querySelectorAll('.tab_slide > .area > .list > .list_box > .box1 > ul')
const slide_brand_list_all = document.querySelector('.tab_slide > .area > .list > .list_box > .box2 > ul')
const slide_btn_view = document.querySelector('.tab_slide > .area > .btn_wrap > .btn_view') 
const product_m = document.querySelectorAll('.best_mobile > .product_box > .product')
const slide_cart = document.querySelector('.tab_cart')
const slide_cart_bg = document.querySelector('.tab_cart > .bg_bk')
const slide_btn_cart_r = document.querySelector('.tab_cart > .bg_wh > .btn_cart > .btn_cart_r')
const slide_num = document.querySelector('.bg_wh .info .cart_box .price_num .num .p_tab_num')
const slide_minus = document.querySelector('.bg_wh .info .cart_box .price_num .num .minus')
const slide_plus = document.querySelector('.bg_wh .info .cart_box .price_num .num .plus')
const slide_total_btn = slide_btn_cart_r.querySelector('span')
console.log(slide_total_btn,slide_minus)
/* ---------------------- 구분선 -------------------------- */ 
// 모바일 슬라이드 탭 카트 담기 팝업 안에 + - 수량 증가 감소, 가격변경
let m_num = 0;
let slide_total = 0;
let m_price = 11800;
// 증가
slide_plus.addEventListener('click',()=>{
    if(m_num < 20){
        m_num++ ;
        slide_num.innerText = m_num
        slide_total =  m_num*m_price
        slide_total_btn.innerHTML = `<span>${slide_total.toLocaleString('ko-kr')}원 장바구니 담기</span>`
    }else{
        alert('최대 구매 수량입니다.')
    }
})
// 감소
slide_minus.addEventListener('click',()=>{
    if(1<= m_num){
        m_num--;
        slide_num.innerText = m_num
        slide_total =  m_num*m_price
        p_tab_price.innerHTML = `<span>${slide_total.toLocaleString('ko-kr')}원 장바구니 담기</span>`
    }else if(m_num === 0){
        slide_total_btn.innerHTML = `장바구니 담기`;
        slide_num.innerText = `0`;
    }
})
/* ---------------------- 구분선 -------------------------- */       
// 스크롤 내렸을 때 상단 카테고리 타이틀부분 아이콘 정렬 변경
//cate_title = a / cate_title_row
// const cate_title_test = document.querySelector('.cate_title_col');
/* let cate_title_parent = document.querySelector('.best_mobile > .sub_header > .cate_title')
let cate_title_area = document.querySelector('.best_mobile > .sub_header')
// let title_row_reset = ()=>{for(let b of cate_title_parent){b.classList.remove('cate_row_active')}}
cate_title[0].classList.add('cate_active') //초기값 -> 탑 0일때
// 스크롤 이벤트 감지
window.addEventListener('scroll',()=>{
    // 현재 스크롤 위치
    const scrollTop = window.pageYOffset;
    // 화면 기준 top에서 스크롤한번 내렸을 때
    if (scrollTop > 3){
        title_reset() //col용 a의 active 비활성화
        cate_title_parent.classList.add('cate_title_row');
        cate_title_parent.classList.remove('cate_title_col');
        top_offset30()
    }
    // 화면 기준 제일 top으로 다시 올라갔을 때
    else if (scrollTop === 0){
        title_row_reset()
        cate_title_parent.classList.remove('cate_title_row');
        cate_title_parent.classList.add('cate_title_col');
        cate_title[0].classList.add('cate_active') //초기값 -> 탑 0일때 col용 활성화
        top_zero() //col용 a클릭했을 때 변경되는 함수 호출
        cate_title[0].classList.remove('cate_row_active') //row용 활성화 제거
    }
}); */
/* ---------------------- 구분선 -------------------------- */
// 모바일 베스트 카테고리 상단에 이미지와 같이있는 타이틀리스트                 ★★★★★★★★★★★★ 나중에 확인할 위치
// 클릭 -> 보라색으로 활성화
let title_reset = ()=>{for(let a of cate_title){a.classList.remove('cate_active')}}
let top_zero = ()=>{
    for(let i of cate_title){
        i.addEventListener('click',()=>{
            title_row_reset()
            title_reset()
            i.preventDefault
            i.classList.add('cate_active')
        })
    }
}
top_zero() //다른곳에서도 호출해야 돼서 매개변수로 처리
let title_row_reset = ()=>{for(let v of cate_title){v.classList.remove('cate_row_active')}}
let top_offset30 = ()=>{
    for(let s of cate_title){
        cate_title[0].classList.add('cate_row_active')        
        s.addEventListener('click',()=>{
            if (s === cate_title[0]){
                cate_title[0].classList.remove('cate_row_active') 
            }else {
                title_reset()
                title_row_reset()
                s.preventDefault
                s.classList.add('cate_row_active')
            }
        })
    }
}
/* ---------------------- 구분선 -------------------------- */
// 초기값 -> 추천순 클릭시 sub메뉴 보이기 + arrow 반전 -> sub메뉴 클릭시 해당 a classList 활성화
let title_a_status = false;
filter_nav.style.display = 'none'
filter_title.forEach((t,i)=>{
    t.addEventListener('click',()=>{
        title_a_status = !title_a_status
        if(i === 0 && title_a_status == true){
            filter_nav.style.display = 'block'
            filter_title_arr.style.transform = 'rotate(180deg)'
        }else {
            filter_nav.style.display = 'none'
            filter_title_arr.style.transform = 'rotate(0deg)'
        }
    })
})
filter_nav_a[0].classList.add('name_active')
let filter_a_default = ()=>{
    for(let a of filter_nav_a){a.classList.remove('name_active')}
}
// 서브탭의 a 클릭시 해당 태그와 같은 글씨로 span의 태그 바꾸기
filter_nav_a.forEach((t,i)=>{
    t.addEventListener('click',()=>{
        filter_a_default()
        t.classList.add('name_active')
        if(i === 0){
            filter_title_span.innerText = `추천순`
        }else if(i === 1){
            filter_title_span.innerText = `신상품순`
        }else if(i === 2){
            filter_title_span.innerText = `판매량순`
        }else if(i === 3){
            filter_title_span.innerText = `혜택순`
        }else if(i === 4){
            filter_title_span.innerText = `낮은 가격순`
        }else if(i === 5){
            filter_title_span.innerText = `높은 가격순`
        }
    })
})
/* ---------------------- 구분선 -------------------------- */
// 추천순 옆 question이미지 클릭시 내용팝업 보이기  
// 기본값
// filter_quest_box.style.visibility = 'hidden'
filter_quest_box.style.display = 'none'
// filter_quest_box.classList.add('display_none')
filter_nav_q.addEventListener('click',()=>{
    filter_quest_box.style.display = 'flex';
    filter_nav.style.display = 'none'
    filter_title_arr.style.transform = 'rotate(0deg)'
    filter_quest_box_btn.addEventListener('click',()=>{
        filter_quest_box.style.display = 'none'
    })
})
/* ---------------------- 구분선 -------------------------- */
// 필터옆 아이콘 클릭 시 하단에 필터 슬라이드 보이기
// 초기값
let bg_hide = ()=>{
    tab_slide_bg.addEventListener('click',()=>{
        tab_slide.style.display = 'none';
    })
}
tab_slide.style.display = 'none';
filter_title[1].addEventListener('click',()=>{
    tab_slide.style.display = 'block';
    bg_hide()
    // 다른탭 누르고 재 클릭시 겹치지 않게 0번으로 보이게 기본값 0번으로 세팅
    list_hide()
    list_t_basic()
    slide_tab_list_t[0].classList.add('list_title_active')
    slide_tab_list[0].style.display = 'block';
})
/* ---------------------- 구분선 -------------------------- */
// 필터클릭시 - 슬라이드 팝업의 체크이미지 변경
// 클릭 -> 회색에서 보라색으로 이미지 변경
for (let i of slide_li_chk) {
    i.addEventListener('click', () => {
        // 현재 이미지 경로가 './images/sub/icon_check_on.svg'인지 확인
        if (i.children[0].src.includes('icon_check_on')) {
            i.children[0].src = './images/sub/icon_check_off.svg';
        } else {
            i.children[0].src = './images/sub/icon_check_on.svg';
        }
    });
}
for (let i of slide_li_cir) {
    i.addEventListener('click', () => {
        // 현재 이미지 경로가 './images/sub/icon_circle_on.svg'인지 확인
        if (i.children[0].src.includes('icon_circle_on')) {
            i.children[0].src = './images/sub/icon_circle_off.svg';
        } else {
            i.children[0].src = './images/sub/icon_circle_on.svg';
        }
    });
}
/* ---------------------- 구분선 -------------------------- */         
// 슬라이드의 카테고리 클릭시 하단 탭 변경 + 카테고리 글씨 보라색으로 활성화
let list_hide = ()=>{for(let a of slide_tab_list){a.style.display = 'none';}}
slide_tab_list_t[0].classList.add('list_title_active')
slide_tab_list[0].style.display = 'block';

let list_t_basic = ()=>{for(let j of slide_tab_list_t){j.classList.remove('list_title_active')}}
slide_tab_list_t.forEach((t,i)=>{
    t.addEventListener('click',()=>{
        list_t_basic() // title 보라색 제거 호출
        t.classList.add('list_title_active')
        list_hide()// 슬라이드 리스트 제거 호출
        slide_tab_list[i].style.display = 'block';
    })
})
/* ---------------------- 구분선 -------------------------- */
// 슬라이드의 카테고리 - 브랜드 - 제목 클릭시 글씨색변경 + 하단 탭 변경 + atoz버튼 활성화
// ** 1번 ** 브랜드 가나다순 상품많은순 클릭시 글씨컬러 변경
// 초기값 -> 가나다순 컬러 활성화
slide_brand_title_a[0].classList.add('name_active')
// 활성화 제거 함수 호출용
const brand_title_a_remove = ()=>{
    for(let a of slide_brand_title_a){a.classList.remove('name_active')}
}
// 초기값 활성화 제거 -> 클릭한 대상 컬러 활성화
slide_brand_title_a.forEach((t,i)=>{
    t.addEventListener('click',()=>{
        brand_title_a_remove()
        t.classList.add('name_active')
        // 추가)** 3번 ** 상품많은순 클릭했을때 리스트 변경 + atoz박스 숨기기
        if(i === 0){
            slide_brand_atoz_box.style.display = 'flex';
        }else if( i === 1){
            slide_brand_atoz_box.style.display = 'none';
            brand_list_hide() //가나다순 리스트 제거 호출
            slide_brand_list_all.style.display = 'block';
        }
    })
})
// ** 2번 ** atoz버튼 클릭 시 클래스리스트 활성화
// 초기값 -> ㄱ활성화
slide_brand_atoz[0].classList.add('atoz_active')
// atoz버튼 활성화 제거용 함수
const slide_atoz_remove = ()=>{
    for(let j of slide_brand_atoz){j.classList.remove('atoz_active')}
}
// 리스트 제거용 함수
const brand_list_hide = ()=>{
    for(let a of slide_brand_list){a.style.display = 'none'}
}
slide_brand_atoz.forEach((t,i)=>{ 
    t.addEventListener('click',()=>{
        slide_atoz_remove() //글씨 활성화 제거
        t.classList.add('atoz_active') //클릭대상 글씨 활성화
        brand_list_hide() //리스트 제거
        slide_brand_list[i].style.display = 'block'; //클릭대상 리스트 활성화
    })
})
/* ---------------------- 구분선 -------------------------- */   
// 슬라이드에서 상품보기 버튼 클릭 시 슬라이드 비활성화
slide_btn_view.addEventListener('click',()=>{
    tab_slide.style.display = 'none'
})
/* ---------------------- 구분선 -------------------------- */       
// array 리스트 클릭시 해당글씨 및 리스트가 활성화된 슬라이드 보이기
m_array_a.forEach((t,i)=>{
    t.addEventListener('click',()=>{
        bg_hide()
        tab_slide.style.display = 'block';
        if(i === 0){// 1.카테고리
            list_hide()
            list_t_basic()
            slide_tab_list_t[0].classList.add('list_title_active')
            slide_tab_list[0].style.display = 'block';
        }else if(i === 1){// 2.배송
            list_hide()
            list_t_basic()
            slide_tab_list_t[1].classList.add('list_title_active')
            slide_tab_list[1].style.display = 'block';
        }else if(i === 2){// 3.가격
            list_hide()
            list_t_basic()
            slide_tab_list_t[2].classList.add('list_title_active')
            slide_tab_list[2].style.display = 'block';
        }else if(i === 3){// 4.브랜드
            list_hide()
            list_t_basic()
            slide_tab_list_t[3].classList.add('list_title_active')
            slide_tab_list[3].style.display = 'block';
        }else if(i === 4){// 5.혜택
            list_hide()
            list_t_basic()
            slide_tab_list_t[4].classList.add('list_title_active')
            slide_tab_list[4].style.display = 'block';
        }else if(i === 5){// 6.유형
            list_hide()
            list_t_basic()
            slide_tab_list_t[5].classList.add('list_title_active')
            slide_tab_list[5].style.display = 'block';
        }
    })
})
/* ---------------------- 구분선 -------------------------- */    
// 담기버튼 클릭시 팝업 활성화 -> 기본 슬라이드에서 플랙스때문에 none처리가 안돼 classList로 처리
for(let j of product_m){
    for(let a of j.children[1].children){ //썸네일의 담기 버튼
        a.addEventListener('click',()=>{
            slide_cart.classList.remove('display_none');
            slide_cart_bg.addEventListener('click',()=>{
                slide_cart.classList.add('display_none');
            })
        })
        slide_btn_cart_r.addEventListener('click',()=>{ //슬라이드의 담기 버튼
            slide_cart.classList.add('display_none');
        })
    }
}

/* ---------------------- 구분선 -------------------------- */      
// 링크 설정되지 않은 a 태그 클릭시 상단으로 올라가는 것 막기
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (event) => {
        // 링크의 href 속성을 가져옴
        const href = link.getAttribute('href');
        
        // href가 #인 경우에만 preventDefault() 호출
        if (href === '#') {
            event.preventDefault();
        }
    });
});
/* ---------------------- 구분선 -------------------------- */  