import { Component, OnInit } from '@angular/core';
import {produtos} from '../produtos';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent{

produtos = produtos;

  compartilhar() {
    window.alert('O produto foi compartilhado!');
  }
  notificar() {
    window.alert('Você será notificado quando o produto estiver disponível para venda!');
  }
}
