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

        let i = 0
        while (i <= 19) {
            
            document.getElementById("filmLatest").innerText = data.poster_path
            
            
            
            i++
        }
    })

