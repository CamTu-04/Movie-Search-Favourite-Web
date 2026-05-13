/*<---------Render Featured Movie--------->*/
const featuredFilmContainer = document.querySelector(".featured-film");
let indexCurrentFeatured = 0;

function renderFeatureMovie(movie){
    let moviehtml="";
    movieHTML = `
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

function slideAuto() {
    renderFeatureMovie(movies[indexCurrentFeatured]);
    indexCurrentFeatured = (indexCurrentFeatured + 1) % movies.length;

    const featuredImage = document.querySelector(".featured-image");
    const featuredInfo = document.querySelector(".featured-info");

    setTimeout(()=> {
        featuredImage.classList.add("show");
        featuredInfo.classList.add("show");
    },200);
}
slideAuto();
setInterval(slideAuto, 5000);
/*<---------End of Render Featured Movie--------->*/



/*<---------List Movie Popular Countries--------->*/
function createMovieListHTML(movieArray, idContainer) {
    const idListMovie = document.querySelector(idContainer);
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
    })
    idListMovie.innerHTML = movieHTML;
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
const resultSearch = document.querySelector(".list-result-search");

function renderSearchFilm(listFilmResult){
    if(listFilmResult.length === 0){
        resultSearch.innerHTML = `
            <p class="no-result">
                Không tìm thấy phim
            </p>
        `;
        
    }
    let movieHTML = "";
    listFilmResult.forEach(movie => {
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
    })
    resultSearch.innerHTML = movieHTML;
}

function filterResult(searchFilm){
    return movieAll.filter(movie => 
        movie.title.toLowerCase().includes(searchFilm) || movie.englishTitle.toLowerCase().includes(searchFilm)
    )
}

inputSearch.addEventListener("input", e => {
    let searchItem = e.target.value.toLowerCase().trim();
    if(searchItem === "") {
        resultSearch.classList.remove("show");
        return;
    }
    renderSearchFilm(filterResult(searchItem));
    resultSearch.classList.add("show");
})

/*<----------End of Search Film---------->*/



/*<----------Create Category------------->*/
const listCate = document.querySelector("#list-category");
let listCatoryFilm = [];

function renderCategoryFilm(categoryArr){
    let movieHTML = "";
    categoryArr.forEach(cateUnique => {
        movieHTML += `
            <div class="attention" data-genre="${cateUnique}">${cateUnique}</div>
        `;
    })
    listCate.innerHTML = movieHTML;
}

function filterCategoryUnique(movieArray){
    movieArray.forEach(movie => {
        let isExist = false;
        for(let genre of listCatoryFilm){
            if(movie.genre === genre){
                isExist = true;
            }
        }
        if(!isExist){
            listCatoryFilm.push(movie.genre);
        }
        
    })
    return listCatoryFilm;
}

renderCategoryFilm(filterCategoryUnique(movieAll));

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