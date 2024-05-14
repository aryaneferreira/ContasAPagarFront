import { Injectable } from '@angular/core';
import { TiposTransacaoRepository } from '../repositories/tipos-transacao.repository';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TiposTransacaoService {

  constructor(private tiposTransacaoRepository: TiposTransacaoRepository) { }

  ObtemTiposTransacao(): Observable<any> {
    return this.tiposTransacaoRepository.ObterTiposTransacao();
  }
}