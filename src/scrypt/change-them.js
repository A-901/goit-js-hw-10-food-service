const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  bodyHtml: document.querySelector('body'),
  switchMarker: document.querySelector('.switch__marker'),
  jsSwitchInput: document.querySelector('.js-switch-input')
};

const handelChange = event => {  
  if (event.target.checked) {
    refs.bodyHtml.classList.remove(Theme.LIGHT);
    refs.bodyHtml.classList.add(Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);    
  } else if (!event.target.checked) {
    refs.bodyHtml.classList.remove(Theme.DARK);
    refs.bodyHtml.classList.add(Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT)    
  }
  };

refs.jsSwitchInput.addEventListener('change', handelChange);
const stabilizTheme = localStorage.getItem('theme');

console.log(stabilizTheme)

if (stabilizTheme === Theme.DARK) {
  refs.jsSwitchInput.checked = true;
  refs.bodyHtml.classList.add(Theme.DARK);
} else if (stabilizTheme === Theme.LIGHT) {
  refs.jsSwitchInput.checked = false;
  refs.bodyHtml.classList.add(Theme.LIGHT);
};




