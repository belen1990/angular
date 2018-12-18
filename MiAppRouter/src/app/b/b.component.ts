import { Component, OnInit } from '@angular/core';
import { Pedido } from '../models/pedidos';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.scss']
})
export class BComponent implements OnInit {

  pedidos: Pedido[]=null;

  constructor() { }

  ngOnInit() {
    this.pedidos=[
      new Pedido(1,'tejanos',23),
      new Pedido(2,'camisa',23),
      new Pedido(3,'falda',23),
      new Pedido(4,'jersey',23),
    ]
  }

}