var video;

window.addEventListener("load", function () {
	console.log("Good job opening the window")

});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

document.addEventListener('DOMContentLoaded', function () {
	let video = document.getElementById('player1');
	let playButton = document.getElementById('play');
	let pauseButton = document.getElementById('pause');
	let slowerButton = document.getElementById('slower');
	let fasterButton = document.getElementById('faster');
	let skipButton = document.getElementById('skip');
	let muteButton = document.getElementById('mute');
	let volumeSlider = document.getElementById('slider');
	let vintageButton = document.getElementById('vintage');
	let originalButton = document.getElementById('orig');
	let volumeDisplay = document.getElementById('volume');

	video.autoplay = false;
	video.loop = false;

	// Play video
	playButton.addEventListener('click', function () {
		video.play();
		volumeDisplay.innerText = `${Math.round(video.volume * 100)}%`;
	});

	// Pause video
	pauseButton.addEventListener('click', function () {
		video.pause();
	});

	// Slow down video speed
	slowerButton.addEventListener('click', function () {
		video.playbackRate *= 0.9;
		console.log('Speed is:', video.playbackRate);
	});

	// Speed up video
	fasterButton.addEventListener('click', function () {
		video.playbackRate /= 0.9;
		console.log('Speed is:', video.playbackRate);
	});

	// Skip ahead
	skipButton.addEventListener('click', function () {
		if (video.currentTime + 10 > video.duration) {
			video.currentTime = 0;
		} else {
			video.currentTime += 10;
		}
		console.log('Video Current Time is:', video.currentTime);
	});

	// Mute/unmute video
	muteButton.addEventListener('click', function () {
		video.muted = !video.muted;
		muteButton.innerText = video.muted ? 'Unmute' : 'Mute';
		console.log(video.muted ? 'Muted' : 'Unmute');
	});

	// Adjust volume
	volumeSlider.addEventListener('input', function () {
		video.volume = volumeSlider.value / 100;
		volumeDisplay.innerText = `${Math.round(video.volume * 100)}%`;
	});

	// Apply style
	vintageButton.addEventListener('click', function () {
		video.classList.add('oldSchool');
	});

	originalButton.addEventListener('click', function () {
		video.classList.remove('oldSchool');
	});
});


