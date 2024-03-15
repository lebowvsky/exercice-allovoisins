describe("template spec", () => {
  it("passes", () => {
    cy.visit("/");
    cy.get("h2").should("contain", "Ajouter un article");
    cy.get("form").within(() => {
      cy.get("input[name=name]").type("youpi");
      cy.get("input[name=price]").type("25,85");
      cy.get("input[name=tax]").type("5,5");
    });
    cy.get("button").contains("Enregistrer l'article").click();
  });
});
