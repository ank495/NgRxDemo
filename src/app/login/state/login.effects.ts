import { HttpClient } from "@angular/common/http";
import { Injectable} from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import * as LoginAction from './login.action';


@Injectable()
export class loginEffects {

  /**
   *  For getting the effects first we need to inject the action in the constructor.
   *  The second paramter will be service name here we are hardcoing the rest here only
   */
  constructor(private action$: Actions, private http: HttpClient) {}


  /**
   *  Second step is to create an effects for listening to all the async functions
   *
   */

  loadEmployees$ = createEffect(() => {
    return this.action$.pipe(
      ofType(LoginAction.loadEmployee),
      mergeMap(() => this.http.get<LoginAction.Employees>('assets/employees.responses.json').pipe(map(employees => LoginAction.loadSuccess({employees})), catchError(errorMessage => of(LoginAction.loadFailure({errorMessage})))))
    )
  })

}
