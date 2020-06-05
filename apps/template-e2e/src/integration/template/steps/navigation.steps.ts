/// <reference types="cypress"/>
import {Given} from 'cypress-cucumber-preprocessor/steps';
import {AbstractSteps} from '@spmka/shared-e2e/util-steps';

export class TemplateNavigationSteps extends AbstractSteps {
  protected defineSteps() {
    Given(/^I test the "(.*)" Home Page$/, (appName) => {
      cy.visit('/');
    });
  }
}

const steps = new TemplateNavigationSteps();
