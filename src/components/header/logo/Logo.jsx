const Logo = (props) => {
  console.log(props);
  return (
    <div className="logo">
      <h1>Logo</h1>
      {props.val}
      {props.name}
    </div>
  );
};

export default Logo;
