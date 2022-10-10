import React from "react";
import cover from "./imgs/albumCover.svg";
import progressBar from "./imgs/progressBar.svg";
import playBar from "./imgs/playBar.svg";
import {BsPlayBtnFill, BsPauseBtnFill} from "react-icons/bs";
import {CgPlayTrackNext} from "react-icons/cg";

function Evolve(){
    return (
        <div className="EvolveAlbum">
            <header className="evolveCover">
                <h1>Evolve</h1>
            </header>

                <div className="EvolveTeam">
                    <div className="team-container">
                    <h2>Productive</h2>
                    <h2>Team</h2>
                    </div>
                 <table className="Team-table">
                        <tr>
                            <th>Team</th>
                            <th>Motion designer</th>
                            <th>Product Managers</th>
                            <th>Music</th>
                        </tr>
                        <tr>
                            <td>Imagine Dragons</td>
                            <td>Jenny Wilson</td>
                            <td>Theresa Webb</td>
                            <td>Darlene Robertson</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Cameron Williamson</td>
                            <td>Floyd Miles</td>
                            <td>Leslie Alexander</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Brooklyn Simmons</td>
                            <td>Darlene Robertson</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Marvin McKinney</td>
                        </tr>
                        <tr>
                            <th>Producer</th>
                            <th>Band members</th>
                            <th>Backend Developers</th>
                            <th>Stylist</th>
                        </tr>
                        <tr>
                            <td>Ilya Bregman</td>
                            <td>Dan Reynolds</td>
                            <td>Arlene McCoy</td>
                            <td>Arlene McCoy</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Daniel Platzman</td>
                            <td>Courtney Henry</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Ben McKee</td>
                            <td>Bessie Cooper</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Daniel Wayne</td>
                        </tr>
                 </table>
             </div>
             <main>
                <section>
                    <div className="slick">

                    </div>
                </section>
                <section className="albums">
                    <div className="Song-container">
                        <img src={ cover }></img>
                        <div className="song-name"> 
                            <h2>Thunder</h2>
                            <span>Imagine Dragons</span>
                        </div>
                        <div className="icons-container">
                          <BsPauseBtnFill className="iconsevolve"/>
                          <CgPlayTrackNext className="iconsevolve"/>
                        </div>
                        <img src={playBar}></img>
                    </div>
                    <div className="Song-container">
                        <img src={ cover }></img>
                        <div className="song-name"> 
                            <h2>Believer</h2>
                            <span>Imagine Dragons</span>
                        </div>
                        <div className="icons-container">
                         <BsPlayBtnFill className="iconsevolve"/>
                         <CgPlayTrackNext className="iconsevolve"/>
                        </div>
                        <img src={progressBar}></img>
                    </div>
                    <div className="Song-container">
                        <img src={ cover }></img>
                        <div className="song-name"> 
                            <h2>Next To Me</h2>
                            <span>Imagine Dragons</span>
                        </div>
                        <div className="icons-container">
                         <BsPlayBtnFill className="iconsevolve"/>
                         <CgPlayTrackNext className="iconsevolve"/>
                        </div>
                        <img src={progressBar}></img>
                    </div>
                    <div className="Song-container">
                        <img src={ cover }></img>
                        <div className="song-name"> 
                            <h2>I Don't Know</h2>
                            <span>Imagine Dragons</span>
                        </div>
                        <div className="icons-container">
                         <BsPlayBtnFill className="iconsevolve"/>
                         <CgPlayTrackNext className="iconsevolve"/>
                        </div>
                        <img src={progressBar}></img>
                    </div>
                    <div className="Song-container">
                        <img src={ cover }></img>
                        <div className="song-name"> 
                            <h2>Whatever It</h2>
                            <span>Imagine Dragons</span>
                        </div>
                        <div className="icons-container">
                         <BsPlayBtnFill className="iconsevolve"/>
                         <CgPlayTrackNext className="iconsevolve"/>
                        </div>
                        <img src={progressBar}></img>
                    </div>
                    <div className="Song-container">
                        <img src={ cover }></img>
                        <div className="song-name"> 
                            <h2>Walking the</h2>
                            <span>Imagine Dragons</span>
                        </div>
                        <div className="icons-container">
                         <BsPlayBtnFill className="iconsevolve"/>
                         <CgPlayTrackNext className="iconsevolve"/>
                        </div>
                        <img src={progressBar}></img>
                    </div>
                    <div className="Song-container">
                        <img src={ cover }></img>
                        <div className="song-name"> 
                            <h2>Rise Up</h2>
                            <span>Imagine Dragons</span>
                        </div>
                        <div className="icons-container">
                         <BsPlayBtnFill className="iconsevolve"/>
                         <CgPlayTrackNext className="iconsevolve"/>
                        </div>
                        <img src={progressBar}></img>
                    </div>
                    <div className="Song-container">
                        <img src={ cover }></img>
                        <div className="song-name"> 
                            <h2>I'll Make It</h2>
                            <span>Imagine Dragons</span>
                        </div>
                        <div className="icons-container">
                         <BsPlayBtnFill className="iconsevolve"/>
                         <CgPlayTrackNext className="iconsevolve"/>
                        </div>
                        <img src={progressBar}></img>
                    </div>
                    <div className="Song-container">
                        <img src={ cover }></img>
                        <div className="song-name"> 
                            <h2>Yesterday</h2>
                            <span>Imagine Dragons</span>
                        </div>
                        <div className="icons-container">
                         <BsPlayBtnFill className="iconsevolve"/>
                         <CgPlayTrackNext className="iconsevolve"/>
                        </div>
                        <img src={progressBar}></img>
                    </div>
                    <div className="Song-container">
                        <img src={ cover }></img>
                        <div className="song-name"> 
                            <h2>Mouth of </h2>
                            <span>Imagine Dragons</span>
                        </div>
                        <div className="icons-container">
                         <BsPlayBtnFill className="iconsevolve"/>
                         <CgPlayTrackNext className="iconsevolve"/>
                        </div>
                        <img src={progressBar}></img>
                    </div>
                    <div className="Song-container">
                        <img src={ cover }></img>
                        <div className="song-name"> 
                            <h2>Start Over</h2>
                            <span>Imagine Dragons</span>
                        </div>
                        <div className="icons-container">
                         <BsPlayBtnFill className="iconsevolve"/>
                         <CgPlayTrackNext className="iconsevolve"/>
                        </div>
                        <img src={progressBar}></img>
                    </div>
                    <div className="Song-container">
                        <img src={ cover }></img>
                        <div className="song-name"> 
                            <h2>Dancing in </h2>
                            <span>Imagine Dragons</span>
                        </div>
                        <div className="icons-container">
                         <BsPlayBtnFill className="iconsevolve"/>
                         <CgPlayTrackNext className="iconsevolve"/>
                        </div>
                        <img src={progressBar}></img>
                    </div>
                </section>
             </main>


        </div>
    )
}

export default Evolve;