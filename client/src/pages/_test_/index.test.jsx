import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "..";

describe("Home page works as expected", () => {
  it("renders the home page", () => {
    // const { getByText } = render(<Home />);

    // const home = getByText("Home");
    // expect(home).toBeInTheDocument();
    const component = render(<Home />);
    expect(component.toJson()).toMatchSnapshot()
  });
});
