import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PostComponent } from './components/post/post.component';
import { AddPostComponent } from './components/add-post/add-post.component';

import { ApiService } from './api.service';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    AddPostComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [
    ApiService
  ],
  entryComponents: [AddPostComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
