const order_btn = document.querySelector('.product_ordered > h2 > a')
const order_btn_icon = document.querySelector('.product_ordered > h2 > a > img')
const order_item = document.querySelector('.order_item')
const order_list = document.querySelector('.order_list')
const payment_method_detail = document.querySelectorAll('.payment_method_detail > a')
const kakaopay_btn = document.querySelector('#kakaopay_btn')
const kurly_pay_btn = document.querySelector('#kurly_pay_btn')
const credit_card = document.querySelector('.credit_card')
const simple_payment = document.querySelector('.simple_payment')
const purplebox = document.querySelector('.purplebox')
const packaging_btn = document.querySelectorAll('.packaging > input')
const more_btn = document.querySelector('#more_btn')
const more_btn_icon = document.querySelector('#more_btn > img')
const kakaopay_info = document.querySelector('.kakaopay_info')
const payco_info = document.querySelector('.payco_info')
const select_card = document.querySelector('#select_card')
const select_card_span = document.querySelector('#select_card > span')
const select_card_list = document.querySelector('.select_card_list')
const select_card_list_opt = document.querySelectorAll('.select_card_list > a')
const installment = document.querySelector('#installment')
const installment_span = document.querySelector('#installment > span')
const select_installment_list = document.querySelector('.select_installment_list')
const select_installment_list_opt = document.querySelectorAll('.select_installment_list > a')

// ---------- 주문 목록 펼치기 접기
order_item.style.display = 'block'
order_list.style.display = 'none'

order_btn.addEventListener('click', function() {
    if (order_item.style.display !== 'none') {
        order_item.style.display = 'none';
        order_list.style.display = 'block';
        order_btn_icon.style.transform = 'rotate(180deg)'
    } else {
        order_item.style.display = 'block';
        order_list.style.display = 'none';
        order_btn_icon.style.transform = 'rotate(0deg)'
    }
});

// ----------- 포장방법 퍼플박스 선택 시 안내 이미지
packaging_btn[0].addEventListener('click',()=>{
    purplebox.style.display = 'block';
})
packaging_btn[1].addEventListener('click',()=>{
    purplebox.style.display = 'none';
})

// ----------- 결제수단 선택 시 활성화 method_active
const credit_card_hide = () =>{credit_card.style.display = 'none';}
credit_card_hide()
const simple_payment_hide = () =>{simple_payment.style.display = 'none';}
simple_payment_hide()

const payment_method_default = () => {
    for(let i of payment_method_detail){i.classList.remove('method_active')}
    kakaopay_btn.classList.remove('kakaopay_btn_active')
    kurly_pay_btn.classList.remove('kurly_pay_btn_active')
    kurly_pay_btn.children[0].src = './images/main/logo/logo_pay_purple.svg'
    credit_card_hide()
    simple_payment_hide()
}

kakaopay_btn.addEventListener('click',()=>{
    payment_method_default();
    kakaopay_btn.classList.add('kakaopay_btn_active')
})

kurly_pay_btn.addEventListener('click',()=>{
    payment_method_default();
    kurly_pay_btn.classList.add('kurly_pay_btn_active')
    kurly_pay_btn.children[0].src = './images/main/logo/logo_pay_white.svg'
})

for(let a of payment_method_detail){
    a.addEventListener('click',(e)=>{
        payment_method_default()
        e.preventDefault()
        a.classList.add('method_active')
    })
}

credit_card.style.display = 'block'

payment_method_detail[0].addEventListener('click',()=>{
    credit_card.style.display = 'block'
})
payment_method_detail[1].addEventListener('click',()=>{
    simple_payment.style.display = 'block'
})

// -------- 결제수단 혜택안내
const benefit_hide = () =>{
    kakaopay_info.style.display = 'none';
    payco_info.style.display = 'none';
}
benefit_hide();

more_btn.addEventListener('click',()=>{
    if(kakaopay_info.style.display == 'none'){
        kakaopay_info.style.display = 'block';
        kakaopay_info.style.padding = '10px 0';
        payco_info.style.display = 'block';
        more_btn_icon.style.transform = 'rotate(180deg)'
    }else{
        kakaopay_info.style.display = 'none';
        kakaopay_info.style.padding = '10px 0';
        payco_info.style.display = 'none';
        more_btn_icon.style.transform = 'rotate(0deg)'
    }
})

// -------- 신용카드 결제 시 카드/할부 선택

select_card.addEventListener('click',()=>{
    select_card_list.style.display = 'flex'
})
installment.addEventListener('click',()=>{
    select_installment_list.style.display = 'flex'
})

const installment_style = () => {
    installment_span.style.color = '#333';
    installment.style.backgroundColor = '#fff';
}

for(let a of select_card_list_opt){
    a.addEventListener('click',()=>{
        installment_span.innerHTML = '할부를 선택해주세요';
        select_card_list.style.display = 'none';
        select_card_span.innerHTML = a.innerHTML
        installment_style();
        let imgTag = installment.querySelector('img')
        imgTag.src = './images/main/icon/icon_down_16x10.png'
        imgTag.style.width = '10px'
    })
}
for(let a of select_installment_list_opt){
    a.addEventListener('click',()=>{
        select_installment_list.style.display = 'none';
        installment_span.innerHTML = a.innerHTML
        installment_style();
    })
    
}


// ------- 결제 금액 박스가 상단에 고정되어 따라오게 하기 fixed
const btm_right = document.querySelector('.btm_right');
const btm_right_offset_Top = btm_right.offsetTop;

/* window.addEventListener('scroll',()=>{
    if(window.scrollY > btm_right_offset_Top){
        btm_right.style.position = 'fixed';
    }else{
        btm_right.style.position = 'static';
    }
}) */

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