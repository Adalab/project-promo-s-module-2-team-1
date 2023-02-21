'use strict';
const localStorageData= JSON.parse(localStorage.getItem('formData'));
if(localStorageData){
    data=localStorageData;
    nameForm.value = data.name;
    emailForm.value=data.email;
    phoneForm.value=data.phone;
    linkedinForm.value=data.linkedin;
    githubForm.value=data.github;
    jobForm.value=data.job;
    photoForm.style.backgroundImage = data.photo;
    updateForm();
}
console.log(localStorageData);
