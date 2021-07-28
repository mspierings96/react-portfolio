import pdf from "../assets/documents/Mitchell Spierings Resume.pdf";
function Resume(props) {
  return (
    <div style={{ textAlign: "center" }}>
      <embed src={pdf} width="800px" height="2100px" />
      <p style={{ fontSize: "60px" }}>
        Download my
        <a href={pdf} download>
          Click to download
        </a>
      </p>
      <h3>Front End</h3>
      <ul></ul>
      <h3>Back End</h3>
    </div>
  );
}

export default Resume;
