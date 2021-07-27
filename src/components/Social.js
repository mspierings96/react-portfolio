function Social(props) {
  return (
    <div>
      <a href={props.link}>
        <img src={props.img} alt="Social Photo" />
      </a>
    </div>
  );
}

export default Social;
