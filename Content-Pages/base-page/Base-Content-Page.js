import {contentData} from '../../Main-Library/Main-Library-Data.js';
import { themeChanger } from '../../scripts-utilities/ThemeChanger_For_content-Pages.js';
import { updateTheme } from '../../scripts-utilities/ThemeChanger_For_content-Pages.js';
import { setTheme } from '../../scripts-utilities/ThemeChanger_For_content-Pages.js';
import { theme } from '../../scripts-utilities/ThemeChanger_For_content-Pages.js';
const search=document.getElementById('Search-Text');
const searchButton=document.getElementById('Search-Button');
const pages=document.getElementById('Pages');
const autoCompleteList=document.getElementById('Auto-Complete-List');
const autoCompleteListItem=document.getElementsByClassName('Auto-Complete-List-Item');
const searchBorder= document.getElementById('Search-Bar-Border');

themeChanger();

search.value= sessionStorage.getItem('savedSearch')||'';

document.getElementById('Theme-Button').addEventListener('keydown', function(e) {
  if (e.keyCode === 13) {
      e.preventDefault();
  }
});




//brings to history page
const historyBtn =document.getElementById('HistoryBtn');
historyBtn.onclick=e=>{
  window.location.href='../../History-page/History-Library.html';
};


//brings to home page
const homeBtn =document.getElementById('HomeBtn');
homeBtn.onclick=e=>{
  window.location.href='../../Main-Library/Main-Library.html';
};


/* 
save the page numbers in an aray so when you refresh the page it saves the placement 
of where you last left off
*/

let MaxPages=0;

// these load the saved data

let page = JSON.parse(sessionStorage.getItem('savedPage')) || 1;

let pageNumbers = JSON.parse(sessionStorage.getItem('savedPageButtonNumbers')) || [1,2,3,4,5,6,7,8,9,10];




// this loads the previous search when the page is refreshed

search.value= sessionStorage.getItem('savedSearch')||'';




//code load the content

/*
to change how much content is loaded on the page change the for loop in load content
 for(let i=0; i<change this number; i++) (page-1)*change this number  , 
(page-1)* change this number + change this number so if it is  
for(let i=0; i<contentData.slice((page-1)*24,(page-1)*24+24); i++) and 
(page-1)*24,(page-1)*24+24) you would change all the 24s
*/

let searchedContentent=[];





// end of code that loads content




//this function selects the first page



searchButton.onclick=()=>{

  search.blur();

  searchedContentent=[];

  sessionStorage.setItem('savedSearch', search.value);

  sessionStorage.setItem('savedPage', page)

  hideAutocompeleList();

  window.location.href = '../../Main-Library/Main-Library.html';

};

search.addEventListener('keypress', event=>{

if('Enter'===event.key){

  search.blur();

  searchedContentent=[];

  sessionStorage.setItem('savedSearch', search.value);


  hideAutocompeleList();

  window.location.href = '../../Main-Library/Main-Library.html';

};

});



// this is the auto complete code for the search bar
// this is the auto complete code for the search bar
// this is the auto complete code for the search bar
// this is the auto complete code for the search bar


document.addEventListener('click', event=>{

//if the logo is pressed it will make the saved search on the main library nothing

// if(event.target.innerText===('WWWebspectrum')){
//   sessionStorage.setItem('savedSearch', '');
// }


if(event.target.classList.contains('Auto-Complete-List-Item')){

  search.value=event.target.innerText;

  searchedContentent=[];

  sessionStorage.setItem('savedSearch', search.value);

  window.location.href = '../../Main-Library/Main-Library.html';

};



if(document.activeElement === search){
  autoCompleteListFunction();
}else{
  hideAutocompeleList();
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



