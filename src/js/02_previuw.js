'use strict';
const formFill = document.querySelector('.js-fill-content');
const namePreviuw = document.querySelector('.js-card-nameSurname');
const jobPreviuw = document.querySelector('.js-card-profileRole');
const telephonePreviuw = document.querySelector('.js-card-telephone');
const emailPreviuw = document.querySelector('.js-card-mail');
const githubPreviuw = document.querySelector('.js-card-github');
const linkedinPreviuw = document.querySelector('.js-card-linkedin');
const reset = document.querySelector('.js-reset');

formFill.addEventListener('keyup', fillPreviuw);

function fillPreviuw(event) {
  event.preventDefault();

  //Previuw con los valores del formulario
  switch (event.target.name) {
    case 'name':
      if (event.target.value === '') namePreviuw.innerHTML = 'Nombre Apellido';
      else namePreviuw.innerHTML = event.target.value;
      break;
    case 'puesto':
      if (event.target.value === '')
        jobPreviuw.innerHTML = 'Front-end developer';
      else jobPreviuw.innerHTML = event.target.value;
      break;
    case 'email':
      if (event.target.value === '') emailPreviuw.removeAttribute('href');
      else emailPreviuw.href = 'mailto:' + event.target.value;
      break;
    case 'telephone':
      if (event.target.value === '') telephonePreviuw.removeAttribute('href');
      else telephonePreviuw.href = 'tel:' + event.target.value;
      break;
    case 'github':
      if (event.target.value === '') githubPreviuw.removeAttribute('href');
      else githubPreviuw.href = 'https://www.' + event.target.value;
      break;
    case 'linkedin':
      if (event.target.value === '') linkedinPreviuw.removeAttribute('href');
      else linkedinPreviuw.href = 'https://www.' + event.target.value;
      break;
  }
}

// reset del formulario

const nameForm = document.querySelector('.js-name');
const jobForm = document.querySelector('.js-job');
const emailForm = document.querySelector('.js-email');
const phoneForm = document.querySelector('.js-phone');
const linkedinForm = document.querySelector('.js-linkedin');
const githubForm = document.querySelector('.js-github');

const data = {
  palette: '',
  name: '',
  job: '',
  phone: '',
  email: '',
  linkedin: '',
  github: '',
  photo: '',
};

function handleResetClick(ev) {
  ev.preventDefault();
  data.palette = 'color1';
  data.name = '';
  data.job = '';
  data.phone = '';
  data.email = '';
  data.linkedin = '';
  data.github = '';
  data.photo = '';
  nameForm.value = data.name;
  jobForm.value = data.job;
  emailForm.value = data.email;
  phoneForm.value = data.phone;
  linkedinForm.value = data.linkedin;
  githubForm.value = data.github;
}

reset.addEventListener('click', handleResetClick);
