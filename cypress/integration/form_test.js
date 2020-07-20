describe("testing the pizza form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/pizzapizza");
  });
  it("Tests name input", () => {
    cy.get('[type="name"]').check();
  });
});
