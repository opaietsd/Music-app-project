import '../App.css';
import companyLogo from './imgs/logo.svg';
import circle from'./imgs/circle.svg';
import artists from './imgs/artists.svg';
import { TbMicrophone2 } from 'react-icons/tb';
import { RiAlbumFill } from 'react-icons/ri';
import { IoIosArrowDropright } from 'react-icons/io';

function HomePage() {
  return (
    <div className="app">
        <header className="app-header">
          <nav className='app-nav'>
            <div className='app-nav-logo'>
              <img src={ companyLogo } ></img>
              <p>Soundify</p>
            </div>
            <ul className='app-nav-ul'>
              <li><a href=''>Discover</a></li>
              <li><a href=''>Join</a></li>
            </ul>
          </nav>
          <div className='app-header-info'>
            <h1>Feel the Music</h1>
            <p>Stream over 20,000 tracks with one click</p>
            <button>Stream Now</button>
          </div>
          <div>
            <img src={ circle } className='firstCircle'></img>
            <img src={ circle } className='secondCircle'></img>
            <img src={ circle } className='thirdCircle'></img>
          </div>
      </header>
      <main>
        <section className='section-discover'>
          <div className='section-discover-container'>
            <h2>Discover New Music</h2>
            <div>
              <div className='boxes'>
                <a href=''>
                  <TbMicrophone2 className='icon'/>
                  <h3>Charts</h3>
                </a>
              </div>
              <div className='boxes'>
                <a a href=''>
                  <RiAlbumFill className='icon' />
                  <h3>Albums</h3>
                </a>
              </div>
              <div className='boxes'>
                < a href=''>
                  <IoIosArrowDropright className='icon'/>
                  <h3>More</h3>
                </a>
              </div>
              </div>
            <p>Listen to the largest collection and the latest albums only on Soundify.</p>
          </div>
          <div className='section-discover-imgs'>
              <img src={ artists }></img>
              <img src=''></img>
              <img src=''></img>
              <img src=''></img>
          </div>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
