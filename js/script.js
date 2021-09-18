let dateUpdate = document.getElementById('update');
console.log(dateUpdate);

function lastUpdateTimeDate(){
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let today = date.getDate();
    let time = date.toLocaleTimeString('it-IT');
    dateUpdate.innerHTML = `${today}/ ${month}/ ${year} ${time}`;
    
    
}

lastUpdateTimeDate();   