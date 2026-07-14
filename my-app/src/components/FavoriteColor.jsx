import React, { useState } from 'react'
// useState built in function - otherwise called as hooks

function FavoriteColor() {
    // let color = 'black';

        const [color, setColour] =  useState('black');

  return (
    <>
      <div>FavoriteColor</div>
      <h1>My favorite color is {color}</h1>
       <button onClick={() => { setColour('Red') }} >Change color</button>
    </>
  )
}

export default FavoriteColor