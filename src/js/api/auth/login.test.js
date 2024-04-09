import { login } from "./login.js"
import { apiPath } from "../constants.js"
import { save } from "../../storage/index.js"

global.fetch = jest.fn()

jest.mock("../headers.js", () => ({
  headers: jest.fn((contentType) => {
    if (contentType === "application/json") {
      return { "Content-Type": "application/json" }
    }
    throw new Error("Invalid content type")
  }),
}))

jest.mock("../../storage/index.js", () => ({
  save: jest.fn(),
}))

describe("login function", () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it("logs in a user and saves profile when provided data is valid", async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        accessToken: "mockedAccessToken",
        user: { id: "666", name: "Example User" },
      }),
    })

    const email = "test@example.com"
    const password = "password123"

    const profile = await login(email, password)

    expect(fetch).toHaveBeenCalledWith(`${apiPath}/social/auth/login`, {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    })

    expect(save).toHaveBeenCalledWith("token", "mockedAccessToken")
    expect(save).toHaveBeenCalledWith("profile", {
      user: { id: "666", name: "Example User" },
    })

    expect(profile).toEqual({ user: { id: "666", name: "Example User" } })
  })

  it("throws an error when provided data is invalid", async () => {
    fetch.mockResolvedValueOnce({
      ok: false,
      statusText: "Unauthorized",
    })

    const email = "test@example.com"
    const password = "invalidPassword"

    await expect(login(email, password)).rejects.toThrow("Unauthorized")
  })
})
