// --------------- 상단 상품선택 option 선택 시 선택한 옵션 나타나기
const purchase = document.querySelector('.purchase');
const option_btn = purchase.querySelector('.option_btn');
const option = purchase.querySelector('.option');
const select_opt = option.querySelectorAll('.select_opt');

const select_container = document.querySelector('.select_container');
const select = select_container.querySelector('.select');
const select_item = select_container.querySelector('.select_item');
const item_name = select.querySelector('.item_name');

option_btn.addEventListener('click',()=>{
    option.style.display = 'block'
})

select_opt.forEach((t, i) => {
    t.addEventListener('click', (e) => {
        e.preventDefault();
        select.style.display = 'block';
        option.style.display = 'none';
        item_name.textContent = t.textContent.trim();

        // 다중선택 복합대입
        // select_container.innerHTML += ;
    });
});

// -------------- wish btn 클릭 시 활성화
const wish = document.querySelectorAll('.wish')

function on_off(name, status){
    return `./images/main/icon/icon_${name}_${status}.svg`
}

wish[1].addEventListener('click',function(){
    // 현재 이미지 경로 가져오기
    const current_src = this.children[0].src;
    // 'off' 이미지 경로 생성
    const off_src = on_off('wish', 'off');

    const off = current_src.includes('icon_wish_off.svg');

    // 'off' 상태라면 'on' 이미지로 변경, 아니라면 'off' 이미지로 변경
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

// -------- option 수량 증감
const num_price = document.querySelector('.num_price')
const plus = num_price.querySelector('.plus')
const minus = num_price.querySelector('.minus')
const num_count = num_price.querySelector('.num')

plus.addEventListener('click',()=>{
    num_count.value++
})
minus.addEventListener('click',()=>{
    if(num_count.value > 1){
        num_count.value--
    }
})

// ---------- 상세설명 
const exchange_refund = document.querySelector('.exchange_refund')
const exchange_refund_close = document.querySelector('.exchange_refund > .title > .close > .close_btn')
const exchange_refund_con = document.querySelector('.exchange_refund > ul')
const order_cancel = document.querySelector('.order_cancel')
const order_cancel_close = document.querySelector('.order_cancel > .title > .close > .close_btn')
const order_cancel_con = document.querySelector('.order_cancel > ul')
console.log(exchange_refund_close)
console.log(order_cancel_close)

console.log(exchange_refund_con.style.display == false)
let exchange_refund_con_status = false;

order_cancel_close.addEventListener('click', function(){
    if(exchange_refund_con_status == false){
        price_info_open.style.display = 'none';
        console.log(exchange_refund_con_status)
        exchange_refund_con_status = !exchange_refund_con_status
    }else{
        exchange_refund_con_status.style.display = 'block';
        console.log(exchange_refund_con_status)
        exchange_refund_con_status = !price_info_open_status
    }
})

/* exchange_refund_close.addEventListener('click',()=>{
    exchange_refund_con.style.display = 'none'
})
order_cancel_close.addEventListener('click',()=>{
    order_cancel_con.style.display = 'none'
})
 */