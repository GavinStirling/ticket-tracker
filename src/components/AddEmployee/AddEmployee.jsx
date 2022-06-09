import React, { useState } from "react";

import "./AddEmployees.scss";

const AddEmployee = (props) => {
    const { employees, addEmployee } = props;
    const [showAddEmployee, setShowAddEmployee] = useState(false);

    const handleClick = () => {
        if (!showAddEmployee) {
            setShowAddEmployee(true);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const user = {
            id: employees.length + 1,
            name: event.target.name.value,
            role: event.target.role.value,
            tickets: event.target.tickets.value,
        };
        const tempArr = [...employees];
        tempArr.push(user);

        addEmployee(tempArr);
        setShowAddEmployee(false);
        {console.log(employees)}
    };

    const addEmployeeButtonJSX = (
        <>
            <button className="add-employee__button" onClick={handleClick}>
                New Employee
            </button>
        </>
    );

    const inputFormJSX = (
        <>
            <form className="add-employee__form" onSubmit={handleSubmit}>
                <h1 className="add-employee__form-heading">New Employee</h1>
                <div>
                    <label htmlFor="input-name">Employee Name: </label>
                    <input
                        className="add-employee__form-input"
                        id="input-name"
                        type="text"
                        name="name"
                    />
                </div>
                <div>
                    <label htmlFor="input-role">Employee Role: </label>
                    <input
                        className="add-employee__form-input"
                        id="input-role"
                        type="text"
                        name="role"
                    />
                </div>
                <div>
                    <label htmlFor="input-tickets">Tickets Completed: </label>
                    <input
                        className="add-employee__form-input"
                        id="input-tickets"
                        type="number"
                        name="tickets"
                    />
                </div>
                <input type="submit" className="add-employee__form-submit" />
            </form>
        </>
    );

    return (
        <div className="add-employee">
            {showAddEmployee ? inputFormJSX : addEmployeeButtonJSX}
        </div>
    );
};

export default AddEmployee;
