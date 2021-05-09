
function Person(name , age){
  this.name = name;
    this.age = age; 
}
Person.prototype.teach = function() {
  this.subject = "arabic",
 console.log( this.name + " is now teaching " + this.subject);
};

function Teacher(...args){
  Person.apply(this,args);
}

Teacher.prototype = Object.create(Person.prototype);
 var teacher = new Teacher("dina",24);
 teacher.teach();

