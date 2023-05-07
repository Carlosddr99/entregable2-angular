import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router'; 
import { TablaComponent } from './tabla/tabla.component';
import { FormularioComponent } from './formulario/formulario.component';

export const routes: Routes = [
  {path : 'tabla', component: TablaComponent},
  {path: 'formulario', component: FormularioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
