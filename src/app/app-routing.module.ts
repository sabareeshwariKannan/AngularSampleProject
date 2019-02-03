import { MachinepreviewComponent } from './machinepreview/machinepreview.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { LoginComponentComponent } from './login-component/login-component.component';

const routes: Routes = [
  {path: '', component: LoginComponentComponent},
  {path: 'machineprev', component: MachinepreviewComponent }
];
@NgModule({
imports: [ RouterModule.forRoot(routes) ],
exports: [RouterModule]
})
export class AppRoutingModule { }
