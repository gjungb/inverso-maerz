import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, tap, timer } from 'rxjs';
import { Leds } from '../model/led';
import { LedService } from '../shared/led.service';

@Component({
  selector: 'inv-led-list',
  templateUrl: './led-list.component.html',
  styleUrls: ['./led-list.component.scss']
})
export class LedListComponent implements OnInit, OnDestroy {

  private service = inject(LedService);

  leds?: Leds;

  leds$!: Observable<Leds>

  private sub = Subscription.EMPTY;

  // constructor(private readonly service: LedService) { }

  ngOnInit(): void {
    this.leds$ = this.service.readLeds().pipe(tap({
      next: (v) => console.log(v),
      complete: () => console.log('Fertig!')
    }));

    // ticker
    const ticker$ = timer(3000, 2000);

    this.sub = ticker$.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('Fertig!')
    });


  }

  ngOnDestroy(): void {
    // effect
    this.sub.unsubscribe();
  }

  setRandomColor(index: number): void {
    console.log(index);
    // effect
    // this.leds[index] = {
    //   index: index,
    //   color: 'lightblue'
    // };
  }

}
