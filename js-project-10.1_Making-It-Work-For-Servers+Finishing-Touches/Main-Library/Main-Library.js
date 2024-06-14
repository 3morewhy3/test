import {contentData} from './Main-Library-Data.js';
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



const Nav = document.getElementById('Nav');
const FiltersBtn = document.getElementById('FiltersBtn');
const topicsBtn = document.getElementById('TopicsBtn');
const FiltersWindow = document.getElementById('Filters-Window');
const CloseFiltersWindowBtn=document.getElementById('Close-Filters-Window-Btn');
const dateFilter = document.getElementById('Date-Filter');
const monthInput = document.getElementById('month-input');
const dayInput = document.getElementById('day-input');
const yearInput = document.getElementById('year-input');
const dateFilterBefore = document.getElementById('Date-Filter-Before');
const dateFilterAfter= document.getElementById('Date-Filter-After');
const dateFilterExactly = document.getElementById('Date-Filter-Exactly');
const dateFilterBeforeOption = document.getElementById('Date-Filter-Before-Option');
const dateFilterAfterOption = document.getElementById('Date-Filter-After-Option');
const dateFilterExactlyOption = document.getElementById('Date-Filter-Exactly-Option');

let BeforeDateFilter = JSON.parse(sessionStorage.getItem('BeforeDateFilter')) || '';
let AfterDateFilter = JSON.parse(sessionStorage.getItem('AfterDateFilter')) || '';
let ExactlyDateFilter = JSON.parse(sessionStorage.getItem('ExactlyDateFilter')) || '';

















let LableDateFilterCounter= sessionStorage.getItem('LableDateFilterCounter') || 0;

/*This code checks to see if the date filiter is applied and if it is it adds a filter
 lable to the page with a remove button that removes the filter and the lable*/

function LableDateFilter(DateOption, text){
if(''!=DateOption && LableDateFilterCounter===0){
  LableDateFilterCounter=1;
  sessionStorage.setItem('LableDateFilterCounter', 1);
const dateFilterLable=document.createElement('p');
dateFilterLable.id='dateFilterLable';
dateFilterLable.innerText=`${text}${Number(DateOption.month)}/${Number(DateOption.day)}/${Number(DateOption.year)}`

const removeDateFilter=document.createElement('p');
removeDateFilter.id='removeDateFilter';
removeDateFilter.innerText='remove';


Nav.parentNode.insertBefore(dateFilterLable, Nav.nextSibling);
Nav.parentNode.insertBefore(removeDateFilter, Nav.nextSibling);

let removeDateFilterBtn = document.getElementById('removeDateFilter')|| '';
let dateFilterLabletxt = document.getElementById('dateFilterLable') || '';

// some code for the to make the page theme work for the lable and remove button
if(theme==='Dark'){
  removeDateFilterBtn.style.background='#000000';
  removeDateFilterBtn.style.color='#ffffff';
  removeDateFilterBtn.style.borderColor='#ffffff'

  dateFilterLabletxt.style.background='#000000';
  dateFilterLabletxt.style.color='#ffffff';
  dateFilterLabletxt.style.borderColor='#ffffff';
};
// end of code to make the page theme work for the lable and remove button

removeDateFilterBtn.onclick=e=>{
  LableDateFilterCounter=0;
  sessionStorage.setItem('LableDateFilterCounter', 0);
  sessionStorage.removeItem('BeforeDateFilter');
  sessionStorage.removeItem('AfterDateFilter');
  sessionStorage.removeItem('ExactlyDateFilter');
  
  BeforeDateFilter='';
  AfterDateFilter='';
  ExactlyDateFilter='';
  
  loadContent();
  pagesLimiterAndLoader();
 Nav.parentNode.removeChild(removeDateFilterBtn);
 Nav.parentNode.removeChild(dateFilterLabletxt);
};

};



};



/*End of code that checks to see if the date filiter is applied and if it is it adds a filter
 lable to the page with a remove button that removes the filter and the lable*/







//This code creates the Date filter lable and a remove button that removes the filter and the lable
function setLableDateFilter(DateOption, text){
if(''!=DateOption){
  const dateFilterLable=document.createElement('p');
  dateFilterLable.id='dateFilterLable';
  dateFilterLable.innerText=`${text}${Number(DateOption.month)}/${Number(DateOption.day)}/${Number(DateOption.year)}`
  
  const removeDateFilter=document.createElement('p');
  removeDateFilter.id='removeDateFilter';
  removeDateFilter.innerText='remove';
  
  
  Nav.parentNode.insertBefore(dateFilterLable, Nav.nextSibling);
  Nav.parentNode.insertBefore(removeDateFilter, Nav.nextSibling);
  
  let removeDateFilterBtn = document.getElementById('removeDateFilter')|| '';
  let dateFilterLabletxt = document.getElementById('dateFilterLable') || '';
  
  
  removeDateFilterBtn.onclick=e=>{
    LableDateFilterCounter=0;
    sessionStorage.setItem('LableDateFilterCounter', 0);
    sessionStorage.removeItem('BeforeDateFilter');
    sessionStorage.removeItem('AfterDateFilter');
    sessionStorage.removeItem('ExactlyDateFilter');
    
    BeforeDateFilter='';
    AfterDateFilter='';
    ExactlyDateFilter='';
    
    loadContent();
    pagesLimiterAndLoader();
   Nav.parentNode.removeChild(removeDateFilterBtn);
   Nav.parentNode.removeChild(dateFilterLabletxt);
  };


};
};
/*this is the end of the code that creates the Date filter lable and a remove 
button that removes the filter and the lable*/

setLableDateFilter(BeforeDateFilter,'Filter Before:');
setLableDateFilter(AfterDateFilter,'Filter After:');
setLableDateFilter(ExactlyDateFilter,'Filter Exactly:');













/*This code checks to see if the date input for the filter is a valid
 date and if it is not it gives an alert and resets the invalid value for the month, day or year*/
function DateFunction(){

  const FiltersBtn = document.getElementById('FiltersBtn');
  const FiltersWindow = document.getElementById('Filters-Window');
  const topicsBtn = document.getElementById('TopicsBtn');
  const Nav = document.getElementById('Nav');
  const dateFilter = document.getElementById('Date-Filter');
  const monthInput = document.getElementById('month-input');
  const dayInput = document.getElementById('day-input');
  const yearInput = document.getElementById('year-input');
  const dateFilterBefore = document.getElementById('Date-Filter-Before');
  const dateFilterAfter= document.getElementById('Date-Filter-After');
  const dateFilterExactly = document.getElementById('Date-Filter-Exactly');

function DateInput(str, max, min, alertText){
if(isNaN(str.value) || '' != str.value && Number(str.value) > max || '' != str.value && Number(str.value) < min){
  str.value='';
  alert(alertText);
};
};

monthInput.addEventListener('blur', e=>{
  DateInput(monthInput, 12, 1, 'Not A Valid Month');
  if(''!= monthInput.value){

  }
});

dayInput.addEventListener('blur', e=>{
  DateInput(dayInput, 31, 1, 'Not A Valid Day');
});

yearInput.addEventListener('blur', e=>{
  DateInput(yearInput, 999999999, 2024, 'Not A Valid Year');
});

//This code changes the text of the date options in the filter window
dateFilter.addEventListener('keyup', e=>{
  if(0 != monthInput.value && 0 != dayInput.value && yearInput.value.length >=4){
  dateFilterBefore.innerText= 'Before: '+ Number(monthInput.value)+'/'+ Number(dayInput.value)+'/'+Number(yearInput.value);
  dateFilterAfter.innerText= 'After: '+ Number(monthInput.value)+'/'+ Number(dayInput.value)+'/'+Number(yearInput.value);
  dateFilterExactly.innerText='Exactly: '+ Number(monthInput.value)+'/'+ Number(dayInput.value)+'/'+Number(yearInput.value);
  }else{
    dateFilterBefore.innerText= 'Before: 00/00/0000';
    dateFilterAfter.innerText= 'After: 00/00/0000';
    dateFilterExactly.innerText='Exactly: 00/00/0000';
  };
});
//This is the end of the code that changes the text of the date options in the filter window
};


/*This is the end of the code that checks to see if the date input for the filter is a valid
sate and if it is not it gives an alert and resets the invalid value for the month, day or year*/






/*This code makes it so when you click on the filter button it opens a window for filtering 
the search it also saves the the filter data to session storage and if you press the filter button 
again while the filter window is open it closes
the filter window*/

let FiltersBtnDoubbleaclick=0;

FiltersBtn.onclick=e=>{


FiltersBtnDoubbleaclick++;

if(FiltersBtnDoubbleaclick===1){

  const newdiv=document.createElement('div')

  newdiv.id='Filters-Window'
  const removeTopicBtn = document.getElementById('RemoveTopicBtn');

  if (Nav.children.length >=3) {
    

    Nav.parentNode.insertBefore(newdiv, Nav.nextSibling);
} 

else {

    Nav.appendChild(newdiv);
};


  const FiltersWindow = document.getElementById('Filters-Window');




  FiltersWindow.innerHTML=`
  <button id="Close-Filters-Window-Btn">X</button>
  <div id="Date-Filter">
    <div>
     <p id="Set-Date-Lable" >Filter By Date:</p>
      <div id="Set-Date"><input id="month-input" type="text" placeholder="MM" maxlength="2">/<input id="day-input" type="text" placeholder="DD" maxlength="2">/<input id="year-input" type="text" placeholder="YYYY" maxlength="4"></div>
    </div>

     <div>
         <label id="Date-Filter-Before" class="Date-Filter-Option-Lable" for="Date-Filter-Before-Option">Before: 00/00/0000</label>
        <input id="Date-Filter-Before-Option" name="Date-Filter-Option" type="radio">
     </div>

     <div>
         <label id="Date-Filter-After" class="Date-Filter-Option-Lable" for="Date-Filter-After-Option">After: 00/00/0000 </label>
        <input id="Date-Filter-After-Option" name="Date-Filter-Option" type="radio">
     </div>

      <div>
         <label id="Date-Filter-Exactly" class="Date-Filter-Option-Lable" for="Date-Filter-Exactly-Option">Exactly: 00/00/0000</label>
        <input id="Date-Filter-Exactly-Option" name="Date-Filter-Option" type="radio">
      </div>

    </div>
    <button id="Set-Filter-Btn">Filter</button>`


    DateFunction();
    const FiltersBtn = document.getElementById('FiltersBtn');
    const topicsBtn = document.getElementById('TopicsBtn');
    const CloseFiltersWindowBtn=document.getElementById('Close-Filters-Window-Btn');
    const dateFilter = document.getElementById('Date-Filter');
    const monthInput = document.getElementById('month-input');
    const dayInput = document.getElementById('day-input');
    const yearInput = document.getElementById('year-input');
    const dateFilterBefore = document.getElementById('Date-Filter-Before');
    const dateFilterAfter = document.getElementById('Date-Filter-After');
    const dateFilterExactly = document.getElementById('Date-Filter-Exactly');
    const dateFilterBeforeOption = document.getElementById('Date-Filter-Before-Option');
    const dateFilterAfterOption = document.getElementById('Date-Filter-After-Option');
    const dateFilterExactlyOption = document.getElementById('Date-Filter-Exactly-Option');
    const setFilterBtn = document.getElementById('Set-Filter-Btn');

    updateTheme();

    function checkDateOptionAndSaveDate(){
    
    if(''!=monthInput.value && ''!=dayInput.value && ''!=yearInput.value){
      
      //the dates need to be input first before this will work
      
      if(dateFilterBeforeOption.checked){

        LableDateFilterCounter=0;
        sessionStorage.setItem('LableDateFilterCounter', 0);

        sessionStorage.setItem('BeforeDateFilter', 
        
        JSON.stringify({month:monthInput.value, day:dayInput.value, year:yearInput.value})
        
        );
        
        
        BeforeDateFilter = JSON.parse(sessionStorage.getItem('BeforeDateFilter'));
        sessionStorage.removeItem('AfterDateFilter');
        sessionStorage.removeItem('ExactlyDateFilter');
        AfterDateFilter='';
        ExactlyDateFilter='';

      };

      if(dateFilterAfterOption.checked){

        LableDateFilterCounter=0;
        sessionStorage.setItem('LableDateFilterCounter', 0);

        sessionStorage.setItem('AfterDateFilter', 

        JSON.stringify({month:monthInput.value, day:dayInput.value, year:yearInput.value})

        );

        AfterDateFilter = JSON.parse(sessionStorage.getItem('AfterDateFilter'));
        sessionStorage.removeItem('BeforeDateFilter');
        sessionStorage.removeItem('ExactlyDateFilter');
        BeforeDateFilter='';
        ExactlyDateFilter='';

      };
      
      if(dateFilterExactlyOption.checked){

        LableDateFilterCounter=0;
        sessionStorage.setItem('LableDateFilterCounter', 0);

        sessionStorage.setItem('ExactlyDateFilter', 

        JSON.stringify({month:monthInput.value, day:dayInput.value, year:yearInput.value})
        
        );
        
        ExactlyDateFilter = JSON.parse((sessionStorage.getItem('ExactlyDateFilter')));
        sessionStorage.removeItem('BeforeDateFilter');
        sessionStorage.removeItem('AfterDateFilter');
        BeforeDateFilter='';
        AfterDateFilter='';
        
      };
      
    };
  };

    FiltersWindow.onclick=e=>{
    checkDateOptionAndSaveDate();
  };



    setFilterBtn.onclick=e=>{

      checkDateOptionAndSaveDate();

      if(0===LableDateFilterCounter){

      let removeDateFilterBtn = document.getElementById('removeDateFilter')|| '';
      let dateFilterLabletxt = document.getElementById('dateFilterLable') || '';
      if(''!=removeDateFilterBtn && ''!=dateFilterLabletxt){
      Nav.parentNode.removeChild(removeDateFilterBtn);
      Nav.parentNode.removeChild(dateFilterLabletxt);
      };

    };

      loadContent();
      pagesLimiterAndLoader();
      LableDateFilter(BeforeDateFilter,'Filter Before:');
      LableDateFilter(AfterDateFilter,'Filter After:');
      LableDateFilter(ExactlyDateFilter,'Filter Exactly:');

      if(''!=BeforeDateFilter){
        AfterDateFilter='';
        ExactlyDateFilter='';
      };
      if(''!=AfterDateFilter){
        BeforeDateFilter='';
        ExactlyDateFilter='';
      };
      if(''!=ExactlyDateFilter){
        BeforeDateFilter='';
        AfterDateFilter='';
      };
    };

    

    CloseFiltersWindowBtn.onclick=e=>{
      FiltersBtnDoubbleaclick=0;



      if (Nav.children.length >=3) {
        Nav.parentNode.removeChild(FiltersWindow);
    }else {
      Nav.removeChild(FiltersWindow);
    };

      };

};


if(FiltersBtnDoubbleaclick > 1){

  const FiltersWindow = document.getElementById('Filters-Window');

  FiltersBtnDoubbleaclick=0;

  if (Nav.children.length >=3) {
    Nav.parentNode.removeChild(FiltersWindow);
}else {
  Nav.removeChild(FiltersWindow);
};
  };

};

