import { render, screen, fireEvent } from '@testing-library/react'
import Todo from '../Todo'
import { MemoryRouter } from 'react-router-dom';

const MockTodo = () => {
  return (
    <MemoryRouter>
      <Todo/>
    </MemoryRouter>
  )
}

const addTodos = (tasks) => {
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
  const addElement = screen.getByRole("button", { name: "Add" })
  for(let i = 0; i < tasks.length; i++){
    fireEvent.change(inputElement, { target: { value: tasks[i] } } )
    fireEvent.click(addElement)
  }
}

describe("Todo", () => {
  it('should write todo to input, add it and it should appear in the list', () => {
    render(<MockTodo/>)

    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
    
    addTodos(["Go Grocery Shopping"])

    // expect input to be empty
    expect(inputElement.value).toBe("")

    // get list container and check if it isnt empty
    const listContainerElement = screen.getByTestId("todoListContainer")
    expect(listContainerElement).not.toBeEmptyDOMElement()

    // get list item and check if item is in list
    const listItem = screen.getByText(/Go Grocery Shopping/i)
    expect(listItem).toBeInTheDocument()
  })

  it('should write multiple todos, add them and they should appear in the list', () => {
    render(<MockTodo/>)
    
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)

    const itemsToBeAdded = ["Go Grocery Shopping", "Pet My Cat", "Take a walk"]
    
    addTodos(itemsToBeAdded)

    // expect input to be empty
    expect(inputElement.value).toBe("")

    // get list container and check if it isnt empty
    const listContainerElement = screen.getByTestId("todoListContainer")
    expect(listContainerElement).not.toBeEmptyDOMElement()

    // get list and check its length
    const listItems = listContainerElement.getElementsByClassName("todo-item")
    expect(listItems.length).toBe(itemsToBeAdded.length)
  })

  it('todo should not have completed class on initial render', () => {
    render(<MockTodo/>)
    
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)

    const itemsToBeAdded = ["Go Grocery Shopping"]
    
    addTodos(itemsToBeAdded)

    // expect input to be empty
    expect(inputElement.value).toBe("")

    // get list container and check if it isnt empty
    const listContainerElement = screen.getByTestId("todoListContainer")
    expect(listContainerElement).not.toBeEmptyDOMElement()

    // get list item and check its classes
    const listItem = screen.getByText(/Go Grocery Shopping/i)
    expect(listItem).not.toHaveClass("todo-item-active")
  })

  it('todo should have completed class on click', () => {
    render(<MockTodo/>)
    
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)

    const itemsToBeAdded = ["Go Grocery Shopping"]
    
    addTodos(itemsToBeAdded)

    // expect input to be empty
    expect(inputElement.value).toBe("")

    // get list container and check if it isnt empty
    const listContainerElement = screen.getByTestId("todoListContainer")
    expect(listContainerElement).not.toBeEmptyDOMElement()

    // get list item and check its classes
    const listItem = screen.getByText(/Go Grocery Shopping/i)
    fireEvent.click(listItem)
    expect(listItem).toHaveClass("todo-item-active")
  })
})