import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders the todo list correctly", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
  });

  test("toggles todo completion status", () => {
    render(<TodoList />);
    const todoItem = screen.getByText("Learn React");

    // Click to toggle completion
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle("text-decoration: line-through");

    // Click again to undo completion
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle("text-decoration: none");
  });

  test("deletes a todo", () => {
    render(<TodoList />);
    const deleteButton = screen.getAllByText("Delete")[0];

    // Click delete button
    fireEvent.click(deleteButton);
    expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
  });
});
