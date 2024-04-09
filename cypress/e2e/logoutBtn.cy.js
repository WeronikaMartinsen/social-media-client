describe("Logout function", () => {
  it("Logs out the user and clears the browser storage", () => {
    cy.window().then((win) => {
      win.localStorage.setItem("token", "exampleToken")
    })

    cy.visit("/?view=profile&name=weronikaMartin")

    cy.window().its("localStorage.token").should("equal", "exampleToken")

    cy.get("button#logOut").click()

    cy.window().its("localStorage.token").should("not.exist")
  })

  it("Logs out the user and clears the browser storage with different profile name", () => {
    cy.window().then((win) => {
      win.localStorage.setItem("token", "exampleToken")
    })

    cy.visit("/?view=profile&name=weronikaMartin")

    cy.window().its("localStorage.token").should("equal", "exampleToken")

    cy.get("button#logOut").click()

    cy.window().its("localStorage.token").should("not.exist")
  })
})
