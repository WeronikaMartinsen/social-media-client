describe("Logout function", () => {
  it("Logs in the user and log out.", () => {
    cy.visit("https://weronikamartinsen.github.io/social-media-client/")
    cy.wait(1000)

    cy.get('.modal-footer button[data-auth="login"]')
      .should("be.visible")
      .click()

    cy.get("#loginEmail").invoke("val", "maryb@noroff.no")
    cy.get("#loginPassword").invoke("val", "marybnoroff")
    cy.wait(500)
    cy.get("#loginForm button").contains("Login").click()
    cy.wait(1000)
    cy.get('button[data-auth="logout"]').click()
    cy.get('.modal-footer button[data-auth="login"]').should("exist")
  })
})
