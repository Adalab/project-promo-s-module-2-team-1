'use strict'
const formFill = document.querySelector('.js-fill-content');
formFill.addEventListener('keyup',fillPreviuw);
// formFill.addEventListener('change',fillPreviuw);
function fillPreviuw(event)
{
event.preventDefault(); 
//Definimos variables para las clases de la preview
const  namePreviuw = document.querySelector('.js-card-nameSurname');

const  jobPreviuw = document.querySelector('.js-card-profileRole');
    const  telephonePreviuw = document.querySelector('.js-card-telephone');
    const  emailPreviuw = document.querySelector('.js-card-mail');
    const  githubPreviuw = document.querySelector('.js-card-github');
    const  linkelinPreviuw = document.querySelector('.js-card-linkedin');
    
    //Previuw con los valores del formulario
    switch(event.target.name){
    case 'name':
        namePreviuw.innerHTML=event.target.value;
        break;
    case 'puesto':
        jobPreviuw.innerHTML=event.target.value;
        break;
    case 'email':
        emailPreviuw.href=event.target.value;
        break;
    case 'telephone':
        telephonePreviuw.href=event.target.value;
        break;
    case 'github':
        githubPreviuw.href=event.target.value;
        break;
    case 'linkelin':
        linkelinPreviuw.href=event.target.value;
        break;
    }
   
}