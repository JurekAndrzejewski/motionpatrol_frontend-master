import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  //{ path: 'gaze-tracking', component: GazeTrackingComponent },

  { path: 'motion-detection',
    loadChildren: ()=> import('../app/components/detection-wrapper/detection-wrapper.module').then(m=>m.DetectionWrapperModule)
  },

  //{ path: 'color-detection', component: ColorDetectionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
