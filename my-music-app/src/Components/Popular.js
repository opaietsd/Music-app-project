import React from "react";
import { Link } from "react-router-dom";
import albumCoverOne from './imgs/dragons.svg'

function Popular(){
    return(
        <div className="Popular">
            <nav>
              <h1>Popular</h1>
              <span></span>
            </nav>
            <main>
                <div className="popular-album">
                   <Link> 
                        <img src={ albumCoverOne }></img>
                        <h2>Evolve</h2>
                  </Link> 
                </div>
            </main>
        </div>
    )
}

export default Popular;