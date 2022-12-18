import {Component, Input, OnInit} from '@angular/core';
import {interval, Subscription} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Route} from "@angular/router";

@Component({
  selector: 'app-one-camera',
  templateUrl: './one-camera.component.html',
  styleUrls: ['./one-camera.component.css']
})
export class OneCameraComponent implements OnInit {

  isImageSaved: boolean = false;
  public imageUrl: string = "";
  mySubscription: Subscription
  rectangles = "4";
  setRect = "0";
  numberArray: number[] = [];
  link = "http://127.0.0.1:5000/cam";

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.mySubscription= interval(20).subscribe(() =>{
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
    this.http.get<any>(this.link + this.route.snapshot.paramMap.get('id')).subscribe(data => {
      let imageBase64String = data.data;
      imageBase64String = imageBase64String.slice(2);
      imageBase64String = imageBase64String.slice(0, -1);
      this.imageUrl = 'data:image/png;base64,' + imageBase64String;})
  }

}