/*This is the end of the code code makes it so when you click on the filter button it opens a 
window for filtering the search it also saves the the filter data to session storage and if 
you press the filter button again while the filter window is open it closes the filter window
*/




let Topic = sessionStorage.getItem('Topic') || '';




themeChanger();

//this code pervents enter and space from changeing the page theme
document.getElementById('Theme-Button').addEventListener('keydown', e=> {
  if (e.key === ' ' || e.key ==='Enter') {
      e.preventDefault();
  }
});
//this is the end of the code that pervents enter and space from changeing the page theme


/* 
save the page numbers in an aray so when you refresh the page it saves the placement 
of where you last left off
*/

let MaxPages=0;
let Pages=0;

// these load the saved data

let page = JSON.parse(sessionStorage.getItem('savedPage')) || 1;


let pageNumbers = JSON.parse(sessionStorage.getItem('savedPageButtonNumbers')) || [1,2,3,4,5,6,7,8,9,10];

addedPages.children[sessionStorage.getItem('savedSelectedButton') || 0].
classList.add('PageLink-selected');


// this loads the previous search when the page is refreshed

search.value= sessionStorage.getItem('savedSearch')||'';



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

 sessionStorage.setItem('savedPageButtonNumbers', JSON.stringify(pageNumbers));

};

// this is the end of the funtion that saves the page numbers








// this function saves the last selected button

function saveSelectedButton(){

  for(let i=0;i<addedPages.children.length;i++){

    if(addedPages.children[i].classList.contains('PageLink-selected')){

    sessionStorage.setItem('savedSelectedButton', i);

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



//for(let i=0; i<contentData.length; i++){
//   if(Number(contentData[i].Date.year) < Number(BeforeDateFilter.year) || Number(contentData[i].Date.year) === Number(BeforeDateFilter.year) && Number(contentData[i].Date.month) < Number(BeforeDateFilter.month)
//   || Number(contentData[i].Date.year) === Number(BeforeDateFilter.year) && Number(contentData[i].Date.month) === Number(BeforeDateFilter.month) && Number(contentData[i].Date.day) < Number(BeforeDateFilter.day)){

//   };
// // Number(contentData[i].Date.month) < Number(BeforeDateFilter.month) && Number(contentData[i].Date.day) < Number(BeforeDateFilter.day) &&



// };



let searchedContentent=[];



function 

loadContent(){


  contentList.innerHTML='';

  searchedContentent=[];





  const dateFilterExactlyOption = document.getElementById('Date-Filter-Exactly-Option');

 if(searchedContentent.length===0 && ''===sessionStorage.getItem('savedSearch') && ''===Topic && ''===BeforeDateFilter  && ''===AfterDateFilter  && ''===ExactlyDateFilter ){

  searchedContentent=[];

  contentList.innerHTML='';

  for(let i=0; i<contentData.slice((page-1)*12,(page-1)*12+12).length; i++){

       contentList.innerHTML+=`
       <a href="${contentData[i].Link}">
       <div" class="Content-Container">
       <img class="image" src="${contentData.slice((page-1)*12,(page-1)*12+12)[i].Image}">
       <div class="discription">${contentData.slice((page-1)*12,(page-1)*12+12)[i].Date.month}/${contentData.slice((page-1)*12,(page-1)*12+12)[i].Date.day}/${contentData.slice((page-1)*12,(page-1)*12+12)[i].Date.year}</div>
       <div class="discription">${contentData.slice((page-1)*12,(page-1)*12+12)[i].Description}</div>
       </div>
       </a>`;

  };

}else{







  

    if(searchedContentent.length===0 && ''===Topic && ''===BeforeDateFilter  && ''===AfterDateFilter  && ''===ExactlyDateFilter){

      searchedContentent=[];

      contentList.innerHTML='';

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
      contentData[i].KeyWords[9].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, ''))||
      contentData[i].KeyWords[10].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, ''))||
      contentData[i].KeyWords[11].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, ''))){

        searchedContentent.push(contentData[i]);

      };

    };

  };


  if(searchedContentent.length===0 && ''===Topic && ''!=BeforeDateFilter  && ''===AfterDateFilter  && ''===ExactlyDateFilter){

    searchedContentent=[];

    contentList.innerHTML='';

  for(let i=0; i<contentData.length; i++){

    let BeforeThisDate=false;

    if(Number(contentData[i].Date.year) < Number(BeforeDateFilter.year) || Number(contentData[i].Date.year) === Number(BeforeDateFilter.year) && Number(contentData[i].Date.month) < Number(BeforeDateFilter.month)
    || Number(contentData[i].Date.year) === Number(BeforeDateFilter.year) && Number(contentData[i].Date.month) === Number(BeforeDateFilter.month) && Number(contentData[i].Date.day) < Number(BeforeDateFilter.day)){
  BeforeThisDate=true;
}else{
  BeforeThisDate=false;
};

    

    if(contentData[i].Description.toLowerCase().replace(/\s/g, '').includes((search.value).toLowerCase().replace(/\s/g, '')) && BeforeThisDate===true|| 
      contentData[i].KeyWords[0].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && BeforeThisDate===true||
      contentData[i].KeyWords[1].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && BeforeThisDate===true||
      contentData[i].KeyWords[2].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && BeforeThisDate===true||
      contentData[i].KeyWords[3].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && BeforeThisDate===true||
      contentData[i].KeyWords[4].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && BeforeThisDate===true||
      contentData[i].KeyWords[5].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && BeforeThisDate===true||
      contentData[i].KeyWords[6].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && BeforeThisDate===true||
      contentData[i].KeyWords[7].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && BeforeThisDate===true||
      contentData[i].KeyWords[8].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && BeforeThisDate===true||
      contentData[i].KeyWords[9].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && BeforeThisDate===true||
      contentData[i].KeyWords[10].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && BeforeThisDate===true||
      contentData[i].KeyWords[11].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && BeforeThisDate===true){

        searchedContentent.push(contentData[i]);

      };

  };

};









if(searchedContentent.length===0 && ''===Topic && ''===BeforeDateFilter  && ''!=AfterDateFilter  && ''===ExactlyDateFilter){

  searchedContentent=[];

  contentList.innerHTML='';

for(let i=0; i<contentData.length; i++){

let AfterThisDate=false;

  if(Number(contentData[i].Date.year) > Number(AfterDateFilter.year) || Number(contentData[i].Date.year) === Number(AfterDateFilter.year) && Number(contentData[i].Date.month) > Number(AfterDateFilter.month)
  || Number(contentData[i].Date.year) === Number(AfterDateFilter.year) && Number(contentData[i].Date.month) === Number(AfterDateFilter.month) && Number(contentData[i].Date.day) > Number(AfterDateFilter.day)){
    AfterThisDate=true;
}else{
  AfterThisDate=false;
};

  

  if(contentData[i].Description.toLowerCase().replace(/\s/g, '').includes((search.value).toLowerCase().replace(/\s/g, '')) && AfterThisDate===true|| 
    contentData[i].KeyWords[0].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && AfterThisDate===true||
    contentData[i].KeyWords[1].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && AfterThisDate===true||
    contentData[i].KeyWords[2].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && AfterThisDate===true||
    contentData[i].KeyWords[3].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && AfterThisDate===true||
    contentData[i].KeyWords[4].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && AfterThisDate===true||
    contentData[i].KeyWords[5].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && AfterThisDate===true||
    contentData[i].KeyWords[6].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && AfterThisDate===true||
    contentData[i].KeyWords[7].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && AfterThisDate===true||
    contentData[i].KeyWords[8].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && AfterThisDate===true||
    contentData[i].KeyWords[9].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && AfterThisDate===true||
    contentData[i].KeyWords[10].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && AfterThisDate===true||
    contentData[i].KeyWords[11].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && AfterThisDate===true){

      searchedContentent.push(contentData[i]);

    };

};

};









if(searchedContentent.length===0 && ''===Topic && ''===BeforeDateFilter  && ''===AfterDateFilter  && ''!=ExactlyDateFilter){

  searchedContentent=[];

  contentList.innerHTML='';

for(let i=0; i<contentData.length; i++){

let ExactlyThisDate=false;

  if(Number(contentData[i].Date.month) === Number(ExactlyDateFilter.month) && Number(contentData[i].Date.day) === Number(ExactlyDateFilter.day) && Number(contentData[i].Date.year) === Number(ExactlyDateFilter.year)){
    ExactlyThisDate=true;
}else{
  ExactlyThisDate=false;
};

  

  if(contentData[i].Description.toLowerCase().replace(/\s/g, '').includes((search.value).toLowerCase().replace(/\s/g, '')) && ExactlyThisDate===true|| 
    contentData[i].KeyWords[0].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && ExactlyThisDate===true||
    contentData[i].KeyWords[1].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && ExactlyThisDate===true||
    contentData[i].KeyWords[2].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && ExactlyThisDate===true||
    contentData[i].KeyWords[3].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && ExactlyThisDate===true||
    contentData[i].KeyWords[4].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && ExactlyThisDate===true||
    contentData[i].KeyWords[5].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && ExactlyThisDate===true||
    contentData[i].KeyWords[6].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && ExactlyThisDate===true||
    contentData[i].KeyWords[7].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && ExactlyThisDate===true||
    contentData[i].KeyWords[8].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && ExactlyThisDate===true||
    contentData[i].KeyWords[9].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && ExactlyThisDate===true||
    contentData[i].KeyWords[10].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && ExactlyThisDate===true||
    contentData[i].KeyWords[11].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && ExactlyThisDate===true){

      searchedContentent.push(contentData[i]);

    };

};

};













