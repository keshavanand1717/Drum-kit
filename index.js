document.querySelector(".w").addEventListener("click",handleClick);
function handleClick(){
    var audio = new Audio('sounds/tom-1.mp3');
    audio.play();
    buttonAnimation("w");
}
document.querySelector(".a").addEventListener("click",handleClicka);
function handleClicka(){
    var audio = new Audio('sounds/tom-2.mp3');
    audio.play();
    buttonAnimation("a");
}
document.querySelector(".s").addEventListener("click",handleClicks);
function handleClicks(){
    var audio = new Audio('sounds/tom-3.mp3');
    audio.play();
    buttonAnimation("s");
}
document.querySelector(".d").addEventListener("click",handleClickd);
function handleClickd(){
    var audio = new Audio('sounds/tom-4.mp3');
    audio.play();
    buttonAnimation("d");
}
document.querySelector(".j").addEventListener("click",handleClickj);
function handleClickj(){
    var audio = new Audio('sounds/kick-bass.mp3');
    audio.play();
    buttonAnimation("j");
}
document.querySelector(".k").addEventListener("click",handleClickk);
function handleClickk(){
    var audio = new Audio('sounds/snare.mp3');
    audio.play();
    buttonAnimation("k");
}
document.querySelector(".l").addEventListener("click",handleClickl);
function handleClickl(){
    var audio = new Audio('sounds/crash.mp3');
    audio.play();
    buttonAnimation("l");
}
document.addEventListener("keydown" ,function(event){
    var substr;
    switch (event.key) {
        case "w":
            substr = "tom-1";
            break;
        case "a":
            substr = "tom-2";
            break;
        case "s":
            substr = "tom-3";
            break;
        case "d":
            substr = "tom-4";
            break;
        case "j":
            substr = "kick-bass";
            break;
        case "k":
            substr = "snare";
             break; 
        case "l":
           substr = "crash";
           break;     
        
        default:
            break;
    }
    var audio = new Audio("sounds/"+substr+".mp3");
    audio.play();
    buttonAnimation(event.key);
});
function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}