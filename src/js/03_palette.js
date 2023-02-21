'use strict';


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
 //monica:cree la funcción addColor()
function addColor(palette){
  namePreview.classList.add(palette);
  telephonePreview.classList.add (palette);
  emailPreview.classList.add (palette);
  githubPreview.classList.add (palette);
  linkelinPreview.classList.add (palette);
  linePreview.classList.add (palette);
  borderPreview.classList.add (palette);
}
function handleClick(event) {
  // event.preventDefault(); //nos impide seleccionar el radio button
  data.palette=event.target.id;
  localStorage.setItem('formData', JSON.stringify(data));
  
  if (event.target.id==='1'){
    removeColors();
    addColor('palette1');

    //propuesta monica:sustitui el codigo que está debajo por la funcción addColor()
    // namePreview.classList.add('palette1');
    // telephonePreview.classList.add ('palette1');
    // emailPreview.classList.add ('palette1');
    // githubPreview.classList.add ('palette1');
    // linkelinPreview.classList.add ('palette1');
    // linePreview.classList.add ('palette1');
    // borderPreview.classList.add ('palette1');
    //monica:hasta aqui

  }
  if (event.target.id==='2'){
    removeColors();
    addColor('palette2');
    // namePreview.classList.add('palette2');
    // telephonePreview.classList.add ('palette2');
    // emailPreview.classList.add ('palette2');
    // githubPreview.classList.add ('palette2');
    // linkelinPreview.classList.add ('palette2');
    // linePreview.classList.add ('palette2');
    // borderPreview.classList.add ('palette2');
    
  }
  if (event.target.id==='3')
  {
    removeColors();
    addColor('palette3');
    // namePreview.classList.add('palette3');
    // telephonePreview.classList.add ('palette3');
    // emailPreview.classList.add ('palette3');
    // githubPreview.classList.add ('palette3');
    // linkelinPreview.classList.add ('palette3');
    // linePreview.classList.add ('palette3');
    // borderPreview.classList.add ('palette3');
    
  }

}

containerColor.addEventListener('click', handleClick);
