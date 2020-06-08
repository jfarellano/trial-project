import React, { useState } from 'react';
import Table from '../components/table'
import Header from '../components/table/header'
import HeaderItem from '../components/table/header.item'
import Row from '../components/table/row'

function getIcon(status) {
  return status === 'Yes' ? '✔ Yes' : status === 'No' ? '✗ No' : status
}

function getStatus(status) {
  return <p style={{color: status === 'Yes' ? 'green' : status === 'No' ? 'red' : ''}} className='table-row-item'>{getIcon(status)}</p>
}

function Pending() {

  // Raw data
  const [pending, setPending] = useState([
    { date: '01-02-2020', time: '11:00-13:00', city: 'Vermont', status: 'Respond'},
    { date: '01-02-2020', time: '11:00-13:00', city: 'Vermont', status: 'Respond'},
    { date: '01-02-2020', time: '11:00-13:00', city: 'Vermont', status: 'Yes'},
    { date: '01-02-2020', time: '11:00-13:00', city: 'Vermont', status: 'No'},
    { date: '01-02-2020', time: '11:00-13:00', city: 'Vermont', status: 'Respond'},
  ])

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
        { pending.map( tour => {
          return (
            <Row
              columns={[
                tour.date,
                tour.time,
                tour.city,
                getStatus(tour.status)
              ]}
              body={(
                <div>
                  <h2>This is a custom body</h2>
                  <p>Date: {tour.date}</p><br/>
                  <p>Time: {tour.time}</p><br/>
                  <p>City: {tour.city}</p><br/>
                  <p>Status: {getIcon(tour.status)}</p><br/>
                  <button>Yes it supports Buttons</button>
                </div>
              )}/>
          )
        })}
      </Table>
    </div>
  );
}

export default Pending