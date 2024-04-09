const openMovie = document.querySelector(".open");
const closeMovie = document.querySelector(".close");
const movieSection = document.querySelector(".movie-section");

openMovie.addEventListener("click", function () {
    movieSection.classList.remove("hidden");
});

closeMovie.addEventListener("click", function () {
    movieSection.classList.add("hidden");
});