const title = document.querySelectorAll('.product_wrap .item .title a')
const product = document.querySelectorAll('.item .product')
const product_wrap = document.querySelector('.product_wrap')
const all_num = document.querySelector('.all_num')
const sele_num = document.querySelector('.sele_num')
const check_icon = document.querySelectorAll('.checkboxs')
const all_check = document.querySelector('#all_check')
const btm_all_check = document.querySelector('#btm_all_check')
const order_btn = document.querySelector('#order_btn')
const btn_txt = document.querySelector('.btn_txt')
const change_btn = document.querySelector('#change_btn')
const img_arrow = document.querySelectorAll('.product_wrap .item .title a img')

// 냉동/냉장/상온 title 클릭시 하단 아이템 출력/숨김
title.forEach((t, i)=>{
    t.addEventListener('click',()=>{
        product[i].classList.toggle('item_open_toggle')
        console.log(product[i])

        img_arrow[i].classList.toggle('img_toggle')
        console.log(img_arrow[i])
    })
})

//전체아이템 개수 출력
all_num.innerHTML = `/ ${product_wrap.children.length}`

//초기 선택아이템 개수 3

//선택 아이템 개수 출력
let count = 3;
sele_num.innerHTML = count

for(let c of check_icon){
    c.addEventListener('change',(e)=>{
        if(e.target.checked){
            if(count < 3){
                count++
            }
            sele_num.innerHTML = count

            if(check_icon[0].checked == true || check_icon[1].checked == true || check_icon[2].checked == true){

                //체크박스 활성화 시 주문하기 버튼 활성화
                order_btn.classList.add('bg_active')
                btn_txt.classList.add('color_w')
                btn_txt.innerText = '주문하기'

            }
            if (check_icon[0].checked == true && check_icon[1].checked == true && check_icon[2].checked == true){
                //전체선택 활성화
                all_check.checked = true
                btm_all_check.checked = true
            }            

        }else{
            count--
            sele_num.innerHTML = count
            
            if(check_icon[0].checked == false && check_icon[1].checked == false && check_icon[2].checked == false){

                //체크박스 비활성화 시 주문하기 버튼 비활성화
                order_btn.classList.remove('bg_active')
                btn_txt.classList.remove('color_w')
                btn_txt.innerText = '상품을 선택해주세요'
                
                delivery_p.innerHTML = '0원' 
                free.innerHTML = ''
            }
            
            //전체선택 비활성화
            all_check.checked = false
            btm_all_check.checked = false
            
        }
    })
}


// 주문버튼 초기 활성화
order_btn.classList.add('bg_active')
btn_txt.classList.add('color_w')
btn_txt.innerText = '주문하기'


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
            count = 3
            sele_num.innerHTML = count
        }

        total()
        origin_total()
        dis_total()

    }else { 

        //주문하기 버튼 비활성화
        order_btn.classList.remove('bg_active')
        btn_txt.classList.remove('color_w')
        btn_txt.innerText = '상품을 선택해주세요'

        order_p.innerHTML = '0원';
        order_dis_p.innerHTML = '0원';
        total_p.innerHTML = '0원';
        delivery_p.innerHTML = '0원' 
        free.innerHTML = ''
        
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

        total()
        origin_total()
        dis_total()

    }else {
        for(let a of check_icon){
            //개별icon, 하단전체 선택 비활성화
            all_check.checked = false
            a.checked = false

            //선택아이템 개수 출력
            count = 0
            sele_num.innerHTML = count
        }

        //주문하기 버튼 비활성화
        order_btn.classList.remove('bg_active')
        btn_txt.classList.remove('color_w')
        btn_txt.innerText = '상품을 선택해주세요'

        order_p.innerHTML = '0원';
        order_dis_p.innerHTML = '0원';
        total_p.innerHTML = '0원';
        delivery_p.innerHTML = '0원' 
        free.innerHTML = ''

    }
})


// 수량 증감
const minus = document.querySelectorAll('.minus')
const plus = document.querySelectorAll('.plus')
const a_num = document.querySelectorAll('.product .num')
const item_num = document.querySelectorAll('.item_num')

const d_price = document.querySelectorAll('.price span') // 아이템 옆 할인가
const o_price = document.querySelectorAll('.price del') // 아이템 옆 정상가

const order_p = document.querySelector('.order_p') // order리스트 상품금액
const order_dis_p = document.querySelector('.order_dis_p') // order리스트 상품할인금액
const total_p = document.querySelector('.total_p') //order리스트 결제예정금액
const delivery_p = document.querySelector('.delivery_p') // order리스트 배송비
const free = document.querySelector('.free')

