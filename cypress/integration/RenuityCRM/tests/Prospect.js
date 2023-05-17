/// <reference types = "Cypress" />

import ProspectPage from '../pages/ProspectPage'
const cred = require('../test-data/Login')

describe('Prospect related tests', function () {
    const prospect = new ProspectPage()

    before(function () {
        cy.visit('/')
        prospect.loginUser(cred.username,cred.password)
        cy.url().should('not.include', 'Login')
    })
    it('C8720: Prospects - Lead Entry Form - Create a new lead<regression>',function(){
        prospect.prospectLink().trigger('click')
        prospect.LeadEntryformLink().click({force:true})
        cy.url().should('include', 'LeadEntryForm')
    })

})