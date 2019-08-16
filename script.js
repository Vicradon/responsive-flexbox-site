const $ = node => document.querySelector(node)

const menu = $('.menu');
const hidden_nav = $('.hidden_nav');

menu.addEventListener('click', () => Array.from(hidden_nav.classList).includes('hidden_nav_class')?hidden_nav.classList.remove('hidden_nav_class'):hidden_nav.classList.add('hidden_nav_class'));
