'use strict';

desingLegend.addEventListener('click', (event) => {
  event.preventDefault();
  desingContent.classList.add('collapsed');
  fillContent.classList.add('collapsed');
  shareContent.classList.add('collapsed');
  desingContent.classList.remove('collapsed');
  fillRotateScroll.classList.remove('header--scroll__create-card__rotate');
  designRotateScroll.classList.add('header--scroll__create-card__rotate');
  shareRotateScroll.classList.remove('header--scroll__create-card__rotate');
});
fillLegend.addEventListener('click', (event) => {
  event.preventDefault();
  fillContent.classList.add('collapsed');
  desingContent.classList.add('collapsed');
  shareContent.classList.add('collapsed');
  fillContent.classList.remove('collapsed');
  fillRotateScroll.classList.add('header--scroll__create-card__rotate');
  designRotateScroll.classList.remove('header--scroll__create-card__rotate');
  shareRotateScroll.classList.remove('header--scroll__create-card__rotate');
});
shareLegend.addEventListener('click', (event) => {
  event.preventDefault();
  shareContent.classList.add('collapsed');
  desingContent.classList.add('collapsed');
  fillContent.classList.add('collapsed');
  shareContent.classList.remove('collapsed');
  fillRotateScroll.classList.remove('header--scroll__create-card__rotate');
  designRotateScroll.classList.remove('header--scroll__create-card__rotate');
  shareRotateScroll.classList.add('header--scroll__create-card__rotate');
});
