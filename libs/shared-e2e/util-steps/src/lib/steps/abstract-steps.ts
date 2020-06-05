export abstract class AbstractSteps {
  /** Constructor */
  public constructor() {
    this.defineSteps();
  }

  /**
   * All step definitions Given, Then etc. go insize defineSteps().
   * defineSteps() is called from the constructor.
   */
  protected abstract defineSteps();
}
