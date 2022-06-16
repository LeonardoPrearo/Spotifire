import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormPageComponent } from './form-page.component';
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";
import {FormModule} from "../form/form.module";
import {SummaryModule} from "../summary/summary.module";
import {ReactiveFormsModule} from "@angular/forms";

const routes : Routes = [
  {path: '', component: FormPageComponent}
]

@NgModule({
  declarations: [
    FormPageComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule,
        FormModule,
        SummaryModule,
        ReactiveFormsModule
    ]
})
export class FormPageModule { }
