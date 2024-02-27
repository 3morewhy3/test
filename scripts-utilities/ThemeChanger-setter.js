const allElements = document.getElementsByTagName("*");
const themeButton = document.getElementById('Theme-Button');
const searchButton=document.getElementById('Search-Button');
const backButton=document.getElementById('Back-One-Page');
const forwardButton=document.getElementById('Forward-One-Page');
const toFirstPageButton=document.getElementById('To-First-Page');
const toLastPagebutton=document.getElementById('To-Last-Page');
const search=document.getElementById('Search-Text');


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


const FiltersWindow = document.getElementById('Filters-Window') || '';

if(theme==='Light' && ''!=FiltersWindow){
  FiltersWindow.style.backgroundColor='#ffffff';
}else{
  if(''!=FiltersWindow){
  FiltersWindow.style.backgroundColor='#000000';
  };
};


};




export function setTheme(){


  
  if(theme==='Light'){
    

  themeButton.innerHTML='<img src="../icons/moon_icon.png">';

  for(let i=0; i<allElements.length; i++){


    if(window.getComputedStyle(allElements[i]).getPropertyValue('border-color') ==='rgb(255, 255, 255)'){
     
     allElements[i].style.borderColor='#000000';

    };


   if(window.getComputedStyle(allElements[i]).getPropertyValue('color') ==='rgb(255, 255, 255)'){

      allElements[i].style.color='#000000'

    };
   
  };



  themeButton.innerHTML=`<img src="../icons/moon_icon.png">`;
  themeButton.style.marginLeft='.5vmin';
  themeButton.style.marginRight='.8vmin';


  searchButton.innerHTML=`<img src="../icons/magifying_glass.png" 
  style="width: 4vmin; height: 4vmin;">`;

  backButton.innerHTML=`<img src="../icons/single_left-arrow.png">`;
  toFirstPageButton.innerHTML=`<img src="../icons/double_left-arrow.png">`;

  forwardButton.innerHTML=`<img src="../icons/single_right-arrow.png">`;
  toLastPagebutton.innerHTML=`<img src="../icons/double_right-arrow.png">`;



document.documentElement.style.backgroundColor='#ffffff';
document.body.style.backgroundColor='#ffffff';

}else{
   
  themeButton.innerHTML='<img src="../icons/sun_icon.png">';

  for(let i=0; i<allElements.length; i++){



   if(window.getComputedStyle(allElements[i]).getPropertyValue('border-color') ==='rgb(0, 0, 0)'){
     
     allElements[i].style.borderColor='#ffffff';

    };


   if(window.getComputedStyle(allElements[i]).getPropertyValue('color') ==='rgb(0, 0, 0)'){

      allElements[i].style.color='#ffffff'

    };

};


   themeButton.innerHTML=`<img src="../icons/sun_icon.png">`;
   themeButton.style.marginLeft='.7vmin';
   themeButton.style.marginRight='.6vmin';


   searchButton.innerHTML=`<img src="../icons/darkmode-versions/dark_mode_magifying_glass.png" 
   style="width: 4vmin; height: 4vmin;">`;

   backButton.innerHTML=`<img src="../icons/darkmode-versions/dark_mode_single_left-arrow.png">`;
   toFirstPageButton.innerHTML=`<img src="../icons/darkmode-versions/dark_mode_double_left-arrow.png">`;

   forwardButton.innerHTML=`<img src="../icons/darkmode-versions/dark_mode_single_right-arrow.png">`;
   toLastPagebutton.innerHTML=`<img src="../icons/darkmode-versions/dark_mode_double_right-arrow.png">`;



 document.documentElement.style.backgroundColor='#000000';
 document.body.style.backgroundColor='#000000';


};

};






