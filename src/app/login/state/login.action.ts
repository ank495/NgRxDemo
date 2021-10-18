import { HttpErrorResponse } from "@angular/common/http";
import { createAction, props } from "@ngrx/store";

// created login action in separate files.
export const toggleUsername = createAction('Login] Toggle mask of username');

export const createUsername = createAction('[Create API] load username');

export interface Employee {
id: number;
employee_name: string;
employee_salary: number;
employee_age: number;
profile_image: string;
}

export interface Employees {
  status:string;
  data: Employee[];
  message: string;
}

export const loadEmployee = createAction('[Employee API] load product');

export const loadSuccess = createAction('[Employee API] loading the success', props<{ employees : Employees}>());

export const loadFailure = createAction('[Employee API] failure message', props<{errorMessage : HttpErrorResponse}>());
