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

describe("TodoFooter with numberOfIncompleteTasks === 1", () => {
  it("should render the correct word (`task`)", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1}/>)
    const paragraphElement = screen.getByText(/1 task left/i)
    expect(paragraphElement).toBeInTheDocument()
  })

  it("should render the paragraphElement and check if is truthy", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1}/>)
    const paragraphElement = screen.getByText(/1 task left/i)
    expect(paragraphElement).toBeTruthy()
  })
  
  it("should render the paragraphElement and check if is visible on screen to the user", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1}/>)
    const paragraphElement = screen.getByText(/1 task left/i)
    expect(paragraphElement).toBeVisible()
  })
  
  it("should render the paragraphElement and check if is not falsy", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1}/>)
    const paragraphElement = screen.getByText(/1 task left/i)
    expect(paragraphElement).not.toBeFalsy()
  })
  
  it("should render the paragraphElement and check if it has text content", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1}/>)
    const paragraphElement = screen.getByTestId("taskParagraph")
    expect(paragraphElement).toHaveTextContent("1 task left")
  })
  
  it("should render the paragraphElement and check if the text content is as expected", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1}/>)
    const paragraphElement = screen.getByTestId("taskParagraph")
    expect(paragraphElement.textContent).toBe("1 task left")
  })
})

describe("TodoFooter with numberOfImcompleteTasks === 2", () => {
  it("should rentder the correct word (`tasks`)", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={2}/>)
    const paragraphElement = screen.getByText(/2 tasks left/i)
    expect(paragraphElement).toBeInTheDocument()
  })
})

// You can have multiple assertions per test
// but is is best to have 1 assertion per test