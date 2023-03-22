import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { delay, firstValueFrom, map, Observable } from 'rxjs';
import { BASE_URL } from '../di';
import { Led, Leds } from '../model/led';

/**
 *
 */
@Injectable({
  providedIn: 'root',
})
export class LedService {
  /**
   * @see {@link https://angular.io/guide/http}
   */
  private client = inject(HttpClient);

  /**
   * @see AppModule
   */
  private base = inject(BASE_URL);

  /**
   *
   * @param due - A delay in [ms] after which to return the list
   * @returns A list of {@see Led} objects wrapped in an Observable
   */
  readLeds(due = 5_000): Observable<Leds> {
    const url = `${this.base}/colors`;
    const res = this.client.get<string[]>(url);

    return res.pipe(
      map((colors) => this.toLeds(colors)),
      delay(due)
    );

    // return of([
    //   {
    //     index: 0,
    //     color: 'red'
    //   },
    //   {
    //     index: 1,
    //     color: 'green'
    //   },
    //   {
    //     index: 2,
    //     color: 'blue'
    //   }
    // ]).pipe(delay(5000));
  }

  /**
   *
   * @param index The 0-based index of the Led on the Blinkt!
   * @returns A single Led wrapped in a Promise
   */
  readLed(index: number | string | null): Promise<Led> {
    const url = `${this.base}/colors/${index}`;
    // @todo talk to backend developer why color is returned as a string and not as an Led object
    const res = this.client.get(url, { responseType: 'text' }).pipe(
      map((color) => {
        return this.toLed(color, Number(index));
      })
    );

    // we'll use a Promise {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise} here, just because we can ;-)
    return firstValueFrom(res);
  }

  /**
   *
   * @param colors
   * @returns A list of Leds
   */
  private toLeds(colors: string[]): Leds {
    return colors.map((color, index) => this.toLed(color, index));
  }

  /**
   *
   * @param color
   * @param index
   * @returns A single Led
   */
  private toLed(color: string, index: number): Led {
    return { index, color };
  }
}
