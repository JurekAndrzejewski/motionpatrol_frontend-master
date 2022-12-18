import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MotionDetectionComponent} from "./motion-detection.component";
import {WebcamModule} from "ngx-webcam";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatSelectModule} from "@angular/material/select";
import {MatMenuModule} from "@angular/material/menu";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatGridListModule} from "@angular/material/grid-list";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [MotionDetectionComponent],
  imports: [
    CommonModule,
    WebcamModule,
    MatSelectModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    FormsModule,

  ],
  exports: [MotionDetectionComponent]

})
export class MotionDetectionModule { }
