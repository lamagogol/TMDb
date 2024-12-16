// Création d'une fonction permettant de générer un code html avec le bon nombre d'étoiles
let getStar = (vote) => {
    vote = parseInt(vote)
    let starVote = vote / 2
    let starFill = ''
    for (i = 0; i < 5; i++) {
        if (i < starVote) {
            starFill += `<i class="fas fa-star"></i>`
        } else {
            starFill += `<i class="far fa-star"></i>`
        }
    }
    return starFill;
}

// Récupération du fichier en local (attention, il faut un vhost / un live server)
fetch('assets/data/movies.json')
    .then(response => response.json())
    .then((jsonMovies) => {
        jsonMovies.results.map((movie) => {

            let title = movie.original_title;
            let overview = movie.overview;
            let poster = movie.poster_path;
            let vote = movie.vote_average;
            let star = getStar(vote); // On fait appel à une fonction qui va retourner un contenu html avec les étoiles

            let movieElToInject = `
            <div class='col-12 col-sm-6 col-xl-4 mb-3'>
                <div class='row no-gutters'>
                    <div class='col-md-5'>
                        <img class='img-fluid' src='${poster}' />
                    </div>
                    <div class='col-md-7 pl-2'>
                        <h5 class="pt-3 pt-md-0">${title}</h5>
                        <p class='text'>${overview}</p>
                        <p>${star}</p>
                    </div>
                </div>
            </div>
            `;
            document.getElementById('filmTable').innerHTML += movieElToInject;
        })
    })