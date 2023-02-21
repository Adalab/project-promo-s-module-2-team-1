'use strict';
const localStorageData= JSON.parse(localStorage.getItem('formData'));
if(localStorageData)
{
  data=localStorageData;

  nameForm.value = data.name;
  emailForm.value=data.email;
  phoneForm.value=data.phone;
  photoForm.style.backgroundImage = data.photo;
  linkedinForm.value=data.linkedin;
  githubForm.value=data.github;
  jobForm.value=data.job;
    
  updateForm();
}
console.log(localStorageData);
