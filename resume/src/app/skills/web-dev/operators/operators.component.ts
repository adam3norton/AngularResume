import { Component, OnInit } from '@angular/core';
import { Observable, map, first } from 'rxjs';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnInit {
  public data: number = 8;
  public displaySuccess: boolean = false;
  public dataToDisplay!: number;

  private customObs: Observable<number> = new Observable((subscriber) => {
    subscriber.next(this.data);
  });

  constructor() { }

  ngOnInit(): void {

  }

  onMap() {
    this.customObs
      .pipe(map((x) => x * x)).subscribe((data: number) => {
        this.displaySuccess = true;
        this.dataToDisplay = data;
    })
  }

  onFirst() {
    this.customObs
      .pipe(first()).subscribe((data: number) => {
        console.log(data);
        this.displaySuccess = true;
        this.dataToDisplay = data;
    })
  }

  onFilter() {
    this.customObs
      .pipe(map((x) => x * x)).subscribe((data: number) => {
        console.log(data);
        this.displaySuccess = true;
        this.dataToDisplay = data;
    })
  }
}
