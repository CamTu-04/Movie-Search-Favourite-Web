/*<--------- FEATURED MOVIE --------->*/

const featuredFilmContainer =
    document.querySelector(".featured-film");

function renderFeaturedMovie(movie) {

    const movieHTML = `
    
        <img 
            src="${movie.image}" 
            alt="${movie.title}" 
            class="featured-image"
        >

        <div class="overlay"></div>

        <div class="featured-info">

            <h2>${movie.title}</h2>

            <p class="english-title">
                ${movie.englishTitle}
            </p>

            <div class="movie-meta">

                <span>${movie.year}</span>

                <span>⭐ ${movie.rating}</span>

                <span>${movie.genre}</span>

            </div>

            <p>${movie.description}</p>

            <button class="watch-now">
                Xem Ngay
            </button>

        </div>
    `;

    featuredFilmContainer.innerHTML = movieHTML;
}



/*<--------- AUTO SLIDE --------->*/

let indexCurrentFeatured = 0;

function slideAuto() {

    renderFeaturedMovie(
        movies[indexCurrentFeatured]
    );

    indexCurrentFeatured++;

    if(indexCurrentFeatured >= movies.length){
        indexCurrentFeatured = 0;
    }

}

setInterval(slideAuto, 5000);



/*<--------- ALL MOVIES --------->*/

const allMovies = [

    ...movies,
    ...moviesChina,
    ...moviesKorea,
    ...moviesNew

];



/*<--------- RENDER MOVIE LIST --------->*/

function renderMovieList(movieArray, containerId){

    const container =
        document.querySelector(containerId);

    let movieHTML = "";

    movieArray.forEach(movie => {

        movieHTML += `
        
            <div 
                class="movie"
                data-id="${movie.id}"
            >

                <img 
                    src="${movie.image}" 
                    alt="${movie.title}"
                >

                <h4>${movie.title}</h4>

            </div>

        `;
    });

    container.innerHTML = movieHTML;

}



/*<--------- RENDER SECTIONS --------->*/

renderMovieList(
    moviesChina,
    "#movie-attention-china"
);

renderMovieList(
    moviesKorea,
    "#movie-attention-korea"
);

renderMovieList(
    moviesNew,
    "#movie-attention-new"
);



/*<--------- DEFAULT FEATURED --------->*/

renderFeaturedMovie(movies[0]);



/*<--------- MOVIE INTERACTION --------->*/

const movieElements =
    document.querySelectorAll(".movie");

movieElements.forEach(movieElement => {

    movieElement.addEventListener("click", () => {

        const movieId =
            movieElement.dataset.id;

        const selectedMovie =
            allMovies.find(movie => {

                return movie.id == movieId;

            });

        renderFeaturedMovie(selectedMovie);

    });

});