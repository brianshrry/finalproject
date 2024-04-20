# finalproject
The formatting on this makes it easiest to read as a raw file: https://raw.githubusercontent.com/brianshrry/finalproject/main/README.md

This repository includes a test suite for the Thinking Tester Contact List App through Heroku. It's as comprehensively designed as it could be,
given my beginner's experience level.

The relevant files to this can all be found in the .github/workflows and cypress/e2e folders.
https://github.com/brianshrry/finalproject/tree/main/.github/workflows
https://github.com/brianshrry/finalproject/tree/main/cypress/e2e

Four of the API tests consistently fail:
	PUT update contact because there seems to be no correct birthday format, xx-xx-xxxx or xx/xx/xxxx.
	PATCH update contact, GET contact, and DELETE contact all fail because the contact ID numbers are all expired and replaced
	by new ID numbers, due to the account being deleted and recreated with new contacts.
	Logically, the PUT method should fail for the same reason, because the contact should have been deleted along with the account, but
	it does actually fail for that reason on Postman, just not on Cypress. I suspect it's likely due to a difference in test environment
	between the two applications.

API endpoints here include:
  POST Add Contact, GET Get contact List, GET Get Contact, PUT Update Contact, PATCH Update Contact, DELETE Delete Contact
  https://thinking-tester-contact-list.herokuapp.com/contacts
  POST Add User
  https://thinking-tester-contact-list.herokuapp.com/users
  GET Get User Profile, PATCH Update User
  https://thinking-tester-contact-list.herokuapp.com/users/me
  POST Log Out User
  https://thinking-tester-contact-list.herokuapp.com/users/logout
  POST Log In User
  https://thinking-tester-contact-list.herokuapp.com/users/login
  DELETE Delete User
  https://thinking-tester-contact-list.herokuapp.com/users/me

I originally had the method to POST add user, creating a new account, as a separate test file because trying to run the entire file with that
included would cause it to fail, so it felt volatile. I can't get new ID numbers for the contacts without running the tests in Cypress or
retrieving the contact list on Postman. Updating the test cases for single uses in this way is counter-intuitive. Either the functional UI tests
in the repository or manual testing are a much better way to test those cases than through API.

The functional UI tests are all passing. I had some difficulty briefly, because this file fp2other was flaky with clicking on the logout
button, as it would occasionaly do so, but I fixed the issue by having Cypress go directly to the logout URL. The only one of these tests not
passing is fp2createuser, because the user has been created, but unlike with the API file fp2methods, I can't delete the account because there's
no way to do so through the UI.

The only place to put an XSS injection on the target site is in the edit contact page, where the country field seems to have the longest number
of max characters, at 40. But this appears to be too small of a character limit to insert anything malicious. There's no way to do away with it
through a page refresh. The script in the test data just appears in the contact info in the contact list.
The baseline scan with ZAP fails because of an error that causes the values associated with the token to be considered invalid. I suspect the
special character @ in the email address and possibly the . are to blame for this.
