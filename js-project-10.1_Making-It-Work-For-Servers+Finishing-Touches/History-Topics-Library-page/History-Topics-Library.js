import {contentData} from './History-Topics-Library-Data.js';
import { themeChanger } from '../scripts-utilities/ThemeChanger-setter.js';
import { updateTheme } from '../scripts-utilities/ThemeChanger-setter.js';
import { setTheme } from '../scripts-utilities/ThemeChanger-setter.js';
import { theme } from '../scripts-utilities/ThemeChanger-setter.js';
const contentList=document.getElementById('Content-List');
const contentContainer=document.getElementsByClassName('Content-Container');
const search=document.getElementById('Search-Text');
const searchButton=document.getElementById('Search-Button');
const addedPages=document.getElementById('Added-Pages');
const pages=document.getElementById('Pages');
const backButton=document.getElementById('Back-One-Page');
const forwardButton=document.getElementById('Forward-One-Page');
const toFirstPageButton=document.getElementById('To-First-Page');
const toLastPagebutton=document.getElementById('To-Last-Page');
const autoCompleteList=document.getElementById('Auto-Complete-List');
const autoCompleteListItem=document.getElementsByClassName('Auto-Complete-List-Item');
const themeButton=document.getElementById('Theme-Button');
const allElements = document.getElementsByTagName("*");
const searchBorder= document.getElementById('Search-Bar-Border');


themeChanger();

//when pressed takes you to the History Page
const backBtn= document.getElementById('BackBtn');
backBtn.onclick=e=>{
  window.location.href='../History-page/History-Library.html';
};




document.getElementById('Theme-Button').addEventListener('keydown', e=> {
  if (e.key === ' ' || e.key ==='Enter') {
      e.preventDefault();
  }
});


/* 
save the page numbers in an aray so when you refresh the page it saves the placement 
of where you last left off
*/

let MaxPages=0;

// these load the saved data


let page = JSON.parse(sessionStorage.getItem('savedPage2')) || 1;

let pageNumbers = JSON.parse(sessionStorage.getItem('savedPageButtonNumbers2')) || [1,2,3,4,5,6,7,8,9,10];

addedPages.children[sessionStorage.getItem('savedSelectedButton2') || 0].
classList.add('PageLink-selected');


// this loads the previous search when the page is refreshed

search.value= sessionStorage.getItem('savedSearch2')||'';



//3 functions

// this function resets the page numbers

function resetPageNumbers(){
  
  pageNumbers=[1,2,3,4,5,6,7,8,9,10];
  
};



// this function saves the page numbers

function savePageNumbers(){

pageNumbers=[];

for(let i=0; i<addedPages.children.length; i++){

  if(Number(addedPages.children[i].innerText)<=MaxPages && !addedPages.children[i].classList.contains('hide')){

  pageNumbers.push(Number(addedPages.children[i].innerText))
  
};

};

 sessionStorage.setItem('savedPageButtonNumbers2', JSON.stringify(pageNumbers));

};

// this is the end of the funtion that saves the page numbers








// this function saves the last selected button

function saveSelectedButton(){

  for(let i=0;i<addedPages.children.length;i++){

    if(addedPages.children[i].classList.contains('PageLink-selected')){

    sessionStorage.setItem('savedSelectedButton2', i);

  };

  };

};

// this is the end of the function that saves the last selected button

//end of three 3 functions





//code load the content

/*
to change how much content is loaded on the page change the for loop in load content
 for(let i=0; i<change this number; i++) (page-1)*change this number  , 
(page-1)* change this number + change this number so if it is  
for(let i=0; i<contentData.slice((page-1)*24,(page-1)*24+24); i++) and 
(page-1)*24,(page-1)*24+24) you would change all the 24s
*/

let searchedContentent=[];



