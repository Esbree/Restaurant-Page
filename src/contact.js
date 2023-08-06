function createContactPage() {
  const content = document.querySelector('#content');
  const pageContent = document.createElement('div');

  const email = document.createElement('p');
  email.textContent = 'burger@restaurant.com';
  pageContent.appendChild(email);

  content.appendChild(pageContent);
}

export default createContactPage;
