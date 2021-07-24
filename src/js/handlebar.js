import menu from '../menu.json';
import menuList from '../tamplates/menu.hbs';

const menuCards = document.querySelector('.js-menu');
const markup = menuList(menu);

menuCards.insertAdjacentHTML('beforeend', markup);