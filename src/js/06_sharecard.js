'use strict';
const shareButton = document.querySelector('.js-share--button__create');
const shareMessage = document.querySelector('.js-share--button2__text');
const shareUrl = document.querySelector('.js-share--button2__nav');
const twitterButton = document.querySelector('.js-share--button2__twitter');

function handleClickShare(event){
  console.log("Entra en share");
  // data.photo='url';
  console.log(data);
  event.preventDefault();
  fetch('https://dev.adalab.es/api/card/', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.success) {
        shareMessage.innerHTML='La tarjeta ha sido creada:';
        shareUrl.innerHTML=data.cardURL;
        shareUrl.href=data.cardURL;
        twitterButton.classList.remove('hiddenField');
        shareUrl.classList.remove('hiddenField');
      } else {
        // shareMessage.innerHTML='Ha ocurrido un error';
        shareMessage.innerHTML=data.error;
        shareUrl.href='';
      }
    });
  
  shareMessage.classList.remove('hiddenField');
 

}

shareButton.addEventListener('click', handleClickShare);

