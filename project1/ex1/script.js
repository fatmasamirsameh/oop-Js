      
      function Calculator() {
   this.read = function(){
    var askUser = prompt("please Enter two values sperated by comma");
    askUserArr = askUser.split(","),
 this.valueOne = parseInt(askUserArr[0]),
  this.valueTwo = parseInt(askUserArr[1]);
    }
    this.sum= function(){
     return this.valueOne + this.valueTwo;  
    }
    this.mul= function(){
     return this.valueOne * this.valueTwo;  
    } 
}
const calc = new Calculator();
calc.read();
alert("sum =" + calc.sum());
alert("mul =" + calc.mul());



