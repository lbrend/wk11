
let video = document.querySelector("#player1"); // use the player1 ID from the page


window.addEventListener("load", function () {
	console.log("Good job opening the window")
});



document.querySelector("#play").addEventListener("click", function () {
	console.log("Play Video");
	video.play();
});



function play(){
	console.log("In play")
	video.play()

}

function pause(){
	console.log("In pause")
	video.pause()
}

function faster() {
	console.log("In faster")
	console.log("Current speed: " + video.playbackRate)
	video.playbackRate = video.playbackRate / 0.9;
	console.log("New speed: " + video.playbackRate)

}

function slower () {
	console.log("In slower")
	console.log("Previous Speed: " + video.playbackRate)
	video.playbackRate = video.playbackRate * 0.9;
	console.log("Current Speed: " + video.playbackRate)

}

function skip() {
	console.log("In skip")
	console.log("Current time: " + video.currentTime)
	video.currentTime = video.currentTime + 15;


	video.loop = true;
	console.log("new location is:", video.currentTime)
}

function enableMute() {
	video.muted = true;
}