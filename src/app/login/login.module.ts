import { loginEffects } from './state/login.effects';
import { EffectsModule } from '@ngrx/effects';
import { LoginRoutingModule } from './login-routing.module';
import { loginReducer } from './state/login.reducer';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginRoutingModule,
    HttpClientModule,
    StoreModule.forFeature('login', loginReducer),
    EffectsModule.forFeature([loginEffects])
  ]
})
export class LoginModule { }
