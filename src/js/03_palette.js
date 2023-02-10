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
function removeColors(){
  namePreview.classList.remove('palette1');
  namePreview.classList.remove('palette2');
  namePreview.classList.remove('palette3');
  telephonePreview.classList.remove('palette1');
  telephonePreview.classList.remove('palette2');
  telephonePreview.classList.remove('palette3');
  githubPreview.classList.remove('palette1');
  githubPreview.classList.remove('palette2');
  githubPreview.classList.remove('palette3');
  linkelinPreview.classList.remove('palette1');
  linkelinPreview.classList.remove('palette2');
  linkelinPreview.classList.remove('palette3');
  emailPreview.classList.remove('palette1');
  emailPreview.classList.remove('palette2');
  emailPreview.classList.remove('palette3');
  linePreview.classList.remove ('palette1');
  linePreview.classList.remove ('palette2');
  linePreview.classList.remove ('palette3');
  borderPreview.classList.remove ('palette1');
  borderPreview.classList.remove ('palette2');
  borderPreview.classList.remove ('palette3');
}
function handleClick(event) {
  // event.preventDefault(); //nos impide seleccionar el radio button

  if (event.target.id==='color1'){
    removeColors();
    namePreview.classList.add('palette1');
    telephonePreview.classList.add ('palette1');
    emailPreview.classList.add ('palette1');
    githubPreview.classList.add ('palette1');
    linkelinPreview.classList.add ('palette1');
    linePreview.classList.add ('palette1');
    borderPreview.classList.add ('palette1');

  }
  if (event.target.id==='color2'){
    removeColors();
    namePreview.classList.add('palette2');
    telephonePreview.classList.add ('palette2');
    emailPreview.classList.add ('palette2');
    githubPreview.classList.add ('palette2');
    linkelinPreview.classList.add ('palette2');
    linePreview.classList.add ('palette2');
    borderPreview.classList.add ('palette2');
    
  }
  if (event.target.id==='color3'){
    removeColors();
    namePreview.classList.add('palette3');
    telephonePreview.classList.add ('palette3');
    emailPreview.classList.add ('palette3');
    githubPreview.classList.add ('palette3');
    linkelinPreview.classList.add ('palette3');
    linePreview.classList.add ('palette3');
    borderPreview.classList.add ('palette3');
    
  }

  console.log(event.target.id);
}

containerColor.addEventListener('click', handleClick);
