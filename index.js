const modal = document.querySelector('.modal');
const loginBtn = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.close');
const nav = document.querySelector('.animation');
const border = document.querySelector('.border1');

loginBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
function openModal() {
    loginBtn.style.display = 'none';
    nav.style.display = 'none';
    modal.style.display = 'block';
    border.style.display = 'block';
  }

  function closeModal() {
    modal.style.display = 'none';
    loginBtn.style.display = 'block';
    nav.style.display = 'block';
    border.style.display = 'none';
  }
