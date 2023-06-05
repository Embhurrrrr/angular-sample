import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404Component } from './pages/error404/error404.component';
import { Error403Component } from './pages/error403/error403.component';
import { ErrorRoutingModule } from './error-routing.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [Error404Component, Error403Component],
  imports: [CommonModule, ErrorRoutingModule, MatButtonModule],
})
export class ErrorModule {}
