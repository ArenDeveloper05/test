import "./Header.css";
import Logo from "./logo/Logo";
import Nav from "./nav/Nav";

const Header = () => {
  const x = 10;
  const name = "Jack";
  const links = {
    home: "Home",
    about: "About",
    contact: "Contact",
  };

  return (
    <header>
      <Logo val={x} name={name} />
      <Nav
        // home={links.home}
        // about={links.about}
        // contact={links.contact}
        info={links}
      />
    </header>
  );
};

export default Header;
