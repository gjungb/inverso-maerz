import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Led } from '../model/led';

/**
 * Stateless / Representational / Dumb
 */
@Component({
  selector: 'inv-led',
  templateUrl: './led.component.html',
  styleUrls: ['./led.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LedComponent {
  /**
   * 
   */
  @Input('invLed')
  led!: Led;

  /**
   * 
   */
  @Output()
  colorChange = new EventEmitter<number>();


  /**
   * 
   * @param ev 
   */
  handleClick(ev: MouseEvent): void {
    console.log('clicked', ev.ctrlKey);
    // effect
    this.colorChange.emit(this.led.index);
  }

}
