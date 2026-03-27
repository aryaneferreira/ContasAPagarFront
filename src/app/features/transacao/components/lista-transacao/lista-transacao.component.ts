import { Component, OnInit } from '@angular/core';
import { TiposTransacaoService } from '../../../../services/tipos-transacao.service';
import { MatListModule } from '@angular/material/list'
import { CommonModule } from '@angular/common';
import { TiposTransacaoModel } from '../../../../models/tipos-transacao-model';
import { TransacaoService } from 'src/app/services/transacao.service';
import { TransacaoModel } from 'src/app/models/transacao-model';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-listar-transacao',
  standalone: true,
  imports: [
    MatListModule,
    MatDividerModule,
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    // ReactiveFormsModule,
    FlexLayoutModule,
    RouterModule
  ],
  templateUrl: './lista-transacao.component.html',
  styleUrls: ['./lista-transacao.component.css']
})
export class ListaTransacaoComponent implements OnInit{

    tiposTransacao: TiposTransacaoModel[] = [];
    transacoes: TransacaoModel[] = [];

    constructor(private tiposTransacaoService: TiposTransacaoService,
      private transacaoService: TransacaoService,
    ) {}

    ngOnInit(): void {
      this.carregarTiposTransacao();
      this.carregarTransacao();
    }

    carregarTiposTransacao(): void{
      this.tiposTransacaoService.obtemTiposTransacao().subscribe((data:TiposTransacaoModel[]) => {
          this.tiposTransacao = data;
      });
    }

    carregarTransacao(): void{
      this.transacaoService.obterTransacoes().subscribe((data: TransacaoModel[]) => {
          this.transacoes = data;
      });
    }
}