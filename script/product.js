const purchase = document.querySelector('.purchase'); // 상품선택 영역 부모
const select_container = document.querySelector('.select_container'); // 선택한 아이템, 옵션 담는 부모
const option_btn = purchase.querySelector('.option_btn'); // 옵션 선택 버튼
const option = purchase.querySelector('.option'); // 옵션 선택 영역
const select_opt = option.querySelectorAll('.select_opt'); // 옵션
const select_wrap = document.querySelector('.select_wrap'); // 선택한 아이템 담는 부모
const wish = document.querySelectorAll('.wish') // 위시 버튼
const product_page_nav_a = document.querySelectorAll('.product_page_nav > li > a') // nav
const section = document.querySelectorAll('.product_container > section') // 클릭 시 이동하는 영역
const nav = document.querySelector('.product_page_nav'); // nav 부모
const navOffsetTop = nav.offsetTop; // 기존 nav 위치
const detail_opt = document.querySelectorAll('.detail_contents1 > ul > li > a') // 상품고시정보 옵션
const exchange_refund = document.querySelector('.exchange_refund') //교환환불 안내
const order_cancle = document.querySelector('.order_cancle') // 주문취소 안내
const exchange_refund_con = document.querySelector('.exchange_refund > ul') // 교환환불 안내 내용
const order_cancle_con = document.querySelector('.order_cancle > ul') // 주문취소 안내 내용
const exchange_refund_close = document.querySelector('.exchange_refund > .title > .close > .close_btn') //교환환불 안내 아이콘
const order_cancle_close = document.querySelector('.order_cancle > .title > .close > .close_btn') // 주문취소 안내 아이콘
const exchange_refund_close_icon = document.querySelector('.exchange_refund > .title > .close > .close_btn > img') // 교환환불 안내 아이콘 이미지
const order_cancle_close_icon = document.querySelector('.order_cancle > .title > .close > .close_btn > img') // 주문취소 안내 아이콘 이미지
const review_photo_more = document.querySelector('.review_photo_more')  // 리뷰 사진 더보기
const review_photo_more_btn = document.querySelector('.review_photo_list > a > span') // 리뷰 사진 더보기 버튼
const photo_more_close = document.querySelector('#photo_more_btn') // 리뷰 사진 더보기 닫기 버튼
const filter_btn = document.querySelectorAll('.filter_btn') // 리뷰 필터 버튼
const opt_filter_box = document.querySelector('.opt_filter_box') // 옵션 필터
const rating_filter_box = document.querySelector('.rating_filter_box') // 등급 필터
const review_notice_btn = document.querySelectorAll('.review_notice_btn'); // 리뷰 - 공지 버튼
const review_notice_contents = document.querySelectorAll('.review_notice_contents'); // 리뷰 - 공지 내용
const total = document.querySelector('.total') // 총액
const helpful_btn = document.querySelectorAll('.helpful_btn') // 도움돼요 버튼


// --------------- 상단 상품선택 option 선택 시 선택한 옵션 나타나기

option_btn.addEventListener('click',()=>{
    option.style.display = 'block'
})

let selectedItems = new Set();
let previousSelectedState = null;
let itemsSatus;

for (let i of select_opt) {
    i.addEventListener('click', (e) => {
        e.preventDefault();

        option.style.display = 'none';

        let itemName = i.firstElementChild.innerHTML;

        selectedItems.add(itemName);

        console.log(itemName);
        console.log(i.lastChild.innerHTML);

        console.log(i.firstElementChild.innerHTML);
        console.log(i.lastChild.innerHTML);

        let create_select = document.createElement('div');
        create_select.classList.add('select');
        create_select.classList.add('add_select');
        create_select.innerHTML = `<p class="item_name">${i.firstElementChild.innerHTML}</p>`;

        let create_num_price = document.createElement('div');
        create_num_price.classList.add('num_price');
        create_num_price.innerHTML = `<div class="num_result">
                                        <button type="button" class="minus"></button>
                                        <input type="text" class="num num_count" value="1" readonly>
                                        <button type="button" class="plus"></button>
                                    </div>
                                    <div class="price">${i.lastElementChild.innerHTML}</div>`;

        create_select.appendChild(create_num_price);

        let cancle_button = document.createElement('a');
        cancle_button.href = "#";
        cancle_button.innerHTML = `<img src="./images/main/icon/icon_cancle.svg" alt="">`;

        create_select.appendChild(cancle_button);
        select_wrap.appendChild(create_select);

        // minus, plus 버튼 클릭 시 수량 증가 및 감소
        let minusButton = create_num_price.querySelector('.minus');
        let plusButton = create_num_price.querySelector('.plus');
        let numInput = create_num_price.querySelector('.num_count');
    
        minusButton.addEventListener('click', () => {
            let currentValue = parseInt(numInput.value);
            if (currentValue > 1) {
                numInput.value = currentValue - 1;
            }
        });
        plusButton.addEventListener('click', () => {
            let currentValue = parseInt(numInput.value);
            numInput.value = currentValue + 1;
        });

        itemsSatus = 1;

        // 중복 선택 방지 
        /* if (selectedItems.has(itemName)) {
            alert('이미 추가된 옵션입니다.');
            return;
        } */
        // 취소버튼 만들기
        cancle_button.addEventListener('click',function(e){
            e.preventDefault();
            this.parentElement.classList.remove('add_select');
            this.parentElement.remove('add_select');
        })
    });
}

// -------------- wish btn 클릭 시 활성화

function on_off(name, status){
    return `./images/main/icon/icon_${name}_${status}.svg`
}

