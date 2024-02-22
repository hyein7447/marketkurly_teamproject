const popup_box = document.querySelector('.popup')
const citation_num = document.querySelector('.citation_num')
const citation_text = document.querySelector('#citation_num')
const popup_message = document.querySelector('.box > p')
const pop_btn_ok = document.querySelector('#btn_ok')
const btn_login = document.querySelector('.btn_login')
const user_id = document.querySelector('#user_id')
const user_pw = document.querySelector('#user_pw')
const user_db = [{ id:"kurly", pw:"1234", number:"8610" }]

// ---------------------- 구분선 --------------------------
popup_box.style.display = 'none';
citation_num.style.display = 'none';
let tryCount = 0; //로그인 횟수 변수생성
btn_login.addEventListener('click',()=>{
    if(user_id.value == user_db[0].id && user_pw.value == user_db[0].pw){ //성공
        alert('마켓컬리에 오신걸 환영합니다 :)')
        window.location.href = "index.html";
    }else if (tryCount >= 1){
        citation_num.style.display = 'flex';
    }else if (user_id.value == '' || user_pw.value == '' || user_id.value != user_db[0].id || user_pw.value != user_db[0].pw){ //실패 - 빈문자열일때 팝업창
        popup_box.style.display = 'flex';
        popup_message.innerHTML = '아이디, 비밀번호를 확인해주세요.'
        tryCount++;
    }else if (citation_text.value == user_db[0].number || citation_text.value == 8610){
        popup_box.style.display = 'flex';
        popup_message.innerHTML = '인증번호 확인이 완료되었습니다.'
        citation_num.style.display = 'none';
        tryCount = 0;
    }else {
        tryCount++;
        popup_box.style.display = 'none';
    }
})
pop_btn_ok.addEventListener('click',()=>{
    popup_box.style.display = 'none';
})
// ---------------------- 구분선 --------------------------