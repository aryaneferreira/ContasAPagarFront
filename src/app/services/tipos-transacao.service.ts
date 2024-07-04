import { Injectable } from '@angular/core';
import { TiposTransacaoRepository } from '../repositories/tipos-transacao.repository';
import { Observable } from 'rxjs';
import { TiposTransacaoModel } from '../models/tipos-transacao-model';

@Injectable({
  providedIn: 'root',
})
export class TiposTransacaoService {

  constructor(private tiposTransacaoRepository: TiposTransacaoRepository) { }

  obtemTiposTransacao(): Observable<TiposTransacaoModel[]> {
    return this.tiposTransacaoRepository.obterTiposTransacao();
  }
}