import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';

import { NgUiFrameComponent } from './ng-ui-frame.component';
import { FrameToolbarComponent } from './components/frame-toolbar/frame-toolbar.component';
import { FrameAppContentComponent } from './components/frame-app-content/frame-app-content.component';

import { FrameToolbarTitleDirective } from './components/frame-toolbar/directives/frame-toolbar-title.directive';
import { FrameToolbarCenterDirective } from './components/frame-toolbar/directives/frame-toolbar-center.directive';
import { FrameToolbarSideDirective } from './components/frame-toolbar/directives/frame-toolbar-side.directive';


@NgModule({
  declarations: [
    NgUiFrameComponent,
    FrameToolbarComponent,
    FrameAppContentComponent,
    /* Direktives */
    FrameToolbarTitleDirective,
    FrameToolbarCenterDirective,
    FrameToolbarSideDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatMenuModule,
  ],
  exports: [
    NgUiFrameComponent,
    FrameToolbarComponent,
    FrameAppContentComponent,
    /* Direktives */
    FrameToolbarTitleDirective,
    FrameToolbarCenterDirective,
    FrameToolbarSideDirective
  ]
})
export class NgUiFrameModule { }
