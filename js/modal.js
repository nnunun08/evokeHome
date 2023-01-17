const trigger = document.querySelectorAll('.contents .item')
const modal = document.querySelector('.detail')
const modalItem = document.querySelectorAll('.detail .item')
const body = document.querySelector('body')
for(i = 0; i < trigger.length; i++) {
    trigger[i].addEventListener('click', (e) => {
        modal.classList.add('modal')
        modalItem[0].classList.add('on')
        body.style.overflow = 'hidden'
    })
}

function modalClose() {
    modal.classList.remove('modal')
    modalItem[0].classList.remove('on')
    body.style.overflow = '';
}


modal.addEventListener('click', (e) => {
    if(e.target.className === 'detail modal') {
        modalClose()
    }
})