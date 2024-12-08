import signaImg from './img/signa.jpg';

function HomeContent() {
  const content = document.getElementById('content');

  const img = document.createElement('img');
  img.src = signaImg;

  const title = document.createElement('h1');
  title.innerText = 'Signa Cafe';

  const paragraph = document.createElement('p');
  paragraph.innerText = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus impedit totam iusto debitis. Qui minus consequuntur reiciendis doloribus quasi ut?';

  content.appendChild(title);
  content.appendChild(img);
  content.appendChild(paragraph);
};

export { HomeContent };
