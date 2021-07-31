let menuBurger=document.querySelector(".menu__burger"),menuClose=document.querySelector(".menu__close");function menuClick(){menuBurger.classList.toggle("active"),menuClose.classList.toggle("active")}menuBurger.addEventListener("click",menuClick,!1),menuClose.addEventListener("click",menuClick,!1);let navLink=document.querySelectorAll(".menu__link");navLink.forEach(function(e){e.addEventListener("click",menuClick,!1)});var elem=$("body > header"),doc=$(document);function scrolled(){var e=100<doc.scrollTop();elem.toggleClass("scrolled",e)}$(window).on({scroll:scrolled});let acc=document.getElementsByClassName("qa__current"),i;for(i=0;i<acc.length;i++)acc[i].addEventListener("click",function(){this.classList.toggle("active");var e=this.nextElementSibling;e.style.maxHeight?e.style.maxHeight=null:e.style.maxHeight=e.scrollHeight+"px"});let btnForm=document.querySelectorAll(".form__button, .popup__close"),openForm=document.querySelector(".popup"),formClick=function(){openForm&&openForm.classList.toggle("active")};btnForm.forEach(function(e){e.addEventListener("click",formClick,!1)});let btnModal=document.querySelectorAll(".modal__button, .modal__close"),openModal=document.querySelector(".modal"),modalClick=function(){openModal&&openModal.classList.toggle("active")};function validateForms(e,t){$(e).each(function(){$(this).validate({rules:{name:"required",tel:"required"},messages:{name:"Пожалуйста, введите ваше Имя",tel:"Пожалуйста, введите ваш номер телефона"},submitHandler:t})})}btnModal.forEach(function(e){e.addEventListener("click",modalClick,!1)}),window.addEventListener("DOMContentLoaded",function(){[].forEach.call(document.querySelectorAll(".tel"),function(e){var i;function t(e){e.keyCode&&(i=e.keyCode),this.selectionStart<3&&e.preventDefault();var t="+7 (___) ___ ____",n=0,l=t.replace(/\D/g,""),o=this.value.replace(/\D/g,""),c=t.replace(/[_\d]/g,function(e){return n<o.length?o.charAt(n++)||l.charAt(n):e});-1!=(n=c.indexOf("_"))&&(n<5&&(n=3),c=c.slice(0,n));t=t.substr(0,this.value.length).replace(/_+/g,function(e){return"\\d{1,"+e.length+"}"}).replace(/[+()]/g,"\\$&");(!(t=new RegExp("^"+t+"$")).test(this.value)||this.value.length<5||47<i&&i<58)&&(this.value=c),"blur"==e.type&&this.value.length<5&&(this.value="")}e.addEventListener("input",t,!1),e.addEventListener("focus",t,!1),e.addEventListener("blur",t,!1),e.addEventListener("keydown",t,!1)})}),validateForms("form",function(t){$.ajax({type:"POST",url:"/mailer/smart.php",data:$(t).serialize()}).done(function(e){$(t).find("input").val(""),alert(e.message),$(t).trigger("reset")})});
const popup = document.querySelector('.popup')
const body = document.querySelector('body')
const formButton = document.querySelectorAll('.form__button')
console.log(formButton);
const close = document.querySelector('.popup__close')
console.log(close);

for (let i = 0; i < formButton.length; i++) {
    formButton[i].addEventListener('click', () => {
        if (popup.classList.contains('active') == true) {
            body.style.overflow = 'hidden' 
        }
    })    
}

close.addEventListener('click', ()=>{
    body.style.overflow = 'unset'
})