import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatToolbarModule } from "@angular/material/toolbar";
import { RouterModule } from "@angular/router";

@Component({
    selector: 'app-transacao',
    standalone: true,
    imports: [
        MatIconModule,
        MatToolbarModule,
        MatButtonModule,
        RouterModule,
        MatMenuModule,
        FlexLayoutModule,
        ReactiveFormsModule
    ],
    template: `
    <mat-toolbar color="primary">
      <button mat-icon-button class="example-icon" [matMenuTriggerFor]="menu" aria-label="Example icon-button with menu icon">
        <mat-icon>menu</mat-icon>
      </button>
      <mat-menu #menu="matMenu">
        <button mat-menu-item routerLink="/register" routerLinkActive="active" ariaCurrentWhenActive="page">
          <mat-icon>add</mat-icon>
          <span>Cadastrar</span>
        </button>
        <button mat-menu-item routerLink="/login" routerLinkActive="active" ariaCurrentWhenActive="page">
          <mat-icon>account_circle</mat-icon>
          <span>Login</span>
        </button>
      </mat-menu>
      <span>Contas a Pagar</span>
      <span class="example-spacer"></span>
      <button mat-icon-button class="example-icon" aria-label="Example icon-button with share icon">
        <mat-icon>share</mat-icon>
      </button>
    </mat-toolbar>
    <main>
      <router-outlet></router-outlet>
    </main>
    `,
    styleUrls: ['./transacao.component.scss']
})
export class TransacaoComponent {}