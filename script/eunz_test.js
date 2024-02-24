// 변수 선언
const name_result = document.querySelector('.name_result');
const result_list = document.querySelector('.name_result > span');
const list_close = document.querySelector('.name_result > span > img');
const aside_li = document.querySelectorAll('.best > .container > .left > .list > ul > li');
const btn_reset = document.querySelector('.container > .left > .title > p');

// 어사이드 메뉴 (li) 클릭 이벤트
aside_li.forEach((t) => {
    t.addEventListener('click', () => {
        // 오른쪽 박스 보이기
        name_result.classList.remove('display_none');
        // 초기화 버튼 활성화
        btn_reset.classList.add('reset_active');

        // 선택된 항목 추가
        const list_text = document.createElement('span');
        list_text.innerHTML = `${t.textContent}` + `<img src="./images/main/icon/icon_cancle.svg" alt="취소">`;
        name_result.appendChild(list_text);

        // 초기화 버튼 클릭 이벤트
        btn_reset.addEventListener('click', () => {
        // 오른쪽 박스 숨기기
        name_result.classList.add('display_none');
        // 카테고리 어사이드 메뉴 클릭시 체크이미지 회색으로 변경
        t.children[0].children[0].src = './images/sub/icon_check_off.svg';
        // 초기화 버튼 비활성화
        btn_reset.classList.remove('reset_active');

        // 오른쪽 컨테이너 초기화
        name_result.innerHTML = '';
        });

        // 선택 항목 삭제 이벤트
        list_text.querySelector('img').addEventListener('click', () => {
        list_text.remove();
        });
    });
});

/* ---------------------- 구분선 -------------------------- */
// 어사이드 메뉴 (li) 클릭했을 때
aside_li.forEach((t) => {
    t.addEventListener('click', () => {
        // 오른쪽 박스 보이기
        name_result.classList.remove('display_none');
        // 초기화 버튼 활성화
        btn_reset.classList.add('reset_active');
    
        // list_text 초기화
        list_text.innerHTML = '';
    
        // ... 생략 ...
    
        // 여러 개의 span 태그와 이미지 태그 추가
        for (let i = 0; i < aside_li.length; i++) {
            const liText = aside_li[i].querySelector('p').textContent;
            const imgSrc = './images/main/icon/icon_cancle.svg';
    
            list_text.innerHTML += `<span>${liText}</span><img src="${imgSrc}" alt="취소">`;
        }
    
        // ... 생략 ...
        });
});
/* ---------------------- 구분선 -------------------------- */

const person = {
    name: 'John Doe',
    age: 30,
};

for (const key of Object.keys(person)) {
console.log(key, person[key]);
}