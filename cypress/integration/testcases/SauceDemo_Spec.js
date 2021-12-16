/// <reference types="Cypress" />
import 'cypress-wait-until';
import { beforeEach } from 'mocha';
import loginpage from '../pageobjects/loginpage.js';
import productspage from '../pageobjects/productspage';
import shoppingcartpage from '../pageobjects/shoppingcartpage';

describe('Verifying Sauce Demo Tests', function () {

   beforeEach(() => {
        cy.visit(Cypress.env('landingpageurl'))
       const page = new loginpage();
       cy.fixture('data.json').then((user) => {
        page.getUser().type(user.username)
       //page.getNextButton().click()
       page.getPassword().type(user.password)
       })
       page.getSubmit().click()
      })


      it('Verify Login to Application',() => {
        const page = new loginpage();
      cy.url().should('have.string','/inventory')
  
      //page.getHeader().should('have.attr','header-title','SWAGLABS')
    })

    it.only('Verify Menu List',() => {
        const page = new productspage();
        page.getMenu().click()
        //cy.get('.inventory_sidebar_link').should('contain.text','All Items')
        cy.get('#inventory_sidebar_link').should('contain.text','All Items')
        cy.get('#about_sidebar_link').should('contain.text','About')
        cy.get('#logout_sidebar_link').should('contain.text','Logout')
        cy.get('#reset_sidebar_link').should('contain.text','Reset App State')
      //page.getHeader().should('have.attr','header-title','SWAGLABS')
    })

    it('Verify Add Products to Cart',() => {
        const page = new productspage();
        page.getSauceLabsBagPack().click()
        page.getSauceLabsRemoveBagPack().should('be.visible')
        page.getShoppingCart().click()
       cy.get('.inventory_item_price').should('contain', '$29.99')
    })

    it.only('Verify Product Checkout',() => {
        const page = new productspage();
       // const shoppingcartpage = new shoppingcartpage();
        const shoppingcart = new shoppingcartpage();
        page.getSauceLabsBagPack().click()
        page.getSauceLabsRemoveBagPack().should('be.visible')
        page.getShoppingCart().click()
       cy.get('.inventory_item_price').should('contain', '$29.99')
       shoppingcart.getCheckout().click()
       shoppingcart.getFirstName().type('sam')
       shoppingcart.getLastName().type('test')
       shoppingcart.getPostalCode().type('600126')
       shoppingcart.getContinue().click()
       cy.get('.summary_total_label').should('contain', '$32.39')
       shoppingcart.getFinish().click()
       cy.get('.complete-text').contains('Your order has been dispatched, and will arrive just as fast as the pony can get there!')
    })



afterEach(() => {
    cy.wait(5000)
    cy.screenshot()
})
})
