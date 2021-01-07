export default function mainPage() {
  const headline = document.createElement('h1');
  const hero = document.createElement('img');
  const desc = document.createElement('p');

  headline.textContent = 'Full Restaurant';

  hero.src = 'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfDB8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60';

  desc.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque nesciunt, a ratione laudantium harum adipisci amet mollitia provident quae voluptates, quis quidem exercitationem expedita officia iusto ad labore! Velit quae voluptates repudiandae debitis aliquam ex autem tenetur similique, eligendi error eveniet cumque ipsum ratione, itaque maiores saepe nulla quos harum. Iusto enim ducimus repellat. Debitis velit, labore maxime rerum ullam, nisi nobis aperiam vel sequi incidunt fugiat quam tenetur dicta, numquam ex error modi saepe animi. Voluptas, molestiae qui! Laborum similique molestiae inventore. Culpa placeat laudantium minus voluptate error quibusdam nesciunt mollitia aperiam obcaecati! Officiis maxime voluptas aperiam quis sed.';

  return [headline, hero, desc];
}