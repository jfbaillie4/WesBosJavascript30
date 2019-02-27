/*Get Our Elements*/
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');

const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');


/*Build our functions*/

function togglePlay() {
    if (!video.paused) {
        video.pause();
    } else {
        video.play();
    };
};

function toggleRanges() {
    if (this.name === "volume"){
        video.volume = this.value;
        //console.log("volume:" + this.value);
    }
    if (this.name === "playbackRate") {
        video.playbackRate = this.value;
        //console.log("playbackRate:" + this.value);
    }
}

function progression() {
    progressBar.setAttribute("style", `flex-basis: ${(video.currentTime /video.duration)*100}%`)
}

function skip(e) {
    const skipAmount = e.path["0"].dataset.skip;
    const newtime = video.currentTime + parseFloat(skipAmount);
    video.currentTime = newtime;
}

function pickTime(e) {
    console.log(e.path["0"].clientWidth)
    console.log(e.path["0"].clientX)
    console.log(e)
}


/*Hook up the event listeners*/

video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);
ranges.forEach(range => range.addEventListener('mouseup', toggleRanges))
skipButtons.forEach(skipButton => skipButton.addEventListener('click', skip))
progress.addEventListener('click', pickTime)

setInterval(progression, 10)
