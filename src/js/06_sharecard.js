'use strict';
const shareButton = document.querySelector('.js-share--button__create');
const shareMessage = document.querySelector('.js-share--button2__text');
const shareUrl = document.querySelector('.js-share--button2__nav');
const twitterButton = document.querySelector('.js-share--button2__twitter');

function checkRequiredFields()
{ 
 let messageError=''; 
 let message='';
  
if (!nameForm.value){
  message=message +='nombre,';
}
if(!jobForm.value)
{
  message=message +='puesto,';
}

if(!data.photo)
{
  message=message +='foto,';
}
if(!emailForm.value)
{
  message=message +='email,';
}
if(!githubForm.value)
{
  message=message +='github,';
}
if(!linkedinForm.value)
{
  message=message +='linkedin,';
}
if (message){
 const mesaggeInicial='No se ha podido generar la tarjeta. Debe rellenar los campos requeridos: ';
 const messageNew=message.slice(0,-1);
 messageError=mesaggeInicial+messageNew;
}
return messageError;
}

function handleClickShare(event) {
  event.preventDefault();
  console.log('Entra en share');
  console.log(data);
  let messageCheck=checkRequiredFields();
  
  if(messageCheck.length===0){
    fetch('https://dev.adalab.es/api/card/', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
        if (data.success) {
          shareMessage.innerHTML = 'La tarjeta ha sido creada:';
          shareUrl.innerHTML = data.cardURL;
          shareUrl.href = data.cardURL;
          twitterButton.classList.remove('hiddenField');
          shareUrl.classList.remove('hiddenField');
        } else {
          shareMessage.innerHTML = data.error;
          shareUrl.href = '';
        }
      });
    shareMessage.classList.remove('hiddenField');
}
shareMessage.innerHTML = messageCheck;
shareMessage.classList.remove('hiddenField');
twitterButton.classList.add('hiddenField');
shareUrl.classList.add('hiddenField');
}

shareButton.addEventListener('click', handleClickShare);

