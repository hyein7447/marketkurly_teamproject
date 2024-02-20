// --------------- 상단 상품선택 option 선택 시 선택한 옵션 나타나기
const purchase = document.querySelector('.purchase');
const option_btn = purchase.querySelector('.option_btn');
const option = purchase.querySelector('.option');
const select_opt = option.querySelectorAll('.select_opt');

const select_container = document.querySelector('.select_container');
const select_wrap = document.querySelector('.select_wrap');

option_btn.addEventListener('click',()=>{
    option.style.display = 'block'
})

/* for(let i of select_opt){
    i.addEventListener('click',(e)=>{
        e.preventDefault();
        option.style.display = 'none'
        console.log(i.firstElementChild.innerHTML)
        console.log(i.lastChild.innerHTML)
        let create_list = document.createElement('div')
        create_list.classList.add('select')
        create_list.innerHTML = `<div class="select">`
        create_list.innerHTML += `<p class="item_name">${i.firstElementChild.innerHTML}</p>`
        create_list.innerHTML += `<div class="num_price">`
        create_list.innerHTML += `<div class="num_result">`
        create_list.innerHTML += `<button type="button" class="minus"></button>`
        create_list.innerHTML += `<input type="text" class="num num_count" value="1" readonly>`
        create_list.innerHTML += `<button type="button" class="plus"></button>`
        create_list.innerHTML += `</div>`
        create_list.innerHTML += `<div class="price">${i.lastElementChild.innerHTML}</div>`
        create_list.innerHTML += `</div>`
        create_list.innerHTML += `<a href="#"><img src="./images/main/icon/icon_cancle.svg" alt=""></a>`
        create_list.innerHTML += `</div>`
        select_wrap.appendChild(create_list)
    })
} */

for (let i of select_opt) {
    i.addEventListener('click', (e) => {
        e.preventDefault();
        option.style.display = 'none';

        let create_list = document.createElement('div');
        create_list.classList.add('select'); // 클래스 추가

        let itemName = document.createElement('p');
        itemName.classList.add('item_name'); // 클래스 추가
        itemName.innerText = i.firstElementChild.innerHTML;
        create_list.appendChild(itemName);

        let numPrice = document.createElement('div');
        numPrice.classList.add('num_price'); // 클래스 추가

        let numResult = document.createElement('div');
        numResult.classList.add('num_result'); // 클래스 추가
        numResult.innerHTML = `<button type="button" class="minus"></button><input type="text" class="num num_count" value="1" readonly><button type="button" class="plus"></button>`;
        numPrice.appendChild(numResult);

        let price = document.createElement('div');
        price.classList.add('price'); // 클래스 추가
        price.innerText = i.lastElementChild.innerHTML;
        numPrice.appendChild(price);

        create_list.appendChild(numPrice);

        let cancelImg = document.createElement('a');
        cancelImg.setAttribute('href', '#');
        cancelImg.innerHTML = '<img src="./images/main/icon/icon_cancel.svg" alt="">';
        create_list.appendChild(cancelImg);

        select_wrap.appendChild(create_list);
    });
}

// -------- option 수량 증감
const num_price = document.querySelector('.num_price')
const plus = num_price.querySelector('.plus')
const minus = num_price.querySelector('.minus')
const num_count = num_price.querySelector('.num')
const item_price = num_price.querySelector('.price')

/* let num = 1;
let price = 2900;
let total = num * price;

price.innerText = total;
console.log(price)
item_price.innerHTML = price.toLocaleString('ko-kr')+'원';
num_count.value = num;

plus.addEventListener('click',()=>{
    num++
    num_count.value = num;
    price.innerHTML = total;
})
minus.addEventListener('click',()=>{
    if(num_count.value > 1){
        num--
        num_count.value = num;
    }
}) */

// 태그 생성 부분

