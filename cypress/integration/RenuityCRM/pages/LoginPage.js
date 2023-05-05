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
        cy.get('li#tabLogout').click({ force: true })
    }

}

export default LoginPage;