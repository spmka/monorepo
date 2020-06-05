import {Directive, ElementRef, Input, Renderer2} from '@angular/core';
import {ObjectTools} from '@spmka/shared/util-tools';

/** The keys directive that collects the element id and the translation key */
@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[keys]'
})
export class KeysDirective {
  /**
   * The parameter for the directive.
   * Either an Array with Index 0 = element id, Index 1 = translation key.
   * Or a simple string with the element id.
   * The defined method changeKeys() is called when the parameter keys is set.
   */
  @Input('keys') set changeKeys(keys: Array<string> | string) {
    if (keys && ObjectTools.isString(keys)) {
      this.renderer.setAttribute(this.elRef.nativeElement, 'el-id', keys);
    } else if (ObjectTools.isArray(keys)) {
      if (keys[0]) {
        this.renderer.setAttribute(this.elRef.nativeElement, 'el-id', keys[0]);
      }
      if (keys[1]) {
        this.renderer.setAttribute(this.elRef.nativeElement, 'tx-key', keys[1]);
      }
    }
  }

  /**
   * Constructor
   * @param elRef the reference to the element we attached this directive to.
   * @param renderer the injected renderer.
   */
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}
}
