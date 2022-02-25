import "../../styles/Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="leftside">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.destinationmiltonkeynes.co.uk/">
          Open latest news
        </a>
      </div>
      <div className="rightside">
        <a
          target="_blank"
          rel="noreferrer"
          href="/https://www.milton-keynes.gov.uk/">
          Open milton keynes council page
        </a>
      </div>
    </div>
  );
}

export default Navbar;
