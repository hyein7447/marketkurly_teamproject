const body = document.querySelector('html, body')
// 챗봇- 겉모양부분
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
// 챗봇의 내부 채팅창부분
const basic = document.querySelectorAll('.basic button') //1번 basic 전체 버튼
const qa_brand = document.querySelectorAll('.qa_brand:not(:first-of-type)') //컬리가 하는 멘트
const user_choice = document.querySelectorAll('.usr_choice') // 질문 1 ~ 질문4 타이틀선택
const user_choice_all = document.querySelectorAll('[class*=choice_]')
const choice_list = document.querySelectorAll('.choice_list')
const text_area = document.querySelector('#text_area')
const message_input = document.querySelector('div.message_input')
const band_consultant = document.querySelector('.band_consultant')
const user_message = document.querySelector('.user_message')
/* ---------------------- 구분선 -------------------------- */
// 챗봇영역 - 서브2탭의 채팅창 클릭부분
// 궁금한 사항 클릭시 클릭한 대상의 리스트가 표시됨
// 브랜드 제거용 함수 호출
let remove_basic = ()=>{for(let b of basic){a.classList.add('display_none')}}
let remove_qa_brand = ()=>{for(let a of qa_brand){a.classList.add('display_none')}}
let remove_user_choice = ()=>{for(let c of user_choice){c.classList.add('display_none')}}

let currentStep = 0;

basic.forEach((t, i) => {
    t.addEventListener('click', () => {
        if (currentStep === 0) {
        // 'basic' 버튼 클릭 시 'user_choice' 첫 번째 요소 보여주기
        user_choice[i].classList.remove('display_none');
        currentStep = 1;

        // 3초 후 'qa_brand' 보여주기
        setTimeout(() => {
            qa_brand[i].classList.remove('display_none');
            currentStep = 2;

            // 3초 후 'choice_list' 보여주기
            setTimeout(() => {
            choice_list[i].classList.remove('display_none');
            currentStep = 3;
            }, 600);
        }, 600);
        } else if (currentStep < user_choice.length) {
        // 'user_choice' 이전 요소 숨기고 선택한 'user_choice' 보여주기
        user_choice[currentStep - 1].classList.add('display_none');
        user_choice[i].classList.remove('display_none');
        currentStep = i + 1;
        }
    });
    choice_list[i].addEventListener('click', () => {
        band_consultant.classList.remove('display_none');
        // 3초 후 'user_message' 보여주기
        setTimeout(() => {
            setTimeout(() => {
                user_message[i].classList.remove('display_none');
            }, 600);
        })
    });
});
// 'qa_brand' 클릭 시 'choice_list' 보여주기
qa_brand[0].addEventListener('click', () => {
    choice_list[0].classList.remove('display_none');
    currentStep = 3;
});

/* // basic 클릭 이벤트
basic.forEach((button) => {
    button.addEventListener('click', () => {
        // basic 버튼 모두 숨김
        basic.forEach((btn) => btn.classList.add('display_none'));
        // 선택된 질문 표시
        user_choice[button.dataset.index].classList.remove('display_none');
        remove_user_choice()
        // 3초 후 브랜드 문구 표시
        setTimeout(() => {
            qa_brand[button.dataset.index].classList.remove('display_none');
            remove_qa_brand()
            // 3초 후 선택지 표시
            setTimeout(() => {
            choice_list[button.dataset.index].classList.remove('display_none');
            }, 2000);
        }, 2000);
    });
}); */

/* basic.forEach((t,i)=>{
    t.addEventListener('click',()=>{
        t.classList.add('display_none')
        user_choice[i].classList.remove('display_none') //기본 리스트의 질문선택
        user_choice.forEach((target,idx)=>{
            // target.addEventListener('click',()=>{
                // qa_brand[idx].classList.remove('display_none') //질문 선택 후(브랜드) 멘트
                // if(!qa_brand[idx].style.display == 'none'){
                //     // choice_list[i].classList.remove('display_none')
                // }
            // })
        })
    })
}) */

/* ---------------------- 구분선 -------------------------- */
text_area.addEventListener('click', () => {
    // 박스 컬러 변경
    message_input.style.backgroundColor = '#fff';
    // placeholder 색상 변경
    text_area.style.color = '#333';
});

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
// 채팅창 숨기기
// 챗봇 상담 클릭하면 채팅창 나타나기 (아래 -> 위로 자연스럽게 나타나기 효과)
// 챗봇 상담 클리시 보이면 숨기기 / 안보이면 보이기
const chat_container = document.querySelector('#chat_container')
const chat_messages = document.querySelector('#chat_massage')
const user_input = document.querySelector('#user_input input')
const chat_btn = document.querySelector('#chat_btn')
const robot_btn = document.querySelector('#robot')
const apiEndpoint = 'https://api.openai.com/v1/chat/completions'
const apiKey = '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';
const user_message_p = document.createElement('p')

// enter event - 엔터 쳤을때 전송
/* text_area.addEventListener('keydown',(e)=>{ //이벤트 정보가 담기는 곳 => () 매개변수 위치
    if(e.keyCode === 13){
        btn_chatbot.click(); //버튼 강제 클릭
    }
}) */

// API ai 연결
/* async function fetchAIResponse(prompt) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{
                role: "user",
                content: prompt
            }, ],
            temperature: 0.3,
            max_tokens: 400,
            top_p: 0.3,
            frequency_penalty: 0.5,
            presence_penalty: 0.5,
            stop: ["Human"],
        }),
    };
    try {
        const response = await fetch(apiEndpoint, requestOptions);
        const data = await response.json();
        const aiResponse = data.choices[0].message.content;
        return aiResponse;
    } catch (error) {
		console.error('OpenAI API 호출 중 오류 발생:', error);
        return 'OpenAI API 호출 중 오류 발생';
    }
} */

// 질문 입력 후 전송 버튼 클릭 하면 자바스크립트
// 인풋 텍스트에 내가 값을 입력 -> 입력값이 챗 메세지의 마지막 자식으로 
/* btn_chatbot.addEventListener('click', async()=>{ //전송버튼을 클릭했을 때 async()에 쓴 값(쳇GPT)을 사용하겠다.
    let message = text_area.value //value값을 변수로 담았다.
    addMessage('user',message) //아래 함수 호출 값으로 사용
    text_area.value = '' //빈칸으로 만들기
    //ai
    let aiMessage = await fetchAIResponse(message); //value값을 ai서버로 보내서 값을 받아라(디코더해라)
    addMessage('AI', aiMessage); //ai가 하는말을 addMessage로 보내라
})

// value 값으로 받은 메세지가 처리되는 함수
function addMessage(target, contents){ //매개변수로 해야함-> (누가대답할지, 내용)
    const messageElement = document.createElement('div')
    messageElement.classList.add('message')
    messageElement.innerHTML = `${target} : ${contents}` //(누가대답할지, 내용)을 출력되게 innerHTML로 적용
    chat_messages.appendChild(messageElement) //div의 마지막 자식으로 메세지를 출력하라
} */