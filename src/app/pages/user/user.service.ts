import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { Observable } from "rxjs";
import { User } from "./user";

@Injectable({
    providedIn: 'root'
  })
  export class UserService {

    constructor(private http: HttpClient) {

    }

    insertUser(user: User): Observable<User> {
        return this.http.post<User>(environment.urlBase + '/usuario/add', user);
    }

  }