import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { New1Component } from './new1/new1.component';
import { New2Component } from './new2/new2.component';
import{DisplayService} from './display.service';
import { BillComponent } from './bill/bill.component';

@NgModule({
  declarations: [
    AppComponent,
    New1Component,
    New2Component,
    BillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [DisplayService],
  bootstrap: [New1Component,New2Component]
  
})
export class AppModule { }
