document.getElementById("rechercher").addEventListener("click", function () {


    document.querySelector(".block").innerHTML = ""

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTdjYzc0OTU1MTQ5YmUyM2RmODM4MTNmMjAxYTRlOCIsInN1YiI6IjYyODM5OGJiZWM0NTUyMTAzMmE5NTcxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.REF4Oi-K06F7Jq8LolG5vPQtyeiGk3nBFdDyL1FLq7E'
        }
    }
    let movieSearch = document.querySelector("#barreDeRecherche").value
    console.log(movieSearch)


    fetch(`https://api.themoviedb.org/3/search/movie?query=${movieSearch}&include_adult=true&language=en-fr&page=1`, options).then(response => response.json())
        .then(data => {


            let i = 0
            while (i <= 19) {

                // ici le code HTML a boucler
                /////////////////////////////
                // exemple pour afficher release date : console.log(data["results"][i].release_date)

                document.querySelector('.block').innerHTML += `
            
                    <div id="affiche">

                        <div id="photoEtPlus">
                   
                            <img src="https://image.tmdb.org/t/p/original/${data["results"][i].poster_path}" alt="${data["results"][i].title}" />
                            <a href="movie.html?id=${data["results"][i].id}"><button id="btnPlus" > <i class="bi bi-three-dots"> </i></button> </a>
                        </div> 


                        <p id="title">

                            <h1> ${data["results"][i].title} </h1>

                        </p>


                        <span id="release_date">

                            ${data["results"][i].release_date}

                        </span>


                        <p id="vote_average">

                            <h2> ${data["results"][i].vote_average} </h2>

                        </p>


                    </div>
            
                `
                i++
            }
        })
})




















