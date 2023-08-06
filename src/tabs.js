import createContactPage from './contact';

function createTabs() {
  const content = document.querySelector('#content');

  const contactTab = document.createElement('button');
  contactTab.textContent = 'contact';

  content.appendChild(contactTab);

  contactTab.addEventListener('click', function () {
    clearContent();
    createContactPage();
  });
}

function clearContent() {
  const pageContent = document.querySelector('.page-content');
  pageContent.innerHTML = '';
}

export default createTabs;
