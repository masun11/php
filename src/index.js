if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

function darkModeToggle(){
    let x = document.documentElement;
    console.log(x);
    ($('html').hasClass("dark")) ? $('html').removeClass("dark") :  $('html').addClass("dark");
}
  // Whenever the user explicitly chooses light mode
//   localStorage.theme = 'light'
  
//   // Whenever the user explicitly chooses dark mode
//   localStorage.theme = 'dark'
  
//   // Whenever the user explicitly chooses to respect the OS preference
//   localStorage.removeItem('theme')
