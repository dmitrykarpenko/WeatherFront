import { Component, OnInit } from "@angular/core";

import { IForecast } from "./iforecast";
import { ForecastService } from "./forecast.service";

@Component({
    selector: "wf-forecasts",
    templateUrl: "./forecasts.component.html"
})
export class Forecasts implements OnInit
    // implements IForecasts
{
    title: string = "Forecast list";
    iconWidth: number = 50;
    filter: string = "";
    // TODO: use IForecast
    forecasts: IForecast[] = [];
    
    constructor(
        private _forecastService: ForecastService) {
    }

    ngOnInit(): void {
        this.forecasts = this._forecastService.getForecasts();
    }

    getDate(unix_timestamp: number) : string
    {
        let date = new Date(unix_timestamp * 1000);
        return date.toDateString();
    }
}