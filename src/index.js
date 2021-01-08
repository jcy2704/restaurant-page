import * as tabs from './tabs';
import nav from './nav';
import reset from './reset';
import mainPage from './main_page';

const content = document.createElement('div');
content.setAttribute('id', 'content');

document.body.appendChild(nav());
document.body.appendChild(content);

const home = document.querySelector('.home');
const menu = document.querySelector('.menu');
const contact = document.querySelector('.contact');

const carousel = document.getElementById('carouselExampleCaptions');

content.append(...mainPage());

home.addEventListener('click', () => {
  const car = content.removeChild(carousel);
  document.body.appendChild(car);
  reset();
  carousel.style.display = 'none';
  content.append(...mainPage());
});

menu.addEventListener('click', () => {
  reset();
  carousel.style.display = 'block';
  content.append(tabs.menu(), carousel);
});

contact.addEventListener('click', () => {
  reset();
  carousel.style.display = 'none';
  content.append(...tabs.contact(), carousel);
});