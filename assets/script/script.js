const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOGEyZTA0MTVmODZkZGQ4MDI2NGViNDM3YzA0NDU5MyIsInN1YiI6IjY1NDBhZDdiNDU1N2EwMDBjNmI0NzYxMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lSe8XF_F4iGTunYZS6mtnr3oyIk5brpibSgT2g2tIWc'
    }
}


document.getElementById("rechercher").addEventListener("click", function () {


    document.querySelector(".block").innerHTML = ""


    let movieSearch = document.querySelector("#barreDeRecherche").value



    fetch(`https://api.themoviedb.org/3/search/movie?query=${movieSearch}&include_adult=true&language=fr-fr&page=1`, options)
        .then(response => response.json())
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


                        <div class="dateEtVote">
                        <span id="release_date">

                            ${data["results"][i].release_date}

                        </span>
                        <p id="vote_average">

                            <h2> ${data["results"][i].vote_average} </h2>

                        </p>
                        </div>


                    </div>
            
                `
                i++
            }
        })
})


fetch('https://api.themoviedb.org/3/movie/now_playing?language=FR-FR&page=1', options)
    .then(response => response.json())
    .then(data => {
        console.log(data)

        let i = 0
        while (i <= 19) {

            document.querySelector('.latest').innerHTML += `
            
            

                <div class="enSavoirPlus">

                    <img src="https://image.tmdb.org/t/p/original/${data["results"][i].poster_path}" alt="${data["results"][i].title}" />
                    <a href="movie.html?id=${data["results"][i].id}">
                        <button id="btnPlusInfo">
                            <i class="bi bi-three-dots"></i>
                        </button>
                    </a>

                </div>

            `
            i++
        }
    })



fetch('https://api.themoviedb.org/3/movie/popular?language=FR-FR&page=1', options)
    .then(response => response.json())
    .then(data => {

        let i = 0
        while (i <= 19) {

            document.querySelector('.popularFilm').innerHTML += `
            
            <div class="enSavoirPlus">

                    <img src="https://image.tmdb.org/t/p/original/${data["results"][i].poster_path}" alt="${data["results"][i].title}" />
                    <a href="movie.html?id=${data["results"][i].id}">
                        <button id="btnPlusInfo">
                            <i class="bi bi-three-dots"></i>
                        </button>
                    </a>

                </div>
            
            `
            i++
        }
    })

fetch('https://api.themoviedb.org/3/movie/upcoming?language=FR-FR&page=1', options)
    .then(response => response.json())
    .then(data => {

        let i = 0
        while (i <= 19) {

            document.querySelector('.upComing').innerHTML += `
            
            <div class="enSavoirPlus">

                    <img src="https://image.tmdb.org/t/p/original/${data["results"][i].poster_path}" alt="${data["results"][i].title}" />
                    <a href="movie.html?id=${data["results"][i].id}">
                        <button id="btnPlusInfo">
                            <i class="bi bi-three-dots"></i>
                        </button>
                    </a>

                </div>
            
            `
            i++
        }
    })

fetch('https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1', options)
    .then(response => response.json())
    .then(data => {

        let i = 0
        while (i <= 19) {

            document.querySelector('.onTheAir').innerHTML += `
            
            <div class="enSavoirPlus">

                    <img src="https://image.tmdb.org/t/p/original/${data["results"][i].poster_path}" alt="${data["results"][i].title}" />
                    <a href="movie.html?id=${data["results"][i].id}">
                        <button id="btnPlusInfo">
                            <i class="bi bi-three-dots"></i>
                        </button>
                    </a>

                </div>
            
            `
            i++
        }
    })

fetch('https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1', options)
    .then(response => response.json())
    .then(data => {

        let i = 0
        while (i <= 19) {

            document.querySelector('.airingToday').innerHTML += `
            
            <div class="enSavoirPlus">

                    <img src="https://image.tmdb.org/t/p/original/${data["results"][i].poster_path}" alt="${data["results"][i].title}" />
                    <a href="movie.html?id=${data["results"][i].id}">
                        <button id="btnPlusInfo">
                            <i class="bi bi-three-dots"></i>
                        </button>
                    </a>

                </div>
            
            `
            i++
        }
    })

fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1', options)
    .then(response => response.json())
    .then(data => {

        let i = 0
        while (i <= 19) {

            document.querySelector('.popularSeries').innerHTML += `
            
            <div class="enSavoirPlus">

                    <img src="https://image.tmdb.org/t/p/original/${data["results"][i].poster_path}" alt="${data["results"][i].title}" />
                    <a href="movie.html?id=${data["results"][i].id}">
                        <button id="btnPlusInfo">
                            <i class="bi bi-three-dots"></i>
                        </button>
                    </a>

                </div>
            
            `
            i++
        }
    })














