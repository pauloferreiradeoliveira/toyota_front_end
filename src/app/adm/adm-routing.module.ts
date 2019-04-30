import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdmComponent } from './adm.component';
import { AdminstradorEmailComponent } from './adminstrador-email/adminstrador-email.component';
import { EmailComponent } from './email/email.component';
import { AuthGuard } from './guard/auth.guard';
import { AdmGuard } from './usuario/guard/adm.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '', component: AdmComponent, children: [
      { path: 'responder', component: AdminstradorEmailComponent },
      { path: 'email', component: EmailComponent },
      {
        path: 'servicos',
        loadChildren: './servicos/servicos.module#ServicosModule'
      },
      {
        path: 'usuario',
        loadChildren: './usuario/usuario.module#UsuarioModule',
        canActivate: [AdmGuard],
        canLoad: [AdmGuard]
      }
    ],
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmRoutingModule { }
