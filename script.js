
let SongIndex = 0;
let audioElement = new Audio('songs/3.mp3');
let masterPlay = document.getElementById('masterPlay');
let progressBar = document.getElementById('progressBar');
let masterName = document.getElementById('masterName');

let gifff = document.getElementById('gifff');

let songItem = Array.from(document.getElementsByClassName('songItem'))

audioElement.onerror = function () {
    console.error('Error loading audio file.');
};



let Songs = [
    { SongName: 'lalalal', filePath: 'songs/1.mp3', coverPath: 'cover/1.jpg' },
    { SongName: 'Simroon Tera naam', filePath: 'songs/2.mp3', coverPath: 'cover/2.jpg' },
    { SongName: 'Main Nikla gaddi leke', filePath: 'songs/3.mp3', coverPath: 'cover/3.jpg' },
    { SongName: '2NI', filePath: 'songs/4.mp3', coverPath: 'cover/4.jpg' },
    { SongName: 'Mehram', filePath: 'songs/5.mp3', coverPath: 'cover/5.jpg' },
    { SongName: '3Peg ', filePath: 'songs/6.mp3', coverPath: 'cover/6.jpg' },

]


songItem.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = Songs[i].coverPath;
    element.getElementsByClassName("SongName")[0].innerText = Songs[i].SongName;

})

// audioElement Play();



// Handle playing / pause click

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
        gifff.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause')
        masterPlay.classList.add('fa-circle-play')
        gifff.style.opacity = 0;
    }
});



// Listen to event
audioElement.addEventListener('timeupdate', () => {



    // update

    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    progressBar.value = progress;

});

progressBar.addEventListener('change', () => {
    audioElement.currentTime = progressBar.value * audioElement.duration / 100;
})


const makeAllPlays = () => {

    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause')
        element.classList.add('fa-circle-play')

    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        SongIndex = parseInt(e.target.id)
        e.target.classList.remove('fa-circle-play')
        e.target.classList.add('fa-circle-pause')
        audioElement.src = `songs/${SongIndex + 1}.mp3`;
        masterName.innerText = Songs[SongIndex].SongName;
        audioElement.currentTime = 0;
        audioElement.play();
        gifff.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
    })
})

document.getElementById('forward').addEventListener('click', () => {
    if (SongIndex >= 5) {
        SongIndex = 0;
    } else {
        SongIndex += 1;
    }
    audioElement.src = `songs/${SongIndex + 1}.mp3`;
    masterName.innerText = Songs[SongIndex].SongName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play')
    masterPlay.classList.add('fa-circle-pause')
})

document.getElementById('backward').addEventListener('click', () => {
    if (SongIndex <= 0) {
        SongIndex = 0;
    } else {
        SongIndex -= 1;
    }
    audioElement.src = `songs/${SongIndex + 1}.mp3`;
    masterName.innerText = Songs[SongIndex].SongName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play')
    masterPlay.classList.add('fa-circle-pause')
})
