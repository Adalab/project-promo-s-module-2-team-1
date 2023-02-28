'use strict';

const desingLegend = document.querySelector('.js-design-legend');
const fillLegend = document.querySelector('.js-fill-legend');
const shareLegend = document.querySelector('.js-share-legend');
const desingContent = document.querySelector('.js-design-content');
const fillContent = document.querySelector('.js-fill-content');
const shareContent = document.querySelector('.js-share-content');
const fillRotateScroll = document.querySelector('.js-fill-rotate-scroll');
const designRotateScroll = document.querySelector('.js-designRotateScroll');
const shareRotateScroll = document.querySelector('.js-share-rotate-scroll');

//variables 03_pallete.js
const namePreview = document.querySelector('.js-card-nameSurname');
const telephonePreview = document.querySelector('.js-card-telephone');
const emailPreview = document.querySelector('.js-card-mail');
const githubPreview = document.querySelector('.js-card-github');
const linkelinPreview = document.querySelector('.js-card-linkedin');
const linePreview = document.querySelector('.js-profileText');
const borderPreview = document.querySelector('.js-border');
const containerColor = document.querySelector('.js-containerColor');
const backColor = document.querySelector ('.js-main_card');

let data = {
  palette: '',
  name: '',
  job: '',
  phone: '',
  email: '',
  linkedin: '',
  github: '',
  photo: '',
};