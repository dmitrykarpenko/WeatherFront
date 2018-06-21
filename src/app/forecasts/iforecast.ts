// export interface IForecasts {
//     title: string;
//     iconWidth: number;
//     filter: string;
//     forecasts: IForecast[];
// }

export interface IForecast {
    dt: number;
    temp: ITemperature;
    pressure: number;
    humidity: number;
    weather: IWeather[];
    speed: number;
    deg: number;
    clouds: number;
    rain?: number;
}

export interface ITemperature {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
}

export interface IWeather {
    id: number;
    main: string;
    description: string;
    icon: string;
}