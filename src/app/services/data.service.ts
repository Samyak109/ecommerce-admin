import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private http: HttpClient) {}

  post(url, data) {
    return this.http.post("http://localhost:4200/api/" + url, data);
  }

  get(url) {
    return this.http.get("http://localhost:4200/api/" + url);
  }
}
