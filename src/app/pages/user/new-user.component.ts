import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from './user';
import { UserService } from './user.service';

@Component({
    selector: 'new-user-cmp',
    moduleId: module.id,
    templateUrl: 'new-user.component.html'
})

export class NewUserComponent implements OnInit {

    public novoUserForm!: FormGroup;

    constructor(private userService: UserService,
        private formBuilder: FormBuilder) {

    }

    ngOnInit(){
        this.novoUserForm = this.formBuilder.group(
            {
              nome: ['', [Validators.required, Validators.minLength(3)]],
              email: ['', [Validators.required, Validators.minLength(5)]],
              senha: ['', [Validators.required, Validators.minLength(3)]]
            }
          ); 
    }

    salvar() {
        if(this.novoUserForm.valid) {
            const novoUser = this.novoUserForm.getRawValue() as User;
            this.userService.insertUser(novoUser)
            .subscribe((user: User) => {
                console.log("usuario salvo com sucesso");
                console.log(user);
            })
        }
    }

}
