// ScrollReveal تأثير
const sr = ScrollReveal ({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400, })

sr.reveal(`.nav-menu, .nav-toggle, .my-logo, .about-me-title1, .rocket, .services-title, .services-note, .works-title, .contact-title, .contact-url, .contact-message-title, .my-logo-footer, .achievements-title`)
sr.reveal(`.about-me-title2, .about-me-text, .programming-logo-shadow, .rocket-shadow, .about-me-cards, .services-cards, .slider-wrapper, .achievements-data, .message-form, .contact-note`, {origin: 'bottom'})
sr.reveal(`.programming-logo, .footer-left`, {origin: 'left'})
sr.reveal(`.quote, .home-text, .home-title, .copy-right, .footer-url`, {origin: 'right'})

// القائمة
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu') }) }

if (navClose) {
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu') }) }

const navLink = document.querySelectorAll('.nav-link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu') }
     
navLink.forEach(n => n.addEventListener('click', linkAction))

window.onscroll = function () {
    if (this.scrollY >= 700) {
        up.classList.add("show"); }
    else {
        up.classList.remove("show"); } };

// زر الطلوع للأعلى عند النزول بالموقع
let up = document.querySelector(".arrow-up");

// خاصية  إرسال رسائل البريد الإلكتروني
function SendMail() {
    var parmas = {
        user_email : document.getElementById('user_email').value,
        user_name : document.getElementById('user_name').value,
        user_message : document.getElementById('user_message').value }

    emailjs.send('service_moipf4h', 'template_cf7lhx9', parmas).then(function(res) {
        alert("تم إرسال الرسالة بنجاح ✅ " + res.status); },

        function(error) {
            alert("لم يتم إرسال الرسالة بنجاح (خطأ خدمة) ❌", error); } ) };