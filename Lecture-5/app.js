let img=document.querySelector('img');
let audioplay=document.querySelector('#audioPlayer');
let prevBtn=document.querySelector('#prevbtn');
let nextBtn=document.querySelector('#nextbtn');
let playPause=document.querySelector('#playpausebtn');
let searchSong=document.querySelector('#searchSong');
let input=document.querySelector('input');

let songs=[
    {
        SongName:"Cheques",
        source:'/Cheques(PagalNew.Com.Se).mp3',
        imgUrl:'https://c.saavncdn.com/312/Cheques-slowed-and-reverb-Punjabi-2023-20230712183552-500x500.jpg'
    },
    {
        SongName:"All is well",
        source:'/Aal Izz Well 128 Kbps.mp3',
        imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYx40ClA5yGhRmyg1g8yY179InusrtuPkszQ&s'
    },
    {
        SongName:"Still Rollin",
        source:'/Still_Rollin.mp3',
        imgUrl:'https://i1.sndcdn.com/artworks-PqWB9CjeSvjRTfKx-nCbhKQ-t500x500.jpg'
    }
]


searchSong.addEventListener('click',()=>{
    console.log(input.value);

    let searchdata=input.value.toLowerCase();
    const foundSong=songs.find((song)=>{
        return song.SongName.toLowerCase().includes(searchdata)  
        
    })

    console.log(foundSong);
    if(foundSong){
        const ind=songs.indexOf(foundSong);
        loadSong(ind);
    }
    else{
        alert("Song not found !!")
    }

})


function loadSong(index)
{
    img.src=songs[index].imgUrl;
    audioplay.src=songs[index].source;
    audioplay.play();
}

function playPauseSong()
{
    if(audioplay.paused)
    {
        audioplay.play();
        playPause.innerHTML='Pause';
    }else{
        audioplay.pause();
        playPause.innerHTML="Play";
    }

}
let currentIndex=0;

function nextSong()
{
    currentIndex=(currentIndex+1)%songs.length;
    loadSong(currentIndex);
}

function PreviousSong()
{
    currentIndex=(currentIndex+songs.length-1)%songs.length;
    loadSong(currentIndex);
}

prevBtn.addEventListener('click',PreviousSong);
playPause.addEventListener('click',playPauseSong);
nextBtn.addEventListener('click',nextSong);



loadSong(currentIndex);