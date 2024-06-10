import "./About.css";
// import profile from "public/About.png";
import skills from "../Skills";
import cv from "../Documents/CV-Baljinder2.pdf";
function About() {
  return (
    <>
      <div className="content">
        <div>
          <h1>SKILLS</h1>
          {skills.map((skill) => (
            <div className="content">
              <div className="about">
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Basic example"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    className="progress-bar"
                    style={{ width: `${skill.value}%` }}
                  >
                    {skill.name}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="intro">
          <div
            className="card"
            style={{
              width: "14rem",
              maxHeight: "400px",
              overflow: "hidden",
              border: "1px solid black",
              borderRadius: "10px",
            }}
          >
            <img
              src={`${process.env.PUBLIC_URL}/Images/About.png`}
              className="card-img-top profile"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">About me</h5>
              <p className="card-text">
                <p>Name:-Baljinder Singh</p>
                <p>Qualification:-Btech(CSE)</p>
                <p>Experience:- 6 month industrial training in MERN stack</p>
              </p>
              <a href={cv} target="_blank" className="btn btn-primary">
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

//   );
// }

export default About;
