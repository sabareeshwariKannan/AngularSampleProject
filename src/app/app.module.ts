
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { AppRoutingModule } from './app-routing.module';
import { MachinepreviewComponent } from './machinepreview/machinepreview.component';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  declarations: [
    AppComponent,
       LoginComponentComponent,
       MachinepreviewComponent,
       SettingsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
