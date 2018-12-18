import { Directive, ElementRef, Input } from '@angular/core';
import { ScriptLoaderService } from '../services/script-loader.service';

declare let $: any;

@Directive({
  selector: '[appDatepicker]'
})
export class DatepickerDirective {

  constructor(private el: ElementRef, private scriptLoader: ScriptLoaderService) {
    this.scriptLoader.load('flatpickr');
  }

  ngAfterViewInit() {
    let self = $(this.el.nativeElement);

    self.flatpickr();
  }
}
