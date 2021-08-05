import './nav.css';
import { Link, useHistory } from 'react-router-dom';


function Nav() {

  let history = useHistory();
  const changeUrlBar = (e) => {
    history.push(`/`);
   }

    return (

<header className="header">

      <a onClick={changeUrlBar} className="logo">Air Feed</a>

      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" for="menu-btn"><span className="navicon"></span></label>

        <ul className="menu">
          <li><Link to="credits">Credits</Link></li>
          <li><Link to="/tools">Tools</Link></li>
        </ul>

</header>
    );
  }

  export default Nav;