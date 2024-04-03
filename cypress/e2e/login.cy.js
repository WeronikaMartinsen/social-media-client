describe("Login Form", () => {
  it("Logs in the user with valid credentials", () => {
    cy.visit("http://127.0.0.1:5500/")

    cy.get("#loginEmail").type("valid@example.com")
    cy.get("#loginPassword").type("password123{enter}")

    cy.get("#logOut").should("exist")
  })

  it("Displays an error message for invalid credentials", () => {
    cy.visit("http://127.0.0.1:5500/")

    cy.get("#loginEmail").type("invalid@example.com", { force: true })

    cy.get("#loginPassword").type("invalidPassword{enter}")

    cy.contains("Incorrect email address or password.").should("be.visible")

    cy.url().should("not.include", "/dashboard")
  })
})
