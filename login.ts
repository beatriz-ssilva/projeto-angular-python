import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  email: string = '';
  senha: string = '';
  usuarioLogado: string = '';

  entrar() {

    const clienteSalvo = localStorage.getItem('cliente');

    if (clienteSalvo) {

      const cliente = JSON.parse(clienteSalvo);

      if (cliente.email === this.email && cliente.senha === this.senha) {

        this.usuarioLogado = cliente.nome;

        alert('Login realizado com sucesso!');

      } else {
        alert('Email ou senha inválidos');
      }

    } else {
      alert('Nenhum usuário cadastrado');
    }

  }

}