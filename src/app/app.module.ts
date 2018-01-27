import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Imported components Material and Ngprime
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

//Angular imports
import { AppRoutingModule }     from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';

/*Import dos componentes personalizados*/
import { MyButtonComponent } from './common_components/my-button/my-button.component';
import { MyFormHeaderComponent } from './common_components/my-form-header/my-form-header.component';

//Created components
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MyButtonComponent,
    ForgotPasswordComponent,
    MyFormHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
