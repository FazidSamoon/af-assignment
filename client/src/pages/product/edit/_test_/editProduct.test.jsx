import React from "react";
import { render, screen } from "@testing-library/react";
import Index from '../[id]'

describe("Form works as expected", () => {
  it("submits the edit form with the given input values", () => {
    const handleSubmit = jest.fn();
    const { getByLabelText, getByText } = render(<Index />);

    const name = getByLabelText("Name");
    const description = getByLabelText("Description");
    const price = getByLabelText("Price");
    fireEvent.change(name, { target: { value: "John Doe" } });
    fireEvent.change(description, { target: { value: "Test" } });
    fireEvent.change(price, { target: { value: "100" } });

    const submitButton = getByText("SUBMIT");
    fireEvent.click(submitButton);

    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});
