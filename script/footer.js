const body = document.querySelector('html, body')
// 챗봇용
const btn_up = document.querySelector('#btn_up')
const btn_chatbot = document.querySelector('#btn_chatbot')
const chatbot_sub = document.querySelectorAll('.chatbot_sub')
const btn_inquire = document.querySelector('.btn_inquire') //홈 -> 문의하기 버튼
const btn_new_q = document.querySelector('.btn_new_q') //대화 -> 새 문의하기 버튼
const btn_back = document.querySelector('i[class*=angle-left]') //채팅창 -> 뒤로가기 버튼
const list_box = document.querySelector('.list1') // 홈 -> 채팅박스
const setting_toggle = document.querySelectorAll('ul > li > div[class*=toggle]')
// 개별영역
const chat_home = document.querySelector('.home')
const chat_chat = document.querySelector('.chat')
const chat_setting = document.querySelector('.setting')
const nav_home = document.querySelector('i[class*=house]')
const nav_chat = document.querySelector('i[class*=dots]')
const nav_setting = document.querySelector('i[class*=gear]')
// 공통영역 
const chat_list = document.querySelectorAll('.sub1 > .chat_list') //nav 채팅창 공통 클래스
const chat_nav = document.querySelectorAll('.navigation a')
console.log(btn_chatbot)
/* ---------------------- 구분선 -------------------------- */
// 챗봇영역
// 챗봇 버튼 클릭 시 챗봇화면 활성화 -> 다시 클릭 시 비활성화
// 챗봇 토글 함수
let chatbot_toggle = () => {
    chatbot_sub.forEach((t)=>{
        t.style.display = t.style.display === 'block' ? 'none' : 'block';
    })
};
btn_chatbot.addEventListener('click', chatbot_toggle);
/* let sub_show = false;
let chatbot_toggle = () => {
    if(!sub_show){
        chatbot_sub[0].style.display = 'block';
        sub_show = true;
    } else {
        for (let i = 0; i < chatbot_sub.length; i++) {
            chatbot_sub[i].style.display = chatbot_sub[i].style.display === 'block' ? 'none' : 'block';
        }
    }
};
btn_chatbot.addEventListener('click', chatbot_toggle); */

/* btn_chatbot.addEventListener('click', chatbot_toggle);
let chatbot_toggle = () => {
    chatbot_sub.forEach((t) => {
        t.classList.toggle('hidden');
    });
};
btn_chatbot.addEventListener('click', chatbot_toggle); */
/* ---------------------- 구분선 -------------------------- */

// const setting_toggle = document.querySelectorAll('ul > li > div[class*=toggle]')
// 챗봇영역 설정 -> 토글 제어
setting_toggle.forEach((t)=>{
    t.addEventListener('click',()=>{
        t.classList.toggle('toggle_none');
        t.classList.toggle('toggle_active');
    })
})
/* ---------------------- 구분선 -------------------------- */
// 하단 네비게이션 클릭시 해당 페이지 활성화
// 호출용
let chat_nav_hide = ()=>{for(let a of chat_list){a.style.display = 'none'}}
let nav_active_remove = ()=>{for(let e of chat_nav){e.classList.remove('nav_active')}}
// 네비게이션 클릭시 해당 페이지 전환
chat_nav.forEach((t,i)=>{
    t.addEventListener('click',()=>{
        chat_nav_hide() //나머지 none 호출
        chat_list[i].style.display = 'block';
        nav_active_remove()
        t.classList.add('nav_active')
    })
    // 홈 - 문의하기 버튼 클릭시 대화로 창 이동
    btn_inquire.addEventListener('click',()=>{
        chat_chat.style.display = 'block';
    })
    // 홈 - 맨위 채팅창 버튼 클릭시 채팅으로 창 이동
    list_box.addEventListener('click',()=>{
        chatbot_sub[1].style.display = 'block';
        chatbot_sub[0].style.display = 'none';
    })
    // 채팅 - 새 문의하기 버튼 클릭시 대화로 창 이동
    btn_new_q.addEventListener('click',()=>{
        chatbot_sub[1].style.display = 'block';
        chatbot_sub[0].style.display = 'none';
    })
})
// chatbot_sub none처리 호출용 함수 선언
let sub_hide = ()=>{for(let v of chatbot_sub){v.style.display = 'none'}}
console.log(sub_hide())
// 채팅 - btn_back버튼 클릭 시 채팅창 none처리
btn_back.addEventListener('click',()=>{
    sub_hide()
    /* if (chatbot_sub[0].style.display == 'block') {
        chatbot_sub[1].style.display = 'none';
        chatbot_sub[0].style.display = 'block';
    } else if (chatbot_sub[0].style.display == 'none') {
        chatbot_sub[0].style.display = 'block';
    }
    // btn_chatbot 클릭 시 chatbot_sub[0] 표시
    let sub_show = false;
    btn_chatbot.addEventListener('click',()=>{
        if(chatbot_sub[0].style.display == 'none' && chatbot_sub[1].style.display == 'none'){ 
            chatbot_sub[0].style.display = 'block';
            sub_show = !sub_show;
        }else if(chatbot_sub[0].style.display == 'block' && chatbot_sub[1].style.display == 'block'){
            sub_hide()
            sub_show = !sub_show;
        }
    }) */
});
/* if (chatbot_sub[0].style.display === 'block' && chatbot_sub[1].style.display === 'block') {
    btn_chatbot.addEventListener('click',()=>{sub_hide()})
} else if (chatbot_sub[0].style.display == 'none' && chatbot_sub[1].style.display == 'none'){
    btn_chatbot.addEventListener('click',()=>{chatbot_sub[0].style.display = 'block';})
} */
/* ---------------------- 구분선 -------------------------- */

// up버튼 클릭 시 window의 제일 상단으로 이동 상단기준 400px 밑으로 내려오면 버튼 사라지게 설정
window.addEventListener('scroll', () => {
    if (body.scrollTop > 400) {
        btn_up.style.display = 'block';
    } else {
        btn_up.style.display = 'none';
    }
});
// 클릭했을 때
btn_up.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
    if (body.scrollTop < 400) {
        btn_up.style.display = 'none';
    }
});
/* ---------------------- 구분선 -------------------------- */      
// 링크 설정되지 않은 a 태그 클릭시 상단으로 올라가는 것 막기
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
/* ---------------------- 구분선 -------------------------- */  