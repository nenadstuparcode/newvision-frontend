import { Directive, ElementRef, Input } from '@angular/core';
import { ScriptLoaderService } from '../services/script-loader.service';

declare let $: any;

@Directive({
  selector: '[appInputmask]'
})
export class InputmaskDirective {

  @Input('mask') mask: any;
  @Input('options') options: {} = {};
  
  constructor(private el: ElementRef, private scriptLoader: ScriptLoaderService) {
    this.scriptLoader.load('inputmask');
  }

  ngAfterViewInit() {
    let self = $(this.el.nativeElement);

    self.mask(this.mask, this.options);
  }
}
