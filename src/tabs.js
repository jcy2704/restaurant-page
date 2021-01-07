export function menu() {
  const headline = document.createElement('h1');
  const hero = document.createElement('img');
  const menu = document.createElement('p');

  headline.textContent = 'Menu';

  hero.src = 'https://images.unsplash.com/photo-1512485800893-b08ec1ea59b1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80';

  menu.textContent = 'xdi';

  return [headline, hero, menu];
}

export function contact() {
  const headline = document.createElement('h1');
  const hero = document.createElement('img');
  const menu = document.createElement('p');

  headline.textContent = 'Menu';

  hero.src = 'https://images.unsplash.com/photo-1512485800893-b08ec1ea59b1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80';

  menu.textContent = 'xdi';
  return [headline, hero, menu];
}
