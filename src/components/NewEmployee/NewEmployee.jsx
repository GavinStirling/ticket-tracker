import React, { useState } from 'react'

const NewEmployee = (props) => {
    const [newEmployee, setNewEmployee] = useState(false);
    const {arr} = props;

    const handleClick = () => {
        if (!newEmployee) {
            setNewEmployee(!newEmployee);
            console.log(newEmployee)
        } else {
            setNewEmployee(!newEmployee);
            console.log(newEmployee)
        }
    }

  return (
    <button onClick={handleClick}>New Employee</button>
  )
}

export default NewEmployee