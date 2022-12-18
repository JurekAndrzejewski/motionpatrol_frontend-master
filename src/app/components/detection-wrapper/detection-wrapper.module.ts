import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetectionWrapperComponent } from './detection-wrapper.component';
import {MotionDetectionComponent} from "../../motion-detection/motion-detection.component";
import {WebcamModule} from "ngx-webcam";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../../app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {MotionDetectionModule} from "../../motion-detection/motion-detection.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatSelectModule} from "@angular/material/select";
import {MatMenuModule} from "@angular/material/menu";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatGridListModule} from "@angular/material/grid-list";
import {DetectionWrapperRoutingModule} from "./detection-wrapper-routing.module";

const COMPONENTS = [DetectionWrapperComponent]

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    MotionDetectionModule,
    MatSelectModule,
    MatMenuModule,
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    DetectionWrapperRoutingModule
  ],
  exports: [ ...COMPONENTS]
})
export class DetectionWrapperModule { }
