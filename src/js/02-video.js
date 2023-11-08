import Player from "@vimeo/player"
import throttle from 'lodash.throttle'


const iframe = document.querySelector('#vimeo-player');
const LS_KEY = "videoplayer-current-time";
const currentTime = JSON.parse(localStorage.getItem(LS_KEY))
const player = new Player(iframe);

player.on('play', throttle(onPlay, 1000))

function onPlay({ seconds }) {
    localStorage.setItem(LS_KEY, JSON.stringify(seconds))
}

player
    .setCurrentTime(currentTime)
    .then(function (seconds) {
        localStorage.setItem(LS_KEY, JSON.stringify(seconds))
    })
    .catch(function (err) { console.log(err) }) 