const themeSelector = document.querySelector('#theme-select');
const logo = document.querySelector('.logo');

function changeTheme() {
  const currentTheme = themeSelector.value;

  if (currentTheme === 'dark') {
    document.body.classList.add('dark');
    logo.src = "images/byui-logo-dark.png";
  } 
 
  else {
    document.body.classList.remove('dark');
    logo.src = "images/byui-logo_blue.webp";
  }
}

themeSelector.addEventListener('change', changeTheme);