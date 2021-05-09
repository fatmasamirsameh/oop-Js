
var ul = document.getElementById('ul');
 
var xhr = new XMLHttpRequest();
xhr.open("GET" ," https://jsonplaceholder.typicode.com/todos");
xhr.send();

xhr.onload = function(){
    if(xhr.status == 200){
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
       
      //  console.log(results);
    }
};
xhr.onerror = function(){
    console.log("error");
  
};
