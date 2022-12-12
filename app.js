// timeout qui se déclenche 2 sec après le click.
let timeout = document.getElementById("timeout");
let timeoutDiv = document.getElementById("timeout-div");

timeout.addEventListener("click",  () => {
    setTimeout(() => {
        let newDiv = document.createElement("div");
        timeoutDiv.appendChild(newDiv);
        newDiv.style.fontSize = "5rem";
        newDiv.style.color = "white";
        newDiv.style.backgroundColor = "blue";
        newDiv.innerHTML = "Mon timout vient de créer ce div 2 secondes après le click sur le bouton !";
    },2000);
})

// création d'un interval de 60 sec après le click.
let intervalDiv = document.getElementById("interval-div");
let intervalStart = document.getElementById("interval-start");
let intervalStop = document.getElementById("interval-stop");
let x = 0;

intervalStart.addEventListener("click", () => {
    let intervalId = setInterval(() => {
        if(x < 240) {
            intervalDiv.innerHTML = x += 60;
        }
        else {
            clearInterval(intervalId);
        }
        intervalStop.addEventListener("click", () => {
            clearInterval(intervalId);
        })
    },60000);// interval de 60 sec
});
