let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let social = document.querySelector('.social');
let input = document.querySelectorAll('input');
let textarea = document.getElementById('textarea');
let submitBtn = document.getElementById('submit-btn');
let placeholder = document.querySelector('placeholder');


let darkmode = document.querySelectorAll('#darkmode');
darkmode.forEach((item) => {
    item.addEventListener('click', (event) => {
        if (event.target.classList.contains('bx-moon')) {
            event.target.classList.replace('bx-moon', 'bx-sun');
            document.body.classList.add('active');
            social.classList.add('active');
            textarea.style.cssText = `color: #fff; -webkit-text-fill-color: rgb(255, 255, 255) !important;`
            input.forEach((item) => {
                item.style.color = '#fff';
                item.style.cssText = `color: #fff; -webkit-text-fill-color: rgb(255, 255, 255) !important;`
            })
            submitBtn.style.color ='#fff';
        } else {
            event.target.classList.replace('bx-sun', 'bx-moon');
            document.body.classList.remove('active');
            social.classList.remove('active');
            textarea.style.cssText = `color: #0f0c27; -webkit-text-fill-color: #0f0c27 !important;`
            
            input.forEach((item) => {
                item.style.color = '#0f0c27';
                if (!item.classList.contains('contact-button')) {
                    item.style.cssText = `color: #0f0c27; -webkit-text-fill-color: #0f0c27 !important;`
                }
                
            })
            submitBtn.style.color = '#fff';
        }
        });
});

let upElement = document.getElementById("upClick");
upElement.addEventListener('click', () => {
//    window.scrollTo(0, 0);
window.scrollTo({
top: 0,
behavior: "smooth"
});
});

window.addEventListener('scroll', scrollFunction);
    function scrollFunction() {
    if (window.pageYOffset > 400) {
        upElement.style.display = "flex";
    }
    else {
        upElement.style.display = "none";
    }
}

let headerBurger = document.querySelector('.header__burger');
let headerMenu = document.querySelector('.header__menu');
let burgerSpan = document.querySelector('.burger-span');

function burgerActive(event) {
    if (!headerBurger.classList.contains('active')) {
        headerBurger.classList.add('active');
        headerMenu.classList.add('active');
        // console.log(event.target)
    } else {
        headerBurger.classList.remove('active');
        headerMenu.classList.remove('active');
    }
}

headerBurger.addEventListener('click', burgerActive);
// burgerSpan.addEventListener('click', burgerActive);

window.onscroll = () => {
    headerMenu.classList.remove('active');
    headerBurger.classList.remove('active');
}
function menuOuterClose() {
    headerMenu.classList.remove('active');
    headerBurger.classList.remove('active');
}

document.addEventListener('click', e => {
    let target = e.target;
    let its_menu = target == headerMenu || headerMenu.contains(target);
    let its_hamburger = target == headerBurger;
    let its_burgerSpan = target == burgerSpan;
    let its_header = target == header;
    let menu_is_active = headerMenu.classList.contains('active');
    
    if (!its_menu && !its_hamburger && !its_header && !its_burgerSpan && menu_is_active) {
      menuOuterClose()
    }
  })


  // darkmode.onclick = () => {
//     if (darkmode.classList.contains('bx-moon')) {
//         darkmode.classList.replace('bx-moon', 'bx-sun');
//         document.body.classList.add('active');
//         social.classList.add('active');
//         textarea.style.color = '#fff';
//         input.forEach((item) => {
//             item.style.color = '#fff';
//         })
//         submitBtn.style.color ='#fff';
//     } else {
//         darkmode.classList.replace('bx-sun', 'bx-moon');
//         document.body.classList.remove('active');
//         social.classList.remove('active');
//         textarea.style.color = '#0f0c27';
//         input.forEach((item) => {
//             item.style.color = '#0f0c27';
//         })
//         submitBtn.style.color = '#fff';
//     }
// }

// window.addEventListener('scroll', () => {
//     header.classList.toggle('shadow', window.scrollY > 0)
// })
// document.addEventListener('click', e => {
//     let target = e.target;
//     let its_menu = target == navbar || navbar.contains(target);
//     let its_hamburger = target == menu;
//     let menu_is_active = navbar.classList.contains('active');
    
//     if (!its_menu && !its_hamburger && menu_is_active) {
//       menuOuterCloseNav()
//     }
//   })

 
    // menu.onclick = () => {
    //     navbar.classList.toggle('active');
    // }
    // window.onscroll = () => {
    //     navbar.classList.remove('active');
    // }

// function menuOuterCloseNav() {
//     navbar.classList.remove('active');
// }
