const modal = document.querySelector('.modal');
const loginBtn = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.close');
const nav = document.querySelector('.animation');
const border = document.querySelector('.border1');
const modal1 = document.querySelector('.popup-window');
const closeBtn1 = document.querySelector('.popup-header img');
const title = document.querySelector('.popup-header h2');
const img = document.querySelector('.card-contents img');
const list = document.querySelector('.popup-card ul');
const description = document.querySelector('.card-contents-info p');

const project = [
  {
    id: 1,
    hedaer: 'Multi-Post Stories',
    description: `A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a standard dummy text.`,
    image: './workImg/placeholder.png',
    technologies: ['Html', 'css', 'bootstrap', 'Ruby'],
  },
  {
    id: 2,
    image: './WorkImg/workss.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
  },
  {
    id: 3,
    hedaer: 'Data DashboardHealthcare',
    description: `A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a standard dummy text.`,
    image: './workImg/work.png',
    technologies: ['Html', 'bootstrap', 'Ruby'],
  },
  {
    id: 4,
    hedaer: 'Website Protfolio',
    description: `A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a standard dummy text.`,
    image: './workImg/work.png',
    technologies: ['Html', 'bootstrap', 'Ruby'],
  },
  {
    id: 5,
    hedaer: 'Profesional Art Printing Data More',
    description: `A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a standard dummy text.`,
    image: './workImg/work.png',
    technologies: ['Html', 'bootstrap', 'Ruby'],
  },
  {
    id: 6,
    hedaer: 'Data DashboardHealthcare',
    description: `A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a standard dummy text.`,
    image: './workImg/work.png',
    technologies: ['Html', 'bootstrap', 'Ruby'],
  },
  {
    id: 7,
    hedaer: 'Website Protfolio',
    description: `A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a standard dummy text.`,
    image: './workImg/work.png',
    technologies: ['Html', 'bootstrap', 'Ruby'],
  },
];

//For nav menu
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


// for popupwindow
closeBtn1.addEventListener('click', () => {
  modal1.style.display = 'none';
  document.querySelector('body').style.overflow = 'auto';
});

document.querySelectorAll('#work button').forEach((btn) => {
  btn.addEventListener('click', () => {
    const id = Number(btn.className.match(/\d/)[0]);
    const data = project.find((d) => d.id === id);
    if (data.header) {
      title.innerText = data.hedaer;
    }
    if (data.technologies) {
      list.innerHTML = '';
      data.technologies.forEach((m) => {
        list.innerHTML = `${list.innerHTML}<li>${m}</li>`;
      });
    }
    description.innerText = data.description;
    img.setAttribute('src', data.image);
    modal1.style.display = 'flex';
    document.querySelector('body').style.overflow = 'hidden';
  });
});

//form validation
const Name = document.getElementById('Name')
const email = document.getElementById('email')
const form = document.getElementById('form')
const message = document.getElementById('message')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let messages = []
  if (Name.value === '' || Name.value == null) {
    messages.push('Name is required')
  }

  if (email.value === '' || email.value == null) {
    messages.push('Email is required')
  }

  if (message.value.length <= 5) {
    messages.push('message must be longer than 5 characters')
  }

  if (message.value.length >= 500) {
    messages.push('message must be less than 500 characters')
  }

  if (message.value === 'message') {
    messages.push('message cannot be message')
  }

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})
