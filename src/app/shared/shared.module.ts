import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TouchspinDirective } from './touchspin.directive';
import { FlexLabelsDirective } from './flex-labels.directive';
import { AutoCompleteDirective } from './auto-complete.directive';
import { SelectTagsDirective } from './select-tags.directive';
import { SelectableDirective } from './selectable.directive';
import { TooltipDirective } from './tooltip.directive';
import { AutoHeightDirective } from './auto-height.directive';
import { ScrollableDirective } from './scrollable.directive';
import { ElementHeightDirective } from './element-height.directive';
import { DatepickerDirective } from './datepicker.directive';
import { PopoverDirective } from './popover.directive';
import { CommentComponent } from './comment/comment.component';
import { ColorPickerDirective } from './color-picker.directive';
import { InputmaskDirective } from './inputmask.directive';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TouchspinDirective,
    FlexLabelsDirective,
    AutoCompleteDirective,
    SelectTagsDirective,
    SelectableDirective,
    TooltipDirective,
    AutoHeightDirective,
    ScrollableDirective,
    ElementHeightDirective,
    DatepickerDirective,
    PopoverDirective,
    CommentComponent,
    ColorPickerDirective,
    InputmaskDirective
  ],
  exports: [
    TouchspinDirective,
    FlexLabelsDirective,
    AutoCompleteDirective,
    SelectTagsDirective,
    SelectableDirective,
    TooltipDirective,
    AutoHeightDirective,
    ScrollableDirective,
    ElementHeightDirective,
    DatepickerDirective,
    PopoverDirective,
    CommentComponent,
    ColorPickerDirective,
    InputmaskDirective
  ]
})
export class SharedModule { }
