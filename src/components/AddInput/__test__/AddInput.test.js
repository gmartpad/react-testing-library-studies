import { fireEvent, render, screen } from '@testing-library/react'
import AddInput from '../AddInput'

const mockedSetTodos = jest.fn()

describe('AddInput', () => {
  it('should render input element', () => {
    render(
      <AddInput
        todos={[]}
        setTodos={mockedSetTodos}
      />
    )
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
    expect(inputElement).toBeInTheDocument()
  })

  it('should be able to type and change value of input', () => {
    render(
      <AddInput
        todos={[]}
        setTodos={mockedSetTodos}
      />
    )
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
    fireEvent.change(inputElement, { target: { value: "Go Grocery Shopping" } } )
    expect(inputElement.value).toBe("Go Grocery Shopping")
  })

  it('should have empty input value', () => {
    render(
      <AddInput
        todos={[]}
        setTodos={mockedSetTodos}
      />
    )
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
    fireEvent.change(inputElement, { target: { value: "Go Grocery Shopping" } } )
    const addElement = screen.getByRole("button")
    fireEvent.click(addElement)
    expect(inputElement.value).toBe("")
  })
})