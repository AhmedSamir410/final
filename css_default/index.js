let item10 = document.querySelector(".item10")
let item20 = document.querySelector(".item20")
let item30 = document.querySelector(".item30")
let item40 = document.querySelector(".item40")
let item50 = document.querySelector(".item50")
let item60 = document.querySelector(".item60")
let item70 = document.querySelector(".item70")
let item80 = document.querySelector(".item80")

function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.watchPosition(showPosition , showError);
    }
}
function showPosition(position){
    item10.innerHTML = "lalitude :: " +  position.coords.latitude;
    item20.innerHTML = "longitude :: " + position.coords.longitude;
    item30.innerHTML = "acurancy  :: " + position.coords.accuracy;
    item40.innerHTML = "altidute  :: " + position.coords.altitude;
    item50.innerHTML = "altitudeAccuracy  :: " + position.coords.altitudeAccuracy;
    item60.innerHTML = "heading  :: " + position.coords.heading;
    item70.innerHTML = "speed  :: " + position.coords.speed;
    item80.innerHTML = "timestamp  :: " +  position.timestamp;
}

function showError(error){
    switch (error.code){
        case error.PERMISSION_DENIED   : console.log("User denied the request for Geolocation")     ; break ;
        case error.POSITION_UNAVAILABLE: console.log("Location information is unavailable")         ; break ;
        case error.TIMEOUT             : console.log("The request to get user location timed out.") ; break ;
        case error.error.UNKNOWN_ERROR : console.log("An unknown error occurred.")                  ; break ;
        default :  console.log("That's Right");
    }
}
/* ============== */
getLocation()
