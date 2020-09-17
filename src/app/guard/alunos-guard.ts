import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    RouterStateSnapshot,    
    CanActivateChild
} from '@angular/router';
import { Observable } from 'rxjs';

export class AlunosGuard implements CanActivateChild {

    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | boolean {

        console.log('Alunos: Guarda de rotas filhas');

        return true;
    }


}