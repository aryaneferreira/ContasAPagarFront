import { NgModule } from '@angular/core';
import { TransacaoRepository } from './transacao.repository';
import { TiposTransacaoRepository } from './tipos-transacao.repository';
import { LoginRepository } from '../core/login/repositories/login.repository';

@NgModule({
  declarations: [],
  imports: [],
  providers: [
    TransacaoRepository,
    TiposTransacaoRepository,
    LoginRepository
],
  bootstrap: []
})
export class RepositoriesModule { }