import Form from "./Form";
import Navbar from "./Navbar";
import "../../styles/Home.css";
import homeImage from "../../Assets/home.png";

function Home() {
  return (
    <div className="home">
      <div>
        <div className="headerContainer">
          <img src={homeImage} alt=""></img>
        </div>
        <div className="row">
          <div className="column">Image</div>
          <div className="column">
            <p>
              Milton Keynes is the largest settlement in Buckinghamshire,
              England, 50 miles north-west of London. At the 2011 Census, the
              population of its urban area was almost 230,000
            </p>
          </div>
        </div>
      </div>

      <Navbar></Navbar>
      <Form></Form>
    </div>
  );
}

export default Home;