let nums = [1, 1, 1];
let dis_price = [17900, 8451, 10710]
let origin_price = [19990, 9900, 15200]
let total_price = 0

let origin_p = origin_price[0]+origin_price[1]+origin_price[2]
let dis_p = (dis_price[0]-origin_price[0])+(dis_price[1]-origin_price[1])+(dis_price[2]-origin_price[2])
let all_price = dis_price[0]+dis_price[1]+dis_price[2]

// 초기 orderlist 값
order_p.innerHTML = origin_p.toLocaleString('ko-kr') + '원';
order_dis_p.innerHTML = dis_p.toLocaleString('ko-kr') + '원';
total_p.innerHTML = all_price.toLocaleString('ko-kr') + '원';



// order 리스트 결제예정금액 출력
const total = () => {
    let totalDiscountedPrice = 0;
    check_icon.forEach((t, i) => {
        if (check_icon[i].checked) {
            totalDiscountedPrice += dis_price[i] * nums[i];
            console.log(totalDiscountedPrice)
        }
    });
    total_p.innerHTML = totalDiscountedPrice.toLocaleString('ko-kr') + '원';

    let free_p = 40000;
    const delivery = (total)=>{
        let free_total = total;
        check_icon.forEach((t,i)=>{
            if(check_icon[i].checked){
                if(totalDiscountedPrice < free_p){
                    delivery_p.innerHTML = '+3,000원'
                    free.innerHTML = `${(free_p-totalDiscountedPrice).toLocaleString('ko-kr')}원 추가주문시, <em>무료배송`
                }else {
                    delivery_p.innerHTML = '0원'
                    free.innerHTML = ''
                }
            }
        })
    }
    delivery()
};

total()

// order 리스트 상품금액 출력
const origin_total = ()=>{
    let originTotal = 0;
    check_icon.forEach((t, i)=>{
        if(check_icon[i].checked){
            originTotal += origin_price[i] * nums[i];
            console.log(originTotal)
        }
    })
    order_p.innerHTML = originTotal.toLocaleString('ko-kr') + '원';
}

// order 리스트 상품할인금액 출력
const dis_total = ()=>{
    let disTotal = 0;
    check_icon.forEach((t, i)=>{
        if(check_icon[i].checked){
            disTotal +=  (dis_price[i] * nums[i]) - (origin_price[i] * nums[i])
        }
    })
    order_dis_p.innerHTML = `${disTotal.toLocaleString('ko-kr')}원`
}

// 초기 수량 설정
item_num.forEach((item, index) => {
    item.innerHTML = nums[index];
});


// 플러스 버튼 클릭 시 수량변경, 가격변경, orderlist 가격출력
plus.forEach((t, i) => {
    t.addEventListener('click', () => {
        nums[i]++;
        item_num[i].innerHTML = nums[i];

        let d_total = dis_price[i]*nums[i]
        let o_total = origin_price[i]*nums[i]

        d_price[i].innerHTML = d_total.toLocaleString('ko-kr') + '원';
        o_price[i].innerHTML = o_total.toLocaleString('ko-kr') + '원';

        // order리스트 가격출력 함수
        total()
        origin_total()
        dis_total()
    });
});

// 마이너스 버튼 클릭 시 수량변경, 가격변경, orderlist 가격출력
minus.forEach((t, i) => {
    t.addEventListener('click', () => {
        if (nums[i] > 1) {
            nums[i]--;
            item_num[i].innerHTML = nums[i];
            
            let d_total = dis_price[i]*nums[i];
            let o_total = origin_price[i]*nums[i];
            
            d_price[i].innerHTML = d_total.toLocaleString('ko-kr') + '원';
            o_price[i].innerHTML = o_total.toLocaleString('ko-kr') + '원';
            
            // order리스트 가격출력 함수
            total()
            origin_total()
            dis_total()
        }
    });
});

// item 체크아이콘 클릭 이벤트
check_icon.forEach((t,i)=>{
    t.addEventListener('click',()=>{
        if(check_icon[i].checked){
            total_price += origin_price[i] * nums[i];
            
        }else {
            total_price -= origin_price[i] * nums[i];
        }
        order_p.innerHTML = total_price.toLocaleString('ko-kr') + '원';
        
        // order리스트 가격출력 함수
        total()
        origin_total()
        dis_total()
    })
})

all_check.addEventListener('change', (e) => {
    check_icon.forEach((checkbox) => {
        checkbox.checked = e.target.checked;
    });
});

// 하단 전체선택 icon 클릭시 개별 icon 활성화 , 선택 아이템 개수 출력
btm_all_check.addEventListener('change', (e) => {
    check_icon.forEach((checkbox) => {
        checkbox.checked = e.target.checked;
    });
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