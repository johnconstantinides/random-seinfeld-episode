import React, { useEffect, useState } from "react";
import axios from "axios";

function RandomEpisode() {

    const [data, setData] = useState("")

    const getEpisodeData = () => {
        axios.get("http://localhost:5000")
         .then(response => {
           setData(response.data)
         })
      
    }
    useEffect(() => {
        getEpisodeData();
    },[])

    return(
        <div>
        <h1>Random Seinfeld Episode</h1>
        <h2>{data.title}</h2>
        <figure>
            <img src ={data.episode_cover}></img>
            <figcaption> Season {data.season} Episode {data.episode}</figcaption>
        </figure>
        <div>
            <h3>Description</h3>
            <p>{data.description}</p>
        </div>
        <button onClick={getEpisodeData}>Get Another Episode</button>
        
        </div>
    )
}

export default RandomEpisode;