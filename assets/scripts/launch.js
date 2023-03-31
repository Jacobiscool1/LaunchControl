function tryLaunch(){
    var lcok=1 , msg = ' ';
    if (gasLevel == 0){
        lcok = 0 ;
        msg = 'NO Gas';
    }
    if (park == 1){
        lcok = 0 ;
        msg = 'PARKING BRAKE NEEDS TO BE DISENGAGED';
    }
    if (battery == 0){
        lcok = 0 ; 
        msg = 'CHARGE BATTERY';
    }
    if (traction == 1){
        lcok = 0;
        msg = 'TURN Off TRACTION CONTROL';
    }
    if (intMode !== 3) {
        lcok = 0;
        msg = "CAR NEEDS TO BE IN SPORT MODE";
    }
    if (lcok==1) {
        document.getElementById("launch").src = "assets/images/lca1.png"; // set launch image source
        document.getElementById("msg").innerHTML = ""; // clear error message
        var launchSound = new Audio("assets/media/launch.mp3"); // create new Audio object for launch sound
        launchSound.play(); // play launch sound
    }
    else {
        alert(msg)
        document.getElementById("launch").src = "assets/images/lca0.png"; // set launch image source
        document.getElementById("msg").innerHTML = msg; // display error message
        var sputterSound = new Audio("assets/media/sputter.mp3"); // create new Audio object for sputter sound
        sputterSound.play(); // play sputter sound
    }
}