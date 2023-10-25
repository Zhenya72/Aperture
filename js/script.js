const toggleButton = document.querySelector('.burger');
const menu = document.querySelector('.header_right');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('#body');
const menuLinks = document.querySelectorAll('.header_nav_list a');


toggleButton.addEventListener('click', (e) => {
    e.preventDefault()
    toggleButton.classList.toggle('active');
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
    body.classList.toggle('active');
});

overlay.addEventListener('click', function(event) {
    if (event.target === this) {
      toggleButton.classList.remove('active');
      menu.classList.remove('active');
      overlay.classList.remove('active');
      body.classList.remove('active');
    }
  });


menuLinks.forEach(function(link) {
  link.addEventListener('click', function() {
    toggleButton.classList.remove('active');
    menu.classList.remove('active');
    overlay.classList.remove('active');
    body.classList.remove('active');
    let target = link.getAttribute('href');
    window.location.href = target;
  });
});
