/// <reference types="cypress"/>
import {Given, Then} from 'cypress-cucumber-preprocessor/steps';
import {CypressTools} from '@spmka/shared-e2e/util-tools';
import {AbstractSteps} from './abstract-steps';

/**
 * Common steps for buttons.
 *
 * We use Given for Given and When and And, as preconditions.
 * We use Then for results.
 */
export class ButtonSteps extends AbstractSteps {
  /**
   * All step definitions Given, Then etc. go insize defineSteps().
   * defineSteps() is called from the constructor.
   */
  protected defineSteps() {
    /** We check if the button with the given name is visible */
    Given(/^The button "(.*)" is visible$/, (buttonName) => {
      CypressTools.getByName(buttonName).should('be.visible');
    });

    /** We check if the button with the given name is disabled */
    Given(/^The button "(.*)" is disabled$/, (buttonName) => {
      CypressTools.getByName(buttonName).should('be.disabled');
    });

    /** We check if the button with the given name is visible and disabled*/
    Given(/^The button "(.*)" is visible and disabled$/, (buttonName) => {
      CypressTools.getByName(buttonName).should('be.visible').should('be.disabled');
    });

    /** We click the button with the given name */
    Given(/^The button "(.*)" is clicked$/, (buttonName) => {
      CypressTools.getByName(buttonName).click();
    });

    /** We check if the button with the given name is enabled */
    Then(/^The button "(.*)" is enabled$/, (buttonName) => {
      CypressTools.getByName(buttonName).should('be.enabled');
    });

    /** We check if the button with the given name is visible and enabled */
    Then(/^The button "(.*)" is visible and enabled$/, (buttonName) => {
      CypressTools.getByName(buttonName).should('be.visible').should('be.enabled');
    });
  }
}
