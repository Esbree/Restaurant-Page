import createContactPage from './contact';
import createHomePage from './homepage';
import createMenuPage from './menu';

function createTabs() {
  const content = document.querySelector('#content');

  // creating tabs
  const homeTab = document.createElement('button');
  homeTab.textContent = 'home';
  content.appendChild(homeTab);
  const menuTab = document.createElement('button');
  menuTab.textContent = 'menu';
  content.appendChild(menuTab);
  const contactTab = document.createElement('button');
  contactTab.textContent = 'contact';
  content.appendChild(contactTab);

  // add eventlisteners to tabs
  contactTab.addEventListener('click', function () {
    clearContent();
    createContactPage();
  });
  menuTab.addEventListener('click', function () {
    clearContent();
    createMenuPage();
  });
  homeTab.addEventListener('click', function () {
    clearContent();
    createHomePage();
  });
}

function clearContent() {
  const content = document.querySelector('#content');
  const pageContent = document.querySelector('.page-content');
  if (pageContent) {
    content.removeChild(pageContent);
  }
}

export default createTabs;