export function themeChanger(){  

   setTheme();


  themeButton.onclick=()=>{
    search.blur();
    
    if(theme==='Light'){
  
      theme='Dark';
    
      localStorage.setItem('theme', 'Dark');

  
      
    themeButton.innerHTML='<img src="../icons/sun_icon.png">';
  
    for(let i=0; i<allElements.length; i++){

  
  
      for(let i=0; i<allElements.length; i++){

  
        if(window.getComputedStyle(allElements[i]).getPropertyValue('border-color') ==='rgb(0, 0, 0)'){
  
         allElements[i].style.borderColor='#ffffff';
  
      
        };
    
    
       if(window.getComputedStyle(allElements[i]).getPropertyValue('color') ==='rgb(0, 0, 0)'){
    
          allElements[i].style.color='#ffffff'
    
        };
        
      };
  
  
  
    };
    


      themeButton.innerHTML=`<img src="../icons/sun_icon.png">`;
      themeButton.style.marginLeft='.7vmin';
      themeButton.style.marginRight='.6vmin';
   

      searchButton.innerHTML=`<img src="../icons/darkmode-versions/dark_mode_magifying_glass.png" 
      style="width: 4vmin; height: 4vmin;">`;

      backButton.innerHTML=`<img src="../icons/darkmode-versions/dark_mode_single_left-arrow.png">`;
      toFirstPageButton.innerHTML=`<img src="../icons/darkmode-versions/dark_mode_double_left-arrow.png">`;

      forwardButton.innerHTML=`<img src="../icons/darkmode-versions/dark_mode_single_right-arrow.png">`;
      toLastPagebutton.innerHTML=`<img src="../icons/darkmode-versions/dark_mode_double_right-arrow.png">`;


    document.documentElement.style.backgroundColor='#000000';
    document.body.style.backgroundColor='#000000';
  
    const FiltersWindow = document.getElementById('Filters-Window') || '';

    if(theme==='Light' && ''!=FiltersWindow){
      FiltersWindow.style.backgroundColor='#ffffff';
    }else{
      if(''!=FiltersWindow){
      FiltersWindow.style.backgroundColor='#000000';
      };
    };
  
    

  
  }else{
  
    theme='Light';
  
    localStorage.setItem('theme', 'Light');
    
    themeButton.innerHTML='<img src="../icons/moon_icon.png">';
    
    for(let i=0; i<allElements.length; i++){
  

      for(let i=0; i<allElements.length; i++){

  
        if(window.getComputedStyle(allElements[i]).getPropertyValue('border-color') ==='rgb(255, 255, 255)'){
  
         allElements[i].style.borderColor='#000000';
  
      
        };
    
    
       if(window.getComputedStyle(allElements[i]).getPropertyValue('color') ==='rgb(255, 255, 255)'){
    
          allElements[i].style.color='#000000'
    
        };

        




        
      };
  
      
      
    };
    
  

    themeButton.innerHTML=`<img src="../icons/moon_icon.png">`;
    themeButton.style.marginLeft='.5vmin';
    themeButton.style.marginRight='.8vmin';


    searchButton.innerHTML=`<img src="../icons/magifying_glass.png" 
    style="width: 4vmin; height: 4vmin;">`;

    backButton.innerHTML=`<img src="../icons/single_left-arrow.png">`;
    toFirstPageButton.innerHTML=`<img src="../icons/double_left-arrow.png">`;

    forwardButton.innerHTML=`<img src="../icons/single_right-arrow.png">`;
    toLastPagebutton.innerHTML=`<img src="../icons/double_right-arrow.png">`;


    document.documentElement.style.backgroundColor='#ffffff';
    document.body.style.backgroundColor='#ffffff';
  
  };
  
  const FiltersWindow = document.getElementById('Filters-Window') || '';

  if(theme==='Light' && ''!=FiltersWindow){
    FiltersWindow.style.backgroundColor='#ffffff';
  }else{
    if(''!=FiltersWindow){
    FiltersWindow.style.backgroundColor='#000000';
    };
  };
  
  };

  };