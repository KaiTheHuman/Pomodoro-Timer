
//initialise variables
var myInterval;
var minutes=0;
var  seconds=0;
var isPaused=false;

//timer function, does the countdown
function myTimer() {

  //when seconds at 0, get number from minutes, seconds 59
  if(seconds==0)
  {
    minutes--;
    seconds=59;
  }
  else
  { 
    //otherwise second goes down by 1
    seconds--;
  }

  // turn text red, and background triangle different red
  //when less than/ a minute left
  if(minutes==1 && seconds==0 )
  {
    document.getElementById("timer").style.fill="red";
    document.getElementById("rec").style.fill="#8b0000";
    

  }


//if time up, end timer, send take a break message, revert any color changes
  if(minutes==0 && seconds==0){
    clearInterval(myInterval);
    document.getElementById("timer").style.fill="white";
    document.getElementById("rec").style.fill="red";
    
    document.getElementById("timer").innerHTML = "Take a Break";
    window.alert("Take a Break");
  }
  else{
    // if time not up
    var minute;
    var second;
    // see if minute or second are single digit, and change
    //so that its in 00:00 format
    if(minutes < 10)
      {
         minute="0"+minutes;
      }
      else{
        minute=minutes;
      }

      if(seconds<10)
      {
         second="0"+seconds
    
      }
      else
      {
        second=seconds
      }
      //print current time on counter
  document.getElementById("timer").innerHTML = minute + ":"+ second;
  }
}

//stop timer, setting timer to 00:00
function myStop() {
  //if paused, unpause
  if(isPaused==true)
    {
      isPaused==false;
      document.getElementById("paused").innerText ="pause";
    }
  clearInterval(myInterval);
  minutes="00";
  seconds="00";
  document.getElementById("timer").innerHTML = minutes + ":" + seconds;
}

//pause timer, change pause to resume
function pause(){

  //to pause
  if(isPaused==false){
    //this prevents people pausing when at 0 time, causes errors
    if(minutes==0 && seconds ==0)
    {   
    }
    else{
      //stop timer but dont reset
      clearInterval(myInterval);
    document.getElementById("paused").innerText ="resume";
    isPaused= true;
    }
    
  }

  //to unpause
  else{
    myInterval = setInterval(myTimer, 1000);
    document.getElementById("paused").innerText ="pause";
    isPaused=false;

  }
}

//start timer
function myStart(){
  //is paused, unpause
  if(isPaused==true)
  {
    isPaused==false;
    document.getElementById("paused").innerText ="pause";
  }
  //set timer time
    clearInterval(myInterval);
    seconds="00";
    minutes=25;
    document.getElementById("timer").innerHTML = minutes + ":" + seconds;
    myInterval = setInterval(myTimer, 1000);
}