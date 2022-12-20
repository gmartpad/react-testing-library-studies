import { render, screen } from '@testing-library/react';
import Header from '../Header'

// GET BY

it('GET BY - checks if Header is passing the title prop correctly', () => {
  render(<Header title="My Header"/>)
  const headingElement = screen.getByText(/My Header/i)
  expect(headingElement).toBeInTheDocument()
});

// it('checks if we can get Header by its role', () => {
//   render(<Header title="My Header"/>);
//   const headingElement = screen.getByRole("heading")
//   expect(headingElement).toBeInTheDocument();
// });

// it('GET BY - checks if we can get Header by its role', () => {
//   render(<Header title="My Header"/>)
//   const headingElement = screen.getByRole("heading", { name: "My Header" })
//   expect(headingElement).toBeInTheDocument()
// });

// it('GET BY - checks if we can get Header by its title', () => {
//   render(<Header title="My Header"/>)
//   const headingElement = screen.getByTitle("Header")
//   expect(headingElement).toBeInTheDocument()
// });

// it('GET BY - checks if we can get Header by its test id', () => {
//   render(<Header title="My Header"/>)
//   const headingElement = screen.getByTestId("header1")
//   expect(headingElement).toBeInTheDocument()
// })

// it('GET BY - checks if we can get amount of headings on screen', () => {
//   render(<Header title="My Header"/>)
//   const headingElements = screen.getAllByRole('heading')
//   expect(headingElements.length).toBe(2)
// })

// // FIND BY

// it('FIND BY - checks if Header is passing the title prop correctly', async () => {
//   render(<Header title="My Header"/>)
//   const headingElement = await screen.findByText(/My Header/i)
//   expect(headingElement).toBeInTheDocument()
// });

// // QUERY BY

// it('QUERY BY - checks if Header is passing the title prop correctly and the title to not be in document', () => {
//   render(<Header title="My Header"/>)
//   const headingElement = screen.queryByText(/dogs/i)
//   expect(headingElement).not.toBeInTheDocument()
// });