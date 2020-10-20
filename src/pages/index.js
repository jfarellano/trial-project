import React, { useState } from 'react';
import { Link } from "react-router-dom";

function Index() {

  return (
    <div>
      <h1>Home menu</h1> 
      <Link className="menu-item" to="/tours">Tours</Link>
    </div>
  );
}

export default Index