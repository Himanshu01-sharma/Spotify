console.log("Hello Javascript"); 
// intialize variables

let songIndex =0;
let masterPlay=document.getElementById('masterPlay');
let  myProgressBar = document.getElementById('myProgressBar');
let songsItems = Array.from(document.getElementsByClassName(`songItem`));
let songs = [
{SongName: "Salam-e-Isq",filepath: "./music/1.mp3",coverPath: "./img/1.avif"},
{SongName: "Salam-e-Isq",filepath: "./music/2.mp3",coverPath: "./img/2.avif"},
{SongName: "Salam-e-Isq",filepath: "./music/3.mp3",coverPath: "./img/3.avif"},
{SongName: "Salam-e-Isq",filepath: "./music/4.mp3",coverPath: "./img/4.avif"},
{SongName: "Salam-e-Isq",filepath: "./music/5.mp3",coverPath: "./img/5.avif"},
{SongName: "Salam-e-Isq",filepath: "./music/6.mp3",coverPath: "./img/6.avif"},
{SongName: "Salam-e-Isq",filepath: "./music/7.mp3",coverPath: "./img/7.avif"},


]

songsItems.forEach((element,i)=>{
console.log(element,i);
element.getElementsByTagName("img")[0].src=songs[i].coverPath;
element.getElementsByClassName("songname")[0].innerText=songs[i].SongName;
});





// audioElement.play();
   let audioElement = new Audio('./music/1.mp3');
  
// Handle Play/pause();
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle')
    }
});
   // Listen to Events 

    audioElement.addEventListener('timeupdate',()=>{
        console.log('timeupdate');
        // update Seekbar 
        progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
        console.log(progress);
        myProgressBar.value=progress;
    })
    myProgressBar.addEventListener('change',()=>{
        audioElement.currentTime = myProgressBar.value * audioElement.duration/100;

    });

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.add('fa-pause-circle');
        element.classList.add('fa-play-circle');

    })
}





    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
element.addEventListener('click',(e)=>{
    makeAllPlays();
    console.log(e.target);
    songIndex = parseInt(e.target.id);
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    audioElement.src=`./music/${songIndex +1 }.mp3` ;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-play-circle');
})

    });


    document.getElementById('next').addEventListener('click',()=>{
        if(songIndex>=6){
            songIndex=0
        }
        else{
            songIndex+=1;
        }
        audioElement.src=`./music/${songIndex+1 }.mp3` ;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-play-circle');
    })


    document.getElementById('previous').addEventListener('click',()=>{
        if(songIndex<=0){
            songIndex=0
        }
        else{
            songIndex-=1;
        }
        audioElement.src=`./music/${songIndex-1 }.mp3` ;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-play-circle');
    })

     


