import React, { useEffect, useState } from "react";
import axios from "axios";
import "../index.css"
import "bootstrap/dist/css/bootstrap.min.css"

function RandomEpisode() {

    const [data, setData] = useState("")

    const getEpisodeData = () => {
        axios.get(process.env.PORT + "/episodes")
         .then(response => {
           setData(response.data)
         })
      
    }
    useEffect(() => {
        getEpisodeData();
    },[])

    return(
        <div class="RandomEpisode">
            <body>
            <div class="container">
                <div class="jumbotron">
                <h1>Random Seinfeld Episode</h1>
                </div>
            </div>
            <br/>
                <div class="container" id="content">
                        <img src={data.episode_cover} class="img-fluid" id="epsiode_cover"/>
                </div>
                <br/>
                <br/>
                <div class="container">

                    <div class="row">
                        <div class="alert alert-secondary" role="alert">
                            <h4 class="alert-heading">Episode title: {data.title}</h4>
                            <h5 class="alert-heading">Season {data.season} Episode {data.episode}</h5>
                            <p>{data.description}</p>
                        </div>
                        <br/>
                    </div>
                    <button type="button" class="btn btn-primary" onClick={getEpisodeData}>Get a new Episode</button>
                </div>
                
            </body>
        </div>
    )
    //data.title
    //data.episode_cover
    //data.season
    //data.episode
    //data.description
}

export default RandomEpisode;