function loadContent(){

  contentList.innerHTML='';


 if(''===sessionStorage.getItem('savedSearch2')){

  for(let i=0; i<contentData.slice((page-1)*12,(page-1)*12+12).length; i++){

       contentList.innerHTML+=`
       <a href="${contentData[i].Link}">
       <div" class="Content-Container">
       <img class="image" src="${contentData.slice((page-1)*12,(page-1)*12+12)[i].Image}">
       <div class="discription">${contentData.slice((page-1)*12,(page-1)*12+12)[i].Description}</div>
       </div>
       </a>`;

  };

}else{

    if(searchedContentent.length===0){
    for(let i=0; i<contentData.length; i++){

      if(contentData[i].Description.toLowerCase().replace(/\s/g, '').includes((search.value).toLowerCase().replace(/\s/g, ''))|| 
      contentData[i].KeyWords[0].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, ''))||
      contentData[i].KeyWords[1].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, ''))||
      contentData[i].KeyWords[2].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, ''))||
      contentData[i].KeyWords[3].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, ''))||
      contentData[i].KeyWords[4].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, ''))||
      contentData[i].KeyWords[5].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, ''))||
      contentData[i].KeyWords[6].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, ''))||
      contentData[i].KeyWords[7].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, ''))||
      contentData[i].KeyWords[8].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, ''))||
      contentData[i].KeyWords[9].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, ''))){

        searchedContentent.push(contentData[i]);

      };

    };

  };

    for(let i=0; i<searchedContentent.slice((page-1)*12,(page-1)*12+12).length; i++){

    contentList.innerHTML+=`
    <a href="${searchedContentent[i].Link}">
    <div class="Content-Container">
    <img class="image" src="${searchedContentent.slice((page-1)*12,(page-1)*12+12)[i].Image}">
    <div class="discription">${searchedContentent.slice((page-1)*12,(page-1)*12+12)[i].Description}</div>
    </div>
    </a>`;

    };
  

  if(contentList.children.length===0){

    contentList.innerText='Not Found';

  };

};



search.blur();


updateTheme();
};


  loadContent();



// end of code that loads content




//this function selects the first page

function setSelectionToPage1(){

for(let i=0; i<addedPages.children.length; i++){

  addedPages.children[i].classList.remove('PageLink-selected')

};

addedPages.children[0].classList.add('PageLink-selected');

};

//this is the end of the function that selects the first page




// these are the event listiners for the search

searchButton.onclick=()=>{

  search.blur();

  searchedContentent=[];

  sessionStorage.setItem('savedSearch2', search.value);

  page=1;

  sessionStorage.setItem('savedPage2', page);

  setSelectionToPage1();

  loadContent();

  resetPageNumbers();

  pagesLimiterAndLoader();

  hideAutocompeleList();

};

search.addEventListener('keypress', event=>{

if('Enter'===event.key){

  search.blur();

  searchedContentent=[];

  sessionStorage.setItem('savedSearch2', search.value);

  page=1;

  sessionStorage.setItem('savedPage2', page);

  setSelectionToPage1();

  loadContent();
  
  resetPageNumbers();
  
  pagesLimiterAndLoader();

  hideAutocompeleList();

};

});

// this is the auto complete code for the search bar
// this is the auto complete code for the search bar
// this is the auto complete code for the search bar
// this is the auto complete code for the search bar


document.addEventListener('click', event=>{





if(event.target.classList.contains('Auto-Complete-List-Item')){

  search.value=event.target.innerText;

  searchedContentent=[];

  sessionStorage.setItem('savedSearch2', search.value);

  page=1;

  sessionStorage.setItem('savedPage2', page);

  setSelectionToPage1();

  loadContent();
  
  resetPageNumbers();
  
  pagesLimiterAndLoader();

};



if(document.activeElement === search){
  autoCompleteListFunction();
}else{
  hideAutocompeleList();
};


if(event.target.parentElement.classList.contains('Content-Container')){
  sessionStorage.setItem('HTopic', event.target.parentElement.children[1].innerText);
};


if(event.target.classList.contains('Content-Container')){
  sessionStorage.setItem('HTopic', event.target.children[1].innerText);
};



});

function hideAutocompeleList(){
  autoCompleteList.style.display='none'
  searchBorder.style.borderWidth='.7vmin .7vmin .7vmin .7vmin';
  searchBorder.style.borderRadius='1vmin';
};

