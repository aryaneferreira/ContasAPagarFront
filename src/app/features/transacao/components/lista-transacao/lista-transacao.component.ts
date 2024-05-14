import { Component, OnInit } from '@angular/core';
import { TiposTransacaoService } from '../../../../services/tipos-transacao.service';

@Component({
  selector: 'app-listar-transacao',
  standalone: true,
  templateUrl: './lista-transacao.component.html',
  styleUrls: ['./lista-transacao.component.css']
})
export class ListaTransacaoComponent implements OnInit{

    tiposTransacao: any[] = [];

    constructor(private tiposTransacaoService: TiposTransacaoService) {}

    ngOnInit(): void {
      this.carregarTiposTransacao();
    }

    carregarTiposTransacao():void{
      this.tiposTransacaoService.ObtemTiposTransacao().subscribe((data:any[]) => {
            this.tiposTransacao = data;
      });
    }
}