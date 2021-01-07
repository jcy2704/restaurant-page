import mainPage from './main_page';
import * as tabs from './tabs';
import nav from './nav';

const content = document.createElement('div');
content.setAttribute('id', 'content');

document.body.appendChild(nav());
document.body.appendChild(content);

const home = document.querySelector('.home');
const menu = document.querySelector('.menu');
const contact = document.querySelector('.contact');

const carousel = document.getElementById('carouselExampleCaptions');


function reset() {
  content.innerHTML = '';
}

content.append(...mainPage());

home.addEventListener('click', () => {
  reset();
  carousel.classList.add('d-none');
  content.append(...mainPage());
});

menu.addEventListener('click', () => {
  reset();
  carousel.classList.remove('d-none');
  content.append(tabs.menu(), carousel);
});

contact.addEventListener('click', () => {
  reset();
  content.append(...tabs.contact());
});
