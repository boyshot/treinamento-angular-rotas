import { RouterModule } from '@angular/router';
import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        RouterModule.forChild([
        { path: '', component: CursosComponent },
        { path: 'naoEncontrado', component: CursoNaoEncontradoComponent },
        { path: ':id', component: CursoDetalheComponent }        
    ])],
    exports: [RouterModule]
})
export class CursosRoutingModule { }