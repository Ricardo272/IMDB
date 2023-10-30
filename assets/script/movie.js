const urlParams = new URLSearchParams(window.location.search)
const movieId = urlParams.get("id")

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTdjYzc0OTU1MTQ5YmUyM2RmODM4MTNmMjAxYTRlOCIsInN1YiI6IjYyODM5OGJiZWM0NTUyMTAzMmE5NTcxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.REF4Oi-K06F7Jq8LolG5vPQtyeiGk3nBFdDyL1FLq7E'
    }
};

fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=FR-FR`, options)
    .then(response => response.json())
    .then(data => {

        document.getElementById("titreFilm").innerText = data.title
        document.getElementById("date").innerText = data.release_date
        document.getElementById("genre").innerText = data.genre_ids
        document.getElementById("note").innerText = data.vote_average
        document.getElementById("synopsis").innerText = data.overview
        document.getElementById("imageFilm").src = "https://image.tmdb.org/t/p/original/" + data.poster_path






    })
// ``