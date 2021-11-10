const modal = document.querySelector('.modal');
const loginBtn = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.close');
const nav = document.querySelector('.animation');
const border = document.querySelector('.border1');
const popupClose = document.querySelector('.popup-header img');

loginBtn.addEventListener('click', () => {
  loginBtn.style.display = 'none';
  nav.style.display = 'none';
  modal.style.display = 'block';
  border.style.display = 'block';
});
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  loginBtn.style.display = 'block';
  nav.style.display = 'block';
  border.style.display = 'none';
});

popupClose.addEventListener('click', () => {
  document.querySelector('.popup-window').style.display = 'none';
  document.querySelector('body').style.overflow = 'auto';
});

document.querySelectorAll('.work_main button').forEach((btn) => {
  btn.addEventListener('click', () => {
    const data = {};

    if (btn.parentElement.parentElement.querySelector('img')) {
      data.image = btn.parentElement.parentElement
        .querySelector('img')
        .getAttribute('src');
      document
        .querySelector('.card-contents img')
        .setAttribute('src', data.image);
    } else {
      data.image = window
        .getComputedStyle(btn.parentElement)
        .getPropertyValue('background-image')
        .split('/');
      document
        .querySelector('.card-contents img')
        .setAttribute(
          'src',
          './workImg/' + data.image[data.image.length - 1].replace('")', '')
        );
    }
    if (btn.parentElement.querySelector('h4')) {
      data.title = btn.parentElement.querySelector('h4').innerText;
      document.querySelector('.popup-header h2').innerText = data.title;
    }
    if (btn.parentElement.querySelector('p')) {
      data.description = btn.parentElement.querySelector('p').innerText;
      document.querySelector('.card-contents p').innerText = data.description;
    }
    if (btn.parentElement.querySelector('ul')) {
      data.list = btn.parentElement.querySelector('ul').innerText;
      document.querySelector('.popup-card ul').innerHTML = '';
      for (let i = 1; i <= data.list.split('\n').length; i++) {
        document.querySelector('.popup-card ul').innerHTML +=
          '<li> ' + data.list.split('\n')[i - 1] + ' </li>';
      }
    }
    document.querySelector('.popup-window').style.display = 'flex';
    document.querySelector('body').style.overflow = 'hidden';
  });
});
