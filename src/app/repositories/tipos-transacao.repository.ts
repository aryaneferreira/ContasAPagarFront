import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TiposTransacaoModel } from '../models/tipos-transacao-model';

@Injectable({
  providedIn: 'root',
})
export class TiposTransacaoRepository {
    private apiUrl = 'https://localhost:7012/api/';

    constructor(private http: HttpClient) { }

    obterTiposTransacao(): Observable<TiposTransacaoModel[]> {
        return this.http.get<any>(this.apiUrl + 'TipoTransacao/listar');
    }
}