import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItemComponent } from './components/item/item.component';
import { CriptoComponent } from './components/cripto/cripto.component';
import { CommentComponent } from './components/comment/comment.component';
import { PhotoComponent } from './components/photo/photo.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    CriptoComponent,
    CommentComponent,
    PhotoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
