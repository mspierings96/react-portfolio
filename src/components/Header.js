function Header({ page, setPage }) {
  return (
    <div>
      <h1>Mitchell Spierings</h1>
      <nav>
        <div>
          <btn
            onClick={() => setPage("about")}
            className={page === "about" && "active"}
          >
            About Me
          </btn>
        </div>
        <div>
          <btn
            onClick={() => setPage("portfolio")}
            className={page === "portfolio" && "active"}
          >
            Portfolio
          </btn>
        </div>
        <div>
          <btn
            onClick={() => setPage("contact")}
            className={page === "contact" && "active"}
          >
            Contact
          </btn>
        </div>
        <div>
          <btn
            onClick={() => setPage("resume")}
            className={page === "resume" && "active"}
          >
            Resume
          </btn>
        </div>
      </nav>
    </div>
  );
}

export default Header;
