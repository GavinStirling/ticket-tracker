import React, { useState } from "react";

import "./EmployeeTile.scss";

const EmployeeTile = (props) => {
    const [ticketCount, setTicketCount] = useState(0);
    const {name, role } = props;

    const handleDecrease = () => {
      if (ticketCount === 0) {
        setTicketCount(0);
      }else {
        setTicketCount(ticketCount - 1)
      }
      
    }

    const handleIncrease = () => {
      setTicketCount(ticketCount + 1)
    }

    return (
        <div className="employee-tile">
            <h1 className="employee-tile__name">{name}</h1>
            <h2 className="employee-tile__role">{role}</h2>

            <div className="employee-tile_counter">
                <h3>Tickets Completed: </h3>
                <p className="employee-tile__count">{ticketCount}</p>
                <div className="employee-tile__buttons">
                    <button onClick={handleDecrease}> - </button>
                    <button onClick={handleIncrease}> + </button>
                </div>
            </div>
        </div>
    );
};

export default EmployeeTile;
