import { Component } from '@angular/core';
import { ForecastService } from './forecasts/forecast.service';

@Component({
  selector: 'wf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ForecastService],
})
export class AppComponent {
  title: string = 'Weather Front';
}