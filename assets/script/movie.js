fetch("assets/script/movie.json")
    .then(response => response.json())
    .then(data => {
        // le tableau
        console.log(data["results"])


        let i = 0
        while (i <= 19) {

            // ici le code HTML a boucler
            /////////////////////////////
            // exemple pour afficher release date : console.log(data["results"][i].release_date)   

            document.querySelector('.imgEtInfoFilm').innerHTML += `
            
            <div id="imgFilm">
            <img src="https://image.tmdb.org/t/p/original/${data["results"][i].poster_path}" alt="${data["results"][i].title}" />
         </div>

         <div id="infoFilm">

            <h1 id="titreFilm">
                ${data["results"][i].title}
            </h1>

            <span id="dateGenreEtDuree">

                <p id="date"> ${data["results"][i].release_date} </p>
                <p id="genre"> ${data["results"][i].genre_ids} </p>

            </span>

            <h2 id="note">
                ${data["results"][i].vote_average}
            </h2>

            <div class="bandeAnnonceIcons ">

                <button class="icon">
                    <i class="bi bi-list-ul"></i>
                </button>

                <button class="icon">
                    <i class="bi bi-suit-heart-fill"></i>
                </button>

                <button class="icon">
                    <i class="bi bi-bookmark-fill"></i>
                </button>

                <button class="icon">
                    <i class="bi bi-star-fill"></i>
                </button>
                <div class="btnBandeAnnonce">
                    <button class="icon">
                        <i id="btnPlay" class="bi bi-play-fill"> </i>
                        Bande-annonce
                    </button>
                </div>

            </div>

            <span id="synopsis">
                ${data["results"][i].overview}
            </span>

         </div>




            `

            
            //////////////////////////////////
            // ici le code HTML a boucler
            i++
        }
    })