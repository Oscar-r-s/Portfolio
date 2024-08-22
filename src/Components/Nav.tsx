function Nav() {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <input type="checkbox" id="sidebar-active" />
        <label htmlFor="sidebar-active" className="open-sidebar-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e8eaed"
          >
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        </label>
        <label id="overlay" htmlFor="sidebar-active"></label>
        <div className="links-container">
          <label htmlFor="sidebar-active" className="close-sidebar-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e8eaed"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </label>
          <a
            className="home-link"
            target="_blank"
            href="https://github.com/Oscar-r-s"
          >
            <p>Oscar Rodriguez</p>
          </a>
          <a target="_blank" href="/inProcess">
            About
          </a>
          <a target="_blank" href="/inProcess">
            Products
          </a>
          <a target="_blank" href="/inProcess">
            Blog
          </a>
          <a target="_blank" href="/inProcess">
            Login
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
