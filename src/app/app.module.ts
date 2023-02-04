import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { OneComponent } from './one/one.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { Accordianservice } from './services/accordian.service';
import {AccordionModule} from 'primeng/accordion';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {ButtonModule} from 'primeng/button';



@NgModule({
  declarations: [
    AppComponent,
    OneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    AccordionModule,
    InputTextareaModule,
    ButtonModule

  ],
  providers: [
    Accordianservice,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
