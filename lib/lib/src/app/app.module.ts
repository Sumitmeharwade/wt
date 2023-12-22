import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { BookIssueComponent } from './book-issue/book-issue.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BookListComponent } from './book-list/book-list.component';
import { StudentListComponent } from './student-list/student-list.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    BookIssueComponent,
    AboutUsComponent,
    BookListComponent,
    StudentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'about-us',
        component: AboutUsComponent
      },
      {
        path: 'book-issue',
        component: BookIssueComponent
      },
      {
        path: 'book-list',
        component: BookListComponent
      },
      {
        path: 'registration',
        component: RegistrationComponent
      },
      {
        path: 'student-list',
        component: StudentListComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
