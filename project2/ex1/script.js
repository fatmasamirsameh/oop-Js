function User(userName, userGender , mobileNumber){
    this.userName = userName;
    this.userGender = userGender;
    this.mobileNumber = mobileNumber;

}
function Admin(...args){
    User.apply(this,args);
    this.email = "dina@yahoo.com";
    this.role = "admin";
}
function Guest(...args){
    User.apply(this, args);
    this.role = "guest";
}

Admin.prototype = Object.create(User.prototype);
var guest = new Guest ("fatma", "female" , "0123");
var admin = new Admin("dina", "female", "0124") ;
var askUser = function (dataUser){
   var Ask = prompt("please enter the role of user");
   var propArr = [];
      for(var prop in admin){
          propArr.push(prop);
      }
      var propGuest = [];
      for(var prop in guest){
          propGuest.push(prop);
      }
      
   if (Ask == "admin" || Ask == "Admin"){
      var  dataUser = prompt("please enter data  in this array sperated by comma [" + propArr +" ]" ),
      dataUserARR = dataUser.split(",");
      if (dataUserARR.length < propArr.length || dataUserARR.length > propArr.length){
        alert("error, please enter all data in the array only");
    }
   }else if(Ask == "guest" || Ask == "Guest"){
    var  dataUser = prompt("please enter data in this array sperated by comma [" + propGuest +" ]" );
    dataUserARR = dataUser.split(",");
    if (dataUserARR.length < propGuest.length || dataUserARR.length > propGuest.length){
      alert("error, please enter all data in the array only");
  }
   }else{
       alert("error,please enter A true role")
   }
   var moblileUser = dataUserARR[2];
   var  mobileGuest = guest.mobileNumber;
   //console.log(moblileUser);
   var mobileAdmin = admin.mobileNumber;
   //console.log(mobileAdmin);
   if(moblileUser == mobileAdmin || moblileUser == mobileGuest){
       console.log("this user is already checked");
   }
   

 //console.log(dataUserARR);
 //console.log(propArr.length);
 //console.log(dataUserARR.length);
 //console.log(admin);

 //console.log(propArr);
}(); 


//console.log(guest);
//console.log(askUser.call(admin, dataUser));


