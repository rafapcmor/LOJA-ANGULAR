import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-produto-alertas',
  templateUrl: './produto-alertas.component.html',
  styleUrls: ['./produto-alertas.component.css']
})
export class ProdutoAlertasComponent {

  @Input() produto;
  @Output() notify = new EventEmitter();

}
