import LoginPage from "./LoginPage";

class ProspectPage extends LoginPage {

    prospectLink(){
        return cy.get('a').contains('Prospects')
    }
    
    LeadEntryformLink(){
        return cy.get("a[href*='LeadEntryForm']")
    }

}

export default ProspectPage;