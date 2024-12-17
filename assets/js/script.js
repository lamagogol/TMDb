callAPI('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc');
const scrollContainer = document.querySelector(".scrollContainer");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});

let nav=document.querySelector(".buttonStock")

const url = 'https://api.themoviedb.org/3/genre/movie/list?language=en';
// const options = {
//     method: 'GET',
//     headers: {
//         accept: 'application/json',
//         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ODc0M2Y4NGRhYzAwNDBlZjEyNjgwMjMzZWU5NmEwZiIsIm5iZiI6MTczNDM0NDk4NC44MTUsInN1YiI6IjY3NjAwMTE4NWJkM2M3MmE4MmMxYzNiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._wZmMme3uyW9tlwonW8YiyvgMC7zZTBAn4VG7ESRAWo'
//     }
// };
// fetch(url, options).then((response)=>{
//     return response.json();
// }).then(data=>{
//     data.genres.forEach(element => {
//         if (element.name=="Action" || element.name=="Animation" || element.name=="Documentary" || element.name=="History" || element.name=="Horror" || element.name=="Science Fiction" || element.name=="War" || element.name=="Western"){
//             let button=document.createElement("button");
//             button.innerHTML=element.name;
//             nav.appendChild(button);
//         }
//     });
// });

let mostPopular=document.querySelector(".mostPopular");
let newest=document.querySelector(".newest");
let action=document.querySelector(".Action");
let animation=document.querySelector(".Animation");
let documentary=document.querySelector(".Documentary");
let history=document.querySelector(".History");
let horror=document.querySelector(".Horror");
let sciFi=document.querySelector(".ScienceFiction");
let war=document.querySelector(".War");
let western=document.querySelector(".Western");
let buttons=document.querySelector(".buttonStock button");

mostPopular.addEventListener("click", function(){
    scrollContainer.innerHTML = ""
    imagesButtonChange("popular")
})
newest.addEventListener("click", function(){
    scrollContainer.innerHTML = ""
    imagesButtonChange("newest")
})
action.addEventListener("click", function(){
    scrollContainer.innerHTML = ""
    imagesButtonChange("Action")
})
animation.addEventListener("click", function(){
    scrollContainer.innerHTML = ""
    imagesButtonChange("Animation")
})
documentary.addEventListener("click", function(){
    scrollContainer.innerHTML = ""
    imagesButtonChange("Documentary")
})
history.addEventListener("click", function(){
    scrollContainer.innerHTML = ""
    imagesButtonChange("History")
})
horror.addEventListener("click", function(){
    scrollContainer.innerHTML = ""
    imagesButtonChange("Horror")
})
sciFi.addEventListener("click", function(){
    scrollContainer.innerHTML = ""
    imagesButtonChange("Science Fiction")
})
war.addEventListener("click", function(){
    scrollContainer.innerHTML = ""
    imagesButtonChange("War")
})
western.addEventListener("click", function(){
    scrollContainer.innerHTML = ""
    imagesButtonChange("Western")
});

function imagesButtonChange(type){
    console.log(type)
    if (type==="popular"){
        callAPI('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc');
    }
    else if (type==="newest"){
        callAPI('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=primary_release_date.desc');
    }
    else if (type==="Action"){
        callAPI('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&with_genres=28');
    }
    else if (type==="Animation"){
        callAPI('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&with_genres=16');
    }
    else if (type==="Documentary"){
        callAPI('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&with_genres=99');
    }
    else if (type==="History"){
        callAPI('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&with_genres=36');
    }
    else if (type==="Horror"){
        callAPI('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&with_genres=27');
    }
    else if (type==="Science Fiction"){
        callAPI('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&with_genres=878');
    }
    else if (type==="War"){
        callAPI('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&with_genres=10752');
    }
    else if (type==="Western"){
        callAPI('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&with_genres=37');
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