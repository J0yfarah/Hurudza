import { Injectable } from '@angular/core';
import { LOGIN } from './login.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubmitService {
  private url = 'http://localhost/backend_hurudza';
  public datastorage  :any;
  constructor(private https: HttpClient) { }


  login(credential: LOGIN) {
    return this.https.post(this.url + '/login.php', credential);
  }
}
