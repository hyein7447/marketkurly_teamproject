const tab_area_a = document.querySelectorAll('.tab_area a') //상단 탭
const tab_box = document.querySelectorAll('.tab_box') //탭박스
const btn_start = document.querySelector('.btn_start') //fixd 버튼
const btn_arrow = document.querySelectorAll('[class*=down]') //노티스 버튼
const notice_box = document.querySelectorAll('.sub:not([class*=row])')//노티스 박스
console.log(tab_area_a, tab_box,notice_box)
/* ---------------------- 구분선 -------------------------- */  
// 상단에 고정된 탭클릭시 해당 탭으로 이동
tab_area_a.forEach((t,i)=>{
    t.addEventListener('click',(e)=>{
        e.preventDefault()
        window.scrollTo(0, tab_box[i].offsetTop)
    })
})
/* ---------------------- 구분선 -------------------------- */  
// 하단에 고정된 컬리멤버스 시작하기 버튼 클릭시 로그인창으로 이동
btn_start.addEventListener('click',()=>{
    window.location.href = "login.html";
})
/* ---------------------- 구분선 -------------------------- */  
// 유의사항 클릭시 노티스 탭 온 오프
let btn_arrow_status = false;
btn_arrow.forEach((o,i)=>{
    o.addEventListener('click',()=>{
        if (btn_arrow_status == false) {
            notice_box[i].style.display = 'block';
            o.style.transition = '0.4s ease'
            o.style.transform = 'rotate(180deg)'
            btn_arrow_status = !btn_arrow_status;
        }else {
            notice_box[i].style.display = 'none';
            o.style.transform = 'rotate(0deg)'
            o.style.transition = '0.4s ease'
            btn_arrow_status = !btn_arrow_status;
        }
    })
})
/* ---------------------- 구분선 -------------------------- */ 
// Swiper

const mySwiper = new Swiper('mainSlide',{
    // 속성:값, 속성:값,
    autoplay:{dispay:100,}, //자동 재생 (기본값 false)
    loop:true, //반복 (기본값 false)
    // direction:'vertical',//방향(기본값 horizontal) //vertical 설정할땐 부모에 높이값도 같이 설정해야한다.
    // effect:'fade', //제자리 효과(direction과 같이 사용할 수 없음)
    pagination:{
        el:'#mainSlide1 .swiper-pagination', //적용대상
        type:'progressbar', //상단에 바, 로딩모양변경S
    },
     // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
}) 


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