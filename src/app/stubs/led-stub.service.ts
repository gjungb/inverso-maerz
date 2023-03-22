import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';
import { Led, Leds } from '../model/led';
import { LedService } from '../shared/led.service';

/**
 * A stub to be used during development / testing
 */
@Injectable()
// @ts-ignore
export class LedStubService implements LedService {
  /**
   * A stub list of Leds
   */
  #stub: Leds = Array.from({ length: 8 }, (_, index) => ({
    index,
    color: 'pink',
  }));

  /**
   *
   */
  #delay = 500;

  /**
   *
   * @returns
   */
  readLeds() {
    return of([...this.#stub]).pipe(delay(this.#delay));
  }

  /**
   *
   * @param index
   * @returns
   */
  readLed(index: string | number | null): Promise<Led> {
    return Promise.resolve(this.#stub.at(Number(index)) as Led);
  }
}
