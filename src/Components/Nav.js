export default function Nav() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container">
        <a href="/" className="navbar-brand">
          Album
        </a>
        <button
          className="navbar-toggler bg-white"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/add" className="nav-link">
                Add album
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
