
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContatoComponent } from './contato/contato.component';
import { SobreComponent } from './sobre/sobre.component';
import { PrincipalComponent } from './principal/principal.component';
import { MainComponent } from './main.component';


const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: PrincipalComponent },
      { path: 'sobre', component: SobreComponent },
      {
        path: 'contato',
        loadChildren: () => import('./contato/contato.module').then(m => m.ContatoModule)
      },
      {
        path: 'funcionamento',
        loadChildren: () =>  import('./funcionamento/funcionamento.module').then(m => m.FuncionamentoModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
