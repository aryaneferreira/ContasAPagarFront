import { Injectable } from '@angular/core';
import { TransacaoRepository } from '../repositories/transacao.repository';
import { Observable } from 'rxjs';
import { TransacaoModel } from '../models/transacao-model';

@Injectable({
  providedIn: 'root',
})
export class TransacaoService {

  constructor(private transacaoRepository: TransacaoRepository) { }

  obterTransacoes(): Observable<TransacaoModel[]>{
    return this.transacaoRepository.obterTransacoes();
  }
}