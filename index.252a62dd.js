const e=document.querySelector(".read-more-btn__about"),t=document.querySelector(".read-less-btn__about"),n=document.querySelector(".read-more-text__about");e.addEventListener("click",(function(s){n.classList.toggle("invisible"),e.classList.toggle("invisible"),t.classList.toggle("invisible")})),t.addEventListener("click",(function(){n.classList.toggle("invisible"),e.classList.toggle("invisible"),t.classList.toggle("invisible")}));const s=document.querySelector(".read-more-btn__program"),i=document.querySelector(".read-less-btn__program"),o=document.querySelector(".read-more-text__program");s.addEventListener("click",(function(){o.classList.toggle("invisible"),s.classList.toggle("invisible"),i.classList.toggle("invisible")})),i.addEventListener("click",(function(){o.classList.toggle("invisible"),s.classList.toggle("invisible"),i.classList.toggle("invisible")}));new Swiper(".swiper",{loop:!0,grabCursor:!0,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},pagination:{el:".swiper-pagination",type:"fraction"},autoplay:{delay:4e3,pauseOnMouseEnter:!0,disableOnInteraction:!1},breakpoints:{320:{spaceBetween:60,speed:900},768:{spaceBetween:60,speed:1e3},1280:{spaceBetween:100,speed:1400}}});const c=document.querySelector('[data-action="open-menu"]'),l=document.querySelector('[data-action="close-menu"]'),a=(document.querySelector(".js-backdrop"),document.querySelector(".menu__list"));function r(){document.body.classList.remove("show-menu")}c.addEventListener("click",(function(){document.body.classList.add("show-menu")})),l.addEventListener("click",r),a.addEventListener("click",(function(e){e.target.classList.contains("menu__link")&&r()}));
//# sourceMappingURL=index.252a62dd.js.map
