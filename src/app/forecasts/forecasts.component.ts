import { Component } from "@angular/core";

import { IForecast } from "./iforecast";

@Component({
    selector: "wf-forecasts",
    templateUrl: "./forecasts.component.html"
})
export class Forecasts {
    title: string = "Forecast list";
    iconWidth: number = 50;
    filter: string = "";
    // TODO: use IForecast
    forecasts: any[] = [
        {
            "dt": 1529485200,
            "temp": {
                "day": 26.68,
                "min": 18.55,
                "max": 26.98,
                "night": 18.55,
                "eve": 26.33,
                "morn": 26.68
            },
            "pressure": 1018.42,
            "humidity": 79,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "sky is clear",
                    "icon": "01d"
                }
            ],
            "speed": 3.66,
            "deg": 311,
            "clouds": 0
        },
        {
            "dt": 1529571600,
            "temp": {
                "day": 26.27,
                "min": 16.62,
                "max": 27.4,
                "night": 21.36,
                "eve": 27.33,
                "morn": 16.62
            },
            "pressure": 1016.42,
            "humidity": 78,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "sky is clear",
                    "icon": "01d"
                }
            ],
            "speed": 1.96,
            "deg": 228,
            "clouds": 0
        },
        {
            "dt": 1529661600,
            "temp": {
                "day": 27.76,
                "min": 15.18,
                "max": 27.76,
                "night": 15.18,
                "eve": 17.72,
                "morn": 20.5
            },
            "pressure": 1006.35,
            "humidity": 69,
            "weather": [
                {
                    "id": 501,
                    "main": "Rain",
                    "description": "moderate rain",
                    "icon": "10d"
                }
            ],
            "speed": 5.66,
            "deg": 222,
            "clouds": 36,
            "rain": 8.72
        },
    ];

    getDate(unix_timestamp: number) : string
    {
        let date = new Date(unix_timestamp * 1000);
        return date.toDateString();
    }
}