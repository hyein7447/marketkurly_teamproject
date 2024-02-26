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
const change_btn = document.querySelector('#change_btn')
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
            delivery_p.innerHTML = '3,000원'

        }else{
            count--
            sele_num.innerHTML = count
            
            //체크박스 비활성화 시 주문하기 버튼 비활성화
            order_btn.classList.remove('bg_active')
            btn_txt.classList.remove('color_w')
            btn_txt.innerText = '상품을 선택해주세요'
            delivery_p.innerHTML = '0원' 
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
        delivery_p.innerHTML = '3,000원'
        for(let a of check_icon){
            //개별icon, 하단전체 선택 활성화
            a.checked = true
            btm_all_check.checked = true
            
            //선택아이템 개수 출력
            count = 3
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
            count = 0
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
            count = 3
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
            count = 0
            sele_num.innerHTML = count
        }
    }
})

// 수량 증감
const minus = document.querySelectorAll('.minus')
const plus = document.querySelectorAll('.plus')
const a_num = document.querySelectorAll('.product .num')
const item_num = document.querySelectorAll('.item_num')

const d_price = document.querySelectorAll('.price span')
const o_price = document.querySelectorAll('.price del')

const order_p = document.querySelector('.order_p')
const order_dis_p = document.querySelector('.order_dis_p')
const delivery_p = document.querySelector('.delivery_p')
const total_p = document.querySelector('.total_p')
const free = document.querySelector('.free')

console.log(minus,plus,item_num,a_num,order_p,order_dis_p,delivery_p,total_p)

let nums = [1, 1, 1];
let dis_price = [17900, 8451, 10710]
let origin_price = [19990, 9900, 15200]
let total_price = 0
let total_price2 = 0

const total = () => {
    let totalDiscountedPrice = 0;
    check_icon.forEach((t, i) => {
        if (check_icon[i].checked) {
            totalDiscountedPrice += dis_price[i] * nums[i];
        }
    });
    total_p.innerHTML = totalDiscountedPrice.toLocaleString('ko-kr') + '원';

    // 체크된 상태에서 total_p에서 order_p를 뺀 결과를 order_dis_p에 표시
    let deliveryResult = totalDiscountedPrice - total_price;
    order_dis_p.innerHTML = deliveryResult.toLocaleString('ko-kr') + '원';
    
};


const updateUI = () => {
    // 선택된 상품들에 대한 총 가격 계산 및 표시
    let totalOriginPrice = 0;
    let totalDiscountedPrice = 0;
    let selectedItemsCount = 0;

    check_icon.forEach((checkbox, index) => {
        if (checkbox.checked) {
            totalOriginPrice += origin_price[index] * nums[index];
            totalDiscountedPrice += dis_price[index] * nums[index];
            selectedItemsCount++;
        }
    });

    // all_check가 체크된 경우에 대한 처리
    if (all_check.checked) {
        order_p.innerHTML = totalOriginPrice.toLocaleString('ko-kr') + '원';
        total_p.innerHTML = totalDiscountedPrice.toLocaleString('ko-kr') + '원';
        order_dis_p.innerHTML = (totalOriginPrice - totalDiscountedPrice).toLocaleString('ko-kr') + '원';

        // total_p 값이 40000원 이하인 경우 3,000원을, 그렇지 않으면 0원을 delivery_p에 출력
        delivery_p.innerHTML = totalDiscountedPrice <= 40000 ? '3,000원' : '0원';
    } else {
        // 체크가 해제된 경우에는 모든 값을 0으로 초기화
        order_p.innerHTML = '0원';
        total_p.innerHTML = '0원';
        order_dis_p.innerHTML = '0원';
        free.innerHTML = '';
        delivery_p.innerHTML = '0원';
    }
}

// 초기 수량 설정
item_num.forEach((item, index) => {
    item.innerHTML = nums[index];
});

// 플러스, 마이너스 버튼 클릭 시 수량변경, 가격변경
plus.forEach((t, i) => {
    t.addEventListener('click', () => {
        nums[i]++;
        item_num[i].innerHTML = nums[i];

        let d_total = dis_price[i]*item_num[i].innerHTML;
        let o_total = origin_price[i]*item_num[i].innerHTML;

        d_price[i].innerHTML = d_total.toLocaleString('ko-kr')+'원'
        o_price[i].innerHTML = o_total.toLocaleString('ko-kr')+'원'

        if (check_icon[i].checked) {
            total_price += origin_price[i];
            total()
        }
        order_p.innerHTML = total_price.toLocaleString('ko-kr') + '원';
        
    });
});

minus.forEach((t, i) => {
    t.addEventListener('click', () => {
        if (nums[i] > 1) {
            nums[i]--
            item_num[i].innerHTML = nums[i];

            let d_total = dis_price[i]*item_num[i].innerHTML;
            let o_total = origin_price[i]*item_num[i].innerHTML;

            d_price[i].innerHTML = d_total.toLocaleString('ko-kr')+'원'
            o_price[i].innerHTML = o_total.toLocaleString('ko-kr')+'원'

            if (check_icon[i].checked) {
                total_price -= origin_price[i];
                total()   
            }
            order_p.innerHTML = total_price.toLocaleString('ko-kr') + '원';
            
        }
    });
});

check_icon.forEach((t,i)=>{
    t.addEventListener('click',()=>{
        if(check_icon[i].checked){
        total_price += origin_price[i] * nums[i];

        }else {
            total_price -= origin_price[i] * nums[i];
        }
        order_p.innerHTML = total_price.toLocaleString('ko-kr') + '원';
        total()
    })
})

all_check.addEventListener('change', (e) => {
    check_icon.forEach((checkbox) => {
        checkbox.checked = e.target.checked;
    });
    updateUI();
});

// 하단 전체선택 icon 클릭시 개별 icon 활성화 , 선택 아이템 개수 출력
btm_all_check.addEventListener('change', (e) => {
    check_icon.forEach((checkbox) => {
        checkbox.checked = e.target.checked;
    });
    updateUI();
});

// x 버튼 클릭시 팝업 출력


const del_box = document.querySelector('.del_box')
const delete_btn = document.querySelectorAll('.delete_btn')
const reset_btn = document.querySelector('#reset_btn')
const submit_btn = document.querySelector('#submit_btn')
console.log(del_box,delete_btn)

del_box.style.display = 'none'

for(let d of delete_btn){d.addEventListener('click',()=>{
    del_box.style.display = 'flex'
})}

reset_btn.addEventListener('click',()=>{
    del_box.style.display = 'none'
})

submit_btn.addEventListener('click',()=>{
    product.remove()
})

// 주문하기 버튼 활성화 시 a태그 링크 삽입

order_btn.addEventListener('click',()=>{
    if(order_btn.classList.contains('bg_active')){
        order_btn.href = './payment.html'
    }
})

change_btn.addEventListener('click',()=>{
    window.open('wish_address_popup.html','popup','width=530,height=569')
})