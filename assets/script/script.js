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

            document.querySelector('.block').innerHTML += `
            <form action="movie.html">
            <div id="affiche">

                <div id="photoEtPlus">
                   
                   <img src="https://image.tmdb.org/t/p/original/${data["results"][i].poster_path}" alt="${data["results"][i].title}" />
                   <button id="btnPlus"> <i class="bi bi-three-dots"> </i></button>
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
            </form>

            `
     
            
            
            
        //     `
            //////////////////////////////////
            // ici le code HTML a boucler
            i++
        }
    })

