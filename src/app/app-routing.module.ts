import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddModalidadComponent } from './components/add-modalidad/add-modalidad.component';


const routes: Routes = [

  {path:"addModalidad", component: AddModalidadComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
