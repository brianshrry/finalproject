describe("creating user account", () => {
    it('should create a new account', () => {
        cy.request({
          method: 'POST',
          url: 'https://thinking-tester-contact-list.herokuapp.com/users',
          body: {
            "firstName": "test",
            "lastName": "user",
            "email": "test321@fake321.com",
            "password": "password"
        }
    })
  })
})
