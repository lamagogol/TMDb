callAPI('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc');
const scrollContainer = document.querySelector(".scrollContainer");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});

let nav=document.querySelector(".buttonStock")

const url = 'https://api.themoviedb.org/3/genre/movie/list?language=en';
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ODc0M2Y4NGRhYzAwNDBlZjEyNjgwMjMzZWU5NmEwZiIsIm5iZiI6MTczNDM0NDk4NC44MTUsInN1YiI6IjY3NjAwMTE4NWJkM2M3MmE4MmMxYzNiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._wZmMme3uyW9tlwonW8YiyvgMC7zZTBAn4VG7ESRAWo'
    }
};
fetch(url, options).then((response)=>{
    return response.json();
}).then(data=>{
    data.genres.forEach(element => {
        if (element.name=="Action" || element.name=="Animation" || element.name=="Documentary" || element.name=="History" || element.name=="Horror" || element.name=="Science Fiction" || element.name=="War" || element.name=="Western"){
            let button=document.createElement("button");
            button.innerHTML=element.name;
            nav.appendChild(button);
        }
    });
});

let mostPopular=document.querySelector(".mostPopular");
let newest=document.querySelector(".newest");
let horror=document.querySelector(".horror");
let action=document.querySelector(".action");
let scifi=document.querySelector(".scifi");
let thriller=document.querySelector(".thriller");
let animation=document.querySelector(".animation");

mostPopular.addEventListener("click", function(){
    scrollContainer.innerHTML = ""
    imagesButtonChange("popular","")
});

newest.addEventListener("click", function(){
    scrollContainer.innerHTML = ""
    imagesButtonChange("mostRecent","")
});

horror.addEventListener("click", function(){
    imagesButtonChange("genre", "horror")
});

action.addEventListener("click", function(){
    imagesButtonChange("genre", "action")
});

scifi.addEventListener("click", function(){
    imagesButtonChange("genre", "scifi")
});

thriller.addEventListener("click", function(){
    imagesButtonChange("genre", "thriller")
});

animation.addEventListener("click", function(){
    imagesButtonChange("genre", "animation")
});

function imagesButtonChange(type, name){
    if (type==="popular"){
        callAPI('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc');
    }
    else if (type==="mostRecent"){
        callAPI('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=primary_release_date.desc');
    }
};

function callAPI(siteUrl){
    const url = siteUrl;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ODc0M2Y4NGRhYzAwNDBlZjEyNjgwMjMzZWU5NmEwZiIsIm5iZiI6MTczNDM0NDk4NC44MTUsInN1YiI6IjY3NjAwMTE4NWJkM2M3MmE4MmMxYzNiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._wZmMme3uyW9tlwonW8YiyvgMC7zZTBAn4VG7ESRAWo'
        }
    };
    fetch (url,options).then((response)=>{
        return response.json();
    }).then(data=>{
        data.results.forEach(element => {
            if (element.poster_path != null) {
                let title = element.original_title;
                let poster = element.poster_path;
                let images= document.createElement("img");
                images.src= `https://images.tmdb.org/t/p/w500/${poster}`;
                scrollContainer.appendChild(images);
            }
        });
    });
};