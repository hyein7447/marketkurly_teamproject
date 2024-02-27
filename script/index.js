// 타이머 함수
// 타이머 시작 시간 설정 (현재 시간으로부터 24시간 후)
const startTime = new Date();
startTime.setHours(startTime.getHours() + 24);

function updateTimer() {
    const currentTime = new Date();
    const timeDifference = startTime - currentTime;

    if (timeDifference > 0) {
        const hours = Math.floor(timeDifference / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        document.getElementById('timer').textContent = `${hours}: ${minutes}: ${seconds}`;
    } else {
        document.getElementById('timer').textContent = '시간 종료!';
    }
}

// 초기 호출
updateTimer();

// 1초마다 타이머 업데이트
setInterval(updateTimer, 1000);

// 주소찾기 팝업
//본 예제에서는 도로명 주소 표기 방식에 대한 법령에 따라, 내려오는 데이터를 조합하여 올바른 주소를 구성하는 방법을 설명합니다.
function exec_daum_postcode() {
    new daum.Postcode({
        oncomplete: function(data) {
            // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

            // 도로명 주소의 노출 규칙에 따라 주소를 표시한다.
            // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
            var roadAddr = data.roadAddress; // 도로명 주소 변수
            var extraRoadAddr = ''; // 참고 항목 변수

            // 법정동명이 있을 경우 추가한다. (법정리는 제외)
            // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
            if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                extraRoadAddr += data.bname;
            }
            // 건물명이 있고, 공동주택일 경우 추가한다.
            if(data.buildingName !== '' && data.apartment === 'Y'){
            extraRoadAddr += (extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName);
            }
            // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
            if(extraRoadAddr !== ''){
                extraRoadAddr = ' (' + extraRoadAddr + ')';
            }

            // 우편번호와 주소 정보를 해당 필드에 넣는다.
            document.getElementById('postcode').value = data.zonecode;
            document.getElementById("roadAddress").value = roadAddr;
            document.getElementById("jibunAddress").value = data.jibunAddress;
            
            // 참고항목 문자열이 있을 경우 해당 필드에 넣는다.
            if(roadAddr !== ''){
                document.getElementById("extraAddress").value = extraRoadAddr;
            } else {
                document.getElementById("extraAddress").value = '';
            }

            var guideTextBox = document.getElementById("guide");
            // 사용자가 '선택 안함'을 클릭한 경우, 예상 주소라는 표시를 해준다.
            if(data.autoRoadAddress) {
                var expRoadAddr = data.autoRoadAddress + extraRoadAddr;
                guideTextBox.innerHTML = '(예상 도로명 주소 : ' + expRoadAddr + ')';
                guideTextBox.style.display = 'block';

            } else if(data.autoJibunAddress) {
                var expJibunAddr = data.autoJibunAddress;
                guideTextBox.innerHTML = '(예상 지번 주소 : ' + expJibunAddr + ')';
                guideTextBox.style.display = 'block';
            } else {
                guideTextBox.innerHTML = '';
                guideTextBox.style.display = 'none';
            }
        }
    }).open();
}

// 메인 배너 버튼 opacity
const main_prev_btn = document.querySelector('#main_prev_btn')
const main_next_btn = document.querySelector('#main_next_btn')
const main_bnr_slide = document.querySelector('#main_bnr_slide')
const main_bnr = document.querySelector('.main_bnr')
console.log(main_next_btn,main_prev_btn,main_bnr_slide)

main_bnr_slide.addEventListener('mouseover',()=>{
    main_prev_btn.classList.add('opacity')
    main_next_btn.classList.add('opacity')
})
main_bnr_slide.addEventListener('mouseout',()=>{
    main_prev_btn.classList.remove('opacity')
    main_next_btn.classList.remove('opacity')
})

// MD section tag 클릭시 active

const tag = document.querySelectorAll('.md .tag a')

tag.forEach((t,i)=>{
    t.addEventListener('click',(e)=>{
        for(let a of tag){a.classList.remove('active_bg')}
        tag[i].classList.add('active_bg')
        event.preventDefault();
    })
})

// aside 스크롤시 가운데 위치
const aside_bg = document.querySelector('.aside_bg')

window.addEventListener('scroll',()=>{

    if(window.scrollY > 500){
        aside_bg.classList.add('position')
    }else{
        aside_bg.classList.remove('position')
    }
})

// max-width 820일 때 aside_bg 숨김
/* function applyFunction() {
    aside_bg.style.display = 'none';
}
function applyFunction2() {
    aside_bg.style.display = 'block';
}

function handleResize() {
    const windowWidth = window.innerWidth;

    // 조건 확인

    if (windowWidth <= 1582) {
        applyFunction(); // 조건이 만족하면 함수 호출
    }else {
        applyFunction2()
    }
}
window.addEventListener('resize', handleResize); */

// 장바구니 담기 팝업 출력

const cart_btn = document.querySelectorAll('.cart_btn')
const cart_pop = document.querySelector('.cart_pop_bg')
const btn_cancel = document.querySelector('.btn_cancel')
console.log(cart_btn,cart_pop)

cart_pop.style.display = 'none'

cart_btn.forEach((t,i)=>{
    t.addEventListener('click',()=>{
        cart_pop.style.display = 'flex'
    })
})

btn_cancel.addEventListener('click',()=>{
    cart_pop.style.display = 'none'
})


// 장바구니 담기 팝업 수량 증감

const minus_btn = document.querySelector('.cart_pop_bg .info .cart_box .minus')
const plus_btn = document.querySelector('.cart_pop_bg .info .cart_box .plus')
const p_tab_num = document.querySelector('.p_tab_num')
const p_tab_price = document.querySelector('.cart_pop .total .total_result .p_tab_price')

console.log(minus_btn,plus_btn, '....')

// 카트 담기 팝업 안에 + - 수량 증가 감소, 가격변경
let p_num = 0;
let pop_total = 0;
let total
let price = 8268;

// 증가
plus_btn.addEventListener('click',()=>{
    if(p_num < 20){
        p_num++ ;
        p_tab_num.innerHTML = p_num
        pop_total =  p_num*price
        p_tab_price.innerHTML = `${pop_total.toLocaleString('ko-kr')}<em>원</em>`
    }else{
        alert('최대 구매 수량입니다.') //이부분 추후에 디자인 수정예정
    }
})
// 감소
minus_btn.addEventListener('click',()=>{
    if(0< p_num){
        p_num--;
        p_tab_num.innerHTML = p_num
        pop_total =  p_num*price
        p_tab_price.innerHTML = `${pop_total.toLocaleString('ko-kr')}<em>원</em>`
    }else if(p_num == 0){
        p_tab_price.innerHTML = `0<em>원</em>`;
        p_tab_num.innerHTML = `0`;
        // pop_minus.children.setAttribute('fill-opacity', '0.4');
    }
})
