/// <reference types="cypress"/>
import {Given} from 'cypress-cucumber-preprocessor/steps';
import {TemplateInputFormIds} from '@spmka/template/feature-form';
import {LocaleSwitchFormIds} from '@spmka/template/feature-locale-switch';

const formIds = TemplateInputFormIds.inputForm;
//const buttonIs = LocaleSwitchFormIds.localeSwitch.buttons;

Given(/^I type the value "(.*)" into the "(.*)" input field$/, (value, controlName) => {
  if (controlName === 'Number') {
    cy.get('#' + formIds.input).type(value);
  }
});
