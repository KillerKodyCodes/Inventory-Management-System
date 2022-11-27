import React from 'react'
import MainTable from '../components/MainTable';

function Home() {

  return (
    <div className="App">
      {
        listOfInventory.map((value, key) => {
          return(
            <div className="container">
              <div className="title">perishable: { value.perishable }</div>
              <div className="body">frozen: { value.frozen }</div>
              <div className="footer">produce: { value.produce }</div>
              <div className="footer">dried: { value.dried }</div>
            </div>
          )
        })
      }
    </div>
  );
}

export default Home;