import { render, screen } from "@testing-library/react"
import { MemoryRouter } from 'react-router-dom';
import TodoFooter from "../TodoFooter"

const MockTodoFooter = ({numberOfIncompleteTasks}) => {
  return (
    <MemoryRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks}/>
    </MemoryRouter>
  )
}

it("checks if the correct word (`task`) is appearing in TodoFooter", () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1}/>)
  const paragraphElement = screen.getByText(/1 task left/i)
  expect(paragraphElement).toBeInTheDocument()
})

it("checks if the correct word (`tasks`) is appearing in TodoFooter", () => {
  render(<MockTodoFooter numberOfIncompleteTasks={2}/>)
  const paragraphElement = screen.getByText(/2 tasks left/i)
  expect(paragraphElement).toBeInTheDocument()
})

it("checks if the paragraphElement is truthy", () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1}/>)
  const paragraphElement = screen.getByText(/1 task left/i)
  expect(paragraphElement).toBeTruthy()
})

it("checks if the paragraphElement is visible on screen to the user", () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1}/>)
  const paragraphElement = screen.getByText(/1 task left/i)
  expect(paragraphElement).toBeVisible()
})

it("checks if the paragraphElement is visible on screen to the user", () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1}/>)
  const paragraphElement = screen.getByText(/1 task left/i)
  expect(paragraphElement).not.toBeFalsy()
})

it("checks if the paragraphElement has text content", () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1}/>)
  const paragraphElement = screen.getByTestId("taskParagraph")
  expect(paragraphElement).toHaveTextContent("1 task left")
})

it("checks if the paragraphElement has text content", () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1}/>)
  const paragraphElement = screen.getByTestId("taskParagraph")
  expect(paragraphElement.textContent).toBe("1 task left")
})

// You can have multiple assertions per test
// but is is best to have 1 assertion per test