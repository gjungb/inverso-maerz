import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Led } from '../model/led';
import { LedService } from '../shared/led.service';

/**
 *
 */
@Component({
  selector: 'inv-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  /**
   *
   */
  led$?: Promise<Led>;

  /**
   * @see {@link https://angular.io/guide/router#getting-route-information}
   */
  private route = inject(ActivatedRoute);

  /**
   *
   */
  private service = inject(LedService);

  /**
   *
   */
  ngOnInit(): void {
    const index = this.route.snapshot.paramMap.get('index');

    console.log(index);

    this.led$ = this.service.readLed(index);
  }
}
