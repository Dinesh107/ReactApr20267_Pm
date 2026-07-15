import React, { useState } from "react";

function ClientList() {

    //  [][client1]
  const [clientList, setClientList] = useState([]);
  const [count, setCount] = useState(1);

  function addClientName() {
    //              1
       const clientName = 'Client' + count;
       setClientList((previousState) => { return [...previousState, clientName] });

       setCount((previousState) => { return previousState + 1})
  }

  console.log('current state', clientList);

  return (
    <>
      <h1>List </h1>
      <button onClick={addClientName} >add new client name</button>
      <ul>
        {clientList.map((el, index) => (
          <li key={index}>{el}</li>
        ))}
      </ul>
    </>
  );
}

export default ClientList;
