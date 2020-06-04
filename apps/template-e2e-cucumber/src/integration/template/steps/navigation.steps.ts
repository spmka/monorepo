/// <reference types="cypress"/>
import {Given} from 'cypress-cucumber-preprocessor/steps';

Given(/^I test the "(.*)" Home Page$/, (appName) => {
  cy.visit('/');
});
