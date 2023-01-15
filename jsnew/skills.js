let numberHtml = document.getElementById('number-html');
let numberJs = document.getElementById('number-js');
let numberCss = document.getElementById('number-css');
let htmlBar = document.querySelector('.html-bar');
let jsBar = document.querySelector('.js-bar');
let cssBar = document.querySelector('.css-bar');

// let counterHtml = 0;
// let counterJs = 0;
// let counterCss = 0;

// console.log(skillsContainer)
// if (skillsContainer.classList.contains('.element-show')) {
    
    // }
    window.onload = () => {
    let options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    function callBack(entry) {
        entry.forEach(change => {
            if (change.isIntersecting) {
                // let elTarget = change.target;
                // console.log(elTarget);
                // change.target.classList.add('ratatui');
                let counterHtml = 0;
                let counterJs = 0;
                let counterCss = 0;
                setInterval(() => {
                    if(counterHtml == 96){
                        clearInterval();
                    } else {
                        counterHtml += 1;
                        numberHtml.innerHTML = counterHtml + '%'
                        htmlBar.style.width = `${counterHtml}%`;
                    }
                }, 10);
                
                setInterval(() => {
                    if(counterCss == 87){
                        clearInterval();
                    } else {
                        counterCss += 1;
                        numberCss.innerHTML = counterCss + '%'
                        cssBar.style.width = `${counterCss}%`;
                    }
                }, 12);
                
                setInterval(() => {
                    if(counterJs == 90){
                        clearInterval();
                    } else {
                        counterJs += 1;
                        numberJs.innerHTML = counterJs + '%'
                        jsBar.style.width = `${counterJs}%`;
                    }
                }, 13);
                // observer.unobserve(elTarget);
            } 
        });
    }
    let observer = new IntersectionObserver(callBack, options);
    let target = document.querySelector('.skills-container');
    observer.observe(target);
    }
