// ScrollReveal تأثير
const sr = ScrollReveal ({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400, })

sr.reveal(`.nav-menu, .nav-toggle, .my-logo, .about-me-title1, .services-title, .services-note, .works-title, .works-num, .products-title, .products-num, .contact-title, .contact-url, .contact-message-title, .my-logo-footer`)
sr.reveal(`.about-me-title2, .about-me-text, .programming-logo-shadow, .about-me-cards, .services-cards, .projects, .products-container1, .message-form, .contact-note`, {origin: 'bottom'})
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
    else{ up.classList.remove("show") }}

// منع مستخدمين الأجهزة الأصغر من 1024px من التمرير بالموقع والقائمة مفتوحة على المنتج والسماح لهم عند إغلاقها
document.querySelector('.nav-toggle').addEventListener('click', function() { document.body.style.overflow = 'hidden' })
document.querySelector('.nav-close').addEventListener('click', function() { document.body.style.overflow = 'auto' })
document.querySelectorAll('.nav-item').forEach(function(navItem) { navItem.addEventListener('click', function() { document.body.style.overflow = 'auto' }) })

// about-me, works تعديلات بصفحة
window.addEventListener('resize', function(){
    if(window.innerWidth < 768){
        var section = document.querySelector('.about-me, #about-me');
        var brTags = section.getElementsByTagName('br');
        while(brTags.length > 0){ brTags[0].parentNode.removeChild(brTags[0]); }}});    

// عرض وإخفاء تفاصيل المشاريع
function showProject(id) { document.getElementById(id).style.display = 'block'; }
function closeProject(id) { document.getElementById(id).style.display = 'none'; }

// منع المستخدم من التمرير بالموقع عند النقر على المشروع والسماح له عند عدم النقر
document.querySelectorAll('.project').forEach(function(project) { project.addEventListener('click', function() { document.body.style.overflow = 'hidden' });});
document.querySelectorAll('.close-project').forEach(function(closeProject) { closeProject.addEventListener('click', function() { document.body.style.overflow = 'auto' });});

// products أوامر لصفحة
let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.product').forEach(product => {
    product.onclick = () => {
        preveiwContainer.style.display = 'flex';
        let name = product.getAttribute('data-name');
        previewBox.forEach(preview => {
            let target = preview.getAttribute('data-target');
            if(name == target){ 
                preview.classList.add('active');
                document.body.style.overflow = 'hidden'; }});}});

previewBox.forEach(close => {
    close.querySelector('.products-preview-close').onclick = () => {
        close.classList.remove('active');
        preveiwContainer.style.display = 'none';
        document.body.style.overflow = 'auto'; }});

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
