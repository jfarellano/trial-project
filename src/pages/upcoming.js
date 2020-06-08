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

function Upcoming() {

  // Raw data
  const [upcoming, setUpcoming] = useState([
    { date: '01-02-2020', time: '11:00-13:00', traveler: 'John Doe', city: 'Vermont', status: 'Respond'},
    { date: '01-02-2020', time: '11:00-13:00', traveler: 'John Doe', city: 'Vermont', status: 'Respond'},
    { date: '01-02-2020', time: '11:00-13:00', traveler: 'John Doe', city: 'Vermont', status: 'Yes'},
    { date: '01-02-2020', time: '11:00-13:00', traveler: 'John Doe', city: 'Vermont', status: 'No'},
    { date: '01-02-2020', time: '11:00-13:00', traveler: 'John Doe', city: 'Vermont', status: 'Respond'},
  ])

  return (
    <div className='Upcoming'>
      <h1>Upcoming tours</h1>
      <Table>
        <Header>
          <HeaderItem>Date</HeaderItem>
          <HeaderItem>Time</HeaderItem>
          <HeaderItem>Traveler</HeaderItem>
          <HeaderItem>City</HeaderItem>
          <HeaderItem>Status</HeaderItem>
        </Header>
        { upcoming.map( tour => {
          return (
            <Row
              columns={[
                tour.date,
                tour.time,
                tour.traveler,
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

export default Upcoming