function showAutocompeleList(){
  autoCompleteList.style.display='block';
  searchBorder.style.borderWidth='.7vmin .7vmin 0 .7vmin';
  searchBorder.style.borderRadius='1vmin 1vmin 0 0';
};




function autoCompleteListFunction(){
    autoCompleteList.innerHTML='';




if(''!==search.value){
  showAutocompeleList();

  

  

  for(let i=0; i<contentData.length; i++){
    
//to change the length of the  auto complete list change the first 2 numbers under this
if(autoCompleteList.children.length===12){
  break;
};

if(autoCompleteList.children.length<12){

if(contentData[i].Description.toLowerCase().replace(/\s/g, '').includes((search.value).toLowerCase().replace(/\s/g, ''))){
autoCompleteList.innerHTML+=`<div class="Auto-Complete-List-Item">${contentData[i].Description}</ class="Auto-Complete-List-Item">`;
};


if(!autoCompleteList.innerHTML.includes(contentData[i].KeyWords[0]) && contentData[i].KeyWords[0].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, ''))){
autoCompleteList.innerHTML+=`<div class="Auto-Complete-List-Item">${contentData[i].KeyWords[0]}</div>`
};
if(!autoCompleteList.innerHTML.includes(contentData[i].KeyWords[1]) && contentData[i].KeyWords[1].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, ''))){
autoCompleteList.innerHTML+=`<div class="Auto-Complete-List-Item">${contentData[i].KeyWords[1]}</div>`
};
if(!autoCompleteList.innerHTML.includes(contentData[i].KeyWords[2]) && contentData[i].KeyWords[2].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, ''))){
autoCompleteList.innerHTML+=`<div class="Auto-Complete-List-Item">${contentData[i].KeyWords[2]}</div>`
};
if(!autoCompleteList.innerHTML.includes(contentData[i].KeyWords[3]) && contentData[i].KeyWords[3].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, ''))){
autoCompleteList.innerHTML+=`<div class="Auto-Complete-List-Item">${contentData[i].KeyWords[3]}</div>`
};
if(!autoCompleteList.innerHTML.includes(contentData[i].KeyWords[4]) && contentData[i].KeyWords[4].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, ''))){
autoCompleteList.innerHTML+=`<div class="Auto-Complete-List-Item">${contentData[i].KeyWords[4]}</div>`
};
if(!autoCompleteList.innerHTML.includes(contentData[i].KeyWords[5]) && contentData[i].KeyWords[5].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, ''))){
autoCompleteList.innerHTML+=`<div class="Auto-Complete-List-Item">${contentData[i].KeyWords[5]}</div>`
};
if(!autoCompleteList.innerHTML.includes(contentData[i].KeyWords[6]) && contentData[i].KeyWords[6].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, ''))){
autoCompleteList.innerHTML+=`<div class="Auto-Complete-List-Item">${contentData[i].KeyWords[6]}</div>`
};
if(!autoCompleteList.innerHTML.includes(contentData[i].KeyWords[7]) && contentData[i].KeyWords[7].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, ''))){
autoCompleteList.innerHTML+=`<div class="Auto-Complete-List-Item">${contentData[i].KeyWords[7]}</div>`
};
if(!autoCompleteList.innerHTML.includes(contentData[i].KeyWords[8]) && contentData[i].KeyWords[8].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, ''))){
autoCompleteList.innerHTML+=`<div class="Auto-Complete-List-Item">${contentData[i].KeyWords[8]}</div>`
};
if(!autoCompleteList.innerHTML.includes(contentData[i].KeyWords[9]) && contentData[i].KeyWords[9].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, ''))){
autoCompleteList.innerHTML+=`<div class="Auto-Complete-List-Item">${contentData[i].KeyWords[9]}</div>`
};



};

};



};



if(''===search.value || autoCompleteList.children.length<1){
  autoCompleteList.innerHTML='';
  hideAutocompeleList();
};


  if(theme==='Light'){
    for(let i=0; i<autoCompleteListItem.length; i++){
      autoCompleteListItem[i].classList.remove('Auto-Complete-List-Item-Dark');
    };
  }else{
    for(let i=0; i<autoCompleteListItem.length; i++){
      autoCompleteListItem[i].classList.add('Auto-Complete-List-Item-Dark');
    };
  };



};