if(searchedContentent.length===0 && ''!=Topic && ''===BeforeDateFilter  && ''===AfterDateFilter  && ''===ExactlyDateFilter){

  searchedContentent=[];

  contentList.innerHTML='';

  for(let i=0; i<contentData.length; i++){

    if(contentData[i].Description.toLowerCase().replace(/\s/g, '').includes((search.value).toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic) ||
    contentData[i].Description.toLowerCase().replace(/\s/g, '').includes((search.value).toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic) ||
    contentData[i].Description.toLowerCase().replace(/\s/g, '').includes((search.value).toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic) ||
    contentData[i].Description.toLowerCase().replace(/\s/g, '').includes((search.value).toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic) ||
    contentData[i].Description.toLowerCase().replace(/\s/g, '').includes((search.value).toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic) ||
    contentData[i].Description.toLowerCase().replace(/\s/g, '').includes((search.value).toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic) ||

    contentData[i].KeyWords[0].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic) ||
    contentData[i].KeyWords[0].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic) ||
    contentData[i].KeyWords[0].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic) ||
    contentData[i].KeyWords[0].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic) ||
    contentData[i].KeyWords[0].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic) ||
    contentData[i].KeyWords[0].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic) ||

    contentData[i].KeyWords[1].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic) ||
    contentData[i].KeyWords[1].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic) ||
    contentData[i].KeyWords[1].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic) ||
    contentData[i].KeyWords[1].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic) ||
    contentData[i].KeyWords[1].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic) ||
    contentData[i].KeyWords[1].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic) ||

    contentData[i].KeyWords[2].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic) ||
    contentData[i].KeyWords[2].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic) ||
    contentData[i].KeyWords[2].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic) ||
    contentData[i].KeyWords[2].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic) ||
    contentData[i].KeyWords[2].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic) ||
    contentData[i].KeyWords[2].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic) ||

    contentData[i].KeyWords[3].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic) ||
    contentData[i].KeyWords[3].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic) ||
    contentData[i].KeyWords[3].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic) ||
    contentData[i].KeyWords[3].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic) ||
    contentData[i].KeyWords[3].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic) ||
    contentData[i].KeyWords[3].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic) ||

    contentData[i].KeyWords[4].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic) ||
    contentData[i].KeyWords[4].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic) ||
    contentData[i].KeyWords[4].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic) ||
    contentData[i].KeyWords[4].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic) ||
    contentData[i].KeyWords[4].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic) ||
    contentData[i].KeyWords[4].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic) ||

    contentData[i].KeyWords[5].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic) ||
    contentData[i].KeyWords[5].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic) ||
    contentData[i].KeyWords[5].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic) ||
    contentData[i].KeyWords[5].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic) ||
    contentData[i].KeyWords[5].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic) ||
    contentData[i].KeyWords[5].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic) ||

    contentData[i].KeyWords[6].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic) ||
    contentData[i].KeyWords[6].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic) ||
    contentData[i].KeyWords[6].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic) ||
    contentData[i].KeyWords[6].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic) ||
    contentData[i].KeyWords[6].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic) ||
    contentData[i].KeyWords[6].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic) ||

    contentData[i].KeyWords[7].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic) ||
    contentData[i].KeyWords[7].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic) ||
    contentData[i].KeyWords[7].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic) ||
    contentData[i].KeyWords[7].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic) ||
    contentData[i].KeyWords[7].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic) ||
    contentData[i].KeyWords[7].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic) ||

    contentData[i].KeyWords[8].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic) ||
    contentData[i].KeyWords[8].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic) ||
    contentData[i].KeyWords[8].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic) ||
    contentData[i].KeyWords[8].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic) ||
    contentData[i].KeyWords[8].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic) ||
    contentData[i].KeyWords[8].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic) ||

    contentData[i].KeyWords[9].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic) ||
    contentData[i].KeyWords[9].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic) ||
    contentData[i].KeyWords[9].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic) ||
    contentData[i].KeyWords[9].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic) ||
    contentData[i].KeyWords[9].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic) ||
    contentData[i].KeyWords[9].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic) ||

    contentData[i].KeyWords[10].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic) ||
    contentData[i].KeyWords[10].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic) ||
    contentData[i].KeyWords[10].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic) ||
    contentData[i].KeyWords[10].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic) ||
    contentData[i].KeyWords[10].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic) ||
    contentData[i].KeyWords[10].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic) ||
    
    contentData[i].KeyWords[11].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic) ||
    contentData[i].KeyWords[11].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic) ||
    contentData[i].KeyWords[11].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic) ||
    contentData[i].KeyWords[11].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic) ||
    contentData[i].KeyWords[11].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic) ||
    contentData[i].KeyWords[11].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic)){

      searchedContentent.push(contentData[i]);

    };

  };

};











    
    if(searchedContentent.length===0 && ''!=Topic && ''!=BeforeDateFilter  && ''===AfterDateFilter  && ''===ExactlyDateFilter){

      searchedContentent=[];

      contentList.innerHTML='';

      for(let i=0; i<contentData.length; i++){

    let BeforeThisDate=false;

    if(Number(contentData[i].Date.year) < Number(BeforeDateFilter.year) || Number(contentData[i].Date.year) === Number(BeforeDateFilter.year) && Number(contentData[i].Date.month) < Number(BeforeDateFilter.month)
    || Number(contentData[i].Date.year) === Number(BeforeDateFilter.year) && Number(contentData[i].Date.month) === Number(BeforeDateFilter.month) && Number(contentData[i].Date.day) < Number(BeforeDateFilter.day)){
  BeforeThisDate=true;
}else{
  BeforeThisDate=false;
};


  
        if(contentData[i].Description.toLowerCase().replace(/\s/g, '').includes((search.value).toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic) && BeforeThisDate===true||
        contentData[i].Description.toLowerCase().replace(/\s/g, '').includes((search.value).toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic) && BeforeThisDate===true||
        contentData[i].Description.toLowerCase().replace(/\s/g, '').includes((search.value).toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic) && BeforeThisDate===true||
        contentData[i].Description.toLowerCase().replace(/\s/g, '').includes((search.value).toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic) && BeforeThisDate===true||
        contentData[i].Description.toLowerCase().replace(/\s/g, '').includes((search.value).toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic) && BeforeThisDate===true||
        contentData[i].Description.toLowerCase().replace(/\s/g, '').includes((search.value).toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic) && BeforeThisDate===true||

        contentData[i].KeyWords[0].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic) && BeforeThisDate===true||
        contentData[i].KeyWords[0].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic) && BeforeThisDate===true||
        contentData[i].KeyWords[0].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic) && BeforeThisDate===true||
        contentData[i].KeyWords[0].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic) && BeforeThisDate===true||
        contentData[i].KeyWords[0].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic) && BeforeThisDate===true||
        contentData[i].KeyWords[0].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic) && BeforeThisDate===true||

        contentData[i].KeyWords[1].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic) && BeforeThisDate===true||
        contentData[i].KeyWords[1].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic) && BeforeThisDate===true||
        contentData[i].KeyWords[1].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic) && BeforeThisDate===true||
        contentData[i].KeyWords[1].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic) && BeforeThisDate===true||
        contentData[i].KeyWords[1].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic) && BeforeThisDate===true||
        contentData[i].KeyWords[1].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic) && BeforeThisDate===true||

        contentData[i].KeyWords[2].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic) && BeforeThisDate===true||
        contentData[i].KeyWords[2].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic) && BeforeThisDate===true||
        contentData[i].KeyWords[2].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic) && BeforeThisDate===true||
        contentData[i].KeyWords[2].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic) && BeforeThisDate===true||
        contentData[i].KeyWords[2].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic) && BeforeThisDate===true||
        contentData[i].KeyWords[2].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic) && BeforeThisDate===true||

        contentData[i].KeyWords[3].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic) && BeforeThisDate===true||
        contentData[i].KeyWords[3].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic) && BeforeThisDate===true||
        contentData[i].KeyWords[3].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic) && BeforeThisDate===true||
        contentData[i].KeyWords[3].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic) && BeforeThisDate===true||
        contentData[i].KeyWords[3].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic) && BeforeThisDate===true||
        contentData[i].KeyWords[3].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic) && BeforeThisDate===true||

        contentData[i].KeyWords[4].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic) && BeforeThisDate===true||
        contentData[i].KeyWords[4].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic) && BeforeThisDate===true||
        contentData[i].KeyWords[4].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic) && BeforeThisDate===true||
        contentData[i].KeyWords[4].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic) && BeforeThisDate===true||
        contentData[i].KeyWords[4].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic) && BeforeThisDate===true||
        contentData[i].KeyWords[4].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic) && BeforeThisDate===true||

        contentData[i].KeyWords[5].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic) && BeforeThisDate===true||
        contentData[i].KeyWords[5].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic) && BeforeThisDate===true||
        contentData[i].KeyWords[5].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic) && BeforeThisDate===true||
        contentData[i].KeyWords[5].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic) && BeforeThisDate===true||
        contentData[i].KeyWords[5].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic) && BeforeThisDate===true||
        contentData[i].KeyWords[5].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic) && BeforeThisDate===true||

        contentData[i].KeyWords[6].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic) && BeforeThisDate===true||
        contentData[i].KeyWords[6].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic) && BeforeThisDate===true||
        contentData[i].KeyWords[6].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic) && BeforeThisDate===true||
        contentData[i].KeyWords[6].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic) && BeforeThisDate===true||
        contentData[i].KeyWords[6].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic) && BeforeThisDate===true||
        contentData[i].KeyWords[6].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic) && BeforeThisDate===true||

        contentData[i].KeyWords[7].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic) && BeforeThisDate===true||
        contentData[i].KeyWords[7].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic) && BeforeThisDate===true||
        contentData[i].KeyWords[7].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic) && BeforeThisDate===true||
        contentData[i].KeyWords[7].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic) && BeforeThisDate===true||
        contentData[i].KeyWords[7].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic) && BeforeThisDate===true||
        contentData[i].KeyWords[7].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic) && BeforeThisDate===true||

        contentData[i].KeyWords[8].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic) && BeforeThisDate===true||
        contentData[i].KeyWords[8].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic) && BeforeThisDate===true||
        contentData[i].KeyWords[8].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic) && BeforeThisDate===true||
        contentData[i].KeyWords[8].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic) && BeforeThisDate===true||
        contentData[i].KeyWords[8].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic) && BeforeThisDate===true||
        contentData[i].KeyWords[8].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic) && BeforeThisDate===true||

        contentData[i].KeyWords[9].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic) && BeforeThisDate===true||
        contentData[i].KeyWords[9].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic) && BeforeThisDate===true||
        contentData[i].KeyWords[9].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic) && BeforeThisDate===true||
        contentData[i].KeyWords[9].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic) && BeforeThisDate===true||
        contentData[i].KeyWords[9].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic) && BeforeThisDate===true||
        contentData[i].KeyWords[9].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic) && BeforeThisDate===true||

        contentData[i].KeyWords[10].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic) && BeforeThisDate===true||
        contentData[i].KeyWords[10].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic) && BeforeThisDate===true||
        contentData[i].KeyWords[10].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic) && BeforeThisDate===true||
        contentData[i].KeyWords[10].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic) && BeforeThisDate===true||
        contentData[i].KeyWords[10].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic) && BeforeThisDate===true||
        contentData[i].KeyWords[10].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic) && BeforeThisDate===true||
        
        contentData[i].KeyWords[11].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic) && BeforeThisDate===true||
        contentData[i].KeyWords[11].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic) && BeforeThisDate===true||
        contentData[i].KeyWords[11].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic) && BeforeThisDate===true||
        contentData[i].KeyWords[11].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic) && BeforeThisDate===true||
        contentData[i].KeyWords[11].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic) && BeforeThisDate===true||
        contentData[i].KeyWords[11].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic) && BeforeThisDate===true){
  
          searchedContentent.push(contentData[i]);
  
        };

  
      };
  
    };












    if(searchedContentent.length===0 && ''!=Topic && ''===BeforeDateFilter  && ''!=AfterDateFilter  && ''===ExactlyDateFilter){

      searchedContentent=[];

      contentList.innerHTML='';

      for(let i=0; i<contentData.length; i++){

        let AfterThisDate=false;

        if(Number(contentData[i].Date.year) > Number(AfterDateFilter.year) || Number(contentData[i].Date.year) === Number(AfterDateFilter.year) && Number(contentData[i].Date.month) > Number(AfterDateFilter.month)
        || Number(contentData[i].Date.year) === Number(AfterDateFilter.year) && Number(contentData[i].Date.month) === Number(AfterDateFilter.month) && Number(contentData[i].Date.day) > Number(AfterDateFilter.day)){
          AfterThisDate=true;
      }else{
        AfterThisDate=false;
      };


  
        if(contentData[i].Description.toLowerCase().replace(/\s/g, '').includes((search.value).toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic) && AfterThisDate===true||
        contentData[i].Description.toLowerCase().replace(/\s/g, '').includes((search.value).toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic) && AfterThisDate===true||
        contentData[i].Description.toLowerCase().replace(/\s/g, '').includes((search.value).toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic) && AfterThisDate===true||
        contentData[i].Description.toLowerCase().replace(/\s/g, '').includes((search.value).toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic) && AfterThisDate===true||
        contentData[i].Description.toLowerCase().replace(/\s/g, '').includes((search.value).toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic) && AfterThisDate===true||
        contentData[i].Description.toLowerCase().replace(/\s/g, '').includes((search.value).toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic) && AfterThisDate===true||

        contentData[i].KeyWords[0].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic) && AfterThisDate===true||
        contentData[i].KeyWords[0].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic) && AfterThisDate===true||
        contentData[i].KeyWords[0].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic) && AfterThisDate===true||
        contentData[i].KeyWords[0].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic) && AfterThisDate===true||
        contentData[i].KeyWords[0].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic) && AfterThisDate===true||
        contentData[i].KeyWords[0].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic) && AfterThisDate===true||

        contentData[i].KeyWords[1].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic) && AfterThisDate===true||
        contentData[i].KeyWords[1].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic) && AfterThisDate===true||
        contentData[i].KeyWords[1].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic) && AfterThisDate===true||
        contentData[i].KeyWords[1].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic) && AfterThisDate===true||
        contentData[i].KeyWords[1].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic) && AfterThisDate===true||
        contentData[i].KeyWords[1].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic) && AfterThisDate===true||

        contentData[i].KeyWords[2].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic) && AfterThisDate===true||
        contentData[i].KeyWords[2].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic) && AfterThisDate===true||
        contentData[i].KeyWords[2].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic) && AfterThisDate===true||
        contentData[i].KeyWords[2].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic) && AfterThisDate===true||
        contentData[i].KeyWords[2].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic) && AfterThisDate===true||
        contentData[i].KeyWords[2].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic) && AfterThisDate===true||

        contentData[i].KeyWords[3].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic) && AfterThisDate===true||
        contentData[i].KeyWords[3].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic) && AfterThisDate===true||
        contentData[i].KeyWords[3].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic) && AfterThisDate===true||
        contentData[i].KeyWords[3].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic) && AfterThisDate===true||
        contentData[i].KeyWords[3].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic) && AfterThisDate===true||
        contentData[i].KeyWords[3].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic) && AfterThisDate===true||

        contentData[i].KeyWords[4].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic) && AfterThisDate===true||
        contentData[i].KeyWords[4].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic) && AfterThisDate===true||
        contentData[i].KeyWords[4].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic) && AfterThisDate===true||
        contentData[i].KeyWords[4].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic) && AfterThisDate===true||
        contentData[i].KeyWords[4].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic) && AfterThisDate===true||
        contentData[i].KeyWords[4].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic) && AfterThisDate===true||

        contentData[i].KeyWords[5].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic) && AfterThisDate===true||
        contentData[i].KeyWords[5].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic) && AfterThisDate===true||
        contentData[i].KeyWords[5].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic) && AfterThisDate===true||
        contentData[i].KeyWords[5].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic) && AfterThisDate===true||
        contentData[i].KeyWords[5].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic) && AfterThisDate===true||
        contentData[i].KeyWords[5].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic) && AfterThisDate===true||

        contentData[i].KeyWords[6].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic) && AfterThisDate===true||
        contentData[i].KeyWords[6].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic) && AfterThisDate===true||
        contentData[i].KeyWords[6].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic) && AfterThisDate===true||
        contentData[i].KeyWords[6].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic) && AfterThisDate===true||
        contentData[i].KeyWords[6].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic) && AfterThisDate===true||
        contentData[i].KeyWords[6].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic) && AfterThisDate===true||

        contentData[i].KeyWords[7].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic) && AfterThisDate===true||
        contentData[i].KeyWords[7].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic) && AfterThisDate===true||
        contentData[i].KeyWords[7].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic) && AfterThisDate===true||
        contentData[i].KeyWords[7].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic) && AfterThisDate===true||
        contentData[i].KeyWords[7].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic) && AfterThisDate===true||
        contentData[i].KeyWords[7].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic) && AfterThisDate===true||

        contentData[i].KeyWords[8].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic) && AfterThisDate===true||
        contentData[i].KeyWords[8].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic) && AfterThisDate===true||
        contentData[i].KeyWords[8].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic) && AfterThisDate===true||
        contentData[i].KeyWords[8].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic) && AfterThisDate===true||
        contentData[i].KeyWords[8].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic) && AfterThisDate===true||
        contentData[i].KeyWords[8].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic) && AfterThisDate===true||

        contentData[i].KeyWords[9].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic) && AfterThisDate===true||
        contentData[i].KeyWords[9].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic) && AfterThisDate===true||
        contentData[i].KeyWords[9].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic) && AfterThisDate===true||
        contentData[i].KeyWords[9].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic) && AfterThisDate===true||
        contentData[i].KeyWords[9].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic) && AfterThisDate===true||
        contentData[i].KeyWords[9].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic) && AfterThisDate===true||

        contentData[i].KeyWords[10].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic) && AfterThisDate===true||
        contentData[i].KeyWords[10].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic) && AfterThisDate===true||
        contentData[i].KeyWords[10].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic) && AfterThisDate===true||
        contentData[i].KeyWords[10].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic) && AfterThisDate===true||
        contentData[i].KeyWords[10].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic) && AfterThisDate===true||
        contentData[i].KeyWords[10].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic) && AfterThisDate===true||
        
        contentData[i].KeyWords[11].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic) && AfterThisDate===true||
        contentData[i].KeyWords[11].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic) && AfterThisDate===true||
        contentData[i].KeyWords[11].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic) && AfterThisDate===true||
        contentData[i].KeyWords[11].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic) && AfterThisDate===true||
        contentData[i].KeyWords[11].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic) && AfterThisDate===true||
        contentData[i].KeyWords[11].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic) && AfterThisDate===true){
  
          searchedContentent.push(contentData[i]);
  
        };

  
      };
  
    };

















    if(searchedContentent.length===0 && ''!=Topic && ''===BeforeDateFilter  && ''===AfterDateFilter  && ''!=ExactlyDateFilter){

      searchedContentent=[];

      contentList.innerHTML='';

      for(let i=0; i<contentData.length; i++){

        let ExactlyThisDate=false;

          if(Number(contentData[i].Date.month) === Number(ExactlyDateFilter.month) && Number(contentData[i].Date.day) === Number(ExactlyDateFilter.day) && Number(contentData[i].Date.year) === Number(ExactlyDateFilter.year)){
            ExactlyThisDate=true;
        }else{
          ExactlyThisDate=false;
        };


  
        if(contentData[i].Description.toLowerCase().replace(/\s/g, '').includes((search.value).toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic) && ExactlyThisDate===true||
        contentData[i].Description.toLowerCase().replace(/\s/g, '').includes((search.value).toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic) && ExactlyThisDate===true||
        contentData[i].Description.toLowerCase().replace(/\s/g, '').includes((search.value).toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic) && ExactlyThisDate===true||
        contentData[i].Description.toLowerCase().replace(/\s/g, '').includes((search.value).toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic) && ExactlyThisDate===true||
        contentData[i].Description.toLowerCase().replace(/\s/g, '').includes((search.value).toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic) && ExactlyThisDate===true||
        contentData[i].Description.toLowerCase().replace(/\s/g, '').includes((search.value).toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic) && ExactlyThisDate===true||

        contentData[i].KeyWords[0].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic) && ExactlyThisDate===true||
        contentData[i].KeyWords[0].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic) && ExactlyThisDate===true||
        contentData[i].KeyWords[0].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic) && ExactlyThisDate===true||
        contentData[i].KeyWords[0].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic) && ExactlyThisDate===true||
        contentData[i].KeyWords[0].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic) && ExactlyThisDate===true||
        contentData[i].KeyWords[0].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic) && ExactlyThisDate===true||

        contentData[i].KeyWords[1].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic) && ExactlyThisDate===true||
        contentData[i].KeyWords[1].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic) && ExactlyThisDate===true||
        contentData[i].KeyWords[1].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic) && ExactlyThisDate===true||
        contentData[i].KeyWords[1].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic) && ExactlyThisDate===true||
        contentData[i].KeyWords[1].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic) && ExactlyThisDate===true||
        contentData[i].KeyWords[1].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic) && ExactlyThisDate===true||

        contentData[i].KeyWords[2].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic) && ExactlyThisDate===true||
        contentData[i].KeyWords[2].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic) && ExactlyThisDate===true||
        contentData[i].KeyWords[2].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic) && ExactlyThisDate===true||
        contentData[i].KeyWords[2].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic) && ExactlyThisDate===true||
        contentData[i].KeyWords[2].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic) && ExactlyThisDate===true||
        contentData[i].KeyWords[2].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic) && ExactlyThisDate===true||

        contentData[i].KeyWords[3].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic) && ExactlyThisDate===true||
        contentData[i].KeyWords[3].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic) && ExactlyThisDate===true||
        contentData[i].KeyWords[3].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic) && ExactlyThisDate===true||
        contentData[i].KeyWords[3].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic) && ExactlyThisDate===true||
        contentData[i].KeyWords[3].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic) && ExactlyThisDate===true||
        contentData[i].KeyWords[3].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic) && ExactlyThisDate===true||

        contentData[i].KeyWords[4].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic) && ExactlyThisDate===true||
        contentData[i].KeyWords[4].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic) && ExactlyThisDate===true||
        contentData[i].KeyWords[4].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic) && ExactlyThisDate===true||
        contentData[i].KeyWords[4].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic) && ExactlyThisDate===true||
        contentData[i].KeyWords[4].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic) && ExactlyThisDate===true||
        contentData[i].KeyWords[4].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic) && ExactlyThisDate===true||

        contentData[i].KeyWords[5].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic) && ExactlyThisDate===true||
        contentData[i].KeyWords[5].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic) && ExactlyThisDate===true||
        contentData[i].KeyWords[5].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic) && ExactlyThisDate===true||
        contentData[i].KeyWords[5].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic) && ExactlyThisDate===true||
        contentData[i].KeyWords[5].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic) && ExactlyThisDate===true||
        contentData[i].KeyWords[5].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic) && ExactlyThisDate===true||

        contentData[i].KeyWords[6].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic) && ExactlyThisDate===true||
        contentData[i].KeyWords[6].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic) && ExactlyThisDate===true||
        contentData[i].KeyWords[6].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic) && ExactlyThisDate===true||
        contentData[i].KeyWords[6].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic) && ExactlyThisDate===true||
        contentData[i].KeyWords[6].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic) && ExactlyThisDate===true||
        contentData[i].KeyWords[6].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic) && ExactlyThisDate===true||

        contentData[i].KeyWords[7].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic) && ExactlyThisDate===true||
        contentData[i].KeyWords[7].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic) && ExactlyThisDate===true||
        contentData[i].KeyWords[7].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic) && ExactlyThisDate===true||
        contentData[i].KeyWords[7].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic) && ExactlyThisDate===true||
        contentData[i].KeyWords[7].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic) && ExactlyThisDate===true||
        contentData[i].KeyWords[7].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic) && ExactlyThisDate===true||

        contentData[i].KeyWords[8].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic) && ExactlyThisDate===true||
        contentData[i].KeyWords[8].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic) && ExactlyThisDate===true||
        contentData[i].KeyWords[8].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic) && ExactlyThisDate===true||
        contentData[i].KeyWords[8].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic) && ExactlyThisDate===true||
        contentData[i].KeyWords[8].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic) && ExactlyThisDate===true||
        contentData[i].KeyWords[8].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic) && ExactlyThisDate===true||

        contentData[i].KeyWords[9].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic) && ExactlyThisDate===true||
        contentData[i].KeyWords[9].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic) && ExactlyThisDate===true||
        contentData[i].KeyWords[9].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic) && ExactlyThisDate===true||
        contentData[i].KeyWords[9].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic) && ExactlyThisDate===true||
        contentData[i].KeyWords[9].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic) && ExactlyThisDate===true||
        contentData[i].KeyWords[9].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic) && ExactlyThisDate===true||

        contentData[i].KeyWords[10].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic) && ExactlyThisDate===true||
        contentData[i].KeyWords[10].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic) && ExactlyThisDate===true||
        contentData[i].KeyWords[10].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic) && ExactlyThisDate===true||
        contentData[i].KeyWords[10].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic) && ExactlyThisDate===true||
        contentData[i].KeyWords[10].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic) && ExactlyThisDate===true||
        contentData[i].KeyWords[10].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic) && ExactlyThisDate===true||
        
        contentData[i].KeyWords[11].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic) && ExactlyThisDate===true||
        contentData[i].KeyWords[11].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic) && ExactlyThisDate===true||
        contentData[i].KeyWords[11].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic) && ExactlyThisDate===true||
        contentData[i].KeyWords[11].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic) && ExactlyThisDate===true||
        contentData[i].KeyWords[11].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic) && ExactlyThisDate===true||
        contentData[i].KeyWords[11].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic) && ExactlyThisDate===true){
  
          searchedContentent.push(contentData[i]);
  
        };

  
      };
  
    };

















  
      for(let i=0; i<searchedContentent.slice((page-1)*12,(page-1)*12+12).length; i++){
  
      contentList.innerHTML+=`
      <a href="${searchedContentent[i].Link}" aria-lable="${searchedContentent[i].ariaLinkDescription}">
      <div class="Content-Container">
      <img class="image" src="${searchedContentent.slice((page-1)*12,(page-1)*12+12)[i].Image}">
      <div class="discription">${searchedContentent.slice((page-1)*12,(page-1)*12+12)[i].Date.month}/${searchedContentent.slice((page-1)*12,(page-1)*12+12)[i].Date.day}/${searchedContentent.slice((page-1)*12,(page-1)*12+12)[i].Date.year}</div>
      <h3 class="discription">${searchedContentent.slice((page-1)*12,(page-1)*12+12)[i].Description}</h3>
      </div>
      </a>`;
      };
  

  if(contentList.children.length===0){

    contentList.innerText='Not Found';

  };

};



