const board_list_a = document.querySelectorAll('.board_list > a')
console.log(board_list_a)

for (let t of board_list_a) {
    let imgTag = t.querySelector('img'); // 이미지 태그 가져오기
    let previousImagePath = imgTag ? imgTag.src : ''; // 이전 이미지 경로 저장

    t.addEventListener('mouseover', () => {
        t.style.color = '#5f0080';
        t.style.background = '#fafafa';
        t.style.fontWeight = 500;
        if (imgTag) {
            imgTag.src = './images/main/icon/icon_arrow_right.svg'; // 새로운 이미지 경로로 변경
        }
    });

    t.addEventListener('mouseout', () => {
        t.style.color = '';
        t.style.background = '';
        t.style.fontWeight = '';
        if (imgTag) {
            imgTag.src = previousImagePath; // 이전 이미지 경로로 변경
        }
    });
}
