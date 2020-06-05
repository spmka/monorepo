/// <reference types="cypress"/>
import {Given} from 'cypress-cucumber-preprocessor/steps';
import {InputSteps, AbstractSteps, ButtonSteps} from '@spmka/shared-e2e/util-steps';
import {ElementNameToIdMapping, CypressTools} from '@spmka/shared-e2e/util-tools';
import {TemplateInputFormIds} from '@spmka/template/feature-form';
import {LocaleSwitchFormIds} from '@spmka/template/feature-locale-switch';

const formIds = TemplateInputFormIds.inputForm;
const buttonIds = LocaleSwitchFormIds.localeSwitch.buttons;

/** The mapping of ui elements names used in the scenario to their ids */
const nameMapping: ElementNameToIdMapping = new Map([
  ['Number', formIds.input],
  ['EMail', formIds.email],
  ['German', buttonIds.german],
  ['English', buttonIds.english]
]);

export class TemplateFormSteps extends AbstractSteps {
  protected defineSteps() {
    Given(/^I test the Template Form Page$/, (appName) => {
      cy.visit('/');
      CypressTools.setElementNameToIdMapping(nameMapping);
    });
  }
}

const inputSteps = new InputSteps();
const buttonSteps = new ButtonSteps();
const steps = new TemplateFormSteps();
