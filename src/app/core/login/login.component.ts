import { Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MainMenuComponent } from 'src/app/main-menu/main-menu.component';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    //RouterOutlet,
    //RouterModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MainMenuComponent
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private loginService: LoginService){
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  logar() {
    debugger;
    var email = this.loginForm.get('email')?.value;
    var password = this.loginForm.get('password')?.value;
    this.loginService.login(email, password)
    .subscribe(data => {
      console.log(data)
    });
  }
}
