import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  addBorder: boolean = false;
  addShadow: boolean = false;
  turnBlue: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleBorder() {
    this.addBorder = !this.addBorder;
  }
  toggleShadow() {
    this.addShadow = !this.addShadow;
  }
  toggleBlue() {
    this.turnBlue = !this.turnBlue;
  }

}
