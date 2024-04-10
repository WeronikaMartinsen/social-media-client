import { remove } from "./remove.js"

global.localStorage = {
  removeItem: jest.fn((key) => {
    global.localStorage[key]
  }),
}

describe("remove", () => {
  it("remove a value from local storage", () => {
    const theKey = "A key"

    remove(theKey)

    expect(localStorage.removeItem).toHaveBeenCalledWith(theKey)
    expect(localStorage.removeItem).toHaveBeenCalledTimes(1)
  })
})
