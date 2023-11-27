import "./Home.scss";

function Home() {
  return (
    <div className="home">
      <h2>Link Page</h2>
      <div className="home__content">
        <div className="home__link">
          <a href="/ToDOLists" className="link-text">
            To Do List
          </a>
        </div>
        <div className="home__link">
          <a href="/MusicPlayers" className="link-text home__link">
            Music Players
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
