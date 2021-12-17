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
      page.getPassword().type(user.password)
    })
    page.getSubmit().click()
  })


  it('Verify Login to Application', () => {
    const page = new loginpage();
    cy.url().should('have.string', '/inventory')
  })


  it('Verify Logout  of  Application', () => {
    const page = new loginpage();
    const products = new productspage();
    products.getMenu().click()
    cy.url().should('have.string', '/inventory')
    cy.get('#logout_sidebar_link').click()
    page.getUser().should('be.visible')
    page.getPassword().should('be.visible')
    page.getSubmit().should('be.visible')
  })

  it('Verify Menu List', () => {
    const page = new productspage();
    page.getMenu().click()
    cy.get('#inventory_sidebar_link').should('contain.text', 'All Items')
    cy.get('#about_sidebar_link').should('contain.text', 'About')
    cy.get('#logout_sidebar_link').should('contain.text', 'Logout')
    cy.get('#reset_sidebar_link').should('contain.text', 'Reset App State')
  })

  it('Verify Add Products to Cart', () => {
    const page = new productspage();
    page.getSauceLabsBagPack().click()
    page.getSauceLabsRemoveBagPack().should('be.visible')
    page.getShoppingCart().click()
    cy.get('.inventory_item_price').should('contain', '$29.99')
  })

  it('Verify Product Checkout Sauce Labs Bike Light', () => {
    const page = new productspage();
    const shoppingcart = new shoppingcartpage();
    page.getSauceLabsBagBikeLight().click()
    page.getSauceLabsRemoveBagBikeLight().should('be.visible')
    page.getShoppingCart().click()
    cy.get('.inventory_item_price').should('contain', '$9.99')
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
    // const shoppingcartpage = new shoppingcartpage();
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


  it('Verify Remove Product From Cart - Sauce Labs Bike Light', () => {
    const page = new productspage();
    page.getSauceLabsBagBikeLight().click()
    page.getSauceLabsRemoveBagBikeLight().should('be.visible')
    page.getShoppingCart().click()
    page.getSauceLabsRemoveBagBikeLight().click()
    cy.get('.inventory_item_name').should('not.exist')
  })

  it('Verify Remove Product From Cart - Sauce Labs Backpack', () => {
    const page = new productspage();
    page.getSauceLabsBagPack().should('be.visible')
    page.getSauceLabsBagPack().click()
    page.getShoppingCart().click()
    page.getSauceLabsRemoveBagPack().click()
    cy.get('.inventory_item_name').should('not.exist')
  })

  it('Verify Remove Product From Cart - Sauce Labs OneSie', () => {
    const page = new productspage();
    page.getSauceLabsOnesie().click()
    page.getShoppingCart().click()
    page.getSauceLabsRemoveOnesie().click()
    cy.get('.inventory_item_name').should('not.exist')
  })

  it('Verify Remove Product From Cart - Sauce Labs Fleece Jacket', () => {
    const page = new productspage();
    page.getSauceLabsFleeceJacket().click()
    page.getShoppingCart().click()
    page.getSauceLabsRemoveFleeceJacket().click()
    cy.get('.inventory_item_name').should('not.exist')
  })

  it('Verify Remove Product From Cart - Sauce Labs Bolt Tshirt', () => {
    const page = new productspage();
    page.getSauceLabsBoltTshirt().click()
    page.getShoppingCart().click()
    page.getSauceLabsRemoveBolttshirt().click()
    cy.get('.inventory_item_name').should('not.exist')
  })

  it('Verify Remove Product From Cart - Sauce Labs All Things Red Tshirt', () => {
    const page = new productspage();
    page.getSauceLabsAllThingsRedTshirt().click()
    page.getShoppingCart().click()
    page.getSauceLabsRemoveAllThinsRedTshirt().click()
    cy.get('.inventory_item_name').should('not.exist')
  })



  afterEach(() => {
    cy.wait(5000)
    cy.screenshot()
  })
})
