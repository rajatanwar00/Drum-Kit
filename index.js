var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i=0;i<numberOfDrumButtons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){

        var buttonValue= this.innerHTML;        
        keyWork(buttonValue);
        animation(buttonValue);
        
    });
}

    document.addEventListener("keypress",function(event){
        var keyPressed=event.key;
        keyWork(keyPressed);
        animation(keyPressed);
    });

    function keyWork(music){
        switch(music){
            case "w":
                var music=new Audio("sounds/tom-1.mp3");
                music.play();
                break;

            case "a":
                var music=new Audio("sounds/tom-2.mp3");
                music.play();
                break;

            case "s":
                var music=new Audio("sounds/tom-3.mp3");
                music.play();
                break;

            case "d":
                var music=new Audio("sounds/tom-4.mp3");
                music.play();
                break;

            case "j":
                var music=new Audio("sounds/snare.mp3");
                music.play();
                break;

            case "k":
                var music=new Audio("sounds/crash.mp3");
                music.play();
                break; 

            case "l":
                var music=new Audio("sounds/kick-bass.mp3");
                music.play();
                break;
        }
    }

    function animation(keyPressed){
        var button=document.querySelector("."+ keyPressed);
        button.classList.add("pressed");

        setTimeout(function(){
            button.classList.remove("pressed");
        },100);
    }
