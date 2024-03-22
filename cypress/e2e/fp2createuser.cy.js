describe("contact list app", () => {
    it("passes", () => {
        cy.visit("https://thinking-tester-contact-list.herokuapp.com/");
        cy.get('#signup').click()
        cy.get('#firstName').type("first")
        cy.get('#lastName').type("last")
        cy.get('#email').type("testemail@testaddress.com")
        cy.get('#password').type("password")
        cy.get('#submit').click()
        });
    });