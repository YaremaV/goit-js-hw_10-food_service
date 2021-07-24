const themeSwitch = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

themeSwitch.addEventListener('change', changeTheme);
getCurrentTheme();

function changeTheme() {
    body.classList.toggle(Theme.LIGHT);
    body.classList.toggle(Theme.DARK);
    
    localStorage.setItem('theme', body.classList)
}

function getCurrentTheme() {
  const localTheme = localStorage.getItem('theme');
  if (localTheme) {
    body.classList.add(localTheme);
    themeSwitch.checked = localTheme === Theme.LIGHT ? false : true;
  } else {
    body.classList.add(Theme.LIGHT);
  }
}

// function currentTheme(evt) {
//     if (themeSwitch.checked === true) {
//         body.classList.add(Theme.DARK);
//         localStorage.setItem('theme',Theme.DARK)
//     } else if (themeSwitch.checked === false) {
//          body.classList.add(Theme.LIGHT);
//         localStorage.setItem('theme',Theme.LIGHT)
//     }
// }

// window.onload=function(){
//   var theme = localStorage.getItem('data-theme');
//   if(theme=='light'){
//     document.documentElement.setAttribute('data-theme', 'light');
//   }else if(theme==''){
//     document.documentElement.setAttribute('data-theme', 'light');
//   }else if(theme=='dark'){
//     document.documentElement.setAttribute('data-theme' , 'dark');
//     document.getElementById("theme-switch-toggle").checked = true;
//   }
// }

// function toggle(a) {
//   console.log(a)
//   if(a.checkbox.checked==true){
//     document.documentElement.setAttribute('data-theme', 'dark');
//     localStorage.setItem('data-theme','dark');
//   }
//   else if(a.checkbox.checked==false){
//     document.documentElement.setAttribute('data-theme', 'light');
//     localStorage.setItem('data-theme','light');
//   }
// };

// const prefersDarkTheme = window.matchMedia("light-theme");
// console.log(prefersDarkTheme)

// const currentTheme = localStorage.getItem("theme");
// if (currentTheme === "light") {
//     document.body.classList.remove("dark-theme");
//     document.body.classList.add("light-theme");
//   } else if (currentTheme === "dark") {
//     document.body.classList.remove("light-theme");
//     document.body.classList.add("dark-theme");
// }

// ref.themeSwitch.addEventListener("click", function () {
//   if (prefersDarkTheme.matches) {
//     document.body.classList.toggle("light-theme");
//     var theme = document.body.classList.contains("light-theme")
//       ? "light"
//       : "dark";
//   } else {
//     document.body.classList.toggle("dark-theme");
//     var theme = document.body.classList.contains("dark-theme")
//       ? "dark"
//       : "light";
//   }
//   localStorage.setItem("theme", theme);
// });