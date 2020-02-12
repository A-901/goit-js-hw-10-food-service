import menuTemplate from '../templates/menulibery.hbs';
import menu from '../json/menu.json';

const refs = {
  jsMenu: document.querySelector('.js-menu')
};

const marckup = menu.map( item => 
  menuTemplate(item)).join (' ');

  refs.jsMenu.innerHTML = marckup;
  
   


