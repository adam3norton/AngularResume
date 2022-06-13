import {HttpClient} from '@angular/common/http';
import {Component, ViewChild, AfterViewInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort, SortDirection} from '@angular/material/sort';
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import { iDog } from 'src/app/shared/dog.model';
import { dogService } from 'src/app/shared/dog.service';

@Component({
  selector: 'app-mat-table',
  templateUrl: './mat-table.component.html',
  styleUrls: ['./mat-table.component.css']
})

export class MatTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['dogName', 'dogBreed', 'dogAge'];
  data: iDog[] = [];
  _url = 'https://personalwebsite-bc32c-default-rtdb.firebaseio.com/users.json';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dogService: dogService) {}

  ngAfterViewInit() {
    this.dogService.getDogs()
      .subscribe((res) => {
        console.log(res);
        const data = JSON.parse(JSON.stringify(res))
        console.log("data", data)
        // convert the object to dog array
        // iterate object key by key
        this.data = []; // init empty array
        for(var key of Object.keys(data)) {
          console.log(key, data[key]);
          this.data.push(data[key]);
        }
        console.log(this.data);
      })
  }
}
