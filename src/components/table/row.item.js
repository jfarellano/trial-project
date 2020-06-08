import React from 'react';
import '../../styles/components/table/row.item.scss'


function TableRowItem(props) {

  return (
    <div className='table-row-item'>
      {props.children}
    </div>
  );
}

export default TableRowItem
