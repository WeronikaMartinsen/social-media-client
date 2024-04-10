import { logout } from "./logout.js"
import { remove } from "../../storage/index.js"

jest.mock("../../storage/index.js", () => ({
  remove: jest.fn(),
}))

describe("logout function", () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it("removes token and profile from local storage", () => {
    logout()

    expect(remove).toHaveBeenCalledWith("token")
    expect(remove).toHaveBeenCalledWith("profile")
    expect(remove).toHaveBeenCalledTimes(2)
  })
})
