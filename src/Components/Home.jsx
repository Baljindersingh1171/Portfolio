import "./Home.css";
// import image from "../Images/MyPic.jpg";
import cv from "../Documents/CV-Baljinder2.pdf";

function Home() {
  return (
    <>
      <div className="main">
        <div className="container">
          <h1>Hii,My name is Baljinder Singh</h1>
          <h1>and I am a passionate web developer</h1>

          <button className="resumebtn">
            <a className="link" href={cv} target="_blank">
              Download My CV
            </a>
          </button>
        </div>

        <img id="mypic" src={`${process.env.PUBLIC_URL}/Images/MyPic.jpg`} />
      </div>
    </>
  );
}

export default Home;
