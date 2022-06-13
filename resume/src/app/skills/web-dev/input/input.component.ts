import { Component } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  players = [{id: 0, name: "Bill Russell", rings: 13},
             {id: 1, name: "Michael Jordan", rings: 6},
             {id: 2, name: "Kobe Bryant", rings: 5},
             {id: 3, name: "Shaquille O'Neal", rings: 4},
             {id: 4, name: "LeBron James", rings: 4},
             {id: 5, name: "Stephen Curry", rings: 3}
]

  constructor() { }

  onPlayerRemoved(id: number) {
    // Find index of the id to remove
    for (var i = 0; i < this.players.length; i++) {
      if (this.players[i].id === id) {
        // Remove one element starting at the correct index
        this.players.splice(i, 1);
      }
    }
  }
}
