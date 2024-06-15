const image = document.getElementById('cover');
title = document.getElementById('music-title');
artist = document.getElementById('music-artist');
currentTimeEl = document.getElementById('current-time');
durationEl = document.getElementById('duration');
progress = document.getElementById('progress');
playerProgress = document.getElementById('player-progress');
prevBtn= document.getElementById('prev');
nextBtn = document.getElementById('next');
playBtn = document.getElementById('play');
background = document.getElementById('bg-img');


const music =new Audio();

const songs =[
    {
        path: 'Assets/',
        displayName: 'The Charmer\'s Call',
        cover: 'Assets/',
        artist :'Hanu Dixit',
    }
]

my idea is , for example someone doesn't have a spotify account premium so he will be interuppted by ads , the purpose of my website is that someone can put the link of a spotify playlist and listen to it , can it be done ?