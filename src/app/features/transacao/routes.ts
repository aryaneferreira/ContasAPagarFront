import { Route } from "@angular/router";
import { ListaTransacaoComponent } from "./components/lista-transacao/lista-transacao.component";
import { TransacaoComponent } from "./transacao.component";

export const TRANSACAO_ROUTES: Route[] = [{
    path: '',
    pathMatch: 'prefix',
    component: TransacaoComponent,
    children: [
      { path: '', component: ListaTransacaoComponent },
    ],
}];