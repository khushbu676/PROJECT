// DOM Elements
const playButton = document.getElementById('play');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const audio = document.getElementById('audio');
const songTitle = document.getElementById('song-title');
const artistName = document.getElementById('artist-name');
const albumCover = document.getElementById('album-cover');
const volumeControl = document.getElementById('volume');
const progress = document.getElementById('progress');
const songList = document.getElementById('song-list');



const songs = [
    {
      title: "Aaj ki rat (mp3)",
      artist: "	Madhubanti Bagchi, Divya Kumar,n",
      src: "assest/Ishq_192(PagalWorld.com.sb).mp3", // Replace with your actual audio file path
      cover: "https://www.pagalworld.com.sb/siteuploads/thumb/sft144/71764_4.jpg" // Replace with your actual image file path
    },
    {
      title: "chand chhupa badal me",
      artist: "Udit Narayan, Alka Yagnik,",
      src: "assest/Chand Chhupa Badal Mein_192(PagalWorld.com.sb).mp3",
      cover: "https://www.pagalworld.com.sb/siteuploads/thumb/sft145/72447_4.jpg"
    },
    {
      title: "Jo Tum Mere Ho",
      artist: "	Anuv Jain,",
      src: "assest/Jo Tum Mere Ho_192(PagalWorld.com.sb).mp3",
      cover: "https://www.pagalworld.com.sb/siteuploads/thumb/sft144/71840_4.jpg"
    }
  ];
  

let currentSongIndex = 0;

// Function to load a song
function loadSong(song) {
  audio.src = song.src;
  songTitle.textContent = song.title;
  artistName.textContent = song.artist;
  albumCover.src = song.cover;
}

// Function to play the current song
function playSong() {
  audio.play();
  playButton.textContent = 'Pause';
}

// Function to pause the current song
function pauseSong() {
  audio.pause();
  playButton.textContent = 'Play';
}

// Load the first song initially
loadSong(songs[currentSongIndex]);

// Play or pause the song when the button is clicked
playButton.addEventListener('click', () => {
  if (audio.paused) {
    playSong();
  } else {
    pauseSong();
  }
});

// Previous button functionality
prevButton.addEventListener('click', () => {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  loadSong(songs[currentSongIndex]);
  playSong();
});

// Next button functionality
nextButton.addEventListener('click', () => {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  loadSong(songs[currentSongIndex]);
  playSong();
});

// Volume control
volumeControl.addEventListener('input', (e) => {
  audio.volume = e.target.value / 100;
});

// Progress bar functionality
audio.addEventListener('timeupdate', () => {
  const progressPercent = (audio.currentTime / audio.duration) * 100;
  progress.value = progressPercent;
});

// Seek functionality for progress bar
progress.addEventListener('input', (e) => {
  const seekTime = (e.target.value * audio.duration) / 100;
  audio.currentTime = seekTime;
});

// Load song list dynamically
songs.forEach((song, index) => {
  const songItem = document.createElement('li');
  songItem.textContent = `${song.title} - ${song.artist}`;
  songItem.addEventListener('click', () => {
    currentSongIndex = index;
    loadSong(songs[currentSongIndex]);
    playSong();
  });
  songList.appendChild(songItem);
});
