import React, { useState } from 'react'

function Employee() {

    //    const[name, setName] = useState("Kumar");
    //    const[salary, setSalary] = useState("20000");
    //    const[empId, setEmpId] = useState("10110");
    //    const[city, setCity] = useState("Chennai");
    
        
     const [employee, setEmployee] = useState(
        {
            name: "kumar",
            salary: "16000",
            empId: 10110,
            city: "chennai",
        }
    )

     function updateName() {
        setEmployee((previousState) => {
           return { ...previousState, name: "siva" }
        })
     }

     console.log('current satate', employee)

  return (
    <>
      <h1>Employee1</h1>
      <p>Employee Name: {employee.name}</p>
      <p>Employee salary: {employee.salary}</p>
      <p>Employee id: {employee.empId}</p>
      <p>Employee city: {employee.city}</p>
      <button onClick={updateName} >Change name</button>
    </>
  )
}

export default Employee