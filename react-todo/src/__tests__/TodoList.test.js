import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

test("renders the todo list correctly", () => {
  render(<TodoList />);

  expect(screen.getByText("Learn React")).toBeInTheDocument();
  expect(screen.getByText("Build a project")).toBeInTheDocument(); // Updated text
});

test("deletes a todo", () => {
  render(<TodoList />);

  const deleteButton = screen.getAllByText("Delete")[0]; // Get first delete button
  fireEvent.click(deleteButton);

  expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
});
