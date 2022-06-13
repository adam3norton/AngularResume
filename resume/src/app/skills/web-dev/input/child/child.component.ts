import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() player!: {id: number, name: string, rings: number};
  @Output() playerRemoved = new EventEmitter<number>()

  onRemovePlayer(id: number) {
    this.playerRemoved.emit(id);
  }

}
