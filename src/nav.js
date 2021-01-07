export default function nav() {
  const navbar = document.createElement('nav');
  const navList = document.createElement('ul');
  const home = document.createElement('button');
  const menu = document.createElement('button');
  const contact = document.createElement('button');

  navList.classList.add('d-flex', 'p-3', 'pe-5', 'justify-content-end');
  navbar.classList.add('w-100', 'float-end');

  home.classList.add('home');
  menu.classList.add('menu');
  contact.classList.add('contact');

  home.textContent = 'HOME';
  menu.textContent = 'MENU';
  contact.textContent = 'ORDER';

  [home, menu, contact].forEach((elem) => {
    const li = document.createElement('li');
    li.classList.add('nav-item');
    li.appendChild(elem);
    navList.appendChild(li);
  });

  navbar.appendChild(navList);

  return navbar;
}