import React, { useState } from 'react';
import Table from '../components/table'
import Header from '../components/table/header'
import HeaderItem from '../components/table/header.item'
import Row from '../components/table/row'

function getIcon(status) {
  return status === 'Yes' ? '✔ Yes' : status === 'No' ? '✗ No' : status
}

function getStatus(status) {
  return <p style={{ color: status === 'Yes' ? 'green' : status === 'No' ? 'red' : '' }} className='table-row-item'>{getIcon(status)}</p>
}

function Tours() {

  // https://5f85a274c29abd0016190e1b.mockapi.io/past
  const [tours, setTours] = useState([])

  return (
    <div className='pending'>
      <h1>Pending tours</h1>
      <Table>
        <Header>
          <HeaderItem>Date</HeaderItem>
          <HeaderItem>Time</HeaderItem>
          <HeaderItem>City</HeaderItem>
          <HeaderItem>Status</HeaderItem>
        </Header>
        <Row
          columns={[
            '01-02-2020',
            '11:00-13:00',
            'Vermont',
            getStatus('Yes')
          ]}
          body={(
            <div>
              // https://wireframe.cc/17rcBa
              <h1>This is a body</h1> 
            </div>
          )} />
        <Row
          columns={[
            '01-02-2020',
            '11:00-13:00',
            'Vermont',
            getStatus('No')
          ]}
          body={(
            <div>
              <h1>This is a body</h1> 
            </div>
          )} />
      </Table>
    </div>
  );
}

export default Tours