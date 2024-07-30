import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TransacaoModel } from '../models/transacao-model';

@Injectable({
  providedIn: 'root',
})
export class TransacaoRepository {
    private apiUrl = 'https://localhost:7012/api/';

    constructor(private http: HttpClient) { }

    obterTransacoes(): Observable<TransacaoModel[]> {
        return this.http.get<any>(this.apiUrl + 'Transacao/listar');
    }
}