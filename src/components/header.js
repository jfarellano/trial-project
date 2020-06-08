import React, {useState} from 'react';
import '../styles/components/header.scss'
import Menu from './header.menu'
import Item from './header.item'
import Dropdown from './header.dropdown'

function Header() {
  const [name, setName] = useState('juan')

  return (
      <nav className='header'>
          <a className='logo nav-block'></a>
          <Menu className='nav-block' name={name}>
            <Item>Account</Item>
            <Item>Settings</Item>
            <Dropdown title='Tours'>
              <Item>Upcoming</Item>
              <Item>Pending</Item>
              <Item>Past</Item>
            </Dropdown>
            <Item>Host tours</Item>
          </Menu>
      </nav>
  );
}

export default Header
