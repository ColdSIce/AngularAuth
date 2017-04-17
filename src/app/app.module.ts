import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';
import { routes } from './app.routs';
import { AuthGuard } from './auth.service';

export const firebaseconfig = {
  apiKey: "AIzaSyCpTbAL6AvK6B-B0fSg6qPGgwEEcOQ9U6s",
    authDomain: "authftest.firebaseapp.com",
    databaseURL: "https://authftest.firebaseio.com",
    projectId: "authftest",
    storageBucket: "authftest.appspot.com",
    messagingSenderId: "120136612379"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseconfig),
    routes
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
