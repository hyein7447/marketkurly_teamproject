// 인풋들
const user_id = document.querySelector('#user_id')
const user_pw = document.querySelector('#user_pw')
const user_pw_rechk = document.querySelector('#user_pw_rechk')
const user_name_rechk = document.querySelector('#user_name_rechk')
const user_number = document.querySelector('#user_number')
const user_mail = document.querySelector('#user_mail')
const terms_all = document.querySelector('#agree_all')
const terms_list = document.querySelectorAll('input[type=checkbox]')
const user_date = document.querySelectorAll('input[id*=date]')
// 에러메세지
const error_messages = document.querySelectorAll('.input_area span')
// 버튼들
const btn_join = document.querySelector('#btn_join')
const btn_id_overlap = document.querySelector('.btn_id_overlap')
const btn_id_overlap2 = document.querySelector('.btn_id_overlap2')
const btn_phone = document.querySelector('.btn_phone')
// 약관보기 탭
const agree_view = document.querySelectorAll('.agree_view > strong')
const tab_terms = document.querySelectorAll('[class*=tab_terms]')
const btn_ok = document.querySelectorAll('.btn_ok')
// 추가입력사항 (탭처리 필요)
const event_btn = document.querySelectorAll('.event > .event_area')
const hiden_tab = document.querySelectorAll('.hiden_tab')
const event_friend = document.querySelector('#friend')
const event_name = document.querySelector('#event_name')
const hiden_tab01 = document.querySelector('.hiden_tab01')
const hiden_tab02 = document.querySelector('.hiden_tab02')
console.log(terms_list,user_date)
/* ---------------------- 구분선 -------------------------- */
// 약관보기 팝업 호출용
let agree_view_hide = ()=>{for(let h of tab_terms){h.style.display = 'none'}}
// 약관보기 팝업
agree_view.forEach((t,i)=>{
    t.addEventListener('click',()=>{
        agree_view_hide()
        tab_terms[i].style.display = 'flex';
        btn_ok[i].addEventListener('click',()=>{agree_view_hide()}) /* ☆☆이벤트 안에 이벤트 가능한지 */
    })
})
/* ---------------------- 구분선 -------------------------- */
// 아이디 호출용
function id_regular(userId) {
    // 정규 표현식 6~16자 영문 또는 영문과 숫자 조합
    let en_num = /^[a-zA-Z0-9]{6,16}$/;
    return en_num.test(userId);
}
// 비밀번호 호출용
function pw_regular(userPw) {
    // 최소 10자 이상 입력
    return userPw.length >= 10;
}
// 이메일 호출용
function mail_regular(userMail) {
    // 일반 이메일 주소 체크 특수문자 + 영문 + 숫자
    let m_address = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    return m_address.test(userMail);
}
// 생년월일 호출용
function date_regular(userDate) {
    // 숫자만 사용가능
    let date_num = /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])+$/;
    return date_num.test(userDate);
}
// 아이디 입력 이벤트 처리
const result_id = id_regular(user_id.value);
user_id.addEventListener('input', () => {
    if (result_id) {// 유효한 경우 에러 메시지 삭제
        error_messages[0].innerHTML = '';
    } else {// 유효하지 않은 경우 에러 메시지 표시
        error_messages[0].innerHTML = '6자 이상 16자 이하의 영문 혹은 영문과 숫자를 조합';
    }
});
// 비밀번호 입력 이벤트 처리
const result_pw = pw_regular(user_pw.value);
user_pw.addEventListener('input', () => {
    if (result_pw) {
        error_messages[1].innerHTML = '';
    } else {
        error_messages[1].innerHTML = '최소 10자 이상 입력';
    }
});
// 이메일 입력 이벤트 처리
const result_mail = mail_regular(user_mail.value);
user_mail.addEventListener('input', () => {
    if (result_mail) {
        error_messages[4].innerHTML = '';
    } else {
        error_messages[4].innerHTML = '이메일 형식으로 입력해 주세요.';
    }
});
// 생년월일 입력 이벤트 처리
for (let i = 0; i < user_date.length; i++) {
    const date = user_date[i];
    // 입력 시마다 유효성 검사
    date.addEventListener('input', () => {
        const result_date = date_regular(user_date.value);
        // 오류 메시지 표시/숨김
        if (result_date) {
            error_messages[7].innerHTML = '';
        } else {
            error_messages[7].innerHTML = '태어난 년도 4자리를 정확하게 입력해주세요.';
        }
    });
}
/* const result_date = date_regular(user_date.value);
for (let i of user_date) {
    i.addEventListener('input', () => {
        if (result_date) {
        // 유효한 경우 에러 메시지 삭제
        error_messages[7].innerHTML = '';
        } else {
        // 유효하지 않은 경우 에러 메시지 표시
        error_messages[7].innerHTML = '태어난 년도 4자리를 정확하게 입력해주세요.';
        }
    });
} */
/* ---------------------- 구분선 -------------------------- */
// 이용약관 동의 - 전체동의 클릭시 전체 클릭 활성화
// 연습)방법1
/* terms_all.addEventListener('click',()=>{
    for(let i of terms_list){
        i.checked = terms_all.checked
    }
}) */
// 연습)방법2
terms_all.addEventListener('click',()=>{
    if (terms_all.checked){
        for(let i of terms_list){i.checked = true}
    }else {
        for(let i of terms_list){i.checked = false}
    }
})
/* 
    ★★ 전부 같은표현인지 확인 필요 ★★
    연습 1번)
    termsList.forEach((checkbox) =>{ checkbox.checked = termsAll.checked});
    연습 2번)
    terms_list.forEach((t)=>{t.checked = termsAll.checked});
    연습 3번)
    for(let i of terms_list){i.checked = true}
    연습 4번)
    terms_list.forEach(checkbox => checkbox.checked = true);
*/

