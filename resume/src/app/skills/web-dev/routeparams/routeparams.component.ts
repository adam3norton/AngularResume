import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routeparams',
  templateUrl: './routeparams.component.html',
  styleUrls: ['./routeparams.component.css']
})
export class RouteparamsComponent implements OnInit {
  bands = [{id: 0, name: "Coldplay", genre: "Rock"},
           {id: 1, name: "Rush", genre: "Rock"},
           {id: 2, name: "The Eagles", genre: "Rock"}];

  constructor() { }

  ngOnInit(): void {
  }

}
