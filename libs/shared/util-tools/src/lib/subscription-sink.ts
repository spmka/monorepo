/** checks if the given parameter is a function */
const isFunction = (fn: any) => typeof fn === 'function';

/** describes subscription like objects */
export interface SubscriptionLike {
  /** the unsubscribe method */
  unsubscribe(): void;
}

/**
 * Subscription sink that holds Observable subscriptions
 * until you call unsubscribe on it in ngOnDestroy.
 */
export class SubscriptionSink {
  /** the collected subscriptions */
  protected subscriptions: SubscriptionLike[] = [];

  /**
   * Subscription sink that holds Observable subscriptions
   * until you call unsubscribe on it in ngOnDestroy.
   *
   * @example
   * In Angular:
   * ```
   *   private subs = new SubSink();
   *   ...
   *   this.subs.sink = observable$.subscribe(
   *   this.subs.add(observable$.subscribe(...));
   *   ...
   *   ngOnDestroy() {
   *     this.subs.unsubscribe();
   *   }
   * ```
   */
  constructor() {}

  /**
   * Add subscriptions to the tracked subscriptions
   * @example
   *  this.subs.add(observable$.subscribe(...));
   */
  add(...subscriptions: SubscriptionLike[]) {
    this.subscriptions = this.subscriptions.concat(subscriptions);
  }

  /**
   * Assign subscription to this sink to add it to the tracked subscriptions
   * @example
   *  this.subs.sink = observable$.subscribe(...);
   */
  set sink(subscription: SubscriptionLike) {
    this.subscriptions.push(subscription);
  }

  /**
   * Unsubscribe to all subscriptions in ngOnDestroy()
   * @example
   *   ngOnDestroy() {
   *     this.subs.unsubscribe();
   *   }
   */
  unsubscribe() {
    this.subscriptions.forEach(sub => sub && isFunction(sub.unsubscribe) && sub.unsubscribe());
    this.subscriptions = [];
  }
}
