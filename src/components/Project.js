function Project(props) {
  return (
    <div>
      <img src={props.img} alt="Project photo" />
      <h2>{props.name}</h2>
      <a href={props.deployed}>Live Link</a>
      <a href={props.repository}>Repository Link</a>
    </div>
  );
}

export default Project;
