const board_list_a = document.querySelectorAll('.board_list > a')
const sections = document.querySelectorAll('section')

// -------- 메뉴 클릭 시 탭

const hide = () => {for(let i of sections){i.style.display = 'none'}}
hide()
sections[0].style.display = 'block'

const title_hide = () => {for(let s of board_list_a){
    console.log(s)
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

