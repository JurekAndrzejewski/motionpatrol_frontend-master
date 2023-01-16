import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {interval, Subscription} from 'rxjs';

// @ts-ignore
@Component({
  selector: 'app-motion-detection',
  templateUrl: './motion-detection.component.html',
  styleUrls: ['./motion-detection.component.css'],
})
export class MotionDetectionComponent implements OnInit {
    isImageSaved: boolean = false;
    public imageUrl: string = "";
    mySubscription: Subscription
    rectangles = "4";
    setRect = "0";
    numberArray: number[] = [];
    @Input() link = "http://127.0.0.1:5000/cam1";

    constructor(private http: HttpClient) {
      this.mySubscription= interval(40).subscribe(() =>{
        this.getVideoFeed();
      });
      for (let i = 0; i < 17; i++) {
        this.numberArray.push(i);
      }
    }

    ngOnInit() {
      this.getVideoFeed();
    }

    ngOnDestroy() {
      this.mySubscription.unsubscribe()
    }

    getVideoFeed() {
      this.http.get<any>(this.link).subscribe(data => {
        let imageBase64String = data.data;
        imageBase64String = imageBase64String.slice(2);
        imageBase64String = imageBase64String.slice(0, -1);
        this.imageUrl = 'data:image/png;base64,' + imageBase64String;})
    }

}
