import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HideCardNumberPipe } from './hide-card-number.pipe';



@NgModule({
    declarations: [
        HideCardNumberPipe
    ],
    exports: [
        HideCardNumberPipe
    ],
    imports: [
        CommonModule
    ]
})
export class PipesModule { }
