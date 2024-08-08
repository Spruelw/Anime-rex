import "../App.css";

export default function NavBar() {
  return (
    <div className="nav-bar">
      <div className="logo">
        <img src="/images/dinosaur.png" alt="" />
        <p>Anime-rex</p>
      </div>

      <div className="links">
        <a className="link" href="/">
          Home
        </a>
        <a className="link" href="/search">
          Search
        </a>
      </div>
    </div>
  );
}
