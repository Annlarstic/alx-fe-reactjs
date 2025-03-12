import { render, screen, fireEvent } from "@testing-library/react";
import AddTodoForm from "../components/AddTodoForm";

test("should call onAddTodo when the form is submitted", () => {
  const onAddTodo = jest.fn();
  render(<AddTodoForm onAddTodo={onAddTodo} />);

  const inputElement = screen.getByPlaceholderText("Add a new task"); // Updated placeholder
  const addButton = screen.getByText("Add");

  fireEvent.change(inputElement, { target: { value: "New Task" } });
  fireEvent.click(addButton);

  expect(onAddTodo).toHaveBeenCalledWith("New Task");
  expect(inputElement.value).toBe(""); // Check if input clears after submission
});

