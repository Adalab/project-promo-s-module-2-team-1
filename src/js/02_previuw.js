'use strict';

const namePreviuw = document.querySelector('.js-card-nameSurname');
const jobPreviuw = document.querySelector('.js-card-profileRole');
const telephonePreviuw = document.querySelector('.js-card-telephone');
const emailPreviuw = document.querySelector('.js-card-mail');
const githubPreviuw = document.querySelector('.js-card-github');
const linkedinPreviuw = document.querySelector('.js-card-linkedin');
const reset = document.querySelector('.js-reset');
const photoPreview = document.querySelector('.js__profile-image');
const nameForm = document.querySelector('.js-name');
const jobForm = document.querySelector('.js-job');
const emailForm = document.querySelector('.js-email');
const phoneForm = document.querySelector('.js-phone');
const linkedinForm = document.querySelector('.js-linkedin');
const githubForm = document.querySelector('.js-github');
const photoForm = document.querySelector('.js__profile-preview');
const color1 = document.querySelector('.js-color1');
const color2 = document.querySelector('.js-color2');
const color3 = document.querySelector('.js-color3');
//propuesta monica:mejora para validar los input
function isValidName(name) {
  return /^[a-zA-ZÀ-ÿ\u00f1\u00d1 ]+$/.test(name);
}

// nameForm.addEventListener ('blur', checkInputName);
function checkInputName() {
  if (nameForm.value) {
    if (!isValidName(nameForm.value))
      nameForm.classList.add('form--input__error');
    else nameForm.classList.remove('form--input__error');
  }
}
//monica:hasta aqui

nameForm.addEventListener('keyup', handleInputName);
function handleInputName() {
  data.name = nameForm.value;
  updateForm();
  localStorage.setItem('formData', JSON.stringify(data));
}

jobForm.addEventListener('keyup', handleInputJob);
function handleInputJob() {
  data.job = jobForm.value;
  updateForm();
  localStorage.setItem('formData', JSON.stringify(data));
}

emailForm.addEventListener('keyup', handleInputEmail);
function handleInputEmail() {
  data.email = emailForm.value;
  updateForm();
  localStorage.setItem('formData', JSON.stringify(data));
}

phoneForm.addEventListener('keyup', handleInputPhone);
function handleInputPhone() {
  data.phone = phoneForm.value;
  updateForm();
  localStorage.setItem('formData', JSON.stringify(data));
}

linkedinForm.addEventListener('keyup', handleInputLinkedin);
function handleInputLinkedin() {
  data.linkedin = linkedinForm.value;
  updateForm();
  localStorage.setItem('formData', JSON.stringify(data));
}

githubForm.addEventListener('keyup', handleInputGithub);
function handleInputGithub() {
  data.github = githubForm.value;
  updateForm();
  localStorage.setItem('formData', JSON.stringify(data));
}

//propuesta monica:creo que esto no es necesario

// photoForm.addEventListener ('keyup', handleInputPhoto);
// function handleInputPhoto ()
// {
//   // data.photo = photoForm.value;
//   data.photo = photoForm.style.backgroundImage;
//   updateForm ();
// }
//monica:hasta aqui

// const formFill = document.querySelector(".js-fill-content");
// formFill.addEventListener('keyup', fillPreviuw);
/*function fillPreviuw(event) {
  event.preventDefault();

  //Previuw con los valores del formulario
  /*switch (event.target.name) {
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
}*/

// reset del formulario

function handleResetClick(ev) {
  ev.preventDefault();
  // const idPallete = document.getElementById('1');
  // idPallete.setAttribute('checked', true);

  // const idPallete = document.getElementById('2');
  // idPallete.setAttribute('checked', false);

  // const idPallete = document.getElementById('3');
  // idPallete.setAttribute('checked', false);

  // console.log(idPallete);
  data.palette = '1';
  data.name = '';
  data.job = '';
  data.phone = '';
  data.photo = '';
  data.email = '';
  data.linkedin = '';
  data.github = '';
  color1.checked = true;
  color2.checked = false;
  color3.checked = false;
  nameForm.value = data.name;
  jobForm.value = data.job;
  emailForm.value = data.email;
  phoneForm.value = data.phone;
  linkedinForm.value = data.linkedin;
  githubForm.value = data.github;
  if (data.photo){
  photoForm.style.backgroundImage = `url(${data.photo})`;
  }
  else photoForm.style.backgroundImage='';

  //propuesta monica:añadí estas dos funciones para cambiar
  //a la paleta1
  removeColors();
  addColor('palette1');
  //monica:hasta aqui
  updateForm();
}

function updateForm() {
  if (nameForm.value === '') namePreviuw.innerHTML = 'Nombre Apellido';
  else namePreviuw.innerHTML = nameForm.value;

  if (jobForm.value === '') jobPreviuw.innerHTML = 'Front-end developer';
  else jobPreviuw.innerHTML = jobForm.value;

  if (emailForm.value === '') emailPreviuw.classList.add('disabled-link');
  else {
    emailPreviuw.href = 'mailto:' + emailForm.value;
    emailPreviuw.classList.remove('disabled-link');
  }
  if (phoneForm.value === '') telephonePreviuw.classList.add('disabled-link');
  else {
    telephonePreviuw.href = 'tel:' + phoneForm.value;
    telephonePreviuw.classList.remove('disabled-link');
  }
  if (githubForm.value === '') githubPreviuw.classList.add('disabled-link');
  else{ 
    githubPreviuw.href = 'https://www.' + githubForm.value;
    githubPreviuw.classList.remove('disabled-link');
  }

  if (linkedinForm.value === '') linkedinPreviuw.classList.add('disabled-link');
  else {
    linkedinPreviuw.href = 'https://www.' + linkedinForm.value;
    linkedinPreviuw.classList.remove('disabled-link');
  }
  // const ruta= '../assets/images/default.png';
  const ruta= './assets/images/default.png';
  if (photoForm.style.backgroundImage === '')
     photoPreview.style.backgroundImage = `url(${ruta})`;
  else {
    photoPreview.style.backgroundImage = photoForm.style.backgroundImage;
  }
}

reset.addEventListener('click', handleResetClick);

// function fillPreviuw(event) {
//   event.preventDefault();
//   updateForm ();
// }

//reutilizamos la función updateForm en el reset para que vacíe la tarjeta.

// nameForm.addEventListener('keyup', fillPreviuw);
// jobForm.addEventListener('keyup', fillPreviuw);
// emailForm.addEventListener('keyup', fillPreviuw);
// phoneForm.addEventListener('keyup', fillPreviuw);
// linkedinForm.addEventListener('keyup', fillPreviuw);
// githubForm.addEventListener('keyup', fillPreviuw);
// photoForm.addEventListener('keyup', fillPreviuw);
