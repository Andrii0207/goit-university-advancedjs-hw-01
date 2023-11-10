import Player from "@vimeo/player"
import throttle from 'lodash.throttle'


const iframe = document.querySelector('#vimeo-player');
const LS_KEY = "videoplayer-current-time";
const currentTime = JSON.parse(localStorage.getItem(LS_KEY)) ?? 0;
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000))

function onPlay({ seconds }) {
    localStorage.setItem(LS_KEY, JSON.stringify(seconds))
}

player.setCurrentTime(currentTime)
