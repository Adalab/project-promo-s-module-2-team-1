'use strict';
const shareButton = document.querySelector('.js-share--button__create');
const shareMessage = document.querySelector('.js-share--button2__text');
function handleClickShare(event){
  console.log("Entra en share");
  data.palette=1;
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
            shareMessage.innerHTML=data.cardURL;
          } else {
            shareMessage.innerHTML='Ha ocurrido un error';
          }
        });
}
shareButton.addEventListener('click', handleClickShare);