search.addEventListener('keydown', event=>{

  autoCompleteListFunction();

});


search.addEventListener('keyup', event=>{

  autoCompleteListFunction();

});

// this is the end of the auto complete code for the search bar
// this is the end of the auto complete code for the search bar
// this is the end of the auto complete code for the search bar
// this is the end of the auto complete code for the search bar



// this is the end of the event listiners for the search



    /* the number after the i % it is important to change manuly 
    when changeing the amount of content on the page*/
    /* the number after the i % it is important to change manuly 
    when changeing the amount of content on the page*/
    /* the number after the i % it is important to change manuly 
    when changeing the amount of content on the page*/


function pagesLimiterAndLoader(){

// this code loads the previously saved pages when you refresh

  for(let i=0; i<pageNumbers.length; i++){

    addedPages.children[i].innerText=pageNumbers[i]

  };



  let Pages=0;

  if(''===search.value){

 for (let i=0; i<contentData.length ;i++){

//change the number after the % when changing the page number

   if (0 ===i % 12){

    

    Pages++;


  };

};

}else{

     for (let i=0; i<searchedContentent.length ;i++){

       if (0 ===i % 12){

         Pages++;

       };

     };

    };

    MaxPages=Pages;
  
    for(let i=0; i<addedPages.children.length; i++){

      if(Number(addedPages.children[i].innerText)>MaxPages ||
      addedPages.children[i].innerText==='' ){

        addedPages.children[i].classList.add('hide');

      }else{

        addedPages.children[i].classList.remove('hide');

      }

    };
 

  };

  pagesLimiterAndLoader();





let doubleClickreset1=0;

let doubleClickreset2=0;

