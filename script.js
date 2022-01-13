let audioElement = new Audio('songs/1.mp3');
let songIndex = 0;
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif= document.getElementById('gif');
let songItem= Array.from(document.getElementsByClassName('songItem'));
let mastersongName = document.getElementById('mastersongName');
let songs =[
    {songName: "Tum Se Hi - Mohit Chauhan Lofi Remake", filePath:"songs/1.mp3",coverPath: "covers/1.jpg"},
    {songName: "Jashn-E-Bahaaraa - Javed Ali, AR Rahman", filePath:"songs/2.mp3",coverPath: "covers/2.jpg"},
    {songName: "Raanjhanaa - A.R. Rahman Bollywood Lofi", filePath:"songs/3.mp3",coverPath: "covers/3.jpg"},
    {songName: "Lofi Remake Qaafirana Kedarnath", filePath:"songs/4.mp3",coverPath: "covers/4.jpg"},
    {songName: "Gravero & KASE - Shayad Lofi Edit", filePath:"songs/5.mp3",coverPath: "covers/5.jpg"},
    {songName: "alec benjamin, alessia cara - let me down slowly", filePath:"songs/6.mp3",coverPath: "covers/6.jpg"},
    {songName: "Lewis Capaldi - Someone You Loved (Lofi)", filePath:"songs/7.mp3",coverPath: "covers/7.jpg"},
    {songName: "Fly Me To The Moon - Lofi Cover (Prod. YungRhythm)", filePath:"songs/8.mp3",coverPath: "covers/8.jpg"},
    {songName: "maroon 5 - memories (slowed + reverb)", filePath:"songs/9.mp3",coverPath: "covers/9.jpg"},
    {songName: "death bed (coffee for your head)", filePath:"songs/10.mp3",coverPath: "covers/10.jpg"},
]
songItem.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText= songs[i].songName;
});
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    } 
})
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration /100;
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach(element=>{
        element.classList.add('fa-play-circle');
        element.classList.remove('fa-pause-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songindex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        mastersongName.innerText = songs[songindex].songName;
        audioElement.src = `songs/${songindex+1}.mp3`;
        audioElement.currentTime= 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })


})
document.getElementById('next').addEventListener('click',()=>{
    if(songindex>=9){
        songindex= 0;
    }
    else{
        songindex += 1;
    }
    audioElement.src = `songs/${songindex+1}.mp3`;
    mastersongName.innerText = songs[songindex].songName;
    audioElement.currentTime= 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<=0){
        songindex= 0;
    }
    else{
        songindex -= 1;
    }

    audioElement.src = `songs/${songindex+1}.mp3`;
    mastersongName.innerText = songs[songindex].songName;
    audioElement.currentTime= 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})