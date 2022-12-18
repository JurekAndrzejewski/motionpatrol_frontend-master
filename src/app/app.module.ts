import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WebcamModule} from 'ngx-webcam';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import { ColorPickerModule } from '@iplab/ngx-color-picker';
import {MotionDetectionModule} from "./motion-detection";
import {CommonModule} from "@angular/common";
import {DetectionWrapperModule} from "./components/detection-wrapper";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    WebcamModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    MotionDetectionModule,
    MatSelectModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    ColorPickerModule,
    DetectionWrapperModule,
    NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
