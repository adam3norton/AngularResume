import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit, OnDestroy {
  paragraphData: string = '';
  displaySuccess: boolean = false;
  userInput: string = '';

  private customObs: Observable<string> = new Observable((subscriber) => {
    setTimeout(() => {
      console.log("paragraph: " + this.userInput);
      subscriber.next(this.userInput);
      this.displaySuccess = true;
    }, 3000);
  });

  private newSubscription!: Subscription;

  constructor() { }

  ngOnInit(): void {

  }

  ngOnDestroy() {
    this.newSubscription?.unsubscribe();
  }

  onClickSubmit() {
    this.newSubscription = this.customObs.subscribe((data: string) => {
      this.paragraphData = data;
      console.log(data);
    })
  }


}
