let audio = document.getElementById('duration')//audio
let btn = document.getElementById('ctrl')
let timeline = document.getElementById('timeline')//input
var isPlay = false

btn.addEventListener('click',function(){
    if(btn.innerText == "Play"){
        btn.innerText = "Pause"
        audio.play()
    }
    else{
        btn.innerText = "Play"
        audio.pause()
    }  
})

audio.addEventListener('timeupdate',()=>{
    const currentTime = audio.currentTime
    const duration = audio.duration

    const value = (currentTime/duration) * 100
    timeline.value = value
})

timeline.addEventListener('input',()=>{
    const duration = audio.duration
    const value = timeline.value
    
    audio.currentTime = (value/100) * duration
})