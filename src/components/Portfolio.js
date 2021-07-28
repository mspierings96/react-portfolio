import Project from "./Project";

const projects = [
  {
    img: "/images/craftreview.jpg",
    name: "Craft-Reviews",
    deployed: "https://review-crafts.herokuapp.com/",
    repository: "https://github.com/mspierings96/Craft-Reviews",
  },
  {
    img: "/images/songs&spirits.jpg",
    name: "Songs & Spirits",
    deployed: "https://adamlsn.github.io/songsAndSpirits/",
    repository: "https://github.com/adamlsn/songsAndSpirits",
  },
  {
    img: "/images/budgettracker.jpg",
    name: "Budget Tracker",
    deployed: "https://shielded-waters-12008.herokuapp.com/",
    repository: "https://github.com/mspierings96/budgettracker2",
  },
  {
    img: "/images/workdayscheduler.jpg",
    name: "Work Day Scheduler",
    deployed: "https://mspierings96.github.io/Workday-Scheduler-/",
    repository: "https://github.com/mspierings96/Workday-Scheduler-",
  },
  {
    img: "/images/weatherdashboard.jpg",
    name: "Weather Dashboard",
    deployed: "https://mspierings96.github.io/Weather-Dashboard/",
    repository: "https://github.com/mspierings96/Weather-Dashboard",
  },
  {
    img: "/images/Passwordgenerator.jpg",
    name: "Password Generator",
    deployed: "https://mspierings96.github.io/Password-Generator/",
    repository: "https://github.com/mspierings96/Password-Generator",
  },
];

function Portfolio(props) {
  return (
    <div style={{ width: "40%", margin: "auto" }}>
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
