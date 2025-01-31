describe("Página Inicial", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("Deve renderizar o MainBanner", () => {
    cy.get("[data-testid='main-banner']").should("be.visible")
  })

  it("Deve renderizar a HomeProductShelf", () => {
    cy.get("[data-testid='home-product-shelf']").should("be.visible")
  })

  it("Deve exibir produtos na HomeProductShelf", () => {
    cy.get("[data-testid='home-product-shelf']")
      .find("[data-testid='product-item']")
      .should("have.length.greaterThan", 0)
  })
})
