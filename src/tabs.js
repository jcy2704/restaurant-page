export function menu() {
  const content = document.querySelector('#content');
  const headline = document.createElement('h1');

  headline.textContent = 'Menu';
  headline.className = 'menu-headline';

  content.style.height = '100vh';
  content.style.background = 'linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.9)), url(../assets/food.jpg) no-repeat center bottom';
  content.style.backgroundSize = 'cover';

  return headline;
}

export function contact() {
  const content = document.querySelector('#content');
  const headline = document.createElement('h1');
  const sub = document.createElement('p');
  const address = document.createElement('p');

  headline.textContent = 'Call Us';
  headline.className = 'order-headline';

  sub.textContent = '212-207-8996';
  address.textContent = '17 Berkshire Road Brooklyn, NY 11211';

  content.style.height = '100vh';
  content.style.background = 'linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.9)), url(../assets/waiter.jpg) no-repeat center top';
  content.style.backgroundSize = 'cover';

  return [headline, sub, address];
}
