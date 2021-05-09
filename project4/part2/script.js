
var select = document.getElementById("select_status");

var btn = document.getElementById("btn");
var ulComplete = document.getElementById('ul-complete');
var ulProgress = document.getElementById('ul-progress');
var clear = document.getElementById("clear");




var myElement = document.getElementById("form_select");
   myElement.onsubmit = function(e){
    'use strict';
     e.preventDefault();
 }
 btn.addEventListener('click', getRepose, false); 
function getRepose(){
    var req = new XMLHttpRequest();
 req.onreadystatechange = function(){
        //var usercontht = '';
  if(req.readyState === req.DONE){
     var results = JSON.parse(req.response);
     console.log(results);
     if(select.value == "completed"){
       for( var i = 0 ; i < results.length ; i++){
          if(results[i].completed === true ){
            var li = document.createElement('li');
            ulComplete.appendChild(li);
            li.innerHTML = results[i].userId + ' - ' + results[i].title;
          }
        }
      }
     else if( select.value == "progress"){
        for(i = 0 ; i < results.length ; i++){
            if(results[i].completed === false){
             var li = document.createElement('li');
             ulProgress.appendChild(li);
                li.innerHTML = results[i].userId + ' - ' + results[i].title;
            }
   
        } 
    
   } }


};


req.open("GET" ," https://jsonplaceholder.typicode.com/todos");
req.send();
}


var ul = document.getElementById('ul-new');
clear.addEventListener('click', reset, false);


    

function reset(){
    var xhr = new XMLHttpRequest();
   xhr.onreadystatechange = function(){
        if(xhr.readyState === xhr.DONE){
            var results = JSON.parse(xhr.response);
        for(i = 0 ; i < results.length ; i++){
            var li = document.createElement('li');
         ul.appendChild(li);
          li.innerHTML = '<h3> Title of task </h3>'+ '<br>' + results[i].title + ' + ' + results[i].completed ;
           var complete = results[i].completed
           console.log(typeof(complete))
         if(complete === true ){
            li.style.backgroundColor = "green";
    
         }else if(complete === false){
            li.style.backgroundColor = "yellow"; 
         }
            
    
        }
    }
};
xhr.open("GET" ," https://jsonplaceholder.typicode.com/todos");
xhr.send();
}
