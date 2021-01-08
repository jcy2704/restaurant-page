import * as tabs from './tabs';
import nav from './nav';
import reset from './reset';
import mainPage from './main_page';
import carousel from './carousel';

const content = document.querySelector('#content');

document.body.append(nav(), content, carousel());

const home = document.querySelector('.home');
const menu = document.querySelector('.menu');
const contact = document.querySelector('.contact');

const carouselCont = document.getElementById('carouselExampleCaptions');

content.append(...mainPage());

home.addEventListener('click', () => {
  const car = content.removeChild(carouselCont);
  document.body.appendChild(car);
  reset();
  carouselCont.style.display = 'none';
  content.append(...mainPage());
});

menu.addEventListener('click', () => {
  reset();
  carouselCont.style.display = 'block';
  content.append(tabs.menu(), carouselCont);
});

contact.addEventListener('click', () => {
  reset();
  carouselCont.style.display = 'none';
  content.append(...tabs.contact(), carouselCont);
});