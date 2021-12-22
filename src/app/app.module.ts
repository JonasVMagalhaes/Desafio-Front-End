import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PrimeNgModule } from './modules/prime-ng/prime-ng.module';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { TableItensComponent } from './components/table-itens/table-itens.component';
import { RegisterModule } from './pages/register/register.module';
import { ItensModule } from './pages/itens/itens.module';
import { ToastComponent } from './components/toast/toast.component';
import { DialogComponent } from './components/dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    ToolbarComponent,
    TableItensComponent,
    ToastComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PrimeNgModule,
    RegisterModule,
    ItensModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
