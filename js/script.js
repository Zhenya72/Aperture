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
      document.getElementById("more-box1").style.display = "none";
      document.getElementById("more-box2").style.display = "none";
      document.getElementById("more-box3").style.display = "none";
      document.getElementById("more-box4").style.display = "none";
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




document.getElementById("open-more-box1").addEventListener("click", function() {
  document.getElementById("more-box1").style.display = "block";
  overlay.classList.toggle('active');
  body.classList.toggle('active');
});
document.getElementById("close-box1-content").addEventListener("click", function() {
  document.getElementById("more-box1").style.display = "none";
  overlay.classList.remove('active');
  body.classList.remove('active');
});


document.getElementById("open-more-box2").addEventListener("click", function() {
  document.getElementById("more-box2").style.display = "block";
  overlay.classList.toggle('active');
  body.classList.toggle('active');
});
document.getElementById("close-box2-content").addEventListener("click", function() {
  document.getElementById("more-box2").style.display = "none";
  overlay.classList.remove('active');
  body.classList.remove('active');
});


document.getElementById("open-more-box3").addEventListener("click", function() {
  document.getElementById("more-box3").style.display = "block";
  overlay.classList.toggle('active');
  body.classList.toggle('active');
});
document.getElementById("close-box3-content").addEventListener("click", function() {
  document.getElementById("more-box3").style.display = "none";
  overlay.classList.remove('active');
  body.classList.remove('active');
});


document.getElementById("open-more-box4").addEventListener("click", function() {
  document.getElementById("more-box4").style.display = "block";
  overlay.classList.toggle('active');
  body.classList.toggle('active');
});
document.getElementById("close-box4-content").addEventListener("click", function() {
  document.getElementById("more-box4").style.display = "none";
  overlay.classList.remove('active');
  body.classList.remove('active');
});