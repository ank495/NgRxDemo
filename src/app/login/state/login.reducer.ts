import { createAction, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import * as AppState from '../../state/app.state.model';
import * as LoginAction from '.././state/login.action';

// Lazy loaded state to be written here.
export interface State extends AppState.State {
  login : loginState
}

// state of my login page
 export interface loginState {
  showMasked: boolean,
  checkMeOut: boolean,
  emailAddress: string,
  password: string,
  employees: LoginAction.Employees;
  error: string
}
//defining the state of the initial state.
export const initialState : loginState = {
  showMasked : true,
  checkMeOut: false,
  emailAddress: '',
  password: '',
  employees: {
    status: '',
    data: [],
    message:''
  },
  error:''
}

//creating a feature selector to get the whole login state.
const getLoginFeatureState = createFeatureSelector<loginState>('login');

//get some particular state out from the state.
// For array of objects with many values we can create an ID field
//Then create one more selector which return the ID.
//Create one more seletor which takes the state and currentProductId
//(state, currentProductId) = > state.object.find(p => p.id === currentProductId)
export const getMaskedValue = createSelector(
  getLoginFeatureState,
  state => state.showMasked
)

export const getEmployees = createSelector(
  getLoginFeatureState,
  state => state.employees.data
)

export const getError = createSelector(
  getLoginFeatureState,
  state => state.error
)

//Creating strongly types action
//export const toggleUsername = createAction('[Login] Toggle mask of username');


/**
 * Create action takes two parameters the first one is the type  and other one is the
 * value to be passed. e.g :
 * createAction('Test',
 * props<{p:product}> it takes the argument with the type here is the object type.
 * )
 */

export const loginReducer = createReducer<loginState >( initialState,
on(LoginAction.toggleUsername, (state):loginState    => {
  console.log('Initial State'+ JSON.stringify(state));
  return{
    ...state,
    showMasked : !state.showMasked
  };
}),
on(LoginAction.loadSuccess, (state,action):loginState => {
  return {
    ...state,
    employees: action.employees
  }
}),
on(LoginAction.loadFailure, (state, action):loginState  => {
  return {
    ...state,
    error: action.errorMessage.message
  }
})
);


/**
 * For complex actions like fetching the response, there can be two scenarios
 *  Success or error so we can create three actions one with the simple name
 *  other with the success props and the third one with the error message.
 *
*/
