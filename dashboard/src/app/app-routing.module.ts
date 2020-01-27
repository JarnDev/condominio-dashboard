import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PainelComponent } from './painel/painel.component';
import { SindicoComponent } from './sindico/sindico.component';


const routes: Routes = [
  { 
    path:'',
    component: PainelComponent
  },
  {
    path:'sindico',
    component: SindicoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
