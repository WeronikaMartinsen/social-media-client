describe("Login function failed.", () => {
  it("Fails to log in and displays an error message for invalid credentials", () => {
    cy.visit("https://weronikamartinsen.github.io/social-media-client/")
    cy.wait(1000)

    cy.get('.modal-footer button[data-auth="login"]')
      .should("be.visible")
      .click()
    cy.wait(500)
    cy.get("#loginEmail").invoke("val", "notexist@noroff.no")
    cy.get("#loginPassword").invoke("val", "notexistpassword")
    cy.get("#loginForm button").contains("Login").click()
    cy.on("window:alert", (alert) => {
      expect(alert).to.contains("Incorrect email address or password.")
    })
  })
})
