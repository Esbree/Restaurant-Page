function createHomePage() {
  const content = document.querySelector('#content');
  const pageContent = document.createElement('div');
  pageContent.classList.add('page-content');

  // create and append image element
  const image = document.createElement('img');
  image.src =
    'https://image.stern.de/8207776/t/3C/v4/w1440/r1.7778/-/burger.jpg';
  image.width = 500;
  pageContent.appendChild(image);

  // create and append headline element
  const headline = document.createElement('h1');
  headline.textContent = 'welcome to our beautiful restaurant!';
  pageContent.appendChild(headline);

  // create and append copy element
  const copy = document.createElement('p');
  copy.textContent = 'we serve the best burgers you can imagine.';
  pageContent.appendChild(copy);
  content.appendChild(pageContent);
}

export default createHomePage;
