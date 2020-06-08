import React, {useState} from 'react';
import '../styles/components/header.item.scss'

import { Link } from "react-router-dom";

function HeaderItem(props) {
  return (
    <Link className="menu-item" to={props.to}>{props.children}</Link>
  );
}

export default HeaderItem
