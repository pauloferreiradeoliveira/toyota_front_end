import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

// Rotas Principais
const routes: Routes = [
  {
    path: '',
    //Nao pode ser `` tem que ser ''
    loadChildren: () => import('./main/main.module').then(m => m.MainModule),
  },
  {
    path: 'adm',
    loadChildren: () => import('./adm/adm.module').then(m => m.AdmModule),
  },
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
