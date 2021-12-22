import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { SidebarModule } from 'primeng/sidebar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToolbarModule } from 'primeng/toolbar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    CalendarModule,
    CheckboxModule,
    ConfirmDialogModule,
    DividerModule,
    DropdownModule,
    InputNumberModule,
    InputSwitchModule,
    InputTextModule,
    SidebarModule,
    SplitButtonModule,
    TableModule,
    ToastModule,
    ToggleButtonModule,
    ToolbarModule
  ],
  exports: [
    ButtonModule,
    CalendarModule,
    CheckboxModule,
    ConfirmDialogModule,
    DividerModule,
    DropdownModule,
    InputNumberModule,
    InputSwitchModule,
    InputTextModule,
    SidebarModule,
    SplitButtonModule,
    TableModule,
    ToastModule,
    ToggleButtonModule,
    ToolbarModule
  ],
  providers: [
    ConfirmationService,
    MessageService
  ]
})
export class PrimeNgModule { }
