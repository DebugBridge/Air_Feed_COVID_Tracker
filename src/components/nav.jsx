import './nav.css';

function Nav() {
    return (

<header className="header">

      <a href="" className="logo">Air Feed</a>

      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" for="menu-btn"><span className="navicon"></span></label>

        <ul className="menu">
          <li><a href="#authors">Authors</a></li>
          <li><a href="#credits">Credits</a></li>
        </ul>

</header>
    );
  }
  
  export default Nav;