import React, { useState } from 'react';
import Table from '../components/table'
import Header from '../components/table/header'
import HeaderItem from '../components/table/header.item'
import Row from '../components/table/row'

function Past() {

  // Raw data
  const [past, setPast] = useState([
    { date: '01-02-2020', time: '11:00-13:00', traveler: 'John Doe', city: 'Vermont', rating: '5'},
    { date: '01-02-2020', time: '11:00-13:00', traveler: 'John Doe', city: 'Vermont', rating: '4'},
    { date: '01-02-2020', time: '11:00-13:00', traveler: 'John Doe', city: 'Vermont', rating: '3'},
    { date: '01-02-2020', time: '11:00-13:00', traveler: 'John Doe', city: 'Vermont', rating: '2'},
    { date: '01-02-2020', time: '11:00-13:00', traveler: 'John Doe', city: 'Vermont', rating: '1'},
  ])

  return (
    <div className='past'>
      <h1>Past tours</h1>
      <Table>
        <Header>
          <HeaderItem>Date</HeaderItem>
          <HeaderItem>Time</HeaderItem>
          <HeaderItem>Traveler</HeaderItem>
          <HeaderItem>City</HeaderItem>
          <HeaderItem>Rating</HeaderItem>
        </Header>
        { past.map( tour => {
          return (
            <Row
              columns={[
                tour.date,
                tour.time,
                tour.traveler,
                tour.city,
                tour.rating + ' ⭐'
              ]}
              body={(
                <div>
                  <h2>This is a custom body</h2>
                  <p>Date: {tour.date}</p><br/>
                  <p>Time: {tour.time}</p><br/>
                  <p>City: {tour.city}</p><br/>
                  <p>Rating: {'⭐'.repeat(parseInt(tour.rating))}</p><br/>
                  <button>Yes it supports Buttons</button>
                </div>
              )}/>
          )
        })}
      </Table>
    </div>
  );
}

export default Past