import React from 'react'
import {usePrivy} from '@privy-io/react-auth'
import { Link } from 'react-router-dom';
const Navbar = () => {
  const {authenticated, login, logout, user, ready} = usePrivy();
  if (!ready) {
    return <div>Loading...</div>;
  }
  return (
    <nav>
      <ul> 
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>


        <li>{authenticated && <Link to="/about">About</Link>}</li>
        {authenticated ? <div>
          <li>
            <button onClick={logout}>Logout</button>
          </li>
        </div> : <div>
          <li><button onClick={login}>Login</button></li>
          </div>}


        <li><Link to="/editor">Editor</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/logout">Logout</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;