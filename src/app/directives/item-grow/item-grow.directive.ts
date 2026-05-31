import { Directive, ElementRef, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
    selector: '[appItemGrow]',
})
export class ItemGrowDirective {
    @HostBinding('style.flex-grow') grow: number = 1;

    @Input('grow-value') set value(value: number) {
        if (value < 0) {
            this.grow = 1;
        }

        this.grow = value;
    }
}
