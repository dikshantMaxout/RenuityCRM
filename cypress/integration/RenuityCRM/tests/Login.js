/// <reference types = "Cypress" />

import LoginPage from '../pages/LoginPage'
const cred = require('../test-data/Login')

describe('Login page tests', function () {
    const loginPage = new LoginPage()

    before(function () {
        cy.clearCookies()
    })

    beforeEach(function () {
        cy.visit('/')
    })

    it('C11999: should show empty field error messages<smoke>', function () {
        loginPage.clicksubmit()
        loginPage.getLoginFailureError().should('contain.text', 'Invalid Username/Password')
    })

    it('C12000: should show invalid email or password error message<smoke><sanity><regression>', function () {
        loginPage.loginUser('incorrect@email.com', 'incorrect-password')
        loginPage.getLoginFailureError().should('contain.text', 'Invalid Username/Password')
    })

    it('C12001: user can successfully login and redirected to dashboard<regression>', function () {
        loginPage.loginUser(cred.username, cred.password)
        cy.url().should('not.include', 'Login')
        cy.wait(5000)
        loginPage.logoutUser()
    })

})