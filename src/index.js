import './css/styles.css';
import menu from './menu.json';
import menuList from './tamplates/menu.hbs';

const ref = {
    menu: document.querySelector('.js-menu'),
    themeSwitch: document.querySelector('#theme-switch-toggle'),
};

const markup = menuList(menu);
ref.menu.insertAdjacentHTML('beforeend', markup);


// ref.themeSwitch.addEventListener('change', () => {

//     const currentTheme = localStorage.getItem("theme");

// console.log(currentTheme)
//     document.body.classList.toggle('dark-theme')
// });

const prefersDarkTheme = window.matchMedia("(prefers-color-theme: light)");
console.log(prefersDarkTheme)

const currentTheme = localStorage.getItem("theme");
if (currentTheme === "dark") {
  document.body.classList.toggle("dark-theme");
} else if (currentTheme === "light") {
  document.body.classList.toggle("light-theme");
}

ref.themeSwitch.addEventListener("click", function () {
  if (prefersDarkTheme.matches) {
    document.body.classList.toggle("light-theme");
    var theme = document.body.classList.contains("light-theme")
      ? "light"
      : "dark";
  } else {
    document.body.classList.toggle("dark-theme");
    var theme = document.body.classList.contains("dark-theme")
      ? "dark"
      : "light";
  }
  localStorage.setItem("theme", theme);
});





