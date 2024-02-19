// 메인 배너 버튼 opacity

const main_prev_btn = document.querySelector('#main_prev_btn')
const main_next_btn = document.querySelector('#main_next_btn')
const main_bnr_slide = document.querySelector('#main_bnr_slide')
const main_bnr = document.querySelector('.main_bnr')
console.log(main_next_btn,main_prev_btn,main_bnr_slide)

main_prev_btn.style.display = 'none'
main_next_btn.style.display = 'none'

main_bnr_slide.addEventListener('mouseover',()=>{
    main_prev_btn.style.display = 'block'
    main_next_btn.style.display = 'block'
})
main_bnr_slide.addEventListener('mouseout',()=>{
    main_prev_btn.style.display = 'none'
    main_next_btn.style.display = 'none'
})
