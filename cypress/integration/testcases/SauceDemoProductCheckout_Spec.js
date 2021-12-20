/// <reference types="Cypress" />
import 'cypress-wait-until';
import { beforeEach } from 'mocha';
import loginpage from '../pageobjects/loginpage.js';
import productspage from '../pageobjects/productspage';
import shoppingcartpage from '../pageobjects/shoppingcartpage';

describe('Verifying Sauce Demo Product Checkout Tests', function () {

  beforeEach(() => {
    cy.visit(Cypress.env('baseurl'))
    const page = new loginpage();
    cy.fixture('data.json').then((user) => {
      page.getUser().type(user.username)
      page.getPassword().type(user.password)
    })
    page.getSubmit().click()
  })

  it('Verify Product Checkout Sauce Labs Bike Light', () => {
    const page = new productspage();
    const shoppingcart = new shoppingcartpage();
    page.getSauceLabsBagBikeLight().click()
    page.getSauceLabsRemoveBagBikeLight().should('be.visible')
    page.getShoppingCart().click()
    page.getProductPrice().should('contain', '$9.99')
    shoppingcart.getCheckout().click()
    shoppingcart.getFirstName().type('sam')
    shoppingcart.getLastName().type('test')
    shoppingcart.getPostalCode().type('600126')
    shoppingcart.getContinue().click()
    cy.get('.summary_total_label').should('contain', '$10.79')
    cy.get('.summary_info > :nth-child(2)').should('contain.text', 'SauceCard #31337')
    cy.get('.summary_info > :nth-child(4)').should('contain.text', 'FREE PONY EXPRESS DELIVERY!')
    shoppingcart.getFinish().click()
    cy.get('.complete-text').contains('Your order has been dispatched, and will arrive just as fast as the pony can get there!')
  })

  it('Verify Product Checkout Sauce Labs Backpack', () => {
    const page = new productspage();
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
    cy.get('.summary_info > :nth-child(2)').should('contain.text', 'SauceCard #31337')
    cy.get('.summary_info > :nth-child(4)').should('contain.text', 'FREE PONY EXPRESS DELIVERY!')
    shoppingcart.getFinish().click()
    cy.get('.complete-text').contains('Your order has been dispatched, and will arrive just as fast as the pony can get there!')
  })


  it('Verify Product Checkout Sauce Labs Bolt T-Shirt', () => {
    const page = new productspage();
    const shoppingcart = new shoppingcartpage();
    page.getSauceLabsBoltTshirt().click()
    page.getSauceLabsRemoveBolttshirt().should('be.visible')
    page.getShoppingCart().click()
    cy.get('.inventory_item_price').should('contain', '$15.99')
    shoppingcart.getCheckout().click()
    shoppingcart.getFirstName().type('sam')
    shoppingcart.getLastName().type('test')
    shoppingcart.getPostalCode().type('600126')
    shoppingcart.getContinue().click()
    cy.get('.summary_total_label').should('contain', '$17.27')
    cy.get('.summary_info > :nth-child(2)').should('contain.text', 'SauceCard #31337')
    cy.get('.summary_info > :nth-child(4)').should('contain.text', 'FREE PONY EXPRESS DELIVERY!')
    shoppingcart.getFinish().click()
    cy.get('.complete-text').contains('Your order has been dispatched, and will arrive just as fast as the pony can get there!')
  })


  it('Verify Product Checkout Sauce Labs Fleece Jacket', () => {
    const page = new productspage();
    const shoppingcart = new shoppingcartpage();
    page.getSauceLabsFleeceJacket().click()
    page.getSauceLabsRemoveFleeceJacket().should('be.visible')
    page.getShoppingCart().click()
    cy.get('.inventory_item_price').should('contain', '$49.99')
    shoppingcart.getCheckout().click()
    shoppingcart.getFirstName().type('sam')
    shoppingcart.getLastName().type('test')
    shoppingcart.getPostalCode().type('600126')
    shoppingcart.getContinue().click()
    cy.get('.summary_total_label').should('contain', '$53.99')
    cy.get('.summary_info > :nth-child(2)').should('contain.text', 'SauceCard #31337')
    cy.get('.summary_info > :nth-child(4)').should('contain.text', 'FREE PONY EXPRESS DELIVERY!')
    shoppingcart.getFinish().click()
    cy.get('.complete-text').contains('Your order has been dispatched, and will arrive just as fast as the pony can get there!')
  })

  it('Verify Product Checkout Sauce Labs Onesie', () => {
    const page = new productspage();
    const shoppingcart = new shoppingcartpage();
    page.getSauceLabsOnesie().click()
    page.getSauceLabsRemoveOnesie().should('be.visible')
    page.getShoppingCart().click()
    cy.get('.inventory_item_price').should('contain', '$7.99')
    shoppingcart.getCheckout().click()
    shoppingcart.getFirstName().type('sam')
    shoppingcart.getLastName().type('test')
    shoppingcart.getPostalCode().type('600126')
    shoppingcart.getContinue().click()
    cy.get('.summary_total_label').should('contain', '$8.63')
    cy.get('.summary_info > :nth-child(2)').should('contain.text', 'SauceCard #31337')
    cy.get('.summary_info > :nth-child(4)').should('contain.text', 'FREE PONY EXPRESS DELIVERY!')
    shoppingcart.getFinish().click()
    cy.get('.complete-text').contains('Your order has been dispatched, and will arrive just as fast as the pony can get there!')
  })


  it('Verify Product Checkout Sauce Test All Things Red TShirt', () => {
    const page = new productspage();
    const shoppingcart = new shoppingcartpage();
    page.getSauceLabsAllThingsRedTshirt().click()
    page.getSauceLabsRemoveAllThinsRedTshirt().should('be.visible')
    page.getShoppingCart().click()
    cy.get('.inventory_item_price').should('contain', '$15.99')
    shoppingcart.getCheckout().click()
    shoppingcart.getFirstName().type('sam')
    shoppingcart.getLastName().type('test')
    shoppingcart.getPostalCode().type('600126')
    shoppingcart.getContinue().click()
    cy.get('.summary_total_label').should('contain', '$17.27')
    cy.get('.summary_info > :nth-child(2)').should('contain.text', 'SauceCard #31337')
    cy.get('.summary_info > :nth-child(4)').should('contain.text', 'FREE PONY EXPRESS DELIVERY!')
    shoppingcart.getFinish().click()
    cy.get('.complete-text').contains('Your order has been dispatched, and will arrive just as fast as the pony can get there!')
  })


  afterEach(() => {
    cy.wait(5000)
    cy.screenshot()
  })
})
