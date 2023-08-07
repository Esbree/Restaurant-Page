function createMenuPage() {
  const content = document.querySelector('#content');
  const pageContent = document.createElement('div');
  pageContent.classList.add('page-content');

  const menu = document.createElement('ul');
  menu.textContent = 'menu:';
  const dish1 = document.createElement('li');
  dish1.textContent = 'burger';
  const dish2 = document.createElement('li');
  dish2.textContent = 'noodles';
  const dish3 = document.createElement('li');
  dish3.textContent = 'soup';

  menu.appendChild(dish1);
  menu.appendChild(dish2);
  menu.appendChild(dish3);
  pageContent.appendChild(menu);

  content.appendChild(pageContent);
}

export default createMenuPage;
