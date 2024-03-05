let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
var startButton = document.getElementById('start-button');
let message = document.getElementById('what-time');

let break1 = document.getElementById('break-1');
let break2 = document.getElementById('break-2');
let break3 = document.getElementById('break-3');
let break4 = document.getElementById('break-4');
let break5 = document.getElementById('break-5');

var intervalID = 0;
var intervalTime = 0;
var breakAmount = 1;
var longBreak = 0;



let currentState = 0;

function startStop(){

    console.log(startButton.style.content);

    if(startButton.textContent == "START"){

        startButton.textContent = "PAUSE";
        currentState = 1;
        intervalID = setInterval(countDownTimer, 1000);
    }
    else{
        startButton.textContent = "START"
        currentState = 0;
        clearInterval(intervalID);
    }

   

    
}

function countDownTimer(){

    var currentMinutes = parseInt(minutes.textContent);
    var currentSeconds = parseInt(seconds.textContent);

    if(currentMinutes == 0 && currentSeconds == 0){

        if(intervalTime == 0){
            intervalTime = 1;

            minutes.textContent = "5";
            seconds.textContent = "00";

            message.textContent = "SHORT BREAK TIME!"

   
            if(breakAmount == 1){
                
                break1.style.backgroundColor = '#354f52';

            }
            else if(breakAmount == 2){
                break2.style.backgroundColor = '#354f52';

            }
            else if(breakAmount == 3){
                break3.style.backgroundColor = '#354f52';

            }
            else if(breakAmount == 4){
                break4.style.backgroundColor = '#354f52';

            }
            else{

                message.textContent = "LONG BREAK TIME!"
                minutes.textContent = "15";
                seconds.textContent = "00";
                break5.style.backgroundColor = '#354f52';
                longBreak = 1;

                breakAmount = 0;

            }
            breakAmount++;

            
        }
        else{

            message.textContent = "STUDY TIME!"

            if(longBreak == 1){
                console.log("here");
                longBreak = 0;
                break1.style.backgroundColor = '#cad2c5';
                break2.style.backgroundColor = '#cad2c5';
                break3.style.backgroundColor = '#cad2c5';
                break4.style.backgroundColor = '#cad2c5';
                break5.style.backgroundColor = '#cad2c5';
            }
            intervalTime = 0;
            minutes.textContent = "25";
            seconds.textContent = "00";

        }
  
        clearInterval(intervalID);

        startStop();
    }
    else if(currentSeconds == 0){

        currentMinutes = currentMinutes - 1;
        currentSeconds = 59;

        minutes.textContent = currentMinutes;
        seconds.textContent = currentSeconds;
    }
    else{

        currentSeconds--;

        if(currentSeconds < 10){

            seconds.textContent = "0" + currentSeconds.toString();
        }
        else{
            seconds.textContent = currentSeconds;
        }

    
    }



}

startButton.addEventListener('click', startStop);