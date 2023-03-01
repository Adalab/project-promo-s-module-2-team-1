'use strict';
const localStorageData= JSON.parse(localStorage.getItem('formData'));
if(localStorageData)
{
  data=localStorageData;

  nameForm.value = data.name;
  emailForm.value=data.email;
  phoneForm.value=data.phone;
  
  if (!data.photo) data.photo=pathDefault;

  if (data.photo===pathDefault) photoForm.style.backgroundImage='';
  else photoForm.style.backgroundImage=`url(${data.photo})`;

  photoPreview.style.backgroundImage=`url(${data.photo})`;
  linkedinForm.value=data.linkedin;
  githubForm.value=data.github;
  jobForm.value=data.job;
  if (data.palette==='1'){
    color1.checked = true;
  }else if(data.palette==='2'){
    color2.checked = true;
  }else{
    color3.checked = true;
  }
  updateForm();
  removeColors();
  addColor(`palette${data.palette}`);
}

