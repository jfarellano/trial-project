import React, {useState} from 'react';
import '../styles/components/header.scss'
import { Link } from "react-router-dom";
import Menu from './header.menu'
import Item from './header.item'
import Dropdown from './header.dropdown'

function Header() {
  const [name, setName] = useState('juan')

  return (
      <nav className='header'>
          <Link to='/' className='logo nav-block'/>
          <Menu className='nav-block' name={name}>
            <Item>Account</Item>
            <Item>Settings</Item>
            <Dropdown title='Tours'>
              <Item to='/upcoming'>Upcoming</Item>
              <Item to='/pending'>Pending</Item>
              <Item to='/past'>Past</Item>
            </Dropdown>
            <Item>Host tours</Item>
          </Menu>
      </nav>
  );
}

export default Header
