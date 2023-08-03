let isCountdownFinished = false;
		let interval;
		let seconds = 0;
		let minutes = 0;
		let hours = 0;

		function playAudio(audioFile) {
			let audio = new Audio(audioFile);
			audio.play();
		}
		
		function pauseAudio(audioFile) {
			let audio2 = new Audio(audioFile);
			audio2.pause();
		}
		

let remainingSeconds;

function startCountdown() {
    document.getElementById('container').style.marginTop="-100px";
	nohideButton("stop");
	hideButton("start");
	hideDiv("myDiv");
	document.getElementById('stop').disabled = false;
    document.getElementById('start').disabled = true;
    let totalSeconds = getSeconds();
	if (remainingSeconds) {
		totalSeconds=remainingSeconds;
	}
    if (totalSeconds > 0) {
		
        if (remainingSeconds > 0) {
            totalSeconds = remainingSeconds;
        }
        interval = setInterval(function() {
            totalSeconds--;
            hours = Math.floor(totalSeconds / 3600);
            minutes = Math.floor((totalSeconds - (hours * 3600)) / 60);
            seconds = totalSeconds - (hours * 3600) - (minutes * 60);
            displayTime();
			
            drawCircle(totalSeconds / getSeconds());
            remainingSeconds=totalSeconds;
			
            if (totalSeconds == 0 ) {
              document.getElementById('start').disabled = true;
                clearInterval(interval);
				hideButton("start");
				hideButton("stop");
				nohideButton("reset"); 
				
              document.getElementById('reset').style.marginTop="-50px";
				const interval2 = setInterval(() => {
            playAudio('countdown-finished.mp3');
                                      }, 1000); 
		}
		
			
			
			
        }, 1000);
		
		
		 
    }
	
	
}

function stopCountdown() {
   clearInterval(interval);
   hideButton("stop");
   nohideButton ("start");
   nohideButton("reset");
   document.getElementById('stop').disabled = true;
    document.getElementById('start').disabled = false;
}

function resetCountdown() {
	location.reload();
}

		function displayTime() {
			let sec = seconds < 10 ? "0" + seconds : seconds;
			let min = minutes < 10 ? "0" + minutes : minutes;
			let hr = hours < 10 ? "0" + hours : hours;
			document.getElementById("countdown").innerHTML = hr + ":" + min + ":" + sec;
		}

		function getSeconds() {
			let hours = parseInt(document.getElementById("hours").value) || 0;
			let minutes = parseInt(document.getElementById("minutes").value) || 0;
			let seconds = parseInt(document.getElementById("seconds").value) || 0;
			return (hours * 3600) + (minutes * 60) + seconds;
		}

		function drawCircle(percent) {
			let canvas = document.getElementById("canvas");
			let context = canvas.getContext("2d");
            audio.play();
			context.clearRect(0, 0, canvas.width, canvas.height);

			let x = canvas.width / 2;
			let y = canvas.height / 2;
			let radius = canvas.width / 2 - 10;

			context.beginPath();
			context.arc(x, y, radius, 0, 2 * Math.PI, false);
			context.lineWidth = 10;
			context.strokeStyle = '#ccc';
			context.stroke();

			context.beginPath();
			context.arc(x, y, radius, -Math.PI / 2, (-Math.PI / 2) + (2 * Math.PI * percent), false);
			context.lineWidth = 10;
			context.strokeStyle = 'red';
			context.stroke();
		}
		var audio = new Audio('button-click.mp3');
        var muteIcon = document.getElementById("mute-icon");
  var audio2= new Audio ('')
		function toggleMute() {
  if (audio.muted) {
    audio.muted = false;
    muteIcon.innerHTML = '<i class="fa fa-volume-up"></i>';
  } else {
    audio.muted = true;
    muteIcon.innerHTML = '<i class="fa fa-volume-off"></i>';
  }
}
 
 
  function hideDiv(divId) {
  var div = document.getElementById(divId);
  if (div) {
    div.style.display = "none";
  }
}
function hideButton(buttonId) {
  var button = document.getElementById(buttonId);
  if (button) {
    button.style.display = "none";
  }
}
function nohideButton(buttonId) {
  var button = document.getElementById(buttonId);
  if (button) {
    button.style.display = "block";
  }
}

  function updateTime() {
    var d = new Date();
    var n = d.toLocaleString();
    document.getElementById("datetime").innerHTML = n;
}
setInterval(updateTime, 1000);
function checkInput() {
	let hours = parseInt(document.getElementById("hours").value) || 0;
	let minutes = parseInt(document.getElementById("minutes").value) || 0;
	let seconds = parseInt(document.getElementById("seconds").value) || 0;
  
	if (hours === 0 && minutes === 0 && seconds === 0) {
		alert("You have to enter the time first before starting the countdown timer")
	} else {
	 startCountdown();
	}
  }
  
  document.getElementById("hours").onchange = checkInput;
  document.getElementById("minutes").onchange = checkInput;
  document.getElementById("seconds").onchange = checkInput;
