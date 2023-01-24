"use strict";
const tab = document.querySelectorAll('.tab li');
let i;
let j;
for (i = 0; i < tab.length; i++) {
    // 탭 스타일링
    tab[i].addEventListener('click', (e) => {
        var _a;
        for (j = 0; j < tab.length; j++) {
            tab[j].classList.remove('ac');
        }
        e.target.offsetParent.classList.add('ac');
        let cate = e.target.classList[1];
        // console.log(`cate: ${cate}`)
        // 컨텐츠 DIV = cate-all | cate-pub | cate-des
        const contents = (_a = document.querySelector('.contents')) === null || _a === void 0 ? void 0 : _a.children;
        // console.log(contents)
        let l;
        for (l = 0; l < contents.length; l++) {
            let target = contents[l];
            if (cate === 'cate-all') {
                target.style.display = 'block';
            }
            else if (target.classList[1] === cate) {
                target.style.display = 'block';
            }
            else {
                target.style.display = 'none';
            }
        }
    });
}
