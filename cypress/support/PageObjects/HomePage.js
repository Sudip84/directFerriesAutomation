/// <reference types="Cypress" />



class HomePage {
    clickToSelectCookies(){
        cy.get("button[data-cky-tag='accept-button']").click();
        cy.wait(500);
    }

    getTitle() {
        return cy.title();
    }

    onHomePage() {
        this.getTitle().then(title => {
            expect(title).to.be.contains("Ferry Tickets");
        });
    }

    selectTarvelLocationFrom(location){
        cy.wait(500);
        cy.get("input[placeholder='From']", { timeout: 10000 }).should('be.visible').type(location);
        cy.wait(500);
        cy.get("ul.css-0", { timeout: 10000 }).should('be.visible').contains(location).click();
    }

    validateLocation(location){
        cy.get("input[placeholder='From']", { timeout: 10000 }).should('have.value', location);
    }

    selectTravelDestination(destination){
        cy.wait(500);
        cy.get("ul.css-0", { timeout: 10000 }).should('be.visible').contains(destination).click();
    }

    validateDestination(destination){
        cy.get("input[placeholder='To']", { timeout: 10000 }).should('have.value', destination);
    }

    clickOnSearchButton(){
        cy.wait(500);
        cy.get("button.css-1p3u68d", { timeout: 10000 }).click({force:true});
    }
}


module.exports = {HomePage};