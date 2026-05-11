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
                        <div class="movie-meta">
                            <span>${movie.year}</span>
                            <span>⭐ ${movie.rating}</span>
                            <span>${movie.genre}</span>
                        </div>
                       <button class="watch-now">Xem Ngay</button>
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

