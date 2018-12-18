import { Directive, ElementRef } from '@angular/core';
import { ScriptLoaderService } from '../services/script-loader.service';

declare let $: any;

@Directive({
  selector: '[appColorPicker]'
})
export class ColorPickerDirective {

  constructor(private el: ElementRef, private scriptLoader: ScriptLoaderService) {
    this.scriptLoader.load('colorpicker');
  }

  ngAfterViewInit() {
    let self = $(this.el.nativeElement);

    self.minicolors({
      control: $(this).attr('data-control') || 'hue',
      defaultValue: $(this).attr('data-defaultValue') || '',
      format: $(this).attr('data-format') || 'hex',
      keywords: $(this).attr('data-keywords') || '',
      inline: $(this).attr('data-inline') === 'true',
      letterCase: $(this).attr('data-letterCase') || 'lowercase',
      opacity: $(this).attr('data-opacity'),
      position: $(this).attr('data-position') || 'bottom left',
      swatches: $(this).attr('data-swatches') ? $(this).attr('data-swatches').split('|') : [],
      theme: 'bootstrap'
    });
  }
}
