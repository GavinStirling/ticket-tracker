import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import EmployeeTile from "./EmployeeTile";

describe("Basic tests", () => {
    it("Renders an EmployeeTile", () => {
        render(<EmployeeTile />);

        const employeeName = screen.getByRole("heading", {className: "employee-tile__name"});
    });
});
