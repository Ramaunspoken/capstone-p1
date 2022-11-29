
const gElem = (x) => document.querySelector(x);
const gElemAll = (x) => document.querySelectorAll(x);

const toggleMnav = () => gElem('.m-nav').classList.toggle('df');

const menu = gElem('.Bar-icon');
menu.addEventListener('click', toggleMnav);

gElemAll('.m-nav .nav-link').forEach((item) => {
  item.addEventListener('click', toggleMnav);
});

gElem('.cross-icon').addEventListener('click', toggleMnav);

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');
window.onscroll = () => {
  sections.forEach((section) => {
    const top = window.scrollY;
    const offset = section.offsetTop - 200;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    if (top >= offset && top < height + offset) {
      navLinks.forEach((link) => {
        link.classList.remove('active');
        document.querySelectorAll(`a[href*=${id}]`).forEach((item) => item.classList.add('active'));
      });
    }
  });
};