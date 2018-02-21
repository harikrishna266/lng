import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';


@Injectable()
export class LoginService {

  constructor(public http: Http) { }

  login() {
    return this.http.post(`${environment.baseurl}login`,{});
  }

}
