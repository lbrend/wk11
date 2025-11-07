
var video = document.querySelector("#player1"); // use the player1 ID from the page


window.addEventListener("load", function () {
	console.log("Good job opening the window")
});


function play() {
	console.log("In play")
	video.play();
	video.volume = 1.0;
    document.querySelector("#volume").innerText = "100%";
}

document.querySelector("#play").addEventListener("click", play);



function pause() {
	console.log("In pause")
	video.pause();
}

document.querySelector("#pause").addEventListener("click", pause);



function faster() {
	console.log("In faster")
	console.log("Current speed: " + video.playbackRate)
	video.playbackRate = video.playbackRate / 0.9;
	console.log("New speed: " + video.playbackRate)
}

document.querySelector("#faster").addEventListener("click", faster);



function slower () {
	console.log("In slower")
	console.log("Previous Speed: " + video.playbackRate)
	video.playbackRate = video.playbackRate * 0.9;
	console.log("Current Speed: " + video.playbackRate)
}

document.querySelector("#slower").addEventListener("click", slower);




function skip() {
	console.log("In skip")
	console.log("Current time: " + video.currentTime);
	if (video.currentTime + 10 > video.duration) {
		video.currentTime = 0;
	} else {
		video.currentTime = video.currentTime + 10;
	}
	video.loop = true;
	console.log("New time: " + video.currentTime);
}

document.querySelector("#skip").addEventListener("click", skip);


function enableMute() {
	video.muted = !video.muted;
    document.querySelector("#mute").innerText = video.muted ? "Unmute" : "Mute";
    console.log(video.muted ? "Muted" : "Unmuted");
}


document.querySelector("#mute").addEventListener("click", enableMute);




function VolumeSlider() {
    var vol = document.querySelector("#slider").value;
    video.volume = vol / 100;
    document.querySelector("#volume").innerText = vol + "%";
    console.log("Volume set to " + vol + "%");
}


document.querySelector("#slider").addEventListener("input", VolumeSlider);





function vintageStyle() {
    video.classList.add("oldSchool");
    console.log("OldSchool style");
}

document.querySelector("#vintage").addEventListener("click", vintageStyle);





function originalStyle() {
    video.classList.remove("oldSchool");
    console.log("Original style");
}

document.querySelector("#orig").addEventListener("click", originalStyle);










