import {OnDestroy, OnInit} from '@angular/core';
import {SubscriptionSink} from '@spmka/shared/util-tools';

/** Base component for all components */
export class BaseComponent implements OnInit, OnDestroy {
  /** Subscription sink to collect subscriptions */
  protected subscriptions: SubscriptionSink;

  /** Constructor. */
  constructor() {
    this.subscriptions = new SubscriptionSink();
  }

  /** Angular life cycle method - empty at the moment */
  public ngOnInit(): void {
  }

  /** Angular life cycle method - Release subscriptions */
  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  /**
   * This is the default identity trackBy function for *ngFor
   * @param index the index of the item
   * @param item the item to check
   */
  public identityTrackBy(index: number, item: any) {
    return item;
  }
}
