describe("testing the pizza form", () => {
  beforeEach(() => {
    cy.visit("localhost:3000");
  });
  it("Tests name input", () => {
    cy.get('[type="name"]').check();
  });
});
