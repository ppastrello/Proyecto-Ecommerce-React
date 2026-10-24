import CartWidget from "./CartWidget";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>KirazStudio</h1>
      </div>

      <ul className="navbar-links">
        <li><a href="#velas">Velas</a></li>
        <li><a href="#wax-melts">Wax Melts</a></li>
        <li><a href="#tablet-wax">Tablet Wax</a></li>
        <li><a href="#hornitos">Hornitos</a></li>
      </ul>

      <CartWidget />
    </nav>
  );
}

export default Navbar;