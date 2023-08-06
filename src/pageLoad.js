import createHomePage from './homepage';
import createTabs from './tabs';

function initialLoad() {
  createTabs();
  createHomePage();
}

export default initialLoad;