search.blur();


updateTheme();

//this code saves a page to the history data file each time a page is pressed when history is enabled

const contentContainer=document.getElementsByClassName('Content-Container');
let HistoryStatus = localStorage.getItem('HistoryStatus') || 'OFF';
if(HistoryStatus==='ON'){
for(let I=0; I<contentContainer.length; I++){

  contentContainer[I].onclick=()=>{
      if(contentContainer[I].children[2].innerText===searchedContentent.slice((page-1)*12,(page-1)*12+12)[I].Description){
        
        let HistoryData =JSON.parse(localStorage.getItem('HistoryData')) || [];
        

       if(HistoryData.length===0){

        HistoryData.unshift(searchedContentent.slice((page-1)*12,(page-1)*12+12)[I]);

       }else{

         let matchId='';

        for(let a=0; a<HistoryData.length; a++){

          if(HistoryData[a].Id === searchedContentent.slice((page-1)*12,(page-1)*12+12)[I].Id){
            matchId='match';
            break;
          };

        };

        if(matchId===''){
        HistoryData.unshift(searchedContentent.slice((page-1)*12,(page-1)*12+12)[I]);
        };

      };


// changing the number in the first 2 lines changes how much content can be saved in the history
        if(HistoryData.length>360){
          HistoryData.splice(360);
          localStorage.setItem('HistoryData', JSON.stringify(HistoryData));
        };
        
        localStorage.setItem('HistoryData', JSON.stringify(HistoryData));
      };
      

    
    
    
    
  };
  
};
};
//this is the end of the code saves a page to the history data file each time a page is pressed

};



  loadContent();
  //localStorage.removeItem('HistoryData');
  // let HistoryData =JSON.parse(localStorage.getItem('HistoryData')) || [];

  // console.log(HistoryData);



