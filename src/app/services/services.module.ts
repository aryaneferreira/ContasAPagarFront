import { NgModule } from '@angular/core';
import { TransacaoService } from './transacao.service';
import { TiposTransacaoService } from './tipos-transacao.service';
import { LoginService } from '../core/login/services/login.service';

@NgModule({
  declarations: [],
  imports: [],
  providers: [TransacaoService, TiposTransacaoService, LoginService],
  bootstrap: []
})
export class ServicesModule { }