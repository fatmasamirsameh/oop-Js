
var time = 0 ;

function StopWatch(){
    this.duration = 0;
    this.start = function(){
        
        if(this.duration == 0 ){
            this.duration = 1;
            function countUp(){
                  this.time++;
                           this.min = Math.floor( this.time/10/60) ;
                           this.sec = Math.floor( this.time/10) ;
                           this.tenths =  this.time % 10;
                    if( this.min < 10){
                        this.mins = "0" + this.min;
                    }
                    if(this.sec < 20){
                        this.secs = "0" + this.sec;
                    }
                  document.getElementById("main").innerHTML = this.mins + ":" + this.secs  + ":" + "0" + tenths;
                    
            }}else{
                document.getElementById("error").innerHTML = " error,the watch is already started";
            }
            myTime = setInterval(countUp,1000); 

        } 
    this.stop = function(){
       if(this.duration == 1){
        clearInterval(myTime);
        this.duration = 0;
       }else{
        document.getElementById("error").innerHTML = " error,the watch is not started yet";
       }

    }
    this.reset = function(){
    clearInterval(myTime);
    document.getElementById("main").innerHTML = "00:00:00";
    this.duration  = 0;
    this.time = 0;

    }

}
var _StopWatch = new StopWatch();
_StopWatch.start();