plus.addEventListener('click', () => {
    num++;
    num_count.value = num;
    total = num * price;
    item_price.innerHTML = total.toLocaleString('ko-kr') + '원';
});

minus.addEventListener('click', () => {
    if (num > 1) {
        num--;
        num_count.value = num;
        total = num * price;
        item_price.innerHTML = total.toLocaleString('ko-kr') + '원';
    }
});

// 태그를 생성하는 동안 각 요소에 이벤트를 적용
create_list.querySelector('.plus').addEventListener('click', () => {
    num++;
    num_count.value = num;
    total = num * price;
    item_price.innerHTML = total.toLocaleString('ko-kr') + '원';
});

create_list.querySelector('.minus').addEventListener('click', () => {
    if (num > 1) {
        num--;
        num_count.value = num;
        total = num * price;
        item_price.innerHTML = total.toLocaleString('ko-kr') + '원';
    }
});


// -------------- wish btn 클릭 시 활성화
const wish = document.querySelectorAll('.wish')

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
const product_page_nav_a = document.querySelectorAll('.product_page_nav > li > a')
const section = document.querySelectorAll('.product_container > section')

product_page_nav_a.forEach((t,i) => {
    t.addEventListener('click',(e)=>{
        e.preventDefault()
        window.scrollTo(0, section[i+1].offsetTop)
    })
})

// ------- nav 상단 고정 fixed
const nav = document.querySelector('.product_page_nav');
const navOffsetTop = nav.offsetTop;

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop >= navOffsetTop) {
        nav.style.position = 'fixed';
        nav.style.top = '0';
    } else {
        nav.style.position = 'static';
    }
});

// ---------- 상품고시정보 선택한 옵션 클릭 시 활성화
const detail_opt = document.querySelectorAll('.detail_contents1 > ul > li > a')

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
const exchange_refund = document.querySelector('.exchange_refund')
const order_cancel = document.querySelector('.order_cancel')
const exchange_refund_con = document.querySelector('.exchange_refund > ul')
const order_cancel_con = document.querySelector('.order_cancel > ul')
const exchange_refund_close = document.querySelector('.exchange_refund > .title > .close > .close_btn')
const order_cancel_close = document.querySelector('.order_cancel > .title > .close > .close_btn')
const exchange_refund_close_icon = document.querySelector('.exchange_refund > .title > .close > .close_btn > img')
const order_cancel_close_icon = document.querySelector('.order_cancel > .title > .close > .close_btn > img')

let exchange_refund_con_status = false;
let order_cancel_con_status = false;

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
order_cancel_close.addEventListener('click', function(){
    if(order_cancel_con_status == false){
        order_cancel_con.style.display = 'none';
        order_cancel_con_status = !order_cancel_con_status
        order_cancel_close_icon.style.transform = 'rotate(0deg)'
    }else{
        order_cancel_con.style.display = 'block';
        order_cancel_con_status = !order_cancel_con_status
        order_cancel_close_icon.style.transform = 'rotate(180deg)'
    }
})

// ---------- review 더보기 클릭 시 review_photo_more 박스 나타남
const review_photo_more = document.querySelector('.review_photo_more')
const review_photo_more_btn = document.querySelector('.review_photo_list > a > span')
const photo_more_close = document.querySelector('#photo_more_btn')

review_photo_more_btn.addEventListener('click', (e) => {
    e.preventDefault()
    review_photo_more.style.display = 'block'
});
photo_more_close.addEventListener('click',()=>{
    review_photo_more.style.display = 'none'
})

// -------- 리뷰 옵션
const filter_btn = document.querySelectorAll('.filter_btn')
const opt_filter_box = document.querySelector('.opt_filter_box')
const rating_filter_box = document.querySelector('.rating_filter_box')

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

// ---------- 리뷰공지 클릭 시 내용 보이기
const review_notice_btn = document.querySelectorAll('.review_notice_btn');
const review_notice_contents = document.querySelectorAll('.review_notice_contents');

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
