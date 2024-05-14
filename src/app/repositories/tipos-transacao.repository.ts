import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TiposTransacaoRepository {
    private apiUrl = 'https://localhost:7012/';

    constructor(private http: HttpClient) { }

    ObterTiposTransacao(): Observable<any> {
        return this.http.get<any>(this.apiUrl + 'TipoTransacao/listar');
    }
}