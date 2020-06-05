/// <reference types="cypress"/>
import {Given, Then} from 'cypress-cucumber-preprocessor/steps';
import {AbstractSteps} from './abstract-steps';
import {CypressTools} from '@spmka/shared-e2e/util-tools';

/**
 * Common steps for inputs.
 *
 * We use Given for Given and When and And, as preconditions.
 * We use Then for results.
 */
export class InputSteps extends AbstractSteps {
  /**
   * All step definitions Given, Then etc. go insize defineSteps().
   * defineSteps() is called from the constructor.
   */
  protected defineSteps() {
    /** We check if the input field with the given name is empty */
    Given(/^The input field "(.*)" is empty$/, (inputFieldName) => {
      CypressTools.getByName(inputFieldName).should('be.empty');
    });

    /** We check if the input field with the given name is visible */
    Given(/^The input field "(.*)" is visible$/, (inputFieldName) => {
      CypressTools.getByName(inputFieldName).should('be.visible');
    });

    /** We check if the input field with the given name is visible and empty */
    Given(/^The input field "(.*)" is visible and empty$/, (inputFieldName) => {
      CypressTools.getByName(inputFieldName).should('be.empty');
    });

    /** We type the given text into the input field with the given name */
    Given(/^I type the value "(.*)" into the "(.*)" input field$/, (text, inputFieldName) => {
      CypressTools.getByName(inputFieldName).clear().type(text);
    });

    /** We type the given text into the input field with the given name and check that the value is correctly set */
    Given(
      /^I type the value "(.*)" into the "(.*)" input field then the field contains that value$/,
      (text, inputFieldName) => {
        CypressTools.getByName(inputFieldName).clear().type(text).should('have.value', text);
      }
    );

    /** We check the value of an input field */
    Given(/^The input field "(.*)" is filled with the text "(.*)"$/, (inputFieldName, text) => {
      CypressTools.getByName(inputFieldName).clear().type(text).should('have.value', text);
    });

    /** We clear the value of an input field */
    Given(/^I clear the "(.*)" input field$/, (inputFieldName) => {
      CypressTools.getByName(inputFieldName).clear().should('be.empty');
    });

    /** We check the value of an input field */
    Then(/^The input field "(.*)" should contain the text "(.*)"$/, (inputFieldName, text) => {
      CypressTools.getByName(inputFieldName).should('have.value', text);
    });

    /** We check the value of the placeholder of an input field */
    Then(/^The input field "(.*)" has the placeholder "(.*)"$/, (inputFieldName, placeholder) => {
      CypressTools.getByName(inputFieldName).should('have.attr', 'placeholder', placeholder);
    });
  }
}
