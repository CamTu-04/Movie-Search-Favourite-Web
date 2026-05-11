/*<---------Render Featured Movie--------->*/
const featuredFilmContainer = document.querySelector(".featured-film");

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
            <button class="watch-now">Xem Ngay</button>
        </div>
    `;

    featuredFilmContainer.innerHTML = movieHTML;
}

let indexCurrentFeatured = 0;
function slideAuto() {
    featuredFilmContainer.classList.add("show");
    renderFeaturedMovie(movies[indexCurrentFeatured]);
    indexCurrentFeatured++;
    if(indexCurrentFeatured >= movies.length ) {
        indexCurrentFeatured = 0;
    }

    const featuredImage = document.querySelector(".featured-image");

    setTimeout(() => {
        featuredImage.classList.add("show");
    }, 100);
        
    const featuredInfo = document.querySelector(".featured-info");

    setTimeout(() => {
        featuredInfo.classList.add("show");
    }, 200);
    setTimeout(slideAuto, 5000);
}
slideAuto();
/*<---------End of Render Featured Movie--------->*/

/*<---------List Movie Popular Countries--------->*/
const renderMovieChinaContainer = document.querySelector("#movie-attention-china");
const renderMovieKoreaContainer = document.querySelector("#movie-attention-korea");
const renderMovieNewContainer = document.querySelector("#movie-attention-new");

function createMovieListHTML(movies) {
    let movieHTML = "";
    movies.forEach(movie => {
        movieHTML += `
            <div class="movie">
                <img src="${movie.image}" alt="${movie.title}">
                <h4>${movie.title}</h4>
            </div>
        `;
    });
    return movieHTML;
}
renderMovieChinaContainer.innerHTML = createMovieListHTML(moviesChina);
renderMovieKoreaContainer.innerHTML = createMovieListHTML(moviesKorea);
renderMovieNewContainer.innerHTML = createMovieListHTML(moviesNew);
/*<---------End of List Movie Popular Countries--------->*/

