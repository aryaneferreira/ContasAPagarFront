import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginRepository {
    private apiUrl = 'https://localhost:7012/api/';

    constructor(private http: HttpClient) { }

    login(email: string, password: string): Observable<string> {
        return this.http.post<any>(this.apiUrl + 'Auth', { Email: email, Senha: password});
    }
}