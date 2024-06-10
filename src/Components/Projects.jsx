import projects from "../Data";
import "./Projects.css";

console.log("hello");
function Projects() {
  console.log("hello");
  return (
    <div className="projects">
      {projects.map((project) => (
        <div className="projects invpro" key={project.id}>
          <div className="card" style={{ width: "18rem" }}>
            <img
              src={`${process.env.PUBLIC_URL}/Images/${project.source}`}
              className="card-img-top p1"
              alt=""
            />

            <div className="card-body">
              <h5 className="card-title">{project.title}</h5>
              <p className="card-text">{project.text}</p>
              <a
                href={project.github}
                target="_blank"
                className="btn btn-primary"
              >
                View On Github
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
