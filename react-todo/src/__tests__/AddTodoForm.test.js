import { render, screen, fireEvent } from "@testing-library/react";
import AddTodoForm from "../components/AddTodoForm";

describe("AddTodoForm Component", () => {
  test("should call onAddTodo when the form is submitted", () => {
    const mockOnAddTodo = jest.fn(); 
    render(<AddTodoForm onAddTodo={mockOnAddTodo} />);

   

    const inputElement = screen.getByPlaceholderText("Add a new todo...");
    const addButton = screen.getByText("Add");


    
    fireEvent.change(inputElement, { target: { value: "New Todo" } });
    fireEvent.click(addButton);


    
    expect(mockOnAddTodo).toHaveBeenCalledWith("New Todo");
    expect(mockOnAddTodo).toHaveBeenCalledTimes(1);
  });

  test("should not call onAddTodo if input is empty", () => {
    const mockOnAddTodo = jest.fn();
    render(<AddTodoForm onAddTodo={mockOnAddTodo} />);

    const addButton = screen.getByText("Add");
    fireEvent.click(addButton);

    expect(mockOnAddTodo).not.toHaveBeenCalled();
  });
});