/* // 연습)방법3
function check_all() {
    // 전체 선택 체크박스 상태에 따라 모든 체크박스 선택/해제
    for (let i of terms_list) {i.checked = terms_all.checked}
}
// 전체 선택 체크박스 이벤트
terms_all.addEventListener('change', check_all);
// 초기화: 페이지 로드 시 전체 선택 체크박스가 선택되어 있으면 모든 체크박스 선택
if (terms_all.checked) {
    check_all();
} */
/* ---------------------- 구분선 -------------------------- */
// 가입하기 버튼 클릭시 메인페이지로 이동
btn_join.addEventListener('click',()=>{
    window.location.href = "index.html";
})
/* ---------------------- 구분선 -------------------------- */
// 추가입력사항 클릭했을 때 숨겨진 탭 활성화
// 숨겨진 탭 초기화 함수
const hide_tab = () => {
    hiden_tab01.classList.add('display_none');
    hiden_tab02.classList.add('display_none');
};
// 친구 초대 추천인 아이디 활성화 했을 때
event_friend.addEventListener('change',()=>{
    if (event_friend.checked){
        hide_tab();
        hiden_tab01.classList.remove('display_none');
    }
});
// 참여 이벤트명 활성화 됐을 때
event_name.addEventListener('change',()=>{
    if (event_name.checked){
        hide_tab();
        hiden_tab02.classList.remove('display_none');
    }
});
// 초기 탭 숨기기
hide_tab();
/* ---------------------- 구분선 -------------------------- */
// 지도 API 함수
function sample6_execDaumPostcode() {
    new daum.Postcode({
        oncomplete: function(data) {
            // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

            // 각 주소의 노출 규칙에 따라 주소를 조합한다.
            // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
            var addr = ''; // 주소 변수
            var extraAddr = ''; // 참고항목 변수

            //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
            if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                addr = data.roadAddress;
            } else { // 사용자가 지번 주소를 선택했을 경우(J)
                addr = data.jibunAddress;
            }

            // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
            if(data.userSelectedType === 'R'){
                // 법정동명이 있을 경우 추가한다. (법정리는 제외)
                // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
                if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                    extraAddr += data.bname;
                }
                // 건물명이 있고, 공동주택일 경우 추가한다.
                if(data.buildingName !== '' && data.apartment === 'Y'){
                    extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                }
                // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
                if(extraAddr !== ''){
                    extraAddr = ' (' + extraAddr + ')';
                }
                // 조합된 참고항목을 해당 필드에 넣는다.
                document.getElementById("sample6_extraAddress").value = extraAddr;
            
            } else {
                document.getElementById("sample6_extraAddress").value = '';
            }

            // 우편번호와 주소 정보를 해당 필드에 넣는다.
            document.getElementById('sample6_postcode').value = data.zonecode;
            document.getElementById("sample6_address").value = addr;
            // 커서를 상세주소 필드로 이동한다.
            document.getElementById("sample6_detailAddress").focus();
        }
    }).open();
}