class LoginPage {

    loginUser(userEmail, userPassword) {
        cy.get('#txtUserName').type(userEmail)
        cy.get('#txtPassword').type(userPassword)
        this.clicksubmit()
    }
    clicksubmit() {
        cy.get('#btnLogin').click()
    }
    
    getLoginFailureError() {
        return cy.get('#lblLoginError')
    }

    logoutUser() {
        cy.get('#userAvatar').click({ force: true })
        cy.get('a#logOutBtn').click({ force: true })
        cy.wait(2000)
        cy.url().should('include','Login')
    }

}

export default LoginPage;