wish[1].addEventListener('click',function(){
    const current_src = this.children[0].src;
    const off_src = on_off('wish', 'off');

    const off = current_src.includes('icon_wish_off.svg');

    this.children[0].src = off ? on_off('wish', 'on2') : off_src;
})

// -------- nav 클릭 시 해당 영역으로 이동

product_page_nav_a.forEach((t,i) => {
    t.addEventListener('click',(e)=>{
        e.preventDefault()
        window.scrollTo(0, section[i+1].offsetTop)
    })
})

// ------- nav 상단 고정 fixed

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    // 스크롤 위치가 navi의 원래 위치를 넘어서면 navi를 fixed로 설정
    if (scrollTop >= navOffsetTop + 30) {
        nav.style.position = 'fixed';
        nav.style.top = '0';
    } else {
        // 아니면 처음 위치에 고정
        nav.style.position = 'static';
    }
});

// ---------- 상품고시정보 선택한 옵션 클릭 시 활성화

const detail_opt_default = ()=>{
    for(let t of detail_opt){
        t.classList.remove('detail_opt_active')
    }
}

detail_opt.forEach((t, i) => {
    t.addEventListener('click', (e) => {
        detail_opt_default()
        t.classList.add('detail_opt_active')
        e.preventDefault()
    });
});

// ---------- 상세설명 

let exchange_refund_con_status = false;
let order_cancle_con_status = false;

exchange_refund_close.addEventListener('click', function(){
    if(exchange_refund_con_status == false){
        exchange_refund_con.style.display = 'none';
        exchange_refund_con_status = !exchange_refund_con_status
        exchange_refund_close_icon.style.transform = 'rotate(0deg)'
    }else{
        exchange_refund_con.style.display = 'block';
        exchange_refund_con_status = !exchange_refund_con_status
        exchange_refund_close_icon.style.transform = 'rotate(180deg)'
    }
})
order_cancle_close.addEventListener('click', function(){
    if(order_cancle_con_status == false){
        order_cancle_con.style.display = 'none';
        order_cancle_con_status = !order_cancle_con_status
        order_cancle_close_icon.style.transform = 'rotate(0deg)'
    }else{
        order_cancle_con.style.display = 'block';
        order_cancle_con_status = !order_cancle_con_status
        order_cancle_close_icon.style.transform = 'rotate(180deg)'
    }
})

// ---------- review 더보기 클릭 시 review_photo_more 박스 나타남

review_photo_more_btn.addEventListener('click', (e) => {
    e.preventDefault()
    review_photo_more.style.display = 'block'
});
photo_more_close.addEventListener('click',()=>{
    review_photo_more.style.display = 'none'
})

// -------- 리뷰 옵션

let filter_btn_status = false;
let rating_filter_box_status = false;

filter_btn[0].addEventListener('click', function(){
    if(filter_btn_status == false){
        opt_filter_box.style.display = 'block';
        filter_btn_status = !filter_btn_status
    }else{
        opt_filter_box.style.display = 'none';
        filter_btn_status = !filter_btn_status
    }
})
filter_btn[1].addEventListener('click', function(){
    if(rating_filter_box_status == false){
        rating_filter_box.style.display = 'block';
        rating_filter_box_status = !rating_filter_box_status
    }else{
        rating_filter_box.style.display = 'none';
        rating_filter_box_status = !rating_filter_box_status
    }
})

// ---------- 리뷰 옵션 선택 시 체크박스 이미지 변경

// ---------- 리뷰 도움돼요 버튼 클릭 시 이벤트
for (let t of helpful_btn) {
    let imgTag = t.querySelector('img'); // 이미지 태그 가져오기
    let isClicked = false; // 클릭된 상태를 저장하는 변수

    t.addEventListener('mouseover', () => {
        if (!isClicked) { // 클릭되지 않은 경우에만 처리
            t.style.color = '#5f0080';
            t.innerHTML = '<img src="./images/main/icon/icon_helpfull_on.svg" alt="">도움돼요 5'; // 마우스 오버 상태로 변경
        }
    });

    t.addEventListener('mouseout', () => {
        if (!isClicked) { // 클릭되지 않은 경우에만 처리
            t.style.color = '';
            t.innerHTML = '<img src="./images/main/icon/icon_helpfull_off.svg" alt="">도움돼요 5'; // 마우스 아웃 및 클릭 비활성화 상태로 변경
        }
    });

    t.addEventListener('click', () => {
        isClicked = !isClicked; // 클릭된 상태를 토글합니다.
        if (isClicked) { // 클릭된 경우
            t.style.color = '#5f0080';
            t.innerHTML = '<img src="./images/main/icon/icon_helpfull_on.svg" alt="">도움돼요 6'; // 클릭 활성화 상태로 변경
        } else { // 클릭 해제된 경우
            t.style.color = '';
            t.innerHTML = '<img src="./images/main/icon/icon_helpfull_off.svg" alt="">도움돼요 5'; // 마우스 아웃 및 클릭 비활성화 상태로 변경
        }
    });
}



// ---------- 리뷰공지 클릭 시 내용 보이기

// 각 버튼에 대한 동작 함수 정의
function view_notice(i) {
    if (review_notice_contents[i].style.display === 'none') {
        review_notice_contents[i].style.display = 'block';
    } else {
        review_notice_contents[i].style.display = 'none';
    }
}

// 각 버튼에 이벤트 리스너 추가
review_notice_btn.forEach((t, i) => {
    t.addEventListener('click', function(){
        view_notice(i);
    });
});

//  ------- 링크 설정되지 않은 a 태그 클릭시 상단으로 올라가는 것 막기
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
