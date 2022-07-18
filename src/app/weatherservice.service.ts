import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Injectable({
  providedIn: 'root'
})
export class WeatherserviceService {

  constructor(private httpClient: HttpClient) { }
  public getWeather():Observable {

    return this.httpClient.get('http://api.openweathermap.org/data/2.5/weather?lat{lat}8&lon{lon}&appid=fec30507acb533f670080ab3174f226f')
    
    }
    
}
