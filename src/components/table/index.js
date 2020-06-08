import React from 'react';
import '../../styles/components/table/index.scss'


function Table(props) {

  return (
    <div className='table'>
      {props.children}
    </div>
  );
}

export default Table
