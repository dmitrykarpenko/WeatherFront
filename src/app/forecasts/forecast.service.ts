import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
import "rxjs/add/operator/catch";

import { IForecast } from "./iforecast";

@Injectable()
export class ForecastService {

    constructor(private _http: HttpClient) { }

    private getForecastsUrl = (apiKey: string): string =>
        "http://api.openweathermap.org/data/2.5/forecast/daily?" +
        `q=Kyiv&mode=json&units=metric&cnt=7&appid=${apiKey}`;

    getForecasts(apiKey: string): Observable<IForecast[]> {
        interface Response { list: IForecast[] };
        let url = this.getForecastsUrl(apiKey);
        return this._http.get<Response>(url)
            .map((data: Response) => data.list)
            .do(data => console.log("HTTP Get data: " + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(err: HttpErrorResponse) {
        console.log("HTTP Get error: " + err.message)
        return Observable.throw(err.message);
    }
}