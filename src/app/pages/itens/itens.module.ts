import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItensComponent } from './itens.component';
import { PrimeNgModule } from 'src/app/modules/prime-ng/prime-ng.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DatePipe } from 'src/app/pipes/date.pipe';

@NgModule({
  declarations: [
    ItensComponent,
    DatePipe
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    RouterModule,
    FormsModule
  ]
})
export class ItensModule { }
