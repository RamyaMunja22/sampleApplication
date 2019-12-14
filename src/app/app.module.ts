
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeMenuComponent } from './home-menu/home-menu.component';
import { Menu1Component } from './menu1/menu1.component';
import { Menu2Component } from './menu2/menu2.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    HomeMenuComponent,
    Menu1Component,
    Menu2Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: LoginComponent
      },
      {
         path: 'signup',
         component: SignupComponent
      },
      {
        path: 'home',
        component: HomeComponent,
        children: [
          {
            path: '',
            component: HomeMenuComponent
            },
            {
              path: 'Menu1',
              component: Menu1Component
            },
            {
              path: 'Menu2',
              component: Menu2Component
            }
        ]
     }
     
   ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
