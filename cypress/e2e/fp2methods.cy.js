let token = null;
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

describe('API Tests', () => {
  beforeEach('should log in and retrieve token', () => {
    cy.request({
      method: 'POST',
      url: 'https://thinking-tester-contact-list.herokuapp.com/users/login',
      body: {
        "email": "test321@fake321.com",
        "password": "password"
      }
    }).then((response) => {
      token = response.body.token;
      cy.log('Bearer Token:', token);
    });
  });

  it('should retrieve contact list', () => {
    cy.request({
      method: 'GET',
      url: 'https://thinking-tester-contact-list.herokuapp.com/contacts',
      headers: {
        Authorization: 'Bearer ' + token,
      }
    }).then((response) => {
      cy.log('API Response:', response);
    });
  });

  it('should add a contact', () => {
    cy.request({
      method: 'POST',
      url: 'https://thinking-tester-contact-list.herokuapp.com/contacts',
      headers: {
        Authorization: 'Bearer ' + token,
      },
      body:{
        "firstName": "first",
        "lastName": "last"
      }
    }).then((response) => {
      cy.log('API Response:', response);
    });
  });

  it('should retrieve individual contact', () => {
    cy.request({
      method: 'GET',
      url: 'https://thinking-tester-contact-list.herokuapp.com/contacts/65fcf3c60e404b0013989501',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
  });

  it('should fully update contact', () => {
    cy.request({
      method: 'PUT',
      url: 'https://thinking-tester-contact-list.herokuapp.com/contacts/65fcf3ca0e404b0013989502',
      headers: {
        Authorization: 'Bearer ' + token,
      },
      body: {
        "firstName": "last",
        "lastName": "first",
        "birthdate": "1/1/2000",
        "email": "address@email.com",
        "phone": "5555555555",
        "street1": "1234 anystreet rd",
        "street2": "5678 anystreet rd",
        "city": "anytown",
        "stateProvince": "anystate",
        "postalCode": "12345",
        "country": "anywhere"
      },
    }).then((response) => {
      cy.log('API Response:', response);
    });
  });

  it('should partially update a contact', () => {
    cy.request({
      method: 'PATCH',
      url: 'https://thinking-tester-contact-list.herokuapp.com/contacts/65fcf3cbdba27800134776da',
      body: {
        "firstName": "last",
        "lastName": "first"
      }
    }).then((response) => {
      cy.log('API Response:', response);
    });
  });

  it('should delete contact', () => {
    cy.request({
      method: 'DELETE',
      url: 'https://thinking-tester-contact-list.herokuapp.com/contacts/65fcf3cbdba27800134776da',
      headers: {
        Authorization: 'Bearer ' + token,
      }
    }).then((response) => {
      cy.log('API Response:', response);
    });
  });

  it('should update user', () => {
    cy.request({
      method: 'PATCH',
      url: 'https://thinking-tester-contact-list.herokuapp.com/users/me',
      body: {
        "firstName": "user",
        "lastName": "test"
      },
      headers: {
        Authorization: 'Bearer ' + token,
      }
    }).then((response) => {
      cy.log('API Response:', response);
    });
  });

  it('should log out', () => {
    cy.request({
      method: 'POST',
      url: 'https://thinking-tester-contact-list.herokuapp.com/users/logout',
      headers: {
        Authorization: 'Bearer ' + token,
      }
    }).then((response) => {
      cy.log('API Response:', response);
    });
  });

  it('should delete account', () => {
    cy.request({
      method: 'DELETE',
      url: 'https://thinking-tester-contact-list.herokuapp.com/users/me',
      headers: {
        Authorization: 'Bearer ' + token,
      }
    }).then((response) => {
      cy.log('API Response:', response);
    });
  })
})