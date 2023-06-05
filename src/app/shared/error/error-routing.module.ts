import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './pages/error404/error404.component';
import { Error403Component } from './pages/error403/error403.component';

const routes: Routes = [
  {
    path: 'error404',
    component: Error404Component,
  },
  {
    path: 'error403',
    component: Error403Component,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErrorRoutingModule {}
