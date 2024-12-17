imagesButtonChange()

const scrollContainer = document.querySelector(".scrollContainer");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});

let mostPopular=document.querySelector(".mostPopular");
let newest=document.querySelector(".newest");
let horror=document.querySelector(".horror");
let action=document.querySelector(".action");
let scifi=document.querySelector(".scifi");
let thriller=document.querySelector(".thriller");
let animation=document.querySelector(".animation");

mostPopular.addEventListener("click", function(){
    imagesButtonChange("popular",)
});

newest.addEventListener("click", function(){
    imagesButtonChange("mostRecent",)
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

function imagesButtonChange(type="rdm", name="rdm"){
    if (type==="rdm"){
        callAPI('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc')
    };
    // else if (type==="popular"){

    // };
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
        return response.json()
    }).then(data=>{
        data.results.forEach(element => {
            let title = element.original_title
            let poster = element.poster_path
            let images= document.createElement("img")
            images.src= `https://images.tmdb.org/t/p/w500/${poster}`
            scrollContainer.appendChild(images)
        });
    });
}