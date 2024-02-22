const ph_user_name = document.querySelector('#ph_user_name')
const user_phone = document.querySelector('#user_phone')
const e_user_name = document.querySelector('#e_user_name')
const user_email = document.querySelector('#user_email')
const tab_a = document.querySelectorAll('.tab a')
const tab_contents = document.querySelectorAll('.tab_contents div')
const img_name = document.querySelector('.phone .ph_user_name img')
const img_phone = document.querySelector('.phone .user_phone img')
const img_e_name = document.querySelector('.e_user_name img')
const img_mail = document.querySelector('.user_email img')
const id_btn = document.querySelector('#get_num')
let error_m = document.querySelectorAll('.error_m')
console.log(error_m)
/* ---------------------- 구분선 -------------------------- */
// 상단 탭의 제목 클릭시 보라색글씨 활성화
tab_a[0].classList.add('pp_active')
let tab_a_default = ()=>{for(let a of tab_a){a.classList.remove('pp_active')}}
let tab_hide = ()=>{for(let j of tab_contents){j.classList.add('display_none')}}
tab_a.forEach((t,i)=>{
    t.addEventListener('click',()=>{
        tab_a_default()
        t.classList.add('pp_active')
        tab_hide()
        tab_contents[i].classList.remove('display_none')
    })
})
/* ---------------------- 구분선 -------------------------- */
// 휴대폰 인증
// 이름 틀렸을 때 에러메세지 출력 + 인풋 클릭했을때 박스 활성화
img_name.style.display = 'none';
ph_user_name.addEventListener('click',()=>{
    img_name.style.display = 'block';
    ph_user_name.style.outline = '1px solid #999' //아웃라인 설정
    //이름칸이 비어있을 때 x아이콘 없어지고 에러메세지 출력
    if(ph_user_name.value == ''){
        img_name.style.display = 'none';
        error_m[0].innerText = `이름을 정확히 입력해 주세요.`
        ph_user_name.style.outline = 'none';
    //이름칸이 비어있지 않고 휴대폰 번호 11자리 입력했을 때 버튼활성화
    }else if (ph_user_name.value !== '' && user_phone.value.length === 11){ 
        id_btn.classList.add('btn_active')
    }
})
//이름칸 클릭했을 때 x아이콘 활성화 -> 활성화된 x아이콘 클릭시 이름칸 빈칸으로 변경
img_name.addEventListener('click',()=>{
    ph_user_name.value = ''
}) 
// 휴대폰번호 틀렸을 때 에러메세지 출력 + 인풋 클릭했을때 박스 활성화
img_phone.style.display = 'none';
user_phone.addEventListener('click',()=>{
    img_phone.style.display = 'block';
    user_phone.style.outline = '1px solid #999';
    if(ph_user_name.value !== '' && user_phone.value.length === 11){ 
        id_btn.classList.add('btn_active')
    }else if (user_phone.value == '' && user_phone.value.length !== 11){
        img_phone.style.display = 'none';
        user_phone.style.outline = 'none';
    }else if (user_phone.value.length !== 11){
        error_m[1].innerText = `가입 시 등록한 휴대폰 번호를 입력해 주세요.`
    }
})
img_phone.addEventListener('click',()=>{
    user_phone.value = ''
})
/* ---------------------- 구분선 -------------------------- */
// 이메일 인증
// 이름 틀렸을 때 에러메세지 출력 + 인풋 클릭했을때 박스 활성화
img_e_name.style.display = 'none';
img_mail.style.display = 'none';
e_user_name.addEventListener('click',()=>{
    img_e_name.style.display = 'block';
    e_user_name.style.outline = '1px solid #999' //아웃라인 설정
    //이름칸이 비어있을 때 x아이콘 없어지고 에러메세지 출력
    if(e_user_name.value == ''){
        img_e_name.style.display = 'none';
        error_m[2].innerText = `이름을 정확히 입력해 주세요.`
        e_user_name.style.outline = 'none';
    }
})
//이름칸 클릭했을 때 x아이콘 활성화 -> 활성화된 x아이콘 클릭시 이름칸 빈칸으로 변경
img_e_name.addEventListener('click',()=>{
    e_user_name.value = ''
}) 
// 이메일 틀렸을 때 에러메세지 출력 + 인풋 클릭했을때 박스 활성화
user_email.addEventListener('click',()=>{
    img_mail.style.display = 'block';
    user_email.style.outline = '1px solid #999' //아웃라인 설정
    //이름칸이 비어있을 때 x아이콘 없어지고 에러메세지 출력
    if(user_email.value == ''){
        img_mail.style.display = 'none';
        error_m[3].innerText = `이메일 주소를 확인해주세요.`
        user_email.style.outline = 'none';
    }
})
//이름칸 클릭했을 때 x아이콘 활성화 -> 활성화된 x아이콘 클릭시 이름칸 빈칸으로 변경
img_mail.addEventListener('click',()=>{
    user_email.value = ''
}) 
/* ---------------------- 구분선 -------------------------- */