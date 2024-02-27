const allElements = document.getElementsByTagName("*");
const themeButton = document.getElementById('Theme-Button');
const searchButton=document.getElementById('Search-Button');
const backButton=document.getElementById('Back-One-Page');
const forwardButton=document.getElementById('Forward-One-Page');
const toFirstPageButton=document.getElementById('To-First-Page');
const toLastPagebutton=document.getElementById('To-Last-Page');


export let theme= localStorage.getItem('theme') || 'Light'

export function updateTheme(){

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


};




export function setTheme(){
  if(theme==='Light'){

  themeButton.innerHTML='<img src="../../icons/moon_icon.png">';

  for(let i=0; i<allElements.length; i++){

    if(window.getComputedStyle(allElements[i]).getPropertyValue('border-color') ==='rgb(255, 255, 255)'){
     
     allElements[i].style.borderColor='#000000';

    };


   if(window.getComputedStyle(allElements[i]).getPropertyValue('color') ==='rgb(255, 255, 255)'){

      allElements[i].style.color='#000000'

    };
   
  };



  themeButton.innerHTML=`<img src="../../icons/moon_icon.png">`;
  themeButton.style.marginLeft='.5vmin';
  themeButton.style.marginRight='.8vmin';


  searchButton.innerHTML=`<img src="../../icons/magifying_glass.png" 
  style="width: 4vmin; height: 4vmin;">`;



document.documentElement.style.backgroundColor='#ffffff';
document.body.style.backgroundColor='#ffffff';

}else{
   
  themeButton.innerHTML='<img src="../../icons/sun_icon.png">';

  for(let i=0; i<allElements.length; i++){


   if(window.getComputedStyle(allElements[i]).getPropertyValue('border-color') ==='rgb(0, 0, 0)'){
     
     allElements[i].style.borderColor='#ffffff';

    };


   if(window.getComputedStyle(allElements[i]).getPropertyValue('color') ==='rgb(0, 0, 0)'){

      allElements[i].style.color='#ffffff'

    };

};


   themeButton.innerHTML=`<img src="../../icons/sun_icon.png">`;
   themeButton.style.marginLeft='.7vmin';
   themeButton.style.marginRight='.6vmin';


   searchButton.innerHTML=`<img src="../../icons/darkmode-versions/dark_mode_magifying_glass.png" 
   style="width: 4vmin; height: 4vmin;">`;



 document.documentElement.style.backgroundColor='#000000';
 document.body.style.backgroundColor='#000000';


};

};






export function themeChanger(){  

   setTheme();

  themeButton.onclick=()=>{
    
    if(theme==='Light'){
  
      theme='Dark';
    
      localStorage.setItem('theme', 'Dark');
  
      
    themeButton.innerHTML='<img src="../../icons/sun_icon.png">';
  
    for(let i=0; i<allElements.length; i++){
  
  
      if(window.getComputedStyle(allElements[i]).getPropertyValue('border-color') ==='rgb(0, 0, 0)'){
        
        allElements[i].style.borderColor='#ffffff';
  
       };
  
  
      if(window.getComputedStyle(allElements[i]).getPropertyValue('color') ==='rgb(0, 0, 0)'){
  
         allElements[i].style.color='#ffffff'
  
       };
  
  
    };
    


      themeButton.innerHTML=`<img src="../../icons/sun_icon.png">`;
      themeButton.style.marginLeft='.7vmin';
      themeButton.style.marginRight='.6vmin';
   

      searchButton.innerHTML=`<img src="../../icons/darkmode-versions/dark_mode_magifying_glass.png" 
      style="width: 4vmin; height: 4vmin;">`;




    document.documentElement.style.backgroundColor='#000000';
    document.body.style.backgroundColor='#000000';
  
  
  
  }else{
  
    theme='Light';
  
    localStorage.setItem('theme', 'Light');
    
    themeButton.innerHTML='<img src="../../icons/moon_icon.png">';
    
    for(let i=0; i<allElements.length; i++){
  
      if(window.getComputedStyle(allElements[i]).getPropertyValue('border-color') ==='rgb(255, 255, 255)'){
        
        allElements[i].style.borderColor='#000000';
  
       };
  
  
      if(window.getComputedStyle(allElements[i]).getPropertyValue('color') ==='rgb(255, 255, 255)'){
  
         allElements[i].style.color='#000000'
  
       };
      
      
    };
    
  

    themeButton.innerHTML=`<img src="../../icons/moon_icon.png">`;
    themeButton.style.marginLeft='.5vmin';
    themeButton.style.marginRight='.8vmin';


    searchButton.innerHTML=`<img src="../../icons/magifying_glass.png" 
    style="width: 4vmin; height: 4vmin;">`;




    document.documentElement.style.backgroundColor='#ffffff';
    document.body.style.backgroundColor='#ffffff';
  
  };
  
  
  };
  
  };