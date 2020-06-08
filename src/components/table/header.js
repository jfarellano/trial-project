import React from 'react';
import '../../styles/components/table/header.scss'


function TableHeader(props) {

  return (
    <div className='table-header'>
      {props.children}
    </div>
  );
}

export default TableHeader
