const milsecPerDay = 86400000;
let now = Date.now();
let lastVisit = localStorage.getItem('last_visit');

if(!lastVisit) {
    localStorage.setItem('last_visit', now);
    document.querySelector("#last-visited").innerHTML =  `Welcome, it's your first time here!`;
} else {
    let amountDays = Math.round((now - parseInt(lastVisit)) / milsecPerDay);
    if(amountDays == 1){
        document.querySelector("#last-visited").innerHTML =  `Your last visit was: ${amountDays} day ago.`;
    }else if(amountDays > 1){
        document.querySelector("#last-visited").innerHTML =  `Your last visit was: ${amountDays} days ago.`;
    }else{
        document.querySelector("#last-visited").innerHTML =  `Your last visit was: Today!`;
    }    
    localStorage.setItem('last_visit', now);
}