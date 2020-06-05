/// <reference types="cypress"/>

/** The type for name mapping */
type NameMapping = Map<string, string>;

/** The type for mappings of ui element names in scenarios to ids in html */
export type ElementNameToIdMapping = NameMapping;

/** Tools for working with cypress */
export class CypressTools {
  /** The mapping that is used fo methods that need the mapping */
  private static elementNameToIdMapping: ElementNameToIdMapping;

  /**
   * Sets the element to id mapping for further method calls.
   * @param mapping the mapping to set.
   */
  public static setElementNameToIdMapping(mapping: ElementNameToIdMapping) {
    CypressTools.elementNameToIdMapping = mapping;
  }

  /**
   * Do and return a cy.get() for an element given by a name.
   * @param name the name of the ui element.
   */
  public static getByName(name: string) {
    // return cy.get('#' + CypressTools.elementNameToIdMapping.get(name));
    return cy.get('[el-id="' + CypressTools.elementNameToIdMapping.get(name) + '"]');
  }

  /**
   * Do and return a cy.get() with the given id.
   * @param id the id of the element we want to get.
   */
  public static getById(id: string) {
    // return cy.get('#' + id);
    return cy.get('[el-id="' + id + '"]');
  }
}
