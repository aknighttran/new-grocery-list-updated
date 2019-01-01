import React from 'react';
import { Menu,} from 'semantic-ui-react'
import { Link } from 'react-router-dom';


const Navbar = () => (
  <Menu>
      <Link to="/">
        <Menu.Item>
          Home
        </Menu.Item>
      </Link>
      <Link to="/lists">
        <Menu.Item>
          Lists
        </Menu.Item>
      </Link>
  </Menu>
);

export default Navbar