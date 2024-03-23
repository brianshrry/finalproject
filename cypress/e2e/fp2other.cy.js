describe("contact list app", () => {

    it("passes", () => {
        cy.visit("https://thinking-tester-contact-list.herokuapp.com/");
        cy.get('#email').type("testemail@testaddress.com")
        cy.get('#password').type("password")
        cy.get('#submit').click()
        // ^ login
        cy.get('#add-contact').click()
        cy.get('#firstName').type("first")
        cy.get('#lastName').type("last")
        cy.get('#submit').click()
        // ^ add contact
        cy.get('#add-contact').click()
        cy.get('#cancel').click()
        // ^ cancel add contact
        cy.get(':nth-child(3) > :nth-child(2)').click()
        cy.get('#delete').click()
        // ^ delete contact
        cy.get(':nth-child(4) > :nth-child(2)').click()
        cy.get('#edit-contact').click()
        cy.get('#firstName').clear().type('last')
        cy.get('#lastName').clear().type('first')
        cy.get('#submit').click()
        // ^ edit contact
        cy.get('#logout').click()
        // ^ logout
        cy.get('#signup').click()
        cy.get('#email').type("email@address")
        cy.get('#submit').click()
        cy.get('#error').contains("User validation failed: firstName: Path `firstName` is required., lastName: Path `lastName` is required., email: Email is invalid, password: Path `password` is required.")
        // ^ fail to signup
    });
})