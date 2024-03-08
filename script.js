const hamburger = document.querySelector('.hamburger-menu');
  const navList = document.querySelector('.nav-list');
  const closeButton = document.querySelector('.close-menu')
  
  hamburger.addEventListener('click', function() {
    navList.classList.toggle('active');
    
  });
  closeButton.addEventListener('click', function() {
    navList.classList.remove('active');
  });