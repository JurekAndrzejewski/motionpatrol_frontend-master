import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {DetectionWrapperComponent} from "./detection-wrapper.component";
import {OneCameraComponent} from "../one-camera/one-camera.component";

const routes: Routes = [
  //{ path: 'gaze-tracking', component: GazeTrackingComponent },
  { path: '',
    component: DetectionWrapperComponent
  },
  { path: 'cam/:id',
    component: OneCameraComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetectionWrapperRoutingModule { }
