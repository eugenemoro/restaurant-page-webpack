function AboutContent() {
  const content = document.getElementById('content');

  const title = document.createElement('h1');
  title.innerText = 'About Us';
  content.appendChild(title);

  const contacts = document.createElement('div');
  contacts.className = 'contacts';

  const phoneNumber = document.createElement('p');
  phoneNumber.innerText = 'Phone +62 111 111 11 11';

  const instagram = document.createElement('p');
  instagram.innerText = 'Out instagram: @Instagram';

  contacts.appendChild(phoneNumber);
  contacts.appendChild(instagram);

  content.appendChild(contacts);
}

export { AboutContent };