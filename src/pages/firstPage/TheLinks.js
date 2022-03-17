import React from "react";
import "../../styles/TheLinks.css";

function TheLinks() {
  return (
    <div className="theLinks">
      <div className="leftside">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.destinationmiltonkeynes.co.uk/">
          <h3>Open latest news</h3>
        </a>
      </div>
      <div className="rightside">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.milton-keynes.gov.uk/">
          <h3>Open milton keynes council page</h3>
        </a>
      </div>
    </div>
  );
}

export default TheLinks;
