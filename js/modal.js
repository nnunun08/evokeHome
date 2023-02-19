"use strict";
const trigger = document.querySelectorAll('.contents .item');
const modal = document.querySelector('.detail');
const modalItem = document.querySelectorAll('.detail .item');
const body = document.querySelector('body');
const footer = document.querySelector('footer');
const mail = document.querySelector('.mail');
const leftCon = document.querySelectorAll('.home .detail .item .left');
console.log(leftCon);
for (i = 0; i < trigger.length; i++) {
    trigger[i].addEventListener('click', (e) => {
        modal.classList.add('modal');
        let target = e.currentTarget.attributes[1].nodeValue;
        console.log(target);
        for (j = 0; j < modalItem.length; j++) {
            if (modalItem[j].attributes[1].value === target) {
                let modalOpen = modalItem[j];
                let leftConTarget = leftCon[j];
                // const leftCon = modalOpen.querySelector('.left')
                modalOpen.classList.add('on');
                setTimeout(function () {
                    modalOpen.style.opacity = '1';
                    modalOpen.style.transform = 'translate(-50%, -50%)';
                    leftConTarget.style.opacity = '1';
                    leftConTarget.style.transform = 'translateY(0)';
                }, 200);
            }
        }
        console.log();
        // modalItem[0].classList.add('on')
        body.style.overflow = 'hidden';
        footer.style.transform = 'translateY(120px)';
        mail.style.opacity = '0';
        mail.style.right = '-80px';
    });
}
function modalClose() {
    modal.classList.remove('modal');
    for (i = 0; i < modalItem.length; i++) {
        modalItem[i].classList.remove('on');
        modalItem[i].style.opacity = null;
        modalItem[i].style.transform = null;
        leftCon[i].style.opacity = null;
        leftCon[i].style.transform = null;
    }
    body.style.overflow = '';
    footer.style.transform = null;
    mail.style.opacity = null;
    mail.style.right = null;
}
modal.addEventListener('click', (e) => {
    if (e.target.className === 'detail modal') {
        modalClose();
    }
});
