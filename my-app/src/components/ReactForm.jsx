import React, { useState } from 'react'

function ReactForm() {

    // const [name, setName] = useState("");
    // const [age, setAge] = useState("");
    // const [email, setEmail] = useState("");

    const [inputs, setInputs] = useState({email: "@gail.com", age: "22"});

  //  console.log("current state: ", name);
   
    function handleSubmit(e) {
      e.preventDefault();
      console.log("from submitted");
      console.log("current state: ", inputs);
    }

    function handleChange(e) {
 
      //      name,age, email
       const name = e.target.name;
      const  value = e.target.value;

      // (e) => { setInputs ((previousState) => {  return {...previousState, name: e.target.value }}) }
      // (e) => { setInputs ( (previousState) => { return {...previousState,  age: e.target.value }}) }
      // (e) => { setInputs ( (previousState) => { return {...previousState, email: e.target.value }}) }
    //                                                            
       setInputs((previousState) => { return {...previousState,  [name]: value }})
    
    }

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor=""> Enter Your name: <input type="text" name='name' onChange={handleChange}  /> </label>
        <br /> <br />
        <label htmlFor=""> Enter Your age: <input type="text" name='age' onChange={handleChange}   value={inputs.age} /> </label>
        <br /> <br />
        <label htmlFor=""> Enter Your email: <input type="text" name='email' onChange={handleChange} value={inputs.email} /> </label>
         <br /> <br />
        <input type="submit" value="Submit Form" />
      </form>
    </>
  )
}

export default ReactForm