// end of code that loads content

/*this code is makes the topics buttons work it links the topics button to the Topics page and when a topic
is selected it adds text to the page that shows which topic is selected and adds a remove button next to the 
topic when the remove button is pressed it makes the Topic variable = '' and saves it in session storage*/ 



if(''!=Topic){

const newtopicName=document.createElement('h3');
newtopicName.id='TopicName'
newtopicName.innerText='Topic:'+Topic;

const newremoveTopicBtn = document.createElement('button');
newremoveTopicBtn.id='RemoveTopicBtn';
newremoveTopicBtn.innerText='Remove';


Nav.appendChild(newtopicName);
Nav.appendChild(newremoveTopicBtn);

const removeTopicBtn = document.getElementById('RemoveTopicBtn');
const topicName = document.getElementById('TopicName');



removeTopicBtn.onclick=e=>{
  Topic = '';

  sessionStorage.setItem('Topic', '');
  
  loadContent();
  
  pagesLimiterAndLoader();

  Nav.removeChild(topicName);
  Nav.removeChild(removeTopicBtn);

  const topicsBtn = document.getElementById('TopicsBtn');


};

};



//this is the end of the code that makes the topic buttons work



//this function selects the first page

function setSelectionToPage1(){

for(let i=0; i<addedPages.children.length; i++){

  addedPages.children[i].classList.remove('PageLink-selected');

};

addedPages.children[0].classList.add('PageLink-selected');

};

//this is the end of the function that selects the first page




// these are the event listiners for the search

searchButton.onclick=()=>{

  search.blur();

  searchedContentent=[];

  sessionStorage.setItem('savedSearch', search.value);

  page=1;

  sessionStorage.setItem('savedPage', page);

  setSelectionToPage1();
  
  resetPageNumbers();
  
  hideAutocompeleList();

  loadContent();

  pagesLimiterAndLoader();

};

search.addEventListener('keypress', event=>{

if('Enter'===event.key){

  search.blur();

  searchedContentent=[];

  sessionStorage.setItem('savedSearch', search.value);

  page=1;

  sessionStorage.setItem('savedPage', page);

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


// if(event.target.ParentElement.classList.contains('Content-Container')){
//   search.value='';
//   sessionStorage.setItem('savedSearch', search.value);
// }


if(event.target.classList.contains('Auto-Complete-List-Item')){

  search.value=event.target.innerText;

  searchedContentent=[];

  sessionStorage.setItem('savedSearch', search.value);

  page=1;

  sessionStorage.setItem('savedPage', page);

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
    

    // this code checks the dates of the content and sets one of the variables to ture

    let BeforeThisDate=false;

    if(Number(contentData[i].Date.year) < Number(BeforeDateFilter.year) || Number(contentData[i].Date.year) === Number(BeforeDateFilter.year) && Number(contentData[i].Date.month) < Number(BeforeDateFilter.month)
    || Number(contentData[i].Date.year) === Number(BeforeDateFilter.year) && Number(contentData[i].Date.month) === Number(BeforeDateFilter.month) && Number(contentData[i].Date.day) < Number(BeforeDateFilter.day)){
      BeforeThisDate=true;
  }else{
    BeforeThisDate=false;
  };


  let AfterThisDate=false;

  if(Number(contentData[i].Date.year) > Number(AfterDateFilter.year) || Number(contentData[i].Date.year) === Number(AfterDateFilter.year) && Number(contentData[i].Date.month) > Number(AfterDateFilter.month)
  || Number(contentData[i].Date.year) === Number(AfterDateFilter.year) && Number(contentData[i].Date.month) === Number(AfterDateFilter.month) && Number(contentData[i].Date.day) > Number(AfterDateFilter.day)){
    AfterThisDate=true;
}else{
  AfterThisDate=false;
};



let ExactlyThisDate=false;

if(Number(contentData[i].Date.month) === Number(ExactlyDateFilter.month) && Number(contentData[i].Date.day) === Number(ExactlyDateFilter.day) && Number(contentData[i].Date.year) === Number(ExactlyDateFilter.year)){
  ExactlyThisDate=true;
}else{
ExactlyThisDate=false;
};





//to change the length of the  auto complete list change the first 2 numbers under this
if(autoCompleteList.children.length===12){
  break;
};




if(autoCompleteList.children.length<12){








if(''===Topic){



  if('' === BeforeDateFilter && '' === AfterDateFilter && '' === ExactlyDateFilter && autoCompleteList.children.length<12){



        if (contentData[i].Description.toLowerCase().replace(/\s/g, '').includes((search.value).toLowerCase().replace(/\s/g, ''))) {
          autoCompleteList.innerHTML += `<div class="Auto-Complete-List-Item">${contentData[i].Description}</ class="Auto-Complete-List-Item">`;
        };


        if (!autoCompleteList.innerHTML.includes(contentData[i].KeyWords[0]) && contentData[i].KeyWords[0].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, ''))) {
          autoCompleteList.innerHTML += `<div class="Auto-Complete-List-Item">${contentData[i].KeyWords[0]}</div>`
        };
        if (!autoCompleteList.innerHTML.includes(contentData[i].KeyWords[1]) && contentData[i].KeyWords[1].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, ''))) {
          autoCompleteList.innerHTML += `<div class="Auto-Complete-List-Item">${contentData[i].KeyWords[1]}</div>`
        };
        if (!autoCompleteList.innerHTML.includes(contentData[i].KeyWords[2]) && contentData[i].KeyWords[2].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, ''))) {
          autoCompleteList.innerHTML += `<div class="Auto-Complete-List-Item">${contentData[i].KeyWords[2]}</div>`
        };
        if (!autoCompleteList.innerHTML.includes(contentData[i].KeyWords[3]) && contentData[i].KeyWords[3].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, ''))) {
          autoCompleteList.innerHTML += `<div class="Auto-Complete-List-Item">${contentData[i].KeyWords[3]}</div>`
        };
        if (!autoCompleteList.innerHTML.includes(contentData[i].KeyWords[4]) && contentData[i].KeyWords[4].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, ''))) {
          autoCompleteList.innerHTML += `<div class="Auto-Complete-List-Item">${contentData[i].KeyWords[4]}</div>`
        };
        if (!autoCompleteList.innerHTML.includes(contentData[i].KeyWords[5]) && contentData[i].KeyWords[5].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, ''))) {
          autoCompleteList.innerHTML += `<div class="Auto-Complete-List-Item">${contentData[i].KeyWords[5]}</div>`
        };
        if (!autoCompleteList.innerHTML.includes(contentData[i].KeyWords[6]) && contentData[i].KeyWords[6].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, ''))) {
          autoCompleteList.innerHTML += `<div class="Auto-Complete-List-Item">${contentData[i].KeyWords[6]}</div>`
        };
        if (!autoCompleteList.innerHTML.includes(contentData[i].KeyWords[7]) && contentData[i].KeyWords[7].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, ''))) {
          autoCompleteList.innerHTML += `<div class="Auto-Complete-List-Item">${contentData[i].KeyWords[7]}</div>`
        };
        if (!autoCompleteList.innerHTML.includes(contentData[i].KeyWords[8]) && contentData[i].KeyWords[8].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, ''))) {
          autoCompleteList.innerHTML += `<div class="Auto-Complete-List-Item">${contentData[i].KeyWords[8]}</div>`
        };
        if (!autoCompleteList.innerHTML.includes(contentData[i].KeyWords[9]) && contentData[i].KeyWords[9].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, ''))) {
          autoCompleteList.innerHTML += `<div class="Auto-Complete-List-Item">${contentData[i].KeyWords[9]}</div>`
        };
        if (!autoCompleteList.innerHTML.includes(contentData[i].KeyWords[10]) && contentData[i].KeyWords[10].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, ''))) {
          autoCompleteList.innerHTML += `<div class="Auto-Complete-List-Item">${contentData[i].KeyWords[10]}</div>`
        };
        if (!autoCompleteList.innerHTML.includes(contentData[i].KeyWords[11]) && contentData[i].KeyWords[11].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, ''))) {
          autoCompleteList.innerHTML += `<div class="Auto-Complete-List-Item">${contentData[i].KeyWords[11]}</div>`
        };
  


      };
  
  
  
  
  
  
  
  
  
  
  
  if(''===AfterDateFilter  && ''===ExactlyDateFilter  && BeforeThisDate===true && autoCompleteList.children.length<12){
  


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
    if(!autoCompleteList.innerHTML.includes(contentData[i].KeyWords[10]) && contentData[i].KeyWords[10].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, ''))){
    autoCompleteList.innerHTML+=`<div class="Auto-Complete-List-Item">${contentData[i].KeyWords[10]}</div>`
    };
    if(!autoCompleteList.innerHTML.includes(contentData[i].KeyWords[11]) && contentData[i].KeyWords[11].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, ''))){
    autoCompleteList.innerHTML+=`<div class="Auto-Complete-List-Item">${contentData[i].KeyWords[11]}</div>`
    };
  


  };
  
  
  
  
  
  
  
  
  
  if(''===BeforeDateFilter  && ''===ExactlyDateFilter  && AfterThisDate===true && autoCompleteList.children.length<12){
  
  

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
    if(!autoCompleteList.innerHTML.includes(contentData[i].KeyWords[10]) && contentData[i].KeyWords[10].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, ''))){
    autoCompleteList.innerHTML+=`<div class="Auto-Complete-List-Item">${contentData[i].KeyWords[10]}</div>`
    };
    if(!autoCompleteList.innerHTML.includes(contentData[i].KeyWords[11]) && contentData[i].KeyWords[11].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, ''))){
    autoCompleteList.innerHTML+=`<div class="Auto-Complete-List-Item">${contentData[i].KeyWords[11]}</div>`
    };
  


  };




  };
  
  
  
  
  
  
  
  
  
  
 if(''===BeforeDateFilter  && ''===AfterDateFilter && ExactlyThisDate===true && autoCompleteList.children.length<12){
  
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
      if(!autoCompleteList.innerHTML.includes(contentData[i].KeyWords[10]) && contentData[i].KeyWords[10].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, ''))){
      autoCompleteList.innerHTML+=`<div class="Auto-Complete-List-Item">${contentData[i].KeyWords[10]}</div>`
      };
      if(!autoCompleteList.innerHTML.includes(contentData[i].KeyWords[11]) && contentData[i].KeyWords[11].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, ''))){
      autoCompleteList.innerHTML+=`<div class="Auto-Complete-List-Item">${contentData[i].KeyWords[11]}</div>`
      };
  
  
    };
  
  
  
  
  
  
  
  
  
  
  
  
  
  
