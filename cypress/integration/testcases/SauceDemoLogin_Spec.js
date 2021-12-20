/// <reference types="Cypress" />
import 'cypress-wait-until';
import { beforeEach } from 'mocha';
import loginpage from '../pageobjects/loginpage.js';
import productspage from '../pageobjects/productspage';
import shoppingcartpage from '../pageobjects/shoppingcartpage';

describe('Verifying Sauce Demo Login Tests', function () {

  beforeEach(() => {
    cy.visit(Cypress.env('baseurl'))
  })


  it('Verify Login to Application', () => {
    const page = new loginpage();
    cy.fixture('data.json').then((user) => {
      page.getUser().type(user.username)
    page.getPassword().type(user.password)
    })
    page.getSubmit().click()
    cy.url().should('have.string', '/inventory')
  })

  it('Verify Login to Application invalid Credentials', () => {
    const page = new loginpage();
    cy.fixture('data.json').then((user) => {
      page.getUser().type(user.username)
      page.getPassword().type(user.invalidpassword)
    })
    page.getSubmit().click()
    page.getErrorMessage().should('contain.text','Username and password do not match any user in this service')
  })

  
  it('Verify Login to Application with Locked Account', () => {
    const page = new loginpage();
    cy.fixture('data.json').then((user) => {
      page.getUser().type(user.lockedusername)
      page.getPassword().type(user.password)
    })
    page.getSubmit().click()
    page.getErrorMessage().should('contain.text','Sorry, this user has been locked out')
  })


  it('Verify Logout  of  Application', () => {
    const page = new loginpage();
    cy.fixture('data.json').then((user) => {
      page.getUser().type(user.username)
    page.getPassword().type(user.password)
    })
    page.getSubmit().click()
    cy.url().should('have.string', '/inventory')
    const products = new productspage();
    products.getMenu().should('be.visible')
    products.getMenu().click()
    cy.get('#logout_sidebar_link').should('be.visible')
    cy.get('#logout_sidebar_link').click()
    page.getUser().should('be.visible')
    page.getPassword().should('be.visible')
    page.getSubmit().should('be.visible')
  })

  afterEach(() => {
    cy.wait(5000)
    cy.screenshot()
  })
})
