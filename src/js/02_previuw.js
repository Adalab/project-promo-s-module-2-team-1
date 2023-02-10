'use strict'
const formFill = document.querySelector('.js-fill-content');
const  namePreviuw = document.querySelector('.js-card-nameSurname');
const  jobPreviuw = document.querySelector('.js-card-profileRole');
const  telephonePreviuw = document.querySelector('.js-card-telephone');
const  emailPreviuw = document.querySelector('.js-card-mail');
const  githubPreviuw = document.querySelector('.js-card-github');
const  linkelinPreviuw = document.querySelector('.js-card-linkedin');

formFill.addEventListener('keyup',fillPreviuw);
     
function fillPreviuw(event)
{
event.preventDefault(); 


//Previuw con los valores del formulario
  switch(event.target.name){
  case 'name':
    console.log(event.target.value);

    if (event.target.value==='') namePreviuw.innerHTML= 'Nombre Apellido';
    else namePreviuw.innerHTML=event.target.value;
    break;
  case 'puesto':
    if (event.target.value==='') jobPreviuw.innerHTML= 'Front-end developer';
    else jobPreviuw.innerHTML=event.target.value;
    break;
  case 'email':
    if (event.target.value==='') emailPreviuw.removeAttribute('href');
    else emailPreviuw.href='mailto:' + event.target.value;
    break;
  case 'telephone':
    if (event.target.value==='') telephonePreviuw.removeAttribute('href');
    else telephonePreviuw.href='tel:'+ event.target.value;
    break;
  case 'github':
    if (event.target.value==='') githubPreviuw.removeAttribute('href');
    else githubPreviuw.href= 'https://www.' + event.target.value;
    break;
  case 'linkelin':
    if (event.target.value==='') linkelinPreviuw.removeAttribute('href');
    else linkelinPreviuw.href= 'https://www.' + event.target.value;
    break;
  }
}