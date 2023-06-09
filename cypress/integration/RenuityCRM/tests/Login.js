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

    it('C12000: should show invalid email or password error message<sanity><regression>', function () {
        loginPage.loginUser('incorrect@email.com', 'incorrect-password')
        loginPage.getLoginFailureError().should('contain.text', 'Invalid Username/Password')
    })

    it('C12001: User can successfully login and redirected to dashboard<smoke>', function () {
        loginPage.loginUser(cred.username, cred.password)
        //loginPage.clickConfirmModal()
        cy.url().should('not.include', 'Login')
        //cy.wait(5000)
        //loginPage.logoutUser()
    })


})