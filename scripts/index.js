const SHARE_BTN = document.querySelector('.share-btn');

// event listener
SHARE_BTN.addEventListener('click', function() {
  
  this.parentElement.classList.toggle('active');
  
});
