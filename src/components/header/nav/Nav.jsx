const Nav = (props) => {
  //   console.log(props);
  return (
    <nav>
      <ul>
        <li>
          <a href="#">{props.info.home}</a>
        </li>
        <li>
          <a href="#">{props.info.contact}</a>
        </li>
        <li>
          <a href="#">{props.info.about}</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
