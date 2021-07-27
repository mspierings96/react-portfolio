import Project from "./Project";

const projects = [
  {
    img: "https://via.placeholder.com/150",
    name: "Craft-Reviews",
    deployed: "https://review-crafts.herokuapp.com/",
    repository: "https://github.com/mspierings96/Craft-Reviews",
  },
  {
    img: "https://via.placeholder.com/150",
    name: "Songs & Spirits",
    deployed: "https://adamlsn.github.io/songsAndSpirits/",
    repository: "https://github.com/adamlsn/songsAndSpirits",
  },
  {
    img: "https://via.placeholder.com/150",
    name: "Budget Tracker",
  },
  {
    img: "https://via.placeholder.com/150",
    name: "Coding Quiz",
  },
  {
    img: "https://via.placeholder.com/150",
    name: "Weather Dashboard",
  },
  {
    img: "https://via.placeholder.com/150",
    name: "Note Taker",
  },
];

function Portfolio(props) {
  return (
    <div>
      {projects.map((project) => (
        <Project
          img={project.img}
          name={project.name}
          deployed={project.deployed}
          repository={project.repository}
        />
      ))}
    </div>
  );
}

export default Portfolio;
