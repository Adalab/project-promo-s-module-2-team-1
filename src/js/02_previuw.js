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

const pathDefault='./assets/images/avatar.png';
//hay que cambiar la ruta para que funcione con docs
// const pathDefault='../images/default.png';
//importante
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

// reset del formulario

function handleResetClick(ev) {
  ev.preventDefault();
  data.palette = '1';
  data.name = '';
  data.job = '';
  data.phone = '';
  data.photo = pathDefault;
  data.email = '';
  data.linkedin = '';
  data.github = '';
  color1.checked = true;
  nameForm.value = data.name;
  jobForm.value = data.job;
  emailForm.value = data.email;
  phoneForm.value = data.phone;
  linkedinForm.value = data.linkedin;
  githubForm.value = data.github;
  photoForm.style.backgroundImage='';
  photoPreview.style.backgroundImage=`url(${data.photo})`;
  //funciones para cambiar a la paleta1
  removeColors();
  addColor('palette1');
  //ocultar botones
  shareMessage.classList.add('hiddenField');
  twitterButton.classList.add('hiddenField');
  shareUrl.classList.add('hiddenField');
  //vaciar el contenido del input de tipo file
  fileField.value='';
  
  //reseteamos el localstorage y el form
  localStorage.setItem('formData', JSON.stringify(data));
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
  
  if (photoForm.style.backgroundImage === '')
     photoPreview.style.backgroundImage = `url(${pathDefault})`;
  else {
    photoPreview.style.backgroundImage = photoForm.style.backgroundImage;
  }
}

reset.addEventListener('click', handleResetClick);

