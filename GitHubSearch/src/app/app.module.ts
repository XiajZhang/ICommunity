import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';



// COMPONENTS
import { AppComponent } from './app.component';
import { FormFeildsComponent } from './components/form-feilds/form-feilds.component';




@NgModule({
  declarations: [
    AppComponent,
    FormFeildsComponent,
    
    

  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
