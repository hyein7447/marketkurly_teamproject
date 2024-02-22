// 인풋들
const user_id = document.querySelector('#user_id')
const user_pw = document.querySelector('#user_pw')
const user_pw_rechk = document.querySelector('#user_pw_rechk')
const user_name_rechk = document.querySelector('#user_name_rechk')
const user_number = document.querySelector('#user_number')
const user_mail = document.querySelector('#user_mail')
const event_friend = document.querySelector('.friend')
const event_name = document.querySelector('.event_name')
const event_sub_friend = document.querySelector('.sub_area .hiden_tab1')
const event_sub_name = document.querySelector('.sub_area .hiden_tab2')
const terms_all = document.querySelector('.agree_all')
// 에러메세지
const error_messages = document.querySelectorAll('.input_area span')
// 버튼들
const btn_join = document.querySelector('#btn_join')
const btn_id_overlap = document.querySelector('.btn_id_overlap')
const btn_id_overlap2 = document.querySelector('.btn_id_overlap2')
const btn_phone = document.querySelector('.btn_phone')
// 약관보기 탭
const agree_view = document.querySelectorAll('.agree_view strong')

// 추가입력사항 (탭처리 필요)

console.log(agree_view)
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