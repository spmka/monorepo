import {TemplateInputFormIds} from '@spmka/template/feature-form';
import {LocaleSwitchFormIds} from '@spmka/template/feature-locale-switch';

const formIds = TemplateInputFormIds.inputForm;
const buttonIs = LocaleSwitchFormIds.localeSwitch.buttons;

describe('template', () => {
  beforeEach(() => cy.visit('/'));

  it('should display Template Application', () => {
    cy.get('h1').should('have.text', 'Template Application');
    cy.get('#' + formIds.input).type('12345');
    cy.get('#' + formIds.email).type('test@test.com');
    cy.get('#' + buttonIs.german).click();
    cy.get('#' + buttonIs.english).click();
  });
});
