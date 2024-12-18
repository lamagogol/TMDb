callAPI('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc');
const scrollContainer = document.querySelector(".scrollContainer");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});

let nav = document.querySelector(".buttonStock")

const url = 'https://api.themoviedb.org/3/genre/movie/list?language=en';
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ODc0M2Y4NGRhYzAwNDBlZjEyNjgwMjMzZWU5NmEwZiIsIm5iZiI6MTczNDM0NDk4NC44MTUsInN1YiI6IjY3NjAwMTE4NWJkM2M3MmE4MmMxYzNiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._wZmMme3uyW9tlwonW8YiyvgMC7zZTBAn4VG7ESRAWo'
    }
};
fetch(url, options).then((response) => {
    return response.json();
}).then(data => {
    data.genres.forEach(element => {
        if (element.name == "Action" || element.name == "Animation" || element.name == "Documentary" || element.name == "History" || element.name == "Horror" || element.name == "Science Fiction" || element.name == "War" || element.name == "Western") {
            let button = document.createElement("button");
            button.innerHTML = element.name;
            nav.appendChild(button);
            button.classList.add("autoButton");
            button.classList.add(String(element.name.split(' ').join('')))
            let k = document.querySelector("." + element.name.split(' ').join(''))
            k.addEventListener("click", function () {
                scrollContainer.innerHTML = ""
                imagesButtonChange("genre", element.id)
            })
        }
    });
});

let mostPopular = document.querySelector(".mostPopular");
let newest = document.querySelector(".newest");
let buttons = document.querySelector(".buttonStock button");

mostPopular.addEventListener("click", function () {
    scrollContainer.innerHTML = ""
    imagesButtonChange("popular")
})
newest.addEventListener("click", function () {
    scrollContainer.innerHTML = ""
    imagesButtonChange("newest")
})

function imagesButtonChange(type, genreId = "") {
    if (type === "popular") {
        callAPI('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc');
    }
    else if (type === "newest") {
        callAPI('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=primary_release_date.desc');
    }
    else if (type === "genre") {
        callAPI('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&with_genres=' + String(genreId), genreId)
    }
};

function callAPI(siteUrl, genreId) {
    const url = siteUrl;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ODc0M2Y4NGRhYzAwNDBlZjEyNjgwMjMzZWU5NmEwZiIsIm5iZiI6MTczNDM0NDk4NC44MTUsInN1YiI6IjY3NjAwMTE4NWJkM2M3MmE4MmMxYzNiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._wZmMme3uyW9tlwonW8YiyvgMC7zZTBAn4VG7ESRAWo'
        }
    };
    fetch(url, options).then((response) => {
        return response.json();
    }).then(data => {
        data.results.forEach(element => {
            if (element.poster_path != null) {
                let id = element.id;
                let poster = element.poster_path;
                let images = document.createElement("img");
                images.src = `https://images.tmdb.org/t/p/w500/${poster}`;
                images.classList.add(String(id));
                console.log(id)
                scrollContainer.appendChild(images);
                images.addEventListener("click", function () {
                    openPage(id)
                })
            }
        });
    });
};
function openPage(id) {
    const url = 'https://api.themoviedb.org/3/movie/' + id + '?language=en-US';
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ODc0M2Y4NGRhYzAwNDBlZjEyNjgwMjMzZWU5NmEwZiIsIm5iZiI6MTczNDM0NDk4NC44MTUsInN1YiI6IjY3NjAwMTE4NWJkM2M3MmE4MmMxYzNiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._wZmMme3uyW9tlwonW8YiyvgMC7zZTBAn4VG7ESRAWo'
        }
    };
    fetch(url, options).then((response) => {
        return response.json();
    }).then(data => {
        window.open(data.homepage, "_blank");
    });
};
let search = document.querySelector(".search")
let resultContainer = document.querySelector(".result")
search.addEventListener("input", research)

function research(e) {
    let query = e.target.value
    const searchUrl = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}&include_adult=false&language=en-US&page=1`;

    fetch(searchUrl, {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ODc0M2Y4NGRhYzAwNDBlZjEyNjgwMjMzZWU5NmEwZiIsIm5iZiI6MTczNDM0NDk4NC44MTUsInN1YiI6IjY3NjAwMTE4NWJkM2M3MmE4MmMxYzNiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._wZmMme3uyW9tlwonW8YiyvgMC7zZTBAn4VG7ESRAWo'
        }
    }).then((res) => res.json())
    .then((data) => {
        let main = document.querySelector(".main");
        resultContainer.innerHTML = "";
        main.style.display = "none";
        resultContainer.style.display = "flex";
        data.results.forEach(movie => {
            if (movie.poster_path != null) {
                console.log(movie);
                let path = movie.poster_path
                let images = document.createElement('img')
                images.src = `https://images.tmdb.org/t/p/w500/${path}`;
                resultContainer.appendChild(images);
            }
        })
        if (query === "") {
            main.style.display = "block";
            resultContainer.style.display = "none"
            resultContainer.innerHTML = "";
            return;
        }
        resultContainer.addEventListener("wheel", (evt) => {
            evt.preventDefault();
            resultContainer.scrollLeft += evt.deltaY;
        });

    })
}