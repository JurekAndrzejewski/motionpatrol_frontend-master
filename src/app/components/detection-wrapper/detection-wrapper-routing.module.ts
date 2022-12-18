import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {DetectionWrapperComponent} from "./detection-wrapper.component";

const routes: Routes = [
  //{ path: 'gaze-tracking', component: GazeTrackingComponent },
  { path: '',
    component: DetectionWrapperComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetectionWrapperRoutingModule { }
