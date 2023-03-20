// Add event listener to search button
var searchButton = document.querySelector('button');
searchButton.addEventListener('click', searchMovies);

// Function to search for movies
function searchMovies(event) {
  event.preventDefault();
  var searchTerm = document.querySelector('input[type="text"]').value;
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.themoviedb.org/3/search/movie?api_key=API_KEY&query=' + searchTerm);
  xhr.onload = function() {
    if (xhr.status === 200) {
      var results = JSON.parse(xhr.responseText).results;
      displayMovies(results);
    } else {
      console.log('Request failed.  Returned status of ' + xhr.status);
    }
  };
  xhr.send();
}

// Function to display search results
function displayMovies(results) {
  var movieList = document.getElementById('movie-list');
  movieList.innerHTML = '';
  results.forEach(function(movie) {
    var movieItem = document.createElement('li');
    movieItem.innerHTML = '<img src="https://image.tmdb.org/t/p/w185/' + movie.poster_path + '"> <h2>' + movie.title + '</h2> <p>' + movie.overview + '</p>';
    movieList.appendChild(movieItem);
  });
}
