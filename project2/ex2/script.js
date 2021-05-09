/*
var userSeconds = prompt("please enter number of seconds"),
secondsConvert = parseInt(userSeconds);
if (isNaN(secondsConvert)){
console.log("error");

}else{
 function afterSeconds(secondsConvert){
    console.log("hello");
        return function timeOut(){
           console.log("seconds = " + secondsConvert );
        }
    }
}
setTimeout(afterSeconds,secondsConvert);
var x = afterSeconds(secondsConvert);
x();
*/
var userSeconds = prompt("please enter number of seconds"),
secondsConvert = parseInt(userSeconds);
if (isNaN(secondsConvert)){
console.log("error");

}else{
setTimeout(function (secondsConvert){
    console.log("hello");
        return function timeOut(){
            let that = this
           console.log("seconds = " + secondsConvert.apply(that) );
        }
    
},secondsConvert);
}
