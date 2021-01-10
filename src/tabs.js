export function menu() {
  const content = document.querySelector('#content');
  const headline = document.createElement('h1');

  headline.textContent = 'Menu';
  headline.className = 'menu-headline';

  content.style.height = '100vh';
  content.style.background = 'linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.95)), url(../assets/food.jpg) no-repeat center bottom';
  content.style.backgroundSize = 'cover';

  return headline;
}

export function contact() {
  const content = document.querySelector('#content');
  const headline = document.createElement('h1');
  const sub = document.createElement('p');
  const address = document.createElement('p');
  const container = document.createElement('div');

  headline.textContent = 'Call Us';
  headline.className = 'order-headline';

  sub.classList.add('sub');
  address.classList.add('address');

  sub.textContent = '212-207-8996';
  address.textContent = '17 Berkshire Road Brooklyn, NY 11211';

  container.classList.add('w-75', 'mx-auto', 'text-center');
  container.append(sub, address);

  content.style.height = '100vh';
  content.style.background = 'linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.95)), url(../assets/waiter.jpg) no-repeat center top';
  content.style.backgroundSize = 'cover';

  return [headline, container];
}
