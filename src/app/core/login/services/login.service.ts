import { Injectable } from '@angular/core';
import { LoginRepository } from '../repositories/login.repository';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  constructor(private loginRepository: LoginRepository) { }

  login(email: string, password: string): Observable<string>{
    return this.loginRepository.login(email, password);
  }
}