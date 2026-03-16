import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})
export class Cadastro {

  cliente: Cliente = new Cliente();

  salvar() {
    localStorage.setItem('cliente', JSON.stringify(this.cliente));
    alert('Cliente cadastrado com sucesso!');
    this.cliente = new Cliente();
  }

}