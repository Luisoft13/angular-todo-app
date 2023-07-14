import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './store/app.reducer';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { TodoComponent } from './components/todo/todo.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ app: appReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: true, // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