pages.addEventListener('click', event=>{

  if(event.target.classList.contains('PageLink')){

    
    if(Number(addedPages.children[9].innerText)!==page){

      doubleClickreset1=0;

    };

    if(Number(addedPages.children[0].innerText)!==page){

      doubleClickreset2=0;

    };

    if(page===MaxPages && !addedPages.children[1].classList.contains('hide')){

      doubleClickreset2=0;

      doubleClickreset1=0;

    };

    if(1===page){

      doubleClickreset1=0;

      doubleClickreset2=0;

    };

    
    for(let i=0; i<addedPages.children.length; i++){

      addedPages.children[i].classList.remove('PageLink-selected');

    };

    
        event.target.classList.add('PageLink-selected');

        page=Number(event.target.innerText);
      

     if(Number(event.target.innerText)===Number(addedPages.children[9].innerText)){

      doubleClickreset2=0;

      doubleClickreset1+=1;

    };

      if(doubleClickreset1===2){

        doubleClickreset2=0;

        doubleClickreset1=0;

         nextChapter();

         for(let i=0; i<addedPages.children.length; i++){

           addedPages.children[i].classList.remove('PageLink-selected');

         };
         
         addedPages.children[0].classList.add('PageLink-selected');

         page=Number(addedPages.children[0].innerText); 

       };


        if(Number(event.target.innerText)===Number(addedPages.children[0].innerText)){

          doubleClickreset1=0;

          doubleClickreset2+=1

      };
      
          if(doubleClickreset2===2){

        if(1<page){

          doubleClickreset2=0;

          doubleClickreset1=0;

          previousChapter();

        
          for(let i=0; i<addedPages.children.length; i++){

            addedPages.children[i].classList.remove('PageLink-selected');

          };
          addedPages.children[9].classList.add('PageLink-selected');

          page=Number(addedPages.children[9].innerText);

        };

        };

        

    

    sessionStorage.setItem('savedPage2', page);
    loadContent();
  };



// Forward , backward arrow and page buttons functionality

  if(event.target.id==='Forward-One-Page' || event.target.parentElement.id==='Forward-One-Page'){

    doubleClickreset1=0;

    doubleClickreset2=0;

    if(MaxPages>page){

      for(let i=0; i<addedPages.children.length;i++){


        if(addedPages.children[i].classList.contains('PageLink-selected')){


          addedPages.children[i].classList.remove('PageLink-selected');


          addedPages.children[i+1].classList.add('PageLink-selected');


          page=Number(addedPages.children[i+1].innerText);


          break;

        };

        if(Number(addedPages.children[9].innerText)===page){

          nextChapter();

          addedPages.children[0].classList.add('PageLink-selected');

          page=Number(addedPages.children[0].innerText);

          break;

        };

        
      };
      loadContent();
      sessionStorage.setItem('savedPage2', page);

    
    };


  };


  if(event.target.id==='Back-One-Page' || event.target.parentElement.id==='Back-One-Page'){

    doubleClickreset2=0;

    doubleClickreset1=0;

    if(1<page){

      for(let i=0; i<addedPages.children.length;i++){
        
        if(Number(addedPages.children[0].innerText)===page){

          previousChapter();

          addedPages.children[9].classList.add('PageLink-selected');

          page=Number(addedPages.children[9].innerText);

          break;

        };

        if(addedPages.children[i].classList.contains('PageLink-selected')){

          addedPages.children[i].classList.remove('PageLink-selected');

          addedPages.children[i-1].classList.add('PageLink-selected');

          page=Number(addedPages.children[i-1].innerText);

          break;

        };
        
      };

    };

    sessionStorage.setItem('savedPage2', page);

    loadContent();
    };




function nextChapter(){

  doubleClickreset1=0;

  doubleClickreset2=0;

  if(MaxPages>page){

    for(let i=0; i<addedPages.children.length;i++){

        addedPages.children[i].classList.remove('PageLink-selected');

        addedPages.children[i].innerText=page+=1;

        if(Number(addedPages.children[i].innerText)>MaxPages){

            addedPages.children[i].classList.add('hide');

        };
    };

  };

};

function previousChapter(){

  doubleClickreset1=0;

  doubleClickreset2=0;

  if(1<page){

  for(let i=0; i<addedPages.children.length;i++){

    addedPages.children[i].classList.remove('PageLink-selected');

    addedPages.children[9-i].innerText=page-=1;

    addedPages.children[i].classList.remove('hide');

 };

};

};


















// this is the code that makes the skip to first page button skip to the first page
// this is the code that makes the skip to first page button skip to the first page
// this is the code that makes the skip to first page button skip to the first page
// this is the code that makes the skip to first page button skip to the first page


if(event.target.id==='To-Last-Page' || event.target.parentElement.id==='To-Last-Page'){

        
        doubleClickreset1=0;

        doubleClickreset2=0;



        for(let i=0; i<addedPages.children.length;i++){

          addedPages.children[i].classList.remove('PageLink-selected');

      };


        page=MaxPages;

        

        if(MaxPages>10){

          if((MaxPages % 10) === 0){

            for(let i=0; i<addedPages.children.length;i++){

              addedPages.children[i].classList.remove('PageLink-selected');

              addedPages.children[i].classList.add('hide');

              if(i<10){

              addedPages.children[i].classList.remove('hide');

              addedPages.children[9-i].innerText=page--;

              };

           };

          }else if((MaxPages % 10) === 9){

          for(let i=0; i<addedPages.children.length;i++){

            addedPages.children[i].classList.remove('PageLink-selected');

            addedPages.children[i].classList.add('hide');

            if(i<9){

            addedPages.children[i].classList.remove('hide');

            addedPages.children[8-i].innerText=page--;

            };

         };

        }else if((MaxPages % 10) === 8){


          for(let i=0; i<addedPages.children.length;i++){

            addedPages.children[i].classList.remove('PageLink-selected');

            addedPages.children[i].classList.add('hide');

            if(i<8){

            addedPages.children[i].classList.remove('hide');

            addedPages.children[7-i].innerText=page--;

            };

         };


        }

        else if((MaxPages % 10) === 7){

          for(let i=0; i<addedPages.children.length;i++){

            addedPages.children[i].classList.remove('PageLink-selected');

            addedPages.children[i].classList.add('hide');

            if(i<7){

            addedPages.children[i].classList.remove('hide');

            addedPages.children[6-i].innerText=page--;

            };

          };

        }else if((MaxPages % 10) === 6){

          for(let i=0; i<addedPages.children.length;i++){

            addedPages.children[i].classList.remove('PageLink-selected');

            addedPages.children[i].classList.add('hide');

            if(i<6){

            addedPages.children[i].classList.remove('hide');

            addedPages.children[5-i].innerText=page--;

            };

          };

        }else if((MaxPages % 10) === 5){

          for(let i=0; i<addedPages.children.length;i++){

            addedPages.children[i].classList.remove('PageLink-selected');

            addedPages.children[i].classList.add('hide');

            if(i<5){

            addedPages.children[i].classList.remove('hide');

            addedPages.children[4-i].innerText=page--;

            };

          };

        }else if((MaxPages % 10) === 4){

          for(let i=0; i<addedPages.children.length;i++){

            addedPages.children[i].classList.remove('PageLink-selected');

            addedPages.children[i].classList.add('hide');

            if(i<4){

            addedPages.children[i].classList.remove('hide');

            addedPages.children[3-i].innerText=page--;

            };

          };

        }else if((MaxPages % 10) === 3){

          for(let i=0; i<addedPages.children.length;i++){

            addedPages.children[i].classList.remove('PageLink-selected');

            addedPages.children[i].classList.add('hide');

            if(i<3){

            addedPages.children[i].classList.remove('hide');

            addedPages.children[2-i].innerText=page--;

            };

          };

        }else if((MaxPages % 10) === 2){

          for(let i=0; i<addedPages.children.length;i++){

            addedPages.children[i].classList.remove('PageLink-selected');

            addedPages.children[i].classList.add('hide');

            if(i<2){

            addedPages.children[i].classList.remove('hide');

            addedPages.children[1-i].innerText=page--;

            };

          };

        }else if((MaxPages % 10) === 1){

          for(let i=0; i<addedPages.children.length;i++){

            addedPages.children[i].classList.remove('PageLink-selected');

            addedPages.children[i].classList.add('hide');

            if(i<1){

            addedPages.children[i].classList.remove('hide');

            addedPages.children[i].innerText=page--;

            };

          };

        };


      };

      page=MaxPages;


      for(let i=0; i<addedPages.children.length; i++){

        if(Number(addedPages.children[i].innerText)===MaxPages){

          addedPages.children[i].classList.add('PageLink-selected');

        };

      };
      loadContent();
      sessionStorage.setItem('savedPage2', page);
    };
  

// this is the end of the code that makes the Skip To First Page Button skip to the first page; 
// this is the end of the code that makes the Skip To First Page Button skip to the first page; 
// this is the end of the code that makes the Skip To First Page Button skip to the first page;
// this is the end of the code that makes the Skip To First Page Button skip to the first page;
















//This is the code that makes the Return To First Page Button work
//This is the code that makes the Return To First Page Button work
//This is the code that makes the Return To First Page Button work
//This is the code that makes the Return To First Page Button work



if(event.target.id==='To-First-Page' || event.target.parentElement.id==='To-First-Page'){

  doubleClickreset1=0;

  doubleClickreset2=0;

page=1;

for(let i=0; i<addedPages.children.length;i++){

  addedPages.children[i].classList.remove('hide');


  addedPages.children[i].classList.remove('PageLink-selected');

  addedPages.children[i].innerText=i+1;

  
  if(Number(addedPages.children[i].innerText)>MaxPages ||
      addedPages.children[i].innerText==='' ){

      addedPages.children[i].classList.add('hide');

      };


};

addedPages.children[0].classList.add('PageLink-selected');

loadContent();
sessionStorage.setItem('savedPage2', page);

};
// end of  Forward , backward arrow and page buttons functionality
// end of  Forward , backward arrow and page buttons functionality
// end of  Forward , backward arrow and page buttons functionality




// this saves the pages and selected page from where you last left off when you refresh
// this saves the pages and selected page from where you last left off when you refresh
// this saves the pages and selected page from where you last left off when you refresh

       savePageNumbers();

       saveSelectedButton();

});



