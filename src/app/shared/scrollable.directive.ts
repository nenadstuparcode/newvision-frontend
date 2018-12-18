import { Directive, ElementRef, Input } from '@angular/core';
import { ScriptLoaderService } from '../services/script-loader.service';

declare let $: any;
declare let Response: any;
declare let Kosmo: any;

@Directive({
  selector: '[appScrollable]'
})
export class ScrollableDirective {

  @Input('reInitDelay') reInitDelay: number = 0;

  constructor(private el: ElementRef, private scriptLoader: ScriptLoaderService) {
    this.scriptLoader.load('mousewheel', 'jscrollpane');
  }

  ngAfterViewInit() {
    let self = $(this.el.nativeElement);
    let scrollableIfHasClass = self.data('scrollable-if-has-class');

    if (!scrollableIfHasClass || (scrollableIfHasClass && (self.hasClass(scrollableIfHasClass) || Response.band(0, Kosmo.screen.breakpoints.lg)))) {
      let options:any = {};

      if (this.reInitDelay) {
        options.autoReinitialise = true;
        options.autoReinitialiseDelay = this.reInitDelay;
      }

      self.jScrollPane(options);
    }
  }
}
