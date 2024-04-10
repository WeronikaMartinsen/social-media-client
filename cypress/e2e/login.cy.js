describe("Login Form", () => {
  it("Logs in the user with valid credentials", () => {
    cy.visit("https://weronikamartinsen.github.io/social-media-client/")
    cy.wait(500)

    cy.get('.modal-footer button[data-auth="login"]')
      .should("be.visible")
      .click()

    cy.get("#loginEmail").invoke("val", "maryb@noroff.no")
    cy.get("#loginPassword").invoke("val", "marybnoroff")
    cy.wait(500)
    cy.get("#loginForm button").contains("Login").click()
    cy.wait(1000)

    cy.get("button.btn-outline-warning").contains("Logout").should("exist")
  })
})
