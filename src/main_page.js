export default function mainPage() {
  const content = document.querySelector('#content');
  const container = document.createElement('div');
  const btnsContainer = document.createElement('div');
  const headline = document.createElement('h1');
  const desc = document.createElement('p');
  const menu = document.createElement('button');
  const contact = document.createElement('button');

  headline.textContent = 'Full Restaurant';

  headline.classList.add('headline');

  content.style.height = '100vh';
  content.style.background = 'linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.95)), url(../assets/restaurant.jpg) no-repeat center bottom';
  content.style.backgroundSize = 'cover';

  desc.classList.add('description');
  desc.textContent = 'Place to fulfill your palate';

  container.classList.add('w-75', 'mx-auto', 'text-center');

  menu.classList.add('main-btn');
  contact.classList.add('main-btn');

  menu.textContent = 'Menu';
  contact.textContent = 'Order';

  btnsContainer.classList.add('d-flex', 'justify-content-center');
  btnsContainer.append(menu, contact);

  container.append(desc, btnsContainer);

  return [headline, container];
}