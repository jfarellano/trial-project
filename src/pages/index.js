import React, { useState } from 'react';

function Index() {
  const [name, setName] = useState('juan');

  return (
    <div>
      <p>Your name is {name}</p>
      <button onClick={() => setName('felipe')}>
        Change name
      </button>
    </div>
  );
}

export default Index