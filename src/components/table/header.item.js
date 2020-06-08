import React from 'react';
import '../../styles/components/table/header.item.scss'


function TableHeaderItem(props) {

  return (
    <div className='table-header-item'>
      {props.children}
    </div>
  );
}

export default TableHeaderItem
