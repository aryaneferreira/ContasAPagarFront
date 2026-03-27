import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-cadastra-transacao',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatInputModule,
    FlexLayoutModule,
    RouterModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatRadioModule,
    MatSelectModule,
    NgFor
  ],
  templateUrl: './cadastra-transacao.component.html',
  styleUrls: ['./cadastra-transacao.component.css']
})
export class CadastraTransacaoComponent {
    form: FormGroup;

    categorias = [
        { id: 1, nome: 'Alimentação' },
        { id: 2, nome: 'Transporte' },
        { id: 3, nome: 'Moradia' },
        { id: 4, nome: 'Lazer' },
        { id: 5, nome: 'Saúde' },
        { id: 6, nome: 'Educação' },
        { id: 7, nome: 'Salário' },
        { id: 8, nome: 'Outros' }
    ];
    cartoes = [
        { id: 1, nome: 'Itau' },
        { id: 2, nome: 'Bradesco' },
        { id: 3, nome: 'Nubank' },
        { id: 4, nome: 'C6' },
        { id: 5, nome: 'Inter' },
        { id: 6, nome: 'Santander' },
        { id: 7, nome: 'Banco do Brasil' },
        { id: 8, nome: 'Caixa' }
    ];

    constructor(private fb: FormBuilder){
        this.form = this.fb.group({
          tipo: ['', [Validators.required]],
          valor: ['', [Validators.required]],
          descricao: ['', [Validators.required]],
          categoria: ['', [Validators.required]],
          cartao: ['', [Validators.required]]
        });
    }
}