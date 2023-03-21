import { Component } from '@angular/core';
import { Leds } from '../model/led';

@Component({
  selector: 'inv-led-list',
  templateUrl: './led-list.component.html',
  styleUrls: ['./led-list.component.scss']
})
export class LedListComponent {
  leds: Leds = [
    {
      index: 0,
      color: 'red'
    },
    {
      index: 1,
      color: 'green'
    },
    {
      index: 2,
      color: 'blue'
    }
  ];

  setRandomColor(index: number): void {
    console.log(index);
    // effect
    this.leds[index] = {
      index: index,
      color: 'lightblue'
    };
  }

}
