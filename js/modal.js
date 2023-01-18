const trigger = document.querySelectorAll('.contents .item')
const modal = document.querySelector('.detail')
const modalItem = document.querySelectorAll('.detail .item')
const body = document.querySelector('body')
for(i = 0; i < trigger.length; i++) {
    trigger[i].addEventListener('click', (e) => {
        modal.classList.add('modal')
        let target = e.currentTarget.attributes[1].nodeValue;
        console.log(target)
        for(j = 0; j < modalItem.length; j++) {
            if(modalItem[j].attributes[1].value === target) {
                let modalOpen = modalItem[j]
                modalOpen.classList.add('on')
            }
        }
        console.log()
        // modalItem[0].classList.add('on')
        body.style.overflow = 'hidden'
    })
}

function modalClose() {
    modal.classList.remove('modal')
    for(i=0;i<modalItem.length;i++) {
        modalItem[i].classList.remove('on')
    }
    body.style.overflow = '';
}


modal.addEventListener('click', (e) => {
    if(e.target.className === 'detail modal') {
        modalClose()
    }
})