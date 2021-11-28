// lazy loading images
let imagesToLoad = document.querySelectorAll('img[data-src]');
const imgOptions = {
    threshold:0,
    rootMargin: "0px 0px 10px 0px"
}

const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {image.removeAttribute('data-src');};
};



if('IntersectionObserver' in window) {
const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
    if(item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
    }
    });
}, imgOptions);

imagesToLoad.forEach((img) => {
    observer.observe(img);
});
} else {
imagesToLoad.forEach((img) => {
    loadImages(img);
});
}


/* set copyright date and current date*/

try{
    const options = { 
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
              
    }; 
    const theYear = {
        year: 'numeric'
    }
    document.getElementById("currentDate").textContent = new Date().toLocaleDateString("en-UK", options);
    document.getElementById("year").textContent = new Date().toLocaleDateString("en-UK", theYear);

}
catch(e){
    alert("error with code or your browser does not support Locale");
}


//to show the banner only on Fridays
let today = new Date();
let dayOfWeek = today.getDay();

if(dayOfWeek == 5){
    document.querySelector(".sb-container").style.display = 'block';
}








//function to open and close de hamburguer menu
function openClose(){
    const mainnav = document.querySelector('.nonResponsive');
    const menup = document.querySelector('.open');
    
    mainnav.classList.toggle('responsive');
    menup.classList.toggle('close');
}

//Form Range input
function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}


