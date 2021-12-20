/// <reference types="Cypress" />
import 'cypress-wait-until';
import { beforeEach } from 'mocha';
import loginpage from '../pageobjects/loginpage.js';
import productspage from '../pageobjects/productspage';
import shoppingcartpage from '../pageobjects/shoppingcartpage';

describe('Verifying Sauce Demo Add/Remove Products to Cart', function () {

  beforeEach(() => {
    cy.visit(Cypress.env('baseurl'))
    const page = new loginpage();
    cy.fixture('data.json').then((user) => {
      page.getUser().type(user.username)
      page.getPassword().type(user.password)
    })
    page.getSubmit().click()
  })


  it('Verify Add/Remove Product From Cart - Sauce Labs Backpack', () => {
    const page = new productspage();
    page.getSauceLabsBagPack().should('be.visible')
    page.getSauceLabsBagPack().click()
    page.getShoppingCart().click()
    page.getProductName().should('contain', 'Sauce Labs Backpack')
    page.getProductPrice().should('contain', '$29.99')
    page.getSauceLabsRemoveBagPack().click()
    page.getProductName().should('not.exist')
  })

  it('Verify Add/Remove Product From Cart - Sauce Labs OneSie', () => {
    const page = new productspage();
    page.getSauceLabsOnesie().click()
    page.getShoppingCart().click()
    page.getProductName().should('contain', 'Sauce Labs Onesie')
    page.getProductPrice().should('contain', '$7.99')
    page.getSauceLabsRemoveOnesie().click()
    page.getProductName().should('not.exist')
  })

  it('Verify Add/Remove Product From Cart - Sauce Labs Fleece Jacket', () => {
    const page = new productspage();
    page.getSauceLabsFleeceJacket().click()
    page.getShoppingCart().click()
    page.getProductName().should('contain', 'Sauce Labs Fleece Jacket')
    page.getProductPrice().should('contain', '$49.99')
    page.getSauceLabsRemoveFleeceJacket().click()
    page.getProductName().should('not.exist')
  })

  it('Verify Add/Remove Product From Cart - Sauce Labs Bolt Tshirt', () => {
    const page = new productspage();
    page.getSauceLabsBoltTshirt().click()
    page.getShoppingCart().click()
    page.getProductName().should('contain', 'Sauce Labs Bolt T-Shirt')
    page.getProductPrice().should('contain', '$15.99')
    page.getSauceLabsRemoveBolttshirt().click()
    page.getProductName().should('not.exist')
  })

  it('Verify Add/Remove Product From Cart - Sauce Labs All Things Red Tshirt', () => {
    const page = new productspage();
    page.getSauceLabsAllThingsRedTshirt().click()
    page.getShoppingCart().click()
    page.getProductName().should('contain', 'Test.allTheThings() T-Shirt (Red)')
    page.getProductPrice().should('contain', '$15.99')
    page.getSauceLabsRemoveAllThinsRedTshirt().click()
    page.getProductName().should('not.exist')
  })



  afterEach(() => {
    cy.wait(5000)
    cy.screenshot()
  })
})
