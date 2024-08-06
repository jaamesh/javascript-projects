// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function() {
    const takeoff = this.document.getElementById("takeoff");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleHeight = document.getElementById("spaceShuttleHeight");
    const background = document.getElementById("shuttleBackground");
    const rocket = document.getElementById("rocket");

    rocket.style.position = "absolute";
    rocket.style.bottom = "0px";
    rocket.style.left = "150px";
    
    takeoff.addEventListener("click", function(event) {
        let readyForTakeoff = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (readyForTakeoff && flightStatus.innerHTML !== "Shuttle in flight.") {
            flightStatus.innerHTML = "Shuttle in flight.";
            background.style.backgroundColor = "blue";
            changeRocketHeight(10000);
        }
    });

    document.getElementById("landing").addEventListener("click", function(event){
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        changeRocketHeight(-10000);
        background.style.backgroundColor = "green";
    });

    document.getElementById("up").addEventListener("click", function(event){
        if (flightStatus.innerHTML === "Shuttle in flight.") {
            changeRocketHeight(1000);
        }
    });

    document.getElementById("down").addEventListener("click", function(event){
        if (flightStatus.innerHTML === "Shuttle in flight.") {
            changeRocketHeight(-1000);
        }
    });

    document.getElementById("left").addEventListener("click", function(event){
        if (flightStatus.innerHTML === "Shuttle in flight.") {
            changeRocketLeftPosition(-1000);
        }
    });

    document.getElementById("right").addEventListener("click", function(event){
        if (flightStatus.innerHTML === "Shuttle in flight.") {
            changeRocketLeftPosition(1000);
        }
    });

    function changeRocketHeight(heightChange) {
        if (Number(shuttleHeight.innerHTML) < 10000 && heightChange > 0 || Number(shuttleHeight.innerHTML) > 0 && heightChange < 0) {
            shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) + heightChange;
            rocket.style.bottom = (Number(shuttleHeight.innerHTML)/50) + "px";
        }
    }

    function changeRocketLeftPosition(leftChange) {
        if (Number(shuttleHeight.innerHTML) < 5000 && leftChange > 0 || Number(shuttleHeight.innerHTML) > 0 && leftChange < 0) {
            shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) + leftChange;
            rocket.style.left = ((Number(shuttleHeight.innerHTML) + leftChange)/50) + "px";
        }
    }

});