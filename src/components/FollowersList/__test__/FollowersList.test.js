const { render, screen } = require("@testing-library/react")
const { MemoryRouter } = require("react-router-dom")
const { default: FollowersList } = require("../FollowersList")

const MockFollowersList = () => {
  return(
    <MemoryRouter>
      <FollowersList/>
    </MemoryRouter>
  )
}

describe("FollowersList", () => {
  it('should render follower item', async () => {
    render(<MockFollowersList/>)
    const followerDivElement = await screen.findByTestId("follower-item-0")
    expect(followerDivElement).toBeInTheDocument()
  })
  it('should render multiple followers items', async () => {
    render(<MockFollowersList/>)
    const followerDivElements = await screen.findAllByTestId(/follower-item/i)
    expect(followerDivElements.length).toBe(5)
  })
})