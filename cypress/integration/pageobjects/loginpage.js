class loginpage {

    getUser() {
        return cy.get('input[name="user-name"]');
    }

    getNextButton() {
        return cy.get('button[name="username-submit"]');
    }

    getPassword() {
        return cy.get('input[name="password"]');
    }

    getSubmit() {
        return cy.get('input[type="submit"]');
    }

    
    
}
export default loginpage

