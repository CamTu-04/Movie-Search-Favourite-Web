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
function createMovieListHTML(movieArray, idContainer) {
    const renderMovieContainer = document.querySelector(idContainer);
    let movieHTML = "";
    movieArray.forEach(movie => {
        movieHTML += `
            <div class="movie" data-id="${movie.id}">
                <img src="${movie.image}" alt="${movie.title}">
                <h4>${movie.title}</h4>
                <div id="movie-popup" class="movie-popup">
                    <img src="${movie.image}" alt="${movie.title}">
                    <div class="popup-info">
                        <h3>${movie.title}</h3>
                        <p>${movie.englishTitle}</p>
                        <div class="movie-popup-meta">
                            <button class="watch-now">▶ Xem Ngay</button>
                            <button class="like-btn">🤍 Thích</button>
                            <button class="detail-btn">🛈 Chi tiết</button>
                        </div>
                        <div class="movie-meta">
                            <span>${movie.year}</span>
                            <span>⭐ ${movie.rating}</span>
                            <span>${movie.genre}</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
    renderMovieContainer.innerHTML = movieHTML;
}
createMovieListHTML(moviesChina, "#movie-attention-china");
createMovieListHTML(moviesKorea, "#movie-attention-korea");
createMovieListHTML(moviesNew, "#movie-attention-new");
/*<---------End of List Movie Popular Countries--------->*/

// /*<---------Show Popup Info Film--------->*/
// const popupElement = document.querySelector(".movie-popup");
// function showPopup(movie) {
//     const popupHTML = `
        // <img src="${movie.image}" alt="${movie.title}">
        // <div class="popup-info">
        //     <h3>${movie.title}</h3>
        //     <p>${movie.englishTitle}</p>
        //     <div class="movie-meta">
        //         <span>${movie.year}</span>
        //         <span>⭐ ${movie.rating}</span>
        //         <span>${movie.genre}</span>
        //     </div>
        //     <p>${movie.description}</p>
        // </div>
//     `;
//     popupElement.innerHTML = popupHTML;
// }

// const movieAll = [...moviesChina, ...moviesKorea, ...moviesNew];
// const movieElements = document.querySelectorAll(".movie");
// movieElements.forEach(movieElement => {
//     movieElement.addEventListener("mouseenter", () => {
//         const movieId = movieElement.dataset.id;
//         const movieData = movieAll.find(movie => movie.id === movieId);
//         if(movieData){
//             showPopup(movieData);
//             popupElement.classList.add("show");
//         }
//     });
//     movieElement.addEventListener("mouseleave", () => {
//         popupElement.classList.remove("show");
//     });
// });
/*<---------End of Show Popup Info Film--------->*/

/*<---------------Search Film----------------->*/
const movieAll = [...movies,...moviesChina, ...moviesKorea, ...moviesNew];

const searchContainer = document.querySelector(".list-result-search");
function renderMovieSearchResults(moviesList) {
    let movieHTML = "";
    if(moviesList.length === 0){
        movieHTML = `
            <p class="no-result">
                Không tìm thấy phim
            </p>
        `;
    }
    else{
        moviesList.forEach(movie => {
            movieHTML += `
                <div class="list-result-film" data-id="${movie.id}">
                    <img src="${movie.image}" alt="${movie.title}">
                    <h4>${movie.title}</h4>
                </div>
            `;
        });
    }
    searchContainer.innerHTML = movieHTML;
}

const inputSearch = document.querySelector("#search-input");
inputSearch.addEventListener("input", e => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredMovies = movieAll.filter(movie => 
        movie.title.toLowerCase().includes(searchTerm) || 
        movie.englishTitle.toLowerCase().includes(searchTerm)
    );
    if(searchTerm === ""){
        searchContainer.innerHTML = "";
        return;
    }
    renderMovieSearchResults(filteredMovies);
});

/*<--------------- CLICK OUTSIDE ----------------->*/
document.addEventListener("click", e => {

    const isSearchBox =
        e.target.closest("#search-box");

    if (!isSearchBox) {

        hideSearchResults();
    }
});


/*<--------------- CLICK SEARCH RESULT ----------------->*/
searchContainer.addEventListener("click", e => {

    const movieElement =
        e.target.closest(".list-result-film");

    if (!movieElement) return;

    const movieId = movieElement.dataset.id;

    const selectedMovie = movieAll.find(movie => {

        return String(movie.id) === movieId;

    });

    if (!selectedMovie) return;

    // Change Featured Movie
    renderFeaturedMovie(selectedMovie);

    // Clear Input
    inputSearch.value = "";

    // Hide Result
    hideSearchResults();

    searchContainer.innerHTML = "";
});