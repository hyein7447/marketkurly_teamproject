const my_kurly_menu = document.querySelectorAll('.my_kurly_menu li')
const my_kurly_menu_c = document.querySelectorAll('.my_kurly_menu li > a')
const menu_c = document.querySelectorAll('.menu_c > div')
const date_top = document.querySelector('.order_list .date_top')
const date_open = document.querySelector('.order_list .date_open')
const date_arrow = document.querySelector('.order_list .date_arrow')
const order_list_date_open = document.querySelectorAll('.order_list .date_open > a')
const order_list_content_bg = document.querySelectorAll('.order_list .content_bg')
let date_top_a = document.querySelector('.date_top > a')
console.log(my_kurly_menu,my_kurly_menu_c)


// 마이컬리 탭 클릭시 내용 출력

// 위시리스트 클릭 시 초기 값 설정
for(let m of menu_c){m.style.display='none'}
menu_c[3].style.display = 'block'
my_kurly_menu_c[3].classList.add('menu_tab')

// 메뉴탭 클릭시 내용출력, active 적용
my_kurly_menu.forEach((t,i)=>{
    t.addEventListener('click',(e)=>{
        for(let m of menu_c){m.style.display='none'}
        menu_c[i].style.display = 'block'
        
        // 메뉴탭 클릭시 active
        for(let j of my_kurly_menu_c){j.classList.remove('menu_tab')}
        my_kurly_menu_c[i].classList.add('menu_tab')

        event.preventDefault();
    })
})

//주문내역 기간 선택시 내용 출력

// 기간 선택 초기 설정 
date_open.style.display ='none'
date_arrow.style.transform = 'scaleY(1)'

//기간 선택시 open 팝업 출력, 화살표 이미지 반전
date_top.addEventListener('click',(e)=>{
    date_open.classList.toggle('open_toggle')
    date_arrow.classList.toggle('open_toggle2')
    event.preventDefault();
    
})

// 처음 3개월기간 내용 적용
for(let c of order_list_content_bg){c.style.display='none'}
order_list_content_bg[0].style.display='block'

// 처음 3개월 color_active 적용
order_list_date_open[0].classList.add('color_active')

order_list_date_open.forEach((t,i)=>{
    t.addEventListener('click',(e)=>{
        // 기간 선택 시 내용출력
        for(let c of order_list_content_bg){c.style.display='none'}
        order_list_content_bg[i].style.display='block'
        // 기간 선택시 open 팝업 사라짐
        for(let p of order_list_date_open){p.classList.remove('color_active')}
        order_list_date_open[i].classList.add('color_active')
        // 기간선택시 해당 기간 txt 상단에 출력
        date_open.classList.toggle('open_toggle')
        date_top_a.innerHTML = order_list_date_open[i].innerHTML
        // a태그 클릭시 window화면 새로고침 비활성화
        event.preventDefault();
    })
})
order_list_date_open[0].addEventListener('click',()=>{
    date_open.style.display = 'none'
})

// 선물내역 기간 선택시 내용 출력

const p_date_top = document.querySelector('.present_list .date_top')
const p_date_arrow = document.querySelector('.present_list .date_arrow')
const p_date_open = document.querySelector('.present_list .date_open')
const p_date_title = document.querySelectorAll('.present_list .date_open a')
const p_content_bg = document.querySelectorAll('.present_list .content_bg')
let date_top_txt = document.querySelector('.present_list .date_top > a')

// 기간 선택 초기 설정 
p_date_open.style.display ='none'
p_date_arrow.style.transform = 'scaleY(1)'

//기간 선택시 open 팝업 출력, 화살표 이미지 반전
p_date_top.addEventListener('click',(e)=>{
    p_date_open.classList.toggle('open_toggle')
    p_date_arrow.classList.toggle('open_toggle2')
    event.preventDefault();
})

// 처음 3개월기간 내용 적용
for(let c of p_content_bg){c.style.display='none'}
p_content_bg[0].style.display='block'

// 처음 3개월 color_active 적용
p_date_title[0].classList.add('color_active')

