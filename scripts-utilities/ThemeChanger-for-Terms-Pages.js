const allElements = document.getElementsByTagName("*");
const themeButton = document.getElementById('Theme-Button');


export let theme= localStorage.getItem('theme') || 'Light';




if(theme==='Light'){
  
    for(let i=0; i<allElements.length; i++){
  
      if(window.getComputedStyle(allElements[i]).getPropertyValue('border-color') ==='rgb(255, 255, 255)'){
       
       allElements[i].style.borderColor='#000000';
  
      };
  
  
     if(window.getComputedStyle(allElements[i]).getPropertyValue('color') ==='rgb(255, 255, 255)'){
  
        allElements[i].style.color='#000000'
  
      };
    };


document.documentElement.style.backgroundColor='#ffffff';
document.body.style.backgroundColor='#ffffff';

}else{
  
  for(let i=0; i<allElements.length; i++){


    if(window.getComputedStyle(allElements[i]).getPropertyValue('border-color') ==='rgb(0, 0, 0)'){
      
      allElements[i].style.borderColor='#ffffff';
 
     };
 
 
    if(window.getComputedStyle(allElements[i]).getPropertyValue('color') ==='rgb(0, 0, 0)'){
 
       allElements[i].style.color='#ffffff'
 
     };
 
 };

 document.documentElement.style.backgroundColor='#000000';
 document.body.style.backgroundColor='#000000';

};




