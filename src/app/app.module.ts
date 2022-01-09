import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EditorTopComponent } from './editor-top/editor-top.component';
import { EditorMiddleComponent } from './editor-middle/editor-middle.component';
import { EditorBottomComponent } from './editor-bottom/editor-bottom.component';
import {FormsModule} from "@angular/forms";
import { ColorBlockComponent } from './color-block/color-block.component';
import { BackgroundColorBlockComponent } from './background-color-block/background-color-block.component';
import { EditorAddComponent } from './editor-add/editor-add.component';
import { NoSanitizePipe } from './no-sanitize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EditorTopComponent,
    EditorMiddleComponent,
    EditorBottomComponent,
    ColorBlockComponent,
    BackgroundColorBlockComponent,
    EditorAddComponent,
    NoSanitizePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
