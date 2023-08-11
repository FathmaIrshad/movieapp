import React,{useState,useEffect} from 'react';
import "./Api.css";
const Api=()=>{
    const [movies,setMovies]=useState(null);

    useEffect(()=>{
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMWNjM2Y2YjY2ODZmY2NiMjllNjkxZDM4MTYxYmIyOSIsInN1YiI6IjY0ZDI1ZjdjNTQ5ZGRhMDBjNTQwYzFlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fpIRRgpQ8uh0e4aex4aLrS0XpvrU6ES_f_B1Lye9eYs'
            }
          };
          
          fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
            .then(response => response.json())
            .then(response => {
                console.log(response.results)
                setMovies(response.results)
            })
            .catch(err => console.error(err));
    },[])
    
    return(
        <div>
            {/* <button onClick={fetchMovie}>Fetch Movie</button> */}
            {
                movies && movies.map(movieVal=>(
                    <div id="movieContainer">
                        <h1 id="movieTitle">{movieVal.original_title}</h1>
                        <img id="movieImage" src={"https://image.tmdb.org/t/p/w500/"+movieVal.poster_path}/>
                        {/* image src="the image path API searched in TMDB"+the movieVal iterator.poster_path(part of the result) */}
                        <p id="movieTitle">{movieVal.overview}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Api;