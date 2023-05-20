import React from "react";
import { render, screen } from "@testing-library/react";
import Index from "./index";

describe("Form works as expected", () => {
  it("submits the form with the given input values", () => {
    const handleSubmit = jest.fn();
    const { getByLabelText, getByText } = render(
      <Index />
    );

    const name = getByLabelText("Name");
    const description = getByLabelText("Description");
    const price = getByLabelText("Price");
    fireEvent.change(name, { target: { value: "John Doe" } });
    fireEvent.change(description, { target: { value: "test" } });
    fireEvent.change(price, { target: { value: "100" } });

    const submitButton = getByText("SUBMIT");
    fireEvent.click(submitButton);

    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});
