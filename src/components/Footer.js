import Project from "./Project";
import Social from "./Social";

const links = [
  {
    img: "",
    link: "https://github.com/mspierings96",
  },
  {
    img: "",
    link: "https://stackoverflow.com/users/14948647/mspierings96",
  },
  {
    img: "",
    link: "https://www.linkedin.com/in/mitchell-s-153a06117/",
  },
];

function Footer({}) {
  return (
    <div>
      {links.map((link) => (
        <Social img={link.img} link={link.link} />
      ))}
    </div>
  );
}

export default Footer;
