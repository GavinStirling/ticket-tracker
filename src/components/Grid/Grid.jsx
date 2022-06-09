import React from "react";
import EmployeeTile from "../EmployeeTile/EmployeeTile";
import AddEmployee from "../AddEmployee/AddEmployee";


import "./Grid.scss";

const Grid = (props) => {
    const { className, arr, addEmployee } = props;

    const employeeJSX = arr.map((employee) => {
        const { id, name, role } = employee;
        return <EmployeeTile key={id} name={name} role={role} tickets={employee.tickets ? employee.tickets : 0} />;
    });

    return (
        <div className="grid">
            <AddEmployee employees={arr} addEmployee={addEmployee} />
            <div className={className}>{employeeJSX}</div>
        </div>
    );
};

export default Grid;
