import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { PrimeNgModule } from 'src/app/modules/prime-ng/prime-ng.module';
import { FormsModule } from '@angular/forms';
import { MeasurementPipe } from 'src/app/pipes/measurement.pipe';

@NgModule({
  declarations: [
    RegisterComponent,
    MeasurementPipe
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    FormsModule
  ]
})
export class RegisterModule { }
