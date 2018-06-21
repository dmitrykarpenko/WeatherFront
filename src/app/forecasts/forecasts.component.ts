import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { Router, ActivatedRoute, Params } from '@angular/router';

import { IForecast, IWeather } from "./iforecast";
import { ForecastService } from "./forecast.service";

@Component({
    selector: "wf-forecasts",
    templateUrl: "./forecasts.component.html",
    styleUrls: ["./forecasts.component.css"]
})
export class ForecastsComponent implements OnInit
    // implements IForecasts
{
    constructor(
            private _forecastService: ForecastService,
            private _activatedRoute: ActivatedRoute,
            private _cdRef: ChangeDetectorRef) {
        // _cdRef.detectChanges();
    }

    title: string = "Forecast list";
    iconWidth: number = 50;

    _apiKey: string = "...a5d907afeaee540deb6ad3a5163";
    get apiKey(): string {
        return this._apiKey;
    }
    set apiKey(value: string) {
        this._apiKey = value;
        this.load();
    }

    _filter: string = "";
    get filter(): string {
        return this._filter;
    }
    set filter(value: string) {
        this._filter = value;
        this.filteredForecasts = this.forecasts
            ? this.performFilter(this.filter)
            : this.forecasts;
    }

    forecasts: IForecast[] = [];
    filteredForecasts: IForecast[] = [];

    error: any;

    ngOnInit(): void {
        this.load();
        this.assignApiKeyFormUrl();
    }

    private assignApiKeyFormUrl() : void
    {
        // this._activatedRoute.params.subscribe(
        //     (params: Params) => {
        //         let key = params['apiKey'];
        //         if (key)
        //             this._apiKey = key;
        //     });

        // TODO: assign _apiKey from route params
        const url = window.location.href;
        const urlParam = "apiKey=";
        const urlParamIndex = url.indexOf(urlParam);
        if (urlParamIndex >= 0) {
            const apiKeyValue = url.substring(urlParamIndex + urlParam.length);
            if (apiKeyValue)
                this.apiKey = apiKeyValue;
        }
    }

    update(): void {
        this._filter = "";
        this.load();
    }

    load(): void {
        this._forecastService.getForecasts(this.apiKey)
        .subscribe(
            forecasts => {
                this.forecasts = forecasts;
                this.filteredForecasts = forecasts;
            },
            error => this.error = error);
    }

    performFilter(currentFilter: string): IForecast[] {
        currentFilter = currentFilter.toLocaleLowerCase();
        return this.forecasts.filter(
            (f: IForecast) =>
                f.weather
                    .filter(
                        (w: IWeather) =>
                            w.description
                                .toLocaleLowerCase()
                                .indexOf(currentFilter) != -1)
                    .length > 0);
    }

    getDate(unix_timestamp: number) : string
    {
        let date = new Date(unix_timestamp * 1000);
        return date.toDateString();
    }
}