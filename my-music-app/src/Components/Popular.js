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
                <div className="popular-album firstAlb">
                   <Link to="/evolve"> 
                        <h2>Evolve</h2>
                  </Link> 
                </div>
                <div className="popular-album secondAlb">
                   <Link> 
                        <h2>Cybergirl</h2>
                  </Link> 
                </div>
                <div className="popular-album thirdAlb">
                   <Link> 
                        <h2>When we all</h2>
                  </Link> 
                </div>
                <div className="popular-album fourthAlb">
                   <Link> 
                        <h2>Lover</h2>
                  </Link> 
                </div>
                <div className="popular-album fifthAlb">
                   <Link> 
                        <h2>Cyberpunk</h2>
                  </Link> 
                </div>
            </main>
        </div>
    )
}

export default Popular;