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

  beforeAll(() => {
    console.log('Running once before all tests in the FollowersList list of tests')
  })

  beforeEach(() => {
    console.log('Running before each test in the FollowersList list of tests')
  })

  it('should render follower item', async () => {
    render(<MockFollowersList/>)
    const followerDivElement = await screen.findByTestId("follower-item-0")
    expect(followerDivElement).toBeInTheDocument()
  })

  afterEach(() => {
    console.log('Running after each test in the FollowersList list of tests')
  })

  afterAll(() => {
    console.log('Running once after all tests in the FollowersList list of tests')
  })

  // it('should render multiple followers items', async () => {
  //   render(<MockFollowersList/>)
  //   const followerDivElements = await screen.findAllByTestId(/follower-item/i)
  //   expect(followerDivElements.length).toBe(5)
  // })
})