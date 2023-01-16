const tab = document.querySelectorAll('.tab li');
for(i = 0; i < tab.length; i++) {
    tab[i].addEventListener('click', (e)=>{
        for(j = 0; j < tab.length; j++) {
            tab[j].classList.remove('ac')
        }
        e.target.offsetParent.classList.add('ac')
    })
}