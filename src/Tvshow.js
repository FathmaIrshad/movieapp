import React,{useState,useEffect} from "react";
import './Tvshow.css';

export default function Tvshow(){
    const [tv,settv]=useState(null);

    useEffect(()=>{
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMWNjM2Y2YjY2ODZmY2NiMjllNjkxZDM4MTYxYmIyOSIsInN1YiI6IjY0ZDI1ZjdjNTQ5ZGRhMDBjNTQwYzFlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fpIRRgpQ8uh0e4aex4aLrS0XpvrU6ES_f_B1Lye9eYs'
            }
          };
          
          fetch('https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc', options)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                settv(response.results)
            })
            .catch(err => console.error(err));    

    },[])
        
    return(
        <div>
            {/* <button onChange={fetchTv}>Fetch TV Show</button> */}
            {
                tv && tv.map(tvVal=>(
                    <div id="tvContainer">                  
                        <h1>{tvVal.name}</h1>
                        <img src={"https://image.tmdb.org/t/p/w500/"+tvVal.poster_path}/>
                        <p>{tvVal.overview}</p>

                    </div>
            ))}
        </div>
    );
};