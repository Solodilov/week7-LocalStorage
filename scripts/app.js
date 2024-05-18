const container = document.querySelector('.container');
const movieTitle = document.querySelector('.userInputTitle');
const moviePosterUrl = document.querySelector('.userInputPosterUrl');
const movieYear = document.querySelector('.userInputMovieYear');
const btn = document.querySelector('.button');
const movieTitleToDisplay =document.querySelector('.favoriteMovieTitle');


let titleInStorage = localStorage.getItem('title');
let imageUrlInStorage = localStorage.getItem('imageUrl');
let yearInStorage = localStorage.getItem('year');


if(titleInStorage && imageUrlInStorage) {
  movieTitleToDisplay.textContent = titleInStorage;
  container.style.backgroundImage = `linear-gradient(rgba(115, 115, 158), rgba(181, 161, 161, 0.363)),
  url('${imageUrlInStorage}')`;
}




btn.addEventListener('click', () => {
  let movieTitleInput = movieTitle.value;
  let posterUrlInput = moviePosterUrl.value;
  let movieYearInput = movieYear.value;


  localStorage.setItem('title', movieTitleInput);
  localStorage.setItem('imageUrl', posterUrlInput);
  localStorage.setItem('movieYear', movieYearInput);
  movieTitleToDisplay.textContent = movieTitleInput;
  container.style.backgroundImage = `linear-gradient(rgba(115, 115, 158), rgba(181, 161, 161, 0.363)),
  url('${posterUrlInput}')`;
  movieTitle.value = '';
  moviePosterUrl.value = '';
  movieYear.value = '';
});
