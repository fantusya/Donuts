!function(){var e="invisible",t=document.querySelector(".read-more-btn__about"),c=document.querySelector(".read-less-btn__about"),n=document.querySelector(".read-more-text__about");t.addEventListener("click",(function(o){n.classList.toggle("".concat(e)),t.classList.toggle("".concat(e)),c.classList.toggle("".concat(e))})),c.addEventListener("click",(function(){n.classList.toggle("".concat(e)),t.classList.toggle("".concat(e)),c.classList.toggle("".concat(e))}));var o=document.querySelector(".read-more-btn__program"),a=document.querySelector(".read-less-btn__program"),s=document.querySelector(".read-more-text__program");o.addEventListener("click",(function(){s.classList.toggle("".concat(e)),o.classList.toggle("".concat(e)),a.classList.toggle("".concat(e))})),a.addEventListener("click",(function(){s.classList.toggle("".concat(e)),o.classList.toggle("".concat(e)),a.classList.toggle("".concat(e))}));new Swiper(".reviews__slider",{loop:!0,grabCursor:!0,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},pagination:{el:".swiper-pagination",type:"fraction"},autoplay:{delay:4e3,pauseOnMouseEnter:!0,disableOnInteraction:!1},effect:"creative",creativeEffect:{prev:{shadow:!1,translate:["-125%",0,-800],rotate:[0,0,-90]},next:{shadow:!1,translate:["125%",0,-800],rotate:[0,0,90]}},breakpoints:{320:{spaceBetween:60,speed:900},768:{spaceBetween:60,speed:1e3},1280:{spaceBetween:60,speed:1e3}}});var r=document.querySelector('[data-action="open-menu"]'),i=document.querySelector('[data-action="close-menu"]'),l=(document.querySelector(".js-backdrop"),document.querySelector(".menu__list"));function d(){document.body.classList.remove("show-menu")}r.addEventListener("click",(function(){document.body.classList.add("show-menu")})),i.addEventListener("click",d),l.addEventListener("click",(function(e){e.target.classList.contains("menu__link")&&d()}))}();
//# sourceMappingURL=index.eb45eccc.js.map