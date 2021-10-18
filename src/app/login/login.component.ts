import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State, getMaskedValue, getEmployees, getError } from './state/login.reducer';
import * as LoginAction from './state/login.action';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  displayCode: boolean = true;
  employee$: Observable<any> | null | undefined;
  employeeError$: Observable<any> | undefined;
  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    console.log("Inside logger component");
    // Here we were hardcoding the login part so now will remove it with the selector
    this.store.select(getMaskedValue).subscribe((maskedValue) => {
      //if(response) { because we have initilaized the initial state.
       this.displayCode = maskedValue;// As masked value is directly getting returned so directly binding the value.
      //}
    })

    this.employee$ = this.store.select(getEmployees);

    this.employeeError$ = this.store.select(getError);

    this.store.dispatch(LoginAction.loadEmployee());
  }

  //changing the hardcoded state to the new export created for action
  checkBoxChanged(event:any) {
   this.store.dispatch(LoginAction.toggleUsername());
  }
}
