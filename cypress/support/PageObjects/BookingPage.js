/// <reference types="Cypress" />


class BookingPage{

    navToBookingPage(){
        cy.url().should('include', '/booking');
    }

    selectPOFerry(){
        cy.wait(500);
        cy.get('#search-results--trip-0-trip-2', {timeout:5000}).find('span').contains('Select').click();
    }

    selectDFDSFerry(){
        cy.wait(500);
        cy.get('#search-results--trip-0-trip-1', {timeout:5000}).find('span').contains('Select').click();
    }
}

module.exports = {BookingPage}