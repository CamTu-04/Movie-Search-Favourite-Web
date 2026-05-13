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
const movieAll = [...movies,...moviesChina,...moviesKorea,...moviesNew];

const inputSearch = document.querySelector("#search-input");
const searchContainer = document.querySelector(".list-result-search");

function renderMovieSearchResults(movieList) {

    if (movieList.length === 0) {
        searchContainer.innerHTML = `
            <p class="no-result">
                Không tìm thấy phim
            </p>
        `;
        return;
    }

    let movieHTML = "";
    movieList.forEach(movie => {
        movieHTML += `
            <div class="list-result-film" data-id="${movie.id}">
                <img 
                    src="${movie.image}" 
                    alt="${movie.title}"
                >
                <div class="search-movie-info">
                    <h4>${movie.title}</h4>
                    <p>${movie.englishTitle}</p>
                    <div class="movie-meta">
                        <span>${movie.year}</span>
                        <span>⭐ ${movie.rating}</span>
                    </div>
                </div>
            </div>
        `;
    });

    searchContainer.innerHTML = movieHTML;
}

function getFilteredMovies(searchTerm) {
    return movieAll.filter(movie => {
        return (
            movie.title.toLowerCase().includes(searchTerm) ||
            movie.englishTitle.toLowerCase().includes(searchTerm)
        );

    });
}

function showSearchResults() {
    searchContainer.classList.add("show");
}

function hideSearchResults() {
    searchContainer.classList.remove("show");
}

inputSearch.addEventListener("input", e => {
    const searchTerm = e.target.value
        .trim()
        .toLowerCase();

    if (searchTerm === "") {
        searchContainer.innerHTML = "";
        hideSearchResults();
        return;
    }
    const filteredMovies = getFilteredMovies(searchTerm);
    renderMovieSearchResults(filteredMovies);
    showSearchResults();
});
/*<----------End of Search Film---------->*/

/*<----------Create Category------------->*/
let movieUniqueCate = [];
movieAll.forEach(movie => {
    let isExist = false;
    for(let movieUni of movieUniqueCate){
        if(movieUni === movie.genre) isExist = true;
    }
    if(!isExist) movieUniqueCate.push(movie.genre);

})

const listCategory = document.querySelector("#list-category")
function showCategory(uniqueCate){
    let movieHTML ="";
    uniqueCate.forEach(uniCate => {
        movieHTML += `
            <div class="attention" data-genre="${uniCate}">${uniCate}</div>
        `
    })
    listCategory.innerHTML = movieHTML;
}

showCategory(movieUniqueCate);
/*<-----------End Create Category--------->*/

/*<-----------Show Filter Category---------->*/
const filterCate = document.querySelector(".filter-category");

function renderFilterCategory(movies){
    let movieHTML = `
        <button class="close-popup">
            ✕
        </button>

    `;
    movies.forEach(movie => {
        movieHTML += `
            <div class="movie" data-id="${movie.id}">
                <img src="${movie.image}" alt="${movie.title}">
                <h4>${movie.title}</h4>
            </div>
        `
    })
    filterCate.innerHTML = movieHTML;
    const closeBtn = filterCate.querySelector(".close-popup");
    closeBtn.addEventListener("click", () => {
        filterCate.classList.remove("show");
    });
}

function filterCategoryFilm(movieArray, genre){
    const listMovieCate = movieArray.filter(movie => movie.genre === genre);
    return listMovieCate;
}

const categoryElement = document.querySelectorAll(" .attention");
categoryElement.forEach(movieCate => {
    movieCate.addEventListener("click",()=>{
        let genElement = movieCate.dataset.genre;
        renderFilterCategory(filterCategoryFilm(movieAll,genElement));
        filterCate.classList.add("show");
    })
})
/*<----------- End Show Filter Category---------->*/