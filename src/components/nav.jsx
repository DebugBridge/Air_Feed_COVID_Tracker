import './nav.css';
import { Link, useHistory } from 'react-router-dom';

// nav bar
const Nav = () => {
//stores useHistory func to prevent error with react
  let history = useHistory();
  //changes the address bar to "/"
  const changeUrlBar = (e) => {
    history.push(`/`);
   }

    return (

<header className="header">
      {/* logo on click invokes changeUrlBar */}
      <a onClick={changeUrlBar} href="/" className="logo">Air Feed</a>

      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>

        <ul className="menu">
          <li><Link to="/credits">Credits</Link></li>
          <li><Link to="/tools">Tools</Link></li>
        </ul>

</header>
    );
  }

  export default Nav;