import React from "react";
import EmployeeTile from "../EmployeeTile/EmployeeTile";

import "./Grid.scss";

const Grid = (props) => {
    const { arr, className } = props;

    const employeeJSX = arr.map((employee, index) => {
        const { id, name, role } = employee;
        return <EmployeeTile key={id} name={name} role={role} />;
    });

    return (
        <div>
            <div className={className}>{employeeJSX}</div>
        </div>
    );
};

export default Grid;
