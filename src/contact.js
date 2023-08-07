function createContactPage() {
  const content = document.querySelector('#content');
  const pageContent = document.createElement('div');
  pageContent.classList.add('page-content');

  const email = document.createElement('p');
  email.textContent = 'burger@restaurant.com';
  pageContent.appendChild(email);

  content.appendChild(pageContent);
}

export default createContactPage;
