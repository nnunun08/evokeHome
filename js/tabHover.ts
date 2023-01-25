const tab = document.querySelectorAll('.tab li');
let i: number;
let j: number;


for (i = 0; i < tab.length; i++) {
    // 탭 스타일링
    tab[i].addEventListener('click', (e: any) => {
        for (j = 0; j < tab.length; j++) {
            tab[j].classList.remove('ac')
        }
        e.target.offsetParent.classList.add('ac')
        let cate: string = e.target.classList[1];
        // console.log(`cate: ${cate}`)
        // 컨텐츠 DIV = cate-all | cate-pub | cate-des
        const contents: any = document.querySelector('.contents')?.children
        // console.log(contents)

        let l: number;
        for (l = 0; l < contents.length; l++) {
            let target = contents[l];
            if (cate === 'cate-all') {
                target.style.display = 'block'
            }
            else if (target.classList[1] === cate) {
                target.style.display = 'block'
            } else {
                target.style.display = 'none'
            }
        }
    })
}
