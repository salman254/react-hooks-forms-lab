import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import ItemForm from "../components/ItemForm";

test("calls the onItemFormSubmit callback prop when the form is submitted", () => {
  const onItemFormSubmit = jest.fn();
  render(<ItemForm onItemFormSubmit={onItemFormSubmit} />);

  // Find the input fields by their associated labels
  const nameInput = screen.getByLabelText(/Name/);
  const categorySelect = screen.getByLabelText(/Category/);

  // Simulate user input
  fireEvent.change(nameInput, { target: { value: "Ice Cream" } });
  fireEvent.change(categorySelect, { target: { value: "Dessert" } });

  // Find the submit button and simulate form submission
  const submitButton = screen.getByText(/Add to List/);
  fireEvent.click(submitButton);

  // Check if the callback was called with the correct data
  expect(onItemFormSubmit).toHaveBeenCalledWith(
    expect.objectContaining({
      id: expect.any(String),
      name: "Ice Cream",
      category: "Dessert",
    })
  );
});

test("adds a new item to the list when the form is submitted", () => {
  const onItemFormSubmit = jest.fn();
  render(<ItemForm onItemFormSubmit={onItemFormSubmit} />);

  // Find the input fields by their associated labels
  const nameInput = screen.getByLabelText(/Name/);
  const categorySelect = screen.getByLabelText(/Category/);

  // Simulate user input
  fireEvent.change(nameInput, { target: { value: "Ice Cream" } });
  fireEvent.change(categorySelect, { target: { value: "Dessert" } });

  // Find the submit button and simulate form submission
  const submitButton = screen.getByText(/Add to List/);
  fireEvent.click(submitButton);

  // Check if the callback was called with the correct data
  expect(onItemFormSubmit).toHaveBeenCalledWith(
    expect.objectContaining({
      id: expect.any(String),
      name: "Ice Cream",
      category: "Dessert",
    })
  );
});