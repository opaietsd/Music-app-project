import companyLogo from './imgs/logo.svg';
import circle from'./imgs/circle.svg';

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
    </div>
  );
}

export default HomePage;
