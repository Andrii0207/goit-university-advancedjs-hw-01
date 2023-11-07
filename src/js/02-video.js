import Player from "@vimeo/player"


const iframe = document.querySelector('#vimeo-player');

const LS_KEY = "videoplayer-current-time";

let LS_DATA = JSON.parse(localStorage.getItem(LS_KEY))
console.log("LS_DATA >>>", LS_DATA)

const player = new Player(iframe);

player.on('play', onPlay)

function onPlay(evt) {
    console.log("Play event >>>", evt)
    const { seconds } = evt;
    localStorage.setItem(LS_KEY, JSON.stringify(seconds))
}

player.setCurrentTime().then(function (seconds) {
    console.log('seconds:', seconds);
    localStorage.setItem(LS_KEY, JSON.stringify(seconds))
}).catch(function (err) {
    console.log(err)
}) 