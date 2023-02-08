'use strict';

function closeAllSections()
{
desingContent.classList.add('collapsed');
fillContent.classList.add('collapsed');
shareContent.classList.add('collapsed');
fillRotateScroll.classList.remove('header--scroll__create-card__rotate');
designRotateScroll.classList.remove('header--scroll__create-card__rotate');
shareRotateScroll.classList.remove('header--scroll__create-card__rotate');
}
function openDesingSections(){
  desingContent.classList.remove('collapsed');  
  designRotateScroll.classList.add('header--scroll__create-card__rotate');
}

function openFillSections(){
  fillContent.classList.remove('collapsed');  
  fillRotateScroll.classList.add('header--scroll__create-card__rotate');
}
function openShareSections(){
  shareContent.classList.remove('collapsed'); 
  shareRotateScroll.classList.add('header--scroll__create-card__rotate');
}
desingLegend.addEventListener('click', (event) => {
  event.preventDefault();
  closeAllSections();
  openDesingSections();
});

fillLegend.addEventListener('click', (event) => {
  event.preventDefault();
  closeAllSections();
  openFillSections();
});
shareLegend.addEventListener('click', (event) => {
  event.preventDefault();
  closeAllSections();
  openShareSections();
});