if(''!=Topic){






  if('' === BeforeDateFilter && '' === AfterDateFilter && '' === ExactlyDateFilter &&autoCompleteList.children.length<12){


  
  if(contentData[i].Description.toLowerCase().replace(/\s/g, '').includes((search.value).toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic)||
  contentData[i].Description.toLowerCase().replace(/\s/g, '').includes((search.value).toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic)||
  contentData[i].Description.toLowerCase().replace(/\s/g, '').includes((search.value).toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic)||
  contentData[i].Description.toLowerCase().replace(/\s/g, '').includes((search.value).toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic)||
  contentData[i].Description.toLowerCase().replace(/\s/g, '').includes((search.value).toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic)||
  contentData[i].Description.toLowerCase().replace(/\s/g, '').includes((search.value).toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic)){
    autoCompleteList.innerHTML+=`<div class="Auto-Complete-List-Item">${contentData[i].Description}</ class="Auto-Complete-List-Item">`;
    };
    
    
    if(!autoCompleteList.innerHTML.includes(contentData[i].KeyWords[0]) && contentData[i].KeyWords[0].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic)||
    !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[0]) && contentData[i].KeyWords[0].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic)||
    !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[0]) && contentData[i].KeyWords[0].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic)||
    !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[0]) && contentData[i].KeyWords[0].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic)||
    !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[0]) && contentData[i].KeyWords[0].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic)||
    !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[0]) && contentData[i].KeyWords[0].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic)){
    autoCompleteList.innerHTML+=`<div class="Auto-Complete-List-Item">${contentData[i].KeyWords[0]}</div>`
    };
  
    if(!autoCompleteList.innerHTML.includes(contentData[i].KeyWords[1]) && contentData[i].KeyWords[1].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic)||
    !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[1]) && contentData[i].KeyWords[1].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic)||
    !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[1]) && contentData[i].KeyWords[1].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic)||
    !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[1]) && contentData[i].KeyWords[1].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic)||
    !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[1]) && contentData[i].KeyWords[1].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic)||
    !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[1]) && contentData[i].KeyWords[1].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic)){
    autoCompleteList.innerHTML+=`<div class="Auto-Complete-List-Item">${contentData[i].KeyWords[1]}</div>`
    };
  
    if(!autoCompleteList.innerHTML.includes(contentData[i].KeyWords[2]) && contentData[i].KeyWords[2].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic)||
    !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[2]) && contentData[i].KeyWords[2].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic)||
    !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[2]) && contentData[i].KeyWords[2].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic)||
    !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[2]) && contentData[i].KeyWords[2].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic)||
    !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[2]) && contentData[i].KeyWords[2].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic)||
    !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[2]) && contentData[i].KeyWords[2].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic)){
    autoCompleteList.innerHTML+=`<div class="Auto-Complete-List-Item">${contentData[i].KeyWords[2]}</div>`
    };
    
    if(!autoCompleteList.innerHTML.includes(contentData[i].KeyWords[3]) && contentData[i].KeyWords[3].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic)||
    !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[3]) && contentData[i].KeyWords[3].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic)||
    !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[3]) && contentData[i].KeyWords[3].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic)||
    !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[3]) && contentData[i].KeyWords[3].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic)||
    !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[3]) && contentData[i].KeyWords[3].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic)||
    !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[3]) && contentData[i].KeyWords[3].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic)){
    autoCompleteList.innerHTML+=`<div class="Auto-Complete-List-Item">${contentData[i].KeyWords[3]}</div>`
    };
  
    if(!autoCompleteList.innerHTML.includes(contentData[i].KeyWords[4]) && contentData[i].KeyWords[4].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic)||
    !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[4]) && contentData[i].KeyWords[4].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic)||
    !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[4]) && contentData[i].KeyWords[4].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic)||
    !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[4]) && contentData[i].KeyWords[4].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic)||
    !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[4]) && contentData[i].KeyWords[4].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic)||
    !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[4]) && contentData[i].KeyWords[4].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic)){
    autoCompleteList.innerHTML+=`<div class="Auto-Complete-List-Item">${contentData[i].KeyWords[4]}</div>`
    };
  
    if(!autoCompleteList.innerHTML.includes(contentData[i].KeyWords[5]) && contentData[i].KeyWords[5].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic)||
    !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[5]) && contentData[i].KeyWords[5].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic)||
    !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[5]) && contentData[i].KeyWords[5].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic)||
    !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[5]) && contentData[i].KeyWords[5].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic)||
    !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[5]) && contentData[i].KeyWords[5].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic)||
    !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[5]) && contentData[i].KeyWords[5].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic)){
    autoCompleteList.innerHTML+=`<div class="Auto-Complete-List-Item">${contentData[i].KeyWords[5]}</div>`
    };
  
    if(!autoCompleteList.innerHTML.includes(contentData[i].KeyWords[6]) && contentData[i].KeyWords[6].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic)||
    !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[6]) && contentData[i].KeyWords[6].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic)||
    !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[6]) && contentData[i].KeyWords[6].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic)||
    !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[6]) && contentData[i].KeyWords[6].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic)||
    !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[6]) && contentData[i].KeyWords[6].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic)||
    !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[6]) && contentData[i].KeyWords[6].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic)){
    autoCompleteList.innerHTML+=`<div class="Auto-Complete-List-Item">${contentData[i].KeyWords[6]}</div>`
    };
  
    if(!autoCompleteList.innerHTML.includes(contentData[i].KeyWords[7]) && contentData[i].KeyWords[7].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic)||
    !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[7]) && contentData[i].KeyWords[7].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic)||
    !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[7]) && contentData[i].KeyWords[7].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic)||
    !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[7]) && contentData[i].KeyWords[7].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic)||
    !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[7]) && contentData[i].KeyWords[7].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic)||
    !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[7]) && contentData[i].KeyWords[7].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic)){
    autoCompleteList.innerHTML+=`<div class="Auto-Complete-List-Item">${contentData[i].KeyWords[7]}</div>`
    };
  
    if(!autoCompleteList.innerHTML.includes(contentData[i].KeyWords[0]) && contentData[i].KeyWords[8].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic)||
    !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[8]) && contentData[i].KeyWords[8].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic)||
    !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[8]) && contentData[i].KeyWords[8].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic)||
    !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[8]) && contentData[i].KeyWords[8].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic)||
    !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[8]) && contentData[i].KeyWords[8].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic)||
    !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[8]) && contentData[i].KeyWords[8].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic)){
    autoCompleteList.innerHTML+=`<div class="Auto-Complete-List-Item">${contentData[i].KeyWords[8]}</div>`
    };
  
    if(!autoCompleteList.innerHTML.includes(contentData[i].KeyWords[9]) && contentData[i].KeyWords[9].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic)||
    !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[9]) && contentData[i].KeyWords[9].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic)||
    !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[9]) && contentData[i].KeyWords[9].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic)||
    !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[9]) && contentData[i].KeyWords[9].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic)||
    !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[9]) && contentData[i].KeyWords[9].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic)||
    !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[9]) && contentData[i].KeyWords[9].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic)){
    autoCompleteList.innerHTML+=`<div class="Auto-Complete-List-Item">${contentData[i].KeyWords[9]}</div>`
    };
  
    if(!autoCompleteList.innerHTML.includes(contentData[i].KeyWords[10]) && contentData[i].KeyWords[10].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic)||
    !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[10]) && contentData[i].KeyWords[10].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic)||
    !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[10]) && contentData[i].KeyWords[10].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic)||
    !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[10]) && contentData[i].KeyWords[10].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic)||
    !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[10]) && contentData[i].KeyWords[10].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic)||
    !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[10]) && contentData[i].KeyWords[10].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic)){
    autoCompleteList.innerHTML+=`<div class="Auto-Complete-List-Item">${contentData[i].KeyWords[8]}</div>`
    };
  
    if(!autoCompleteList.innerHTML.includes(contentData[i].KeyWords[11]) && contentData[i].KeyWords[11].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic)||
    !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[11]) && contentData[i].KeyWords[11].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic)||
    !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[11]) && contentData[i].KeyWords[11].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic)||
    !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[11]) && contentData[i].KeyWords[11].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic)||
    !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[11]) && contentData[i].KeyWords[11].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic)||
    !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[11]) && contentData[i].KeyWords[11].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic)){
    autoCompleteList.innerHTML+=`<div class="Auto-Complete-List-Item">${contentData[i].KeyWords[9]}</div>`
    };
  


  };
  
  
  
  
  
  
  
  
  
  
    
  
  
    if(''===AfterDateFilter  && ''===ExactlyDateFilter  && BeforeThisDate===true && autoCompleteList.children.length<12){

  
  
    if(contentData[i].Description.toLowerCase().replace(/\s/g, '').includes((search.value).toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic)||
    contentData[i].Description.toLowerCase().replace(/\s/g, '').includes((search.value).toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic)||
    contentData[i].Description.toLowerCase().replace(/\s/g, '').includes((search.value).toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic)||
    contentData[i].Description.toLowerCase().replace(/\s/g, '').includes((search.value).toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic)||
    contentData[i].Description.toLowerCase().replace(/\s/g, '').includes((search.value).toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic)||
    contentData[i].Description.toLowerCase().replace(/\s/g, '').includes((search.value).toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic)){
      autoCompleteList.innerHTML+=`<div class="Auto-Complete-List-Item">${contentData[i].Description}</ class="Auto-Complete-List-Item">`;
      };
      
      
      if(!autoCompleteList.innerHTML.includes(contentData[i].KeyWords[0]) && contentData[i].KeyWords[0].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic)||
      !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[0]) && contentData[i].KeyWords[0].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic)||
      !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[0]) && contentData[i].KeyWords[0].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic)||
      !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[0]) && contentData[i].KeyWords[0].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic)||
      !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[0]) && contentData[i].KeyWords[0].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic)||
      !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[0]) && contentData[i].KeyWords[0].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic)){
      autoCompleteList.innerHTML+=`<div class="Auto-Complete-List-Item">${contentData[i].KeyWords[0]}</div>`
      };
    
      if(!autoCompleteList.innerHTML.includes(contentData[i].KeyWords[1]) && contentData[i].KeyWords[1].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic)||
      !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[1]) && contentData[i].KeyWords[1].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic)||
      !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[1]) && contentData[i].KeyWords[1].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic)||
      !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[1]) && contentData[i].KeyWords[1].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic)||
      !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[1]) && contentData[i].KeyWords[1].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic)||
      !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[1]) && contentData[i].KeyWords[1].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic)){
      autoCompleteList.innerHTML+=`<div class="Auto-Complete-List-Item">${contentData[i].KeyWords[1]}</div>`
      };
    
      if(!autoCompleteList.innerHTML.includes(contentData[i].KeyWords[2]) && contentData[i].KeyWords[2].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic)||
      !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[2]) && contentData[i].KeyWords[2].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic)||
      !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[2]) && contentData[i].KeyWords[2].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic)||
      !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[2]) && contentData[i].KeyWords[2].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic)||
      !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[2]) && contentData[i].KeyWords[2].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic)||
      !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[2]) && contentData[i].KeyWords[2].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic)){
      autoCompleteList.innerHTML+=`<div class="Auto-Complete-List-Item">${contentData[i].KeyWords[2]}</div>`
      };
      
      if(!autoCompleteList.innerHTML.includes(contentData[i].KeyWords[3]) && contentData[i].KeyWords[3].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic)||
      !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[3]) && contentData[i].KeyWords[3].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic)||
      !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[3]) && contentData[i].KeyWords[3].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic)||
      !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[3]) && contentData[i].KeyWords[3].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic)||
      !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[3]) && contentData[i].KeyWords[3].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic)||
      !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[3]) && contentData[i].KeyWords[3].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic)){
      autoCompleteList.innerHTML+=`<div class="Auto-Complete-List-Item">${contentData[i].KeyWords[3]}</div>`
      };
    
      if(!autoCompleteList.innerHTML.includes(contentData[i].KeyWords[4]) && contentData[i].KeyWords[4].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic)||
      !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[4]) && contentData[i].KeyWords[4].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic)||
      !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[4]) && contentData[i].KeyWords[4].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic)||
      !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[4]) && contentData[i].KeyWords[4].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic)||
      !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[4]) && contentData[i].KeyWords[4].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic)||
      !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[4]) && contentData[i].KeyWords[4].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic)){
      autoCompleteList.innerHTML+=`<div class="Auto-Complete-List-Item">${contentData[i].KeyWords[4]}</div>`
      };
    
      if(!autoCompleteList.innerHTML.includes(contentData[i].KeyWords[5]) && contentData[i].KeyWords[5].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic)||
      !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[5]) && contentData[i].KeyWords[5].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic)||
      !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[5]) && contentData[i].KeyWords[5].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic)||
      !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[5]) && contentData[i].KeyWords[5].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic)||
      !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[5]) && contentData[i].KeyWords[5].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic)||
      !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[5]) && contentData[i].KeyWords[5].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic)){
      autoCompleteList.innerHTML+=`<div class="Auto-Complete-List-Item">${contentData[i].KeyWords[5]}</div>`
      };
    
      if(!autoCompleteList.innerHTML.includes(contentData[i].KeyWords[6]) && contentData[i].KeyWords[6].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic)||
      !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[6]) && contentData[i].KeyWords[6].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic)||
      !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[6]) && contentData[i].KeyWords[6].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic)||
      !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[6]) && contentData[i].KeyWords[6].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic)||
      !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[6]) && contentData[i].KeyWords[6].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic)||
      !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[6]) && contentData[i].KeyWords[6].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic)){
      autoCompleteList.innerHTML+=`<div class="Auto-Complete-List-Item">${contentData[i].KeyWords[6]}</div>`
      };
    
      if(!autoCompleteList.innerHTML.includes(contentData[i].KeyWords[7]) && contentData[i].KeyWords[7].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic)||
      !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[7]) && contentData[i].KeyWords[7].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic)||
      !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[7]) && contentData[i].KeyWords[7].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic)||
      !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[7]) && contentData[i].KeyWords[7].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic)||
      !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[7]) && contentData[i].KeyWords[7].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic)||
      !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[7]) && contentData[i].KeyWords[7].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic)){
      autoCompleteList.innerHTML+=`<div class="Auto-Complete-List-Item">${contentData[i].KeyWords[7]}</div>`
      };
    
      if(!autoCompleteList.innerHTML.includes(contentData[i].KeyWords[0]) && contentData[i].KeyWords[8].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic)||
      !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[8]) && contentData[i].KeyWords[8].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic)||
      !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[8]) && contentData[i].KeyWords[8].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic)||
      !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[8]) && contentData[i].KeyWords[8].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic)||
      !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[8]) && contentData[i].KeyWords[8].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic)||
      !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[8]) && contentData[i].KeyWords[8].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic)){
      autoCompleteList.innerHTML+=`<div class="Auto-Complete-List-Item">${contentData[i].KeyWords[8]}</div>`
      };
    
      if(!autoCompleteList.innerHTML.includes(contentData[i].KeyWords[9]) && contentData[i].KeyWords[9].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic)||
      !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[9]) && contentData[i].KeyWords[9].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic)||
      !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[9]) && contentData[i].KeyWords[9].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic)||
      !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[9]) && contentData[i].KeyWords[9].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic)||
      !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[9]) && contentData[i].KeyWords[9].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic)||
      !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[9]) && contentData[i].KeyWords[9].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic)){
      autoCompleteList.innerHTML+=`<div class="Auto-Complete-List-Item">${contentData[i].KeyWords[9]}</div>`
      };
    
      if(!autoCompleteList.innerHTML.includes(contentData[i].KeyWords[10]) && contentData[i].KeyWords[10].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic)||
      !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[10]) && contentData[i].KeyWords[10].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic)||
      !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[10]) && contentData[i].KeyWords[10].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic)||
      !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[10]) && contentData[i].KeyWords[10].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic)||
      !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[10]) && contentData[i].KeyWords[10].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic)||
      !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[10]) && contentData[i].KeyWords[10].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic)){
      autoCompleteList.innerHTML+=`<div class="Auto-Complete-List-Item">${contentData[i].KeyWords[8]}</div>`
      };
    
      if(!autoCompleteList.innerHTML.includes(contentData[i].KeyWords[11]) && contentData[i].KeyWords[11].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic)||
      !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[11]) && contentData[i].KeyWords[11].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic)||
      !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[11]) && contentData[i].KeyWords[11].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic)||
      !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[11]) && contentData[i].KeyWords[11].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic)||
      !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[11]) && contentData[i].KeyWords[11].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic)||
      !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[11]) && contentData[i].KeyWords[11].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic)){
      autoCompleteList.innerHTML+=`<div class="Auto-Complete-List-Item">${contentData[i].KeyWords[9]}</div>`
      };
  
  
  
    };
  
  
  
  
  
  


    if(''===BeforeDateFilter  && ''===ExactlyDateFilter  && AfterThisDate===true && autoCompleteList.children.length<12){



  
      if(contentData[i].Description.toLowerCase().replace(/\s/g, '').includes((search.value).toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic)||
      contentData[i].Description.toLowerCase().replace(/\s/g, '').includes((search.value).toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic)||
      contentData[i].Description.toLowerCase().replace(/\s/g, '').includes((search.value).toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic)||
      contentData[i].Description.toLowerCase().replace(/\s/g, '').includes((search.value).toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic)||
      contentData[i].Description.toLowerCase().replace(/\s/g, '').includes((search.value).toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic)||
      contentData[i].Description.toLowerCase().replace(/\s/g, '').includes((search.value).toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic)){
        autoCompleteList.innerHTML+=`<div class="Auto-Complete-List-Item">${contentData[i].Description}</ class="Auto-Complete-List-Item">`;
        };
        
        
        if(!autoCompleteList.innerHTML.includes(contentData[i].KeyWords[0]) && contentData[i].KeyWords[0].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic)||
        !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[0]) && contentData[i].KeyWords[0].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic)||
        !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[0]) && contentData[i].KeyWords[0].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic)||
        !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[0]) && contentData[i].KeyWords[0].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic)||
        !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[0]) && contentData[i].KeyWords[0].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic)||
        !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[0]) && contentData[i].KeyWords[0].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic)){
        autoCompleteList.innerHTML+=`<div class="Auto-Complete-List-Item">${contentData[i].KeyWords[0]}</div>`
        };
      
        if(!autoCompleteList.innerHTML.includes(contentData[i].KeyWords[1]) && contentData[i].KeyWords[1].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic)||
        !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[1]) && contentData[i].KeyWords[1].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic)||
        !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[1]) && contentData[i].KeyWords[1].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic)||
        !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[1]) && contentData[i].KeyWords[1].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic)||
        !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[1]) && contentData[i].KeyWords[1].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic)||
        !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[1]) && contentData[i].KeyWords[1].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic)){
        autoCompleteList.innerHTML+=`<div class="Auto-Complete-List-Item">${contentData[i].KeyWords[1]}</div>`
        };
      
        if(!autoCompleteList.innerHTML.includes(contentData[i].KeyWords[2]) && contentData[i].KeyWords[2].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic)||
        !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[2]) && contentData[i].KeyWords[2].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic)||
        !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[2]) && contentData[i].KeyWords[2].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic)||
        !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[2]) && contentData[i].KeyWords[2].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic)||
        !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[2]) && contentData[i].KeyWords[2].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic)||
        !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[2]) && contentData[i].KeyWords[2].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic)){
        autoCompleteList.innerHTML+=`<div class="Auto-Complete-List-Item">${contentData[i].KeyWords[2]}</div>`
        };
        
        if(!autoCompleteList.innerHTML.includes(contentData[i].KeyWords[3]) && contentData[i].KeyWords[3].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic)||
        !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[3]) && contentData[i].KeyWords[3].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic)||
        !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[3]) && contentData[i].KeyWords[3].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic)||
        !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[3]) && contentData[i].KeyWords[3].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic)||
        !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[3]) && contentData[i].KeyWords[3].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic)||
        !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[3]) && contentData[i].KeyWords[3].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic)){
        autoCompleteList.innerHTML+=`<div class="Auto-Complete-List-Item">${contentData[i].KeyWords[3]}</div>`
        };
      
        if(!autoCompleteList.innerHTML.includes(contentData[i].KeyWords[4]) && contentData[i].KeyWords[4].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic)||
        !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[4]) && contentData[i].KeyWords[4].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic)||
        !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[4]) && contentData[i].KeyWords[4].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic)||
        !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[4]) && contentData[i].KeyWords[4].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic)||
        !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[4]) && contentData[i].KeyWords[4].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic)||
        !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[4]) && contentData[i].KeyWords[4].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic)){
        autoCompleteList.innerHTML+=`<div class="Auto-Complete-List-Item">${contentData[i].KeyWords[4]}</div>`
        };
      
        if(!autoCompleteList.innerHTML.includes(contentData[i].KeyWords[5]) && contentData[i].KeyWords[5].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic)||
        !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[5]) && contentData[i].KeyWords[5].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic)||
        !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[5]) && contentData[i].KeyWords[5].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic)||
        !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[5]) && contentData[i].KeyWords[5].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic)||
        !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[5]) && contentData[i].KeyWords[5].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic)||
        !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[5]) && contentData[i].KeyWords[5].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic)){
        autoCompleteList.innerHTML+=`<div class="Auto-Complete-List-Item">${contentData[i].KeyWords[5]}</div>`
        };
      
        if(!autoCompleteList.innerHTML.includes(contentData[i].KeyWords[6]) && contentData[i].KeyWords[6].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic)||
        !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[6]) && contentData[i].KeyWords[6].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic)||
        !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[6]) && contentData[i].KeyWords[6].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic)||
        !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[6]) && contentData[i].KeyWords[6].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic)||
        !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[6]) && contentData[i].KeyWords[6].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic)||
        !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[6]) && contentData[i].KeyWords[6].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic)){
        autoCompleteList.innerHTML+=`<div class="Auto-Complete-List-Item">${contentData[i].KeyWords[6]}</div>`
        };
      
        if(!autoCompleteList.innerHTML.includes(contentData[i].KeyWords[7]) && contentData[i].KeyWords[7].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic)||
        !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[7]) && contentData[i].KeyWords[7].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic)||
        !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[7]) && contentData[i].KeyWords[7].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic)||
        !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[7]) && contentData[i].KeyWords[7].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic)||
        !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[7]) && contentData[i].KeyWords[7].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic)||
        !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[7]) && contentData[i].KeyWords[7].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic)){
        autoCompleteList.innerHTML+=`<div class="Auto-Complete-List-Item">${contentData[i].KeyWords[7]}</div>`
        };
      
        if(!autoCompleteList.innerHTML.includes(contentData[i].KeyWords[0]) && contentData[i].KeyWords[8].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic)||
        !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[8]) && contentData[i].KeyWords[8].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic)||
        !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[8]) && contentData[i].KeyWords[8].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic)||
        !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[8]) && contentData[i].KeyWords[8].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic)||
        !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[8]) && contentData[i].KeyWords[8].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic)||
        !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[8]) && contentData[i].KeyWords[8].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic)){
        autoCompleteList.innerHTML+=`<div class="Auto-Complete-List-Item">${contentData[i].KeyWords[8]}</div>`
        };
      
        if(!autoCompleteList.innerHTML.includes(contentData[i].KeyWords[9]) && contentData[i].KeyWords[9].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic)||
        !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[9]) && contentData[i].KeyWords[9].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic)||
        !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[9]) && contentData[i].KeyWords[9].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic)||
        !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[9]) && contentData[i].KeyWords[9].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic)||
        !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[9]) && contentData[i].KeyWords[9].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic)||
        !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[9]) && contentData[i].KeyWords[9].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic)){
        autoCompleteList.innerHTML+=`<div class="Auto-Complete-List-Item">${contentData[i].KeyWords[9]}</div>`
        };
      
        if(!autoCompleteList.innerHTML.includes(contentData[i].KeyWords[10]) && contentData[i].KeyWords[10].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic)||
        !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[10]) && contentData[i].KeyWords[10].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic)||
        !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[10]) && contentData[i].KeyWords[10].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic)||
        !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[10]) && contentData[i].KeyWords[10].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic)||
        !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[10]) && contentData[i].KeyWords[10].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic)||
        !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[10]) && contentData[i].KeyWords[10].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic)){
        autoCompleteList.innerHTML+=`<div class="Auto-Complete-List-Item">${contentData[i].KeyWords[8]}</div>`
        };
      
        if(!autoCompleteList.innerHTML.includes(contentData[i].KeyWords[11]) && contentData[i].KeyWords[11].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic)||
        !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[11]) && contentData[i].KeyWords[11].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic)||
        !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[11]) && contentData[i].KeyWords[11].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic)||
        !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[11]) && contentData[i].KeyWords[11].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic)||
        !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[11]) && contentData[i].KeyWords[11].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic)||
        !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[11]) && contentData[i].KeyWords[11].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic)){
        autoCompleteList.innerHTML+=`<div class="Auto-Complete-List-Item">${contentData[i].KeyWords[9]}</div>`
        };
    
    

      };
  
  
  
  
  
  
  
  
  
  
  
  
      if(''===BeforeDateFilter  && ''===AfterDateFilter && ExactlyThisDate===true && autoCompleteList.children.length<12){

  
   
        if(contentData[i].Description.toLowerCase().replace(/\s/g, '').includes((search.value).toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic)||
        contentData[i].Description.toLowerCase().replace(/\s/g, '').includes((search.value).toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic)||
        contentData[i].Description.toLowerCase().replace(/\s/g, '').includes((search.value).toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic)||
        contentData[i].Description.toLowerCase().replace(/\s/g, '').includes((search.value).toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic)||
        contentData[i].Description.toLowerCase().replace(/\s/g, '').includes((search.value).toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic)||
        contentData[i].Description.toLowerCase().replace(/\s/g, '').includes((search.value).toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic)){
          autoCompleteList.innerHTML+=`<div class="Auto-Complete-List-Item">${contentData[i].Description}</ class="Auto-Complete-List-Item">`;
          };
          
          
          if(!autoCompleteList.innerHTML.includes(contentData[i].KeyWords[0]) && contentData[i].KeyWords[0].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic)||
          !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[0]) && contentData[i].KeyWords[0].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic)||
          !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[0]) && contentData[i].KeyWords[0].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic)||
          !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[0]) && contentData[i].KeyWords[0].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic)||
          !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[0]) && contentData[i].KeyWords[0].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic)||
          !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[0]) && contentData[i].KeyWords[0].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic)){
          autoCompleteList.innerHTML+=`<div class="Auto-Complete-List-Item">${contentData[i].KeyWords[0]}</div>`
          };
        
          if(!autoCompleteList.innerHTML.includes(contentData[i].KeyWords[1]) && contentData[i].KeyWords[1].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic)||
          !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[1]) && contentData[i].KeyWords[1].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic)||
          !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[1]) && contentData[i].KeyWords[1].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic)||
          !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[1]) && contentData[i].KeyWords[1].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic)||
          !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[1]) && contentData[i].KeyWords[1].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic)||
          !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[1]) && contentData[i].KeyWords[1].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic)){
          autoCompleteList.innerHTML+=`<div class="Auto-Complete-List-Item">${contentData[i].KeyWords[1]}</div>`
          };
        
          if(!autoCompleteList.innerHTML.includes(contentData[i].KeyWords[2]) && contentData[i].KeyWords[2].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic)||
          !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[2]) && contentData[i].KeyWords[2].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic)||
          !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[2]) && contentData[i].KeyWords[2].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic)||
          !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[2]) && contentData[i].KeyWords[2].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic)||
          !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[2]) && contentData[i].KeyWords[2].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic)||
          !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[2]) && contentData[i].KeyWords[2].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic)){
          autoCompleteList.innerHTML+=`<div class="Auto-Complete-List-Item">${contentData[i].KeyWords[2]}</div>`
          };
          
          if(!autoCompleteList.innerHTML.includes(contentData[i].KeyWords[3]) && contentData[i].KeyWords[3].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic)||
          !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[3]) && contentData[i].KeyWords[3].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic)||
          !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[3]) && contentData[i].KeyWords[3].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic)||
          !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[3]) && contentData[i].KeyWords[3].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic)||
          !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[3]) && contentData[i].KeyWords[3].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic)||
          !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[3]) && contentData[i].KeyWords[3].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic)){
          autoCompleteList.innerHTML+=`<div class="Auto-Complete-List-Item">${contentData[i].KeyWords[3]}</div>`
          };
        
          if(!autoCompleteList.innerHTML.includes(contentData[i].KeyWords[4]) && contentData[i].KeyWords[4].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic)||
          !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[4]) && contentData[i].KeyWords[4].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic)||
          !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[4]) && contentData[i].KeyWords[4].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic)||
          !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[4]) && contentData[i].KeyWords[4].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic)||
          !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[4]) && contentData[i].KeyWords[4].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic)||
          !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[4]) && contentData[i].KeyWords[4].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic)){
          autoCompleteList.innerHTML+=`<div class="Auto-Complete-List-Item">${contentData[i].KeyWords[4]}</div>`
          };
        
          if(!autoCompleteList.innerHTML.includes(contentData[i].KeyWords[5]) && contentData[i].KeyWords[5].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic)||
          !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[5]) && contentData[i].KeyWords[5].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic)||
          !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[5]) && contentData[i].KeyWords[5].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic)||
          !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[5]) && contentData[i].KeyWords[5].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic)||
          !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[5]) && contentData[i].KeyWords[5].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic)||
          !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[5]) && contentData[i].KeyWords[5].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic)){
          autoCompleteList.innerHTML+=`<div class="Auto-Complete-List-Item">${contentData[i].KeyWords[5]}</div>`
          };
        
          if(!autoCompleteList.innerHTML.includes(contentData[i].KeyWords[6]) && contentData[i].KeyWords[6].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic)||
          !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[6]) && contentData[i].KeyWords[6].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic)||
          !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[6]) && contentData[i].KeyWords[6].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic)||
          !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[6]) && contentData[i].KeyWords[6].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic)||
          !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[6]) && contentData[i].KeyWords[6].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic)||
          !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[6]) && contentData[i].KeyWords[6].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic)){
          autoCompleteList.innerHTML+=`<div class="Auto-Complete-List-Item">${contentData[i].KeyWords[6]}</div>`
          };
        
          if(!autoCompleteList.innerHTML.includes(contentData[i].KeyWords[7]) && contentData[i].KeyWords[7].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic)||
          !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[7]) && contentData[i].KeyWords[7].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic)||
          !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[7]) && contentData[i].KeyWords[7].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic)||
          !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[7]) && contentData[i].KeyWords[7].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic)||
          !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[7]) && contentData[i].KeyWords[7].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic)||
          !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[7]) && contentData[i].KeyWords[7].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic)){
          autoCompleteList.innerHTML+=`<div class="Auto-Complete-List-Item">${contentData[i].KeyWords[7]}</div>`
          };
        
          if(!autoCompleteList.innerHTML.includes(contentData[i].KeyWords[0]) && contentData[i].KeyWords[8].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic)||
          !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[8]) && contentData[i].KeyWords[8].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic)||
          !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[8]) && contentData[i].KeyWords[8].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic)||
          !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[8]) && contentData[i].KeyWords[8].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic)||
          !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[8]) && contentData[i].KeyWords[8].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic)||
          !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[8]) && contentData[i].KeyWords[8].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic)){
          autoCompleteList.innerHTML+=`<div class="Auto-Complete-List-Item">${contentData[i].KeyWords[8]}</div>`
          };
        
          if(!autoCompleteList.innerHTML.includes(contentData[i].KeyWords[9]) && contentData[i].KeyWords[9].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic)||
          !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[9]) && contentData[i].KeyWords[9].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic)||
          !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[9]) && contentData[i].KeyWords[9].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic)||
          !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[9]) && contentData[i].KeyWords[9].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic)||
          !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[9]) && contentData[i].KeyWords[9].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic)||
          !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[9]) && contentData[i].KeyWords[9].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic)){
          autoCompleteList.innerHTML+=`<div class="Auto-Complete-List-Item">${contentData[i].KeyWords[9]}</div>`
          };
        
          if(!autoCompleteList.innerHTML.includes(contentData[i].KeyWords[10]) && contentData[i].KeyWords[10].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic)||
          !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[10]) && contentData[i].KeyWords[10].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic)||
          !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[10]) && contentData[i].KeyWords[10].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic)||
          !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[10]) && contentData[i].KeyWords[10].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic)||
          !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[10]) && contentData[i].KeyWords[10].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic)||
          !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[10]) && contentData[i].KeyWords[10].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic)){
          autoCompleteList.innerHTML+=`<div class="Auto-Complete-List-Item">${contentData[i].KeyWords[8]}</div>`
          };
        
          if(!autoCompleteList.innerHTML.includes(contentData[i].KeyWords[11]) && contentData[i].KeyWords[11].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[0].includes(Topic)||
          !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[11]) && contentData[i].KeyWords[11].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[1].includes(Topic)||
          !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[11]) && contentData[i].KeyWords[11].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[2].includes(Topic)||
          !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[11]) && contentData[i].KeyWords[11].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[3].includes(Topic)||
          !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[11]) && contentData[i].KeyWords[11].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[4].includes(Topic)||
          !autoCompleteList.innerHTML.includes(contentData[i].KeyWords[11]) && contentData[i].KeyWords[11].toLowerCase().replace(/\s/g, '').includes(search.value.toLowerCase().replace(/\s/g, '')) && contentData[i].Topics[5].includes(Topic)){
          autoCompleteList.innerHTML+=`<div class="Auto-Complete-List-Item">${contentData[i].KeyWords[9]}</div>`
          };
      


        };
      
    
  

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
  Pages=0
  MaxPages=0;

// this code loads the previously saved pages when you refresh

  for(let i=0; i<pageNumbers.length; i++){

    addedPages.children[i].innerText=pageNumbers[i]

  };



  if(''===sessionStorage.getItem('savedSearch') && ''===Topic && ''===BeforeDateFilter  && ''===AfterDateFilter  && ''===ExactlyDateFilter){

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

      };

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

        

    

    sessionStorage.setItem('savedPage', page);
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
      sessionStorage.setItem('savedPage', page);

    
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

    sessionStorage.setItem('savedPage', page);

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
      sessionStorage.setItem('savedPage', page);
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
sessionStorage.setItem('savedPage', page);

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



setTheme();