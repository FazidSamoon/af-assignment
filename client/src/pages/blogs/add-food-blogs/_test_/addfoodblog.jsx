import React from "react";
import { render, screen } from "@testing-library/react";
import Index from "../index";

describe("Form works as expected", () => {
  it("submits the form with the given input values", () => {
    const handleSubmit = jest.fn();
    const { getByLabelText, getByText } = render(
      <Index />
    );

    const title = getByLabelText("TITLE");
    const description = getByLabelText("Description");
    const image = getByLabelText("Image");
    const author = getByLabelText("AUTHOR");
    const tag = getByLabelText("TAGS");
    fireEvent.change(title, { target: { value: "John Doe" } });
    fireEvent.change(description, { target: { value: "test" } });
    fireEvent.change(image, { target: { value: "test" } });
    fireEvent.change(author, { target: { value: "test" } });
    fireEvent.change(tag, { target: { value: ["test"] } });
    

    const submitButton = getByText("SUBMIT");
    fireEvent.click(submitButton);

    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});
