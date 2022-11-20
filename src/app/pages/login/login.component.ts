import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { TokenService } from '../../shared/token/token-store.service';
import { Login } from './login';
import { LoginService } from './login.service';
import { Token } from './token';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private loginService: LoginService,
              private tokenService: TokenService,
              private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.minLength(6)]],
        senha: ['', [Validators.required]]
      }
    );
  }

  logar(){
    if(this.loginForm.valid){
      const login = this.loginForm.getRawValue() as Login;
      this.loginService.logarUsuario(login)
        .subscribe((auth: Token) => {
            this.tokenService.salvaToken(auth.token);
            this.tokenService.salvarTipo(auth.tipo);
            this.router.navigate(['table']);
        }) 
    }
  }

}
