import { Directive, ElementRef, Input } from '@angular/core';
import { ScriptLoaderService } from '../services/script-loader.service';

declare let $: any;

@Directive({
  selector: '[appTouchspin]'
})
export class TouchspinDirective {

  constructor(private el: ElementRef, private scriptLoader: ScriptLoaderService) {
    this.scriptLoader.load('touchspin');
  }

  @Input('options') options: {} = {};

  ngAfterViewInit() {
    let self = $(this.el.nativeElement);

    self.TouchSpin(this.options);
  }
}
