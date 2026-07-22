function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#">
          TechNova
        </a>

       <button
  className="navbar-toggler"
  type="button"
  data-bs-toggle="collapse"
  data-bs-target="#menu"
  aria-controls="menu"
  aria-expanded="false"
  aria-label="Toggle navigation"
>
  <span className="navbar-toggler-icon"></span>
</button>

        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Gallery
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;