p_date_title.forEach((t,i)=>{
    t.addEventListener('click',(e)=>{
        // 기간 선택 시 내용출력
        for(let c of p_content_bg){c.style.display='none'}
        p_content_bg[i].style.display='block'
        // 기간 선택시 color active 적용
        for(let p of p_date_title){p.classList.remove('color_active')}
        p_date_title[i].classList.add('color_active')
        // 기간선택시 open 팝업 사라짐
        p_date_open.classList.toggle('open_toggle')
        // 기간선택시 해당 기간 title에 적용
        date_top_txt.innerHTML = p_date_title[i].innerHTML
        // a태그 클릭시 window화면 새로고침 비활성화
        event.preventDefault();
    })
})
p_date_title[0].addEventListener('click',()=>{
    p_date_open.style.display = 'none'
})

// 찜한상품 삭제 버튼 클릭시 팝업 출력

const delete_btn = document.querySelector('.wish_list .delete_btn')
const reset_btn = document.querySelector('#reset_btn')
const del_popup_bg = document.querySelector('.del_popup_bg')
console.log(delete_btn,del_popup_bg)

del_popup_bg.style.display = 'none'

delete_btn.addEventListener('click',()=>{
    del_popup_bg.style.display = 'flex'
})

//취소 버튼 클릭시 팝업 숨김
reset_btn.addEventListener('click',()=>{
    del_popup_bg.style.display = 'none'
})

//상품 후기 작성가능/작성한 메뉴 탭 클릭시 내용 출력

const reivew_tab = document.querySelectorAll('.reivew_tab a')
const reivew_c = document.querySelectorAll('.reivew_c div')
console.log(reivew_tab,reivew_c)

for(let c of reivew_c){c.style.display='none'}
reivew_c[0].style.display='block'

for(let r of reivew_tab){r.classList.remove('review_menu_tab')}
reivew_tab[0].classList.add('review_menu_tab')

reivew_tab.forEach((t,i)=>{
    t.addEventListener('click',(e)=>{
        for(let c of reivew_c){c.style.display='none'}
        reivew_c[i].style.display = 'block'

        for(let a of reivew_tab){a.classList.remove('review_menu_tab')}
        reivew_tab[i].classList.add('review_menu_tab')

        event.preventDefault();
    })
})

// 쿠폰 쿠폰등록 입력시 에러메세지 팝업 출력

const coupon_input = document.querySelector('#coupon_num')
const coupon_btn = document.querySelector('#coupon_btn')
const error_pop = document.querySelector('.coupon_error_bg')
const error_message = document.querySelector('.coupon_error_bg .error_message')
const chk_btn = document.querySelector('.error_btn')
const ko = /^[가-힣]+$/


error_pop.style.display = 'none'

coupon_btn.addEventListener('click',()=>{
    if(coupon_input.value == ''){
        error_pop.style.display = 'flex'
        error_message.innerHTML = '쿠폰키를 입력하세요.'
    }else if(coupon_input.value == ko){
        error_pop.style.display = 'flex'
        error_message.innerHTML = '유효하지않은 쿠폰번호입니다.'
        coupon_input.value = ''
    }
})
chk_btn.addEventListener('click',()=>{
    error_pop.style.display = 'none'
})

// 나의 컬리 스타일 

const birth_input = document.querySelector('#birth_day')
const birth_error = document.querySelector('.birth_error')
const gender_male = document.querySelector('#gender_male')
const user_gender = document.querySelectorAll('.user_gender a')
const proflie = document.querySelector('.proflie .title')
const proflie_c = document.querySelector('.proflie .content_bg')
const content_box = document.querySelectorAll('.content_box .content')
const prev_btn = document.querySelector ('.proflie .prev_btn')
const next_btn = document.querySelector ('.proflie .next_btn')
const choice_item = document.querySelectorAll('#content_box .item')
console.log(user_gender,proflie,proflie_c,content_box,choice_item)
let num = /^\d+$/

birth_input.addEventListener('input',()=>{
    if(!/^\d+$/.test(birth_input.value)){
        birth_input.value=''
    }
    if(birth_input.value <= 1923 || birth_input.value >= 2011){
        birth_error.innerHTML = '태어난 년도를 정확하게 입력해주세요.'
    }
})
// 성별 선택시 active 활성화
user_gender.forEach((t,i)=>{
    t.addEventListener('click',(e)=>{
        for(let i of user_gender){i.classList.remove('gender_active')}
        user_gender[i].classList.add('gender_active')
        event.preventDefault();
    })
})
// 피부타입 선택시 active 활성화


// // proflie_c.style.display = 'none'
// for(let c of content_box){c.style.display='none'}
// content_box[0].style.display = 'block'

/* proflie.addEventListener('click',(e)=>{
    proflie_c.classList.toggle('open_toggle')
    event.preventDefault();
}) */