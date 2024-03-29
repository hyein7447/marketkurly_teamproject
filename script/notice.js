const board_list_a = document.querySelectorAll('.board_list > a')
const sections = document.querySelectorAll('section')
const help_wrap = document.querySelector('.help_wrap')

// -------- 메뉴 클릭 시 탭

const hide = () => {for(let i of sections){i.style.display = 'none'}}
hide()
sections[0].style.display = 'block'

const title_hide = () => {for(let s of board_list_a){
    s.classList.remove('active')
}}
board_list_a[0].classList.add('active')

board_list_a.forEach((t, i)=>{
    t.addEventListener('click',()=>{
        hide()
        title_hide()
        sections[i].style.display = 'block'
        t.classList.add('active')
    })
})

help_wrap.addEventListener('click',()=>{
    console.log('.')
    hide()
    title_hide()
    sections[2].style.display = 'block'
    board_list_a[2].classList.add('active')
})

// ---------------------

const notice_start =()=>{
    hide()
    title_hide()
    sections[0].style.display = 'block'
    board_list_a[0].classList.add('active')
}
const faq_start =()=>{
    hide()
    title_hide()
    sections[1].style.display = 'block'
    board_list_a[1].classList.add('active')
}
const inquiry_start = ()=>{
    hide()
    title_hide()
    sections[2].style.display = 'block'
    board_list_a[2].classList.add('active')
}
const great_deal_start = ()=>{
    hide()
    title_hide()
    sections[3].style.display = 'block'
    board_list_a[3].classList.add('active')
}

window.onload = ()=>{
    const urlParams = new URLSearchParams(window.location.search);
    const urlNotice = urlParams.get('notice')
    const urlFaq = urlParams.get('faq')
    const urlInquiry = urlParams.get('inquiry')
    const urlGreatDeal = urlParams.get('great_deal')

    if(urlNotice === 'true'){
        notice_start()
    }
    if(urlFaq === 'true'){
        faq_start()
    }
    if(urlInquiry === 'true'){
        inquiry_start()
    }
    if(urlGreatDeal === 'true'){
        great_deal_start()
    }
}

// -------- mouseover 시 활성화
for (let t of board_list_a) {
    let imgTag = t.querySelector('img'); 
    let previousImagePath = imgTag ? imgTag.src : ''; 

    t.addEventListener('mouseover', () => {
        t.style.color = '#5f0080';
        t.style.background = '#fafafa';
        t.style.fontWeight = 500;
        if (imgTag) {
            imgTag.src = './images/main/icon/icon_arrow_right.svg'; 
        }
    });

    t.addEventListener('mouseout', () => {
        t.style.color = '';
        t.style.background = '';
        t.style.fontWeight = '';
        if (imgTag) {
            imgTag.src = previousImagePath; 
        }
    });
}