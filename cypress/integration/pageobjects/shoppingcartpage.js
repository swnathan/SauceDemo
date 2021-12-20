class shoppingcartpage {

    getCheckout() {
        return cy.get('button[name="checkout"]');
    }

    getFirstName() {
        return cy.get('input[name="firstName"]');
    }

    getLastName() {
        return cy.get('input[name="lastName"]');
    }

    getPostalCode() {
        return cy.get('input[name="postalCode"]');
    }

    getContinue() {
        return cy.get('input[name="continue"]');
    }

    getFinish() {
        return cy.get('button[name="finish"]');
    }

    getPaymentInformation() {
        return cy.get('button[name="finish"]');
    }

    getShippingInformation() {
        return cy.get('button[name="finish"]');
    }
    
    
}
export default shoppingcartpage
