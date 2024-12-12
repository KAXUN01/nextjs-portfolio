describe("Portfolio Navigation", () => {
  it('should navigate to "About Me" page', () => {
    cy.visit("/"); // Visit the home page
    cy.get('a[href="#about-me"]').click(); // Click on "About Me" link
    cy.url().should("include", "/#about-me");
    cy.get("h2").should("contain", "< ABOUT ME />"); // Check if the heading is present
  });

  it('should navigate to "Projects" page', () => {
    cy.get('a[href="#projects"]').click(); // Click on "Projects" link
    cy.url().should("include", "/#projects");
    cy.get("h1").should("contain", "My Projects"); // Check if the heading is present
  });

  it('should navigate to "Skills & Education" page', () => {
    cy.get('a[href="#education"]').click(); // Click on "Skills & Education" link
    cy.url().should("include", "/#education");
    cy.get("h2").should("contain", "Skills"); // Check if the heading is present
    cy.get("h2").should("contain", "Education"); // Check if the heading is present
  });
});
