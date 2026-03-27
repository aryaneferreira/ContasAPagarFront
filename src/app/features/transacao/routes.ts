import { Route } from "@angular/router";
import { ListaTransacaoComponent } from "./components/lista-transacao/lista-transacao.component";
import { TransacaoComponent } from "./transacao.component";
import { CadastraTransacaoComponent } from "./components/cadastra-transacao/cadastra-transacao.component";

export const TRANSACAO_ROUTES: Route[] = [{
    path: '',
    pathMatch: 'prefix',
    component: TransacaoComponent,
    children: [
      { path: '', component: ListaTransacaoComponent },
      { path: 'cadastra-transacao', component: CadastraTransacaoComponent}
    ],
}];