// ScrollReveal تأثير
const sr = ScrollReveal ({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400, })

sr.reveal(`.nav-menu, .nav-toggle, .my-logo, .about-me-title1, .services-title, .services-note, .works-title, .products-title, .achievements-title, .contact-title, .contact-url, .contact-message-title, .my-logo-footer`)
sr.reveal(`.about-me-title2, .about-me-text, .programming-logo-shadow, .about-me-cards, .services-cards, .slider-wrapper, .achievements-data, .message-form, .contact-note, .products-container1`, {origin: 'bottom'})
sr.reveal(`.programming-logo, .footer-left`, {origin: 'left'})
sr.reveal(`.quote, .home-text, .home-title, .copy-right, .footer-url`, {origin: 'right'})

// القائمة
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

if(navToggle) { navToggle.addEventListener('click', ()=> { navMenu.classList.add('show-menu') }) }
if(navClose) { navClose.addEventListener('click', ()=> { navMenu.classList.remove('show-menu') }) }

const navLink = document.querySelectorAll('.nav-link')

const linkAction = ()=> {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu') }
     
navLink.forEach(n => n.addEventListener('click', linkAction))

window.onscroll = function() {
    if(this.scrollY >= 700) { up.classList.add("show") }
    else{ up.classList.remove("show") } }

// منع مستخدمين الأجهزة الأصغر من 1024px من التمرير بالموقع والقائمة مفتوحة على المنتج والسماح لهم عند إغلاقها
document.querySelector('.nav-toggle').addEventListener('click', function() { document.body.style.overflow = 'hidden' })
document.querySelector('.nav-close').addEventListener('click', function() { document.body.style.overflow = 'auto' })
document.querySelectorAll('.nav-item').forEach(function(navItem) { navItem.addEventListener('click', function() { document.body.style.overflow = 'auto' }) })

// عرض وإخفاء المشاريع
var projectview = document.querySelectorAll(".project-view")
var slide_a = document.querySelectorAll(".slide a")
var projectviewclose = document.querySelectorAll(".project-view-close")

slide_a.forEach(function(button, index) {
    button.onclick = function() {
        projectview[index].style.display = "block" } })

projectviewclose.forEach(function(i, index) {
    i.onclick = function() {
        projectview[index].style.display = "none" } })

// عرض وإخفاء تفاصيل المنتجات
let preveiwContainer = document.querySelector('.products-preview')
let previewBox = preveiwContainer.querySelectorAll('.preview')

document.querySelectorAll('.product').forEach(product => {
    product.onclick = ()=> {
        preveiwContainer.style.display = 'flex'
        let name = product.getAttribute('data-name')
        previewBox.forEach(preview => {
            let target = preview.getAttribute('data-target')
            if(name == target){ preview.classList.add('active') } }) } })
        
previewBox.forEach(close => {
    close.querySelector('.products-preview-close').onclick = ()=> {
    close.classList.remove('active')
    preveiwContainer.style.display = 'none' } })

// منع المستخدم من التمرير بالموقع عند النقر على المنتج والسماح له عند عدم النقر
document.querySelector('.product').addEventListener('click', function() { document.body.style.overflow = 'hidden' })
document.querySelector('.products-preview-close').addEventListener('click', function() { document.body.style.overflow = 'auto' })

// خاصية إرسال رسائل البريد الإلكتروني
function sendMail() {
    var parmas = {
        user_email : document.getElementById('user_email').value,
        user_name : document.getElementById('user_name').value,
        user_message : document.getElementById('user_message').value }

    emailjs.send('service_moipf4h', 'template_cf7lhx9', parmas).then(function(res) {
        alert("تم إرسال الرسالة بنجاح ✅ " + res.status) },

        function(error) {
            alert("لم يتم إرسال الرسالة بنجاح (خطأ خدمة) ❌", error) } ) }

// زر الطلوع للأعلى عند النزول بالموقع
let up = document.querySelector(".arrow-up")