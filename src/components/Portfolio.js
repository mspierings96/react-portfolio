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
    deployed: "https://shielded-waters-12008.herokuapp.com/",
    repository: "https://github.com/mspierings96/budgettracker2",
  },
  {
    img: "https://via.placeholder.com/150",
    name: "Work Day Scheduler",
    deployed: "https://mspierings96.github.io/Workday-Scheduler-/",
    repository: "https://github.com/mspierings96/Workday-Scheduler-",
  },
  {
    img: "https://via.placeholder.com/150",
    name: "Weather Dashboard",
    deployed: "https://mspierings96.github.io/Weather-Dashboard/",
    repository: "https://github.com/mspierings96/Weather-Dashboard",
  },
  {
    img: "https://via.placeholder.com/150",
    name: "Password Generator",
    deployed: "https://mspierings96.github.io/Password-Generator/",
    repository: "https://github.com/mspierings96/Password-Generator",
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
