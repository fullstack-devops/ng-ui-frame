import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgUiFrameComponent } from './ng-ui-frame.component';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { FrameToolbarComponent } from './components/frame-toolbar/frame-toolbar.component';
import { FrameToolbarHeaderComponent } from './components/frame-toolbar-header/frame-toolbar-header.component';
import { FrameAppContentComponent } from './components/frame-app-content/frame-app-content.component';


@NgModule({
  declarations: [
    NgUiFrameComponent,
    FrameToolbarComponent,
    FrameToolbarHeaderComponent,
    FrameAppContentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatMenuModule
  ],
  exports: [
    NgUiFrameComponent,
    FrameToolbarComponent,
    FrameToolbarHeaderComponent,
    FrameAppContentComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class NgUiFrameModule { }
