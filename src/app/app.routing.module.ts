import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { AuthGuard } from './guard/auth-guard';
import { CursosGuard } from './guard/cursos-guard';

@NgModule({
  imports: [
    RouterModule.forRoot([
      //{ path: 'cursos', loadChildren: 'app/cursos/cursos.module#CursosModule' },
      //lazy loading
      {
        path: 'cursos',
        canActivate: [AuthGuard],
        canActivateChild: [CursosGuard],
        canLoad: [AuthGuard],
        loadChildren:
          () => import('./cursos/cursos.module').
            then(m => m.CursosModule)
      },
      //lazy loading
      {
        path: 'alunos',
        canActivate: [AuthGuard],
        canLoad: [AuthGuard],/*Não carrega o modulo no cliente se não tiver permissão*/
        loadChildren:
          () => import('./alunos/alunos.module').
            then(m => m.AlunosModule)
      },

      {
        path: 'login',
        component: LoginComponent
      },

      {
        path: 'home',
        canActivate: [AuthGuard],
        component: HomeComponent
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },

      {
        /*deixar por ultimo*/
        path: '**',
        component: PaginaNaoEncontradaComponent
        /*canActivate: [AuthGuard],  
        pode mandar para a pagina de login novamente*/
      }
    ], { useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }