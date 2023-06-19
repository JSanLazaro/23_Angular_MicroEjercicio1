import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormReactiveComponent } from './cms/view/form-reactive/form-reactive.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { FormCharacteristicsComponent } from './cms/view/form-characteristics/form-characteristics.component';
 
@NgModule({
  declarations: [
    AppComponent,
    FormReactiveComponent,
    FormCharacteristicsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
