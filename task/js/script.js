const ImageChange = document.querySelector('.line1');
const myName = document.querySelector('.sublink');

ImageChange.onmouseenter = function (){
  const copyWrite = document.createElement('a');
  copyWrite.setAttribute('href','demo.html' );
 myName.appendChild(copyWrite);
 copyWrite.innerHTML = `Ophthalmology (Eye Care)`;
  myName.style.padding = "20px ";
  myName.style.border="2px dashed rgb(242, 178, 3)";
};

ImageChange.onmouseleave = function (){

  myName.innerHTML = ``
  myName.style.padding = "0px";
  myName.style.border="none";
  
};



const ImageChange1 = document.querySelector('.line2');
const myName1 = document.querySelector('.sublink1');

ImageChange1.onmouseenter = function (){

  const copyWrite1 = document.createElement('a');
  copyWrite1.setAttribute('href','demo.html' );
 myName1.appendChild(copyWrite1);
 copyWrite1.innerHTML = `ENT (Ear, Nose, Throat)`;
  myName1.style.padding = "20px ";
  myName1.style.border="2px dashed rgb(242, 178, 3)";
};

ImageChange1.onmouseleave = function (){

  myName1.innerHTML = ``
  myName1.style.padding = "0px";
  myName1.style.border="none";
  
};



const ImageChange3 = document.querySelector('.line3');
const myName3 = document.querySelector('.sublink3');

ImageChange3.onmouseenter = function (){

  const copyWrite3 = document.createElement('a');
  copyWrite3.setAttribute('href','demo.html' );
 myName3.appendChild(copyWrite3);
 copyWrite3.innerHTML = `Dentistry`;
  myName3.style.padding = "20px ";
  myName3.style.border="2px dashed rgb(242, 178, 3)";
};

ImageChange3.onmouseleave = function (){

  myName3.innerHTML = ``
  myName3.style.padding = "0px";
  myName3.style.border="none";
  
};

const ImageChange4 = document.querySelector('.line4');
const myName4 = document.querySelector('.sublink4');

ImageChange4.onmouseenter = function (){

  const copyWrite4 = document.createElement('a');
  const textClick = document.createElement('a');
  copyWrite4.setAttribute('class','linetext' );
  textClick.setAttribute('href','' );
  copyWrite4.setAttribute('href','./pags/ENT/ENT.html' );
 myName4.appendChild(copyWrite4);
 myName4.appendChild(textClick);
 copyWrite4.innerHTML = `ENT (Ear, Nose, Throat)`;
 textClick.innerHTML=`Covid 19`;
  myName4.style.padding = "15px ";
  myName4.style.border="2px dashed rgb(242, 178, 3)";
};

ImageChange4.onmouseleave = function (){

  myName4.innerHTML = ``
  myName4.style.padding = "0px";
  myName4.style.border="none";
  
};