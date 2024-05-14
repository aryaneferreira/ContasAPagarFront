import { NgModule } from '@angular/core';
import { TransacaoRepository } from './transacao.repository';
import { TiposTransacaoRepository } from './tipos-transacao.repository';

@NgModule({
  declarations: [],
  imports: [],
  providers: [
    TransacaoRepository,
    TiposTransacaoRepository
],
  bootstrap: []
})
export class RepositoriesModule { }