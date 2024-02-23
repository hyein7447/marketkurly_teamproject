const img_box = document.querySelectorAll('.benefit')
/* ---------------------- 구분선 -------------------------- */
// 현재 윈도우 사이즈 저장
let current_width = window.innerWidth;

window.addEventListener('resize', () => {
    if (window.innerWidth <= 540) {
        img_box[0].children[0].src = './images/benefit/mobile/bnr_001.png';
        img_box[1].children[0].src = './images/benefit/mobile/bnr_002.jpg';
        img_box[2].children[0].src = './images/benefit/mobile/bnr_003.jpg';
        img_box[3].children[0].src = './images/benefit/mobile/bnr_004.jpg';
        img_box[4].children[0].src = './images/benefit/mobile/bnr_005.jpg';
        img_box[5].children[0].src = './images/benefit/mobile/bnr_006.jpg';
        img_box[6].children[0].src = './images/benefit/mobile/bnr_007.jpg';
        img_box[7].children[0].src = './images/benefit/mobile/bnr_008.jpg';
        img_box[8].children[0].src = './images/benefit/mobile/bnr_009.jpg';
        img_box[9].children[0].src = './images/benefit/mobile/bnr_010.jpg';
        img_box[10].children[0].src = './images/benefit/mobile/bnr_001.png';
        img_box[11].children[0].src = './images/benefit/mobile/bnr_002.jpg';
        img_box[12].children[0].src = './images/benefit/mobile/bnr_003.jpg';
        img_box[13].children[0].src = './images/benefit/mobile/bnr_004.jpg';
        img_box[14].children[0].src = './images/benefit/mobile/bnr_005.jpg';
        img_box[15].children[0].src = './images/benefit/mobile/bnr_006.jpg';
        img_box[16].children[0].src = './images/benefit/mobile/bnr_007.jpg';
        img_box[17].children[0].src = './images/benefit/mobile/bnr_008.jpg';
        img_box[18].children[0].src = './images/benefit/mobile/bnr_009.jpg';
        img_box[19].children[0].src = './images/benefit/mobile/bnr_010.jpg';
        img_box[20].children[0].src = './images/benefit/mobile/bnr_001.png';
        img_box[21].children[0].src = './images/benefit/mobile/bnr_002.jpg';
        img_box[22].children[0].src = './images/benefit/mobile/bnr_003.jpg';
        img_box[23].children[0].src = './images/benefit/mobile/bnr_004.jpg';
        img_box[24].children[0].src = './images/benefit/mobile/bnr_005.jpg';
        img_box[25].children[0].src = './images/benefit/mobile/bnr_006.jpg';
        img_box[26].children[0].src = './images/benefit/mobile/bnr_007.jpg';
        img_box[27].children[0].src = './images/benefit/mobile/bnr_008.jpg';
        img_box[28].children[0].src = './images/benefit/mobile/bnr_009.jpg';
        img_box[29].children[0].src = './images/benefit/mobile/bnr_010.jpg';
    } else if (current_width <= 540) {
        // 다시 넓어졌을 때 PC 이미지 경로 설정
        img_box[0].children[0].src = './images/benefit/bnr_001.png';
        img_box[1].children[0].src = './images/benefit/bnr_002.jpg';
        img_box[2].children[0].src = './images/benefit/bnr_003.jpg';
        img_box[3].children[0].src = './images/benefit/bnr_004.jpg';
        img_box[4].children[0].src = './images/benefit/bnr_005.jpg';
        img_box[5].children[0].src = './images/benefit/bnr_006.jpg';
        img_box[6].children[0].src = './images/benefit/bnr_007.jpg';
        img_box[7].children[0].src = './images/benefit/bnr_008.jpg';
        img_box[8].children[0].src = './images/benefit/bnr_009.jpg';
        img_box[9].children[0].src = './images/benefit/bnr_010.jpg';
        img_box[10].children[0].src = './images/benefit/bnr_001.png';
        img_box[11].children[0].src = './images/benefit/bnr_002.jpg';
        img_box[12].children[0].src = './images/benefit/bnr_003.jpg';
        img_box[13].children[0].src = './images/benefit/bnr_004.jpg';
        img_box[14].children[0].src = './images/benefit/bnr_005.jpg';
        img_box[15].children[0].src = './images/benefit/bnr_006.jpg';
        img_box[16].children[0].src = './images/benefit/bnr_007.jpg';
        img_box[17].children[0].src = './images/benefit/bnr_008.jpg';
        img_box[18].children[0].src = './images/benefit/bnr_009.jpg';
        img_box[19].children[0].src = './images/benefit/bnr_010.jpg';
        img_box[20].children[0].src = './images/benefit/bnr_001.png';
        img_box[21].children[0].src = './images/benefit/bnr_002.jpg';
        img_box[22].children[0].src = './images/benefit/bnr_003.jpg';
        img_box[23].children[0].src = './images/benefit/bnr_004.jpg';
        img_box[24].children[0].src = './images/benefit/bnr_005.jpg';
        img_box[25].children[0].src = './images/benefit/bnr_006.jpg';
        img_box[26].children[0].src = './images/benefit/bnr_007.jpg';
        img_box[27].children[0].src = './images/benefit/bnr_008.jpg';
        img_box[28].children[0].src = './images/benefit/bnr_009.jpg';
        img_box[29].children[0].src = './images/benefit/bnr_010.jpg';
    }
    // 새로고침 했을 때 현재 윈도우 사이즈 업데이트
    current_width = window.innerWidth;
}); 