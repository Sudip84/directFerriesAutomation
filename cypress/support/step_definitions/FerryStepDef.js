import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
/// <reference types="Cypress" />
import {POManager} from "../PageObjects/POManager";
const poManager = new POManager();

let homePage;
Given("as user I am on Home Page", function () {
    cy.visit(Cypress.env("baseUrl"));
    homePage = poManager.goToHomePage();
    homePage.clickToSelectCookies();
    homePage.onHomePage();
});

When('I select the travel location from {string}', function(location){
    homePage.selectTarvelLocationFrom(location);
})

Then('I should view {string} select from the dropdown', function(location){
    homePage.validateLocation(location);
})

When('I select the travel destination to {string}', function(destination){
    homePage.selectTravelDestination(destination);
})

Then('I should view destination {string} select from the dropdown', function(destination){
    homePage.validateDestination(destination);
})

When('I click on serach button', function(){
    homePage.clickOnSearchButton();
})

let bookingPage;
Then('I navigate to booking page', function(){
    bookingPage = poManager.goToBookingPage();
    bookingPage.navToBookingPage();
})

When('I select the P&O ferry', function(){
    bookingPage.selectPOFerry();
})

When('I select the DFDS Seaways ferry', function(){
    bookingPage.selectDFDSFerry();
})
