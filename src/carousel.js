export default function carousel() {
  const carouselMain = document.createElement('div');
  const indicator = document.createElement('ol');
  const carouselInnerContainer = document.createElement('div');
  const carouselItemOne = document.createElement('div');
  const carouselItemTwo = document.createElement('div');
  const carouselItemThree = document.createElement('div');
  const carouselItemFour = document.createElement('div');
  const previous = document.createElement('a');
  const next = document.createElement('a');

  carouselMain.setAttribute('id', 'carouselExampleCaptions');
  carouselMain.setAttribute('data-bs-ride', 'carousel');
  carouselMain.classList.add('carousel', 'slide');

  indicator.classList.add('carousel-indicators', 'w-50', 'mx-auto');

  for (let i = 0; i < 4; i += 1) {
    const li = document.createElement('li');
    li.setAttribute('data-bs-target', '#carouselExampleCaptions');
    li.setAttribute('data-bs-slide-to', `${i}`);

    if (i === 0) {
      li.classList.add('active');
    }
    indicator.appendChild(li);
  }

  carouselInnerContainer.classList.add('carousel-inner');

  const carouselItems = [carouselItemOne, carouselItemTwo, carouselItemThree, carouselItemFour];

  carouselItems.forEach((carousel) => {
    const img = document.createElement('img');
    const div = document.createElement('div');
    const h5 = document.createElement('h5');
    const p = document.createElement('p');

    img.classList.add('d-block', 'food', 'w-50', 'mx-auto');
    div.classList.add('carousel-caption', 'd-none', 'd-md-block', 'w-50', 'mx-auto');


    carousel.classList.add('carousel-item');
    if (carousel === carouselItemOne) {
      carousel.classList.add('active');
    }

    div.append(h5, p);
    carousel.append(img, div);
  });

  const food = ['breakfast.jpg', 'lunch.jpg', 'dinner.jpg', 'dessert.jpg'];
  const capTitle = ['Breakfast Special', 'Lunch Spicy Special', 'Dinner Steak Special', 'Dreamy Cream'];

  carouselItems.forEach((carousel, index) => {
    const img = carousel.querySelector('img');
    img.src = `../assets/food/${food[index]}`;

    const div = carousel.querySelector('div');
    const h5 = div.querySelector('h5');
    const p = div.querySelector('p');

    h5.textContent = capTitle[index];

    p.textContent = 'Nulla vitae elit libero, a pharetra augue mollis interdum.';

    carouselInnerContainer.appendChild(carousel);
  });

  previous.classList.add('carousel-control-prev');
  previous.href = '#carouselExampleCaptions';
  previous.setAttribute('role', 'button');
  previous.setAttribute('data-bs-slide', 'prev');

  next.classList.add('carousel-control-next');
  next.href = '#carouselExampleCaptions';
  next.setAttribute('role', 'button');
  next.setAttribute('data-bs-slide', 'next');

  [previous, next].forEach((link) => {
    const a = document.createElement('span');
    const b = document.createElement('span');
    a.setAttribute('aria-hidden', 'true');
    b.classList.add('visually-hidden');

    if (link === previous) {
      a.classList.add('carousel-control-prev-icon');
      b.textContent = 'Previous';
    } else {
      a.classList.add('carousel-control-next-icon');
      b.textContent = 'Next';
    }

    link.append(a, b);
  });

  carouselMain.append(indicator, carouselInnerContainer, previous, next);

  return carouselMain;
}
