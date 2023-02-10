'use strict';

const color1Input = document.querySelector('.js-color1');
const color2Input = document.querySelector('.js-color2');
const color3Input = document.querySelector('.js-color3');
const namePreview = document.querySelector('.js-card-nameSurname');
const telephonePreview = document.querySelector('.js-card-telephone');
const emailPreview = document.querySelector('.js-card-mail');
const githubPreview = document.querySelector('.js-card-github');
const linkelinPreview = document.querySelector('.js-card-linkedin');
const linePreview = document.querySelector('.js-profileText');
const borderPreview = document.querySelector('.js-border');
const containerColor = document.querySelector('.js-containerColor');

function handleClick(event) {
  // event.preventDefault();

  if (event.target.id==='color1'){
    namePreview.classList.add('palette1');

  }
  if (event.target.id==='color2'){
    namePreview.classList.add('palette2');
    
  }
  if (event.target.id==='color3'){
    namePreview.classList.add('palette3');
    
  }

  console.log(event.target.id);
  console.log('hola mundo');
}

containerColor.addEventListener('click', handleClick);
