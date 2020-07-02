import { Component } from '@angular/core';
export interface UserList {
  acao: string;
  position: number;
  nome: string;
  email: string;
  cargo: string;
}

const ELEMENT_DATA: UserList[] = [
  {position: 1, acao: 'Criar Produtos', nome: 'Ana Maria', email: 'anamaria@store.com', cargo: 'Gerente'},
  {position: 2, acao: 'Visualizar Produtos', nome: 'José Oliveira', email: 'joseoliveira@store.com', cargo: 'Atendente'},
  {position: 3, acao: 'Deletar produtos', nome: 'Laércio Dias', email: 'laerciodias@store.com', cargo: 'Encarregado de Estoque'},
  {position: 4, acao: 'Análise de Vendas', nome: 'Lídia das Flores', email: 'lidiaflores@store.com', cargo: 'CEO'},
  {position: 5, acao: 'Controlar catalogo', nome: 'Joaquim Castro', email: 'joaquimcastro@store.com', cargo: 'Atendente'},
];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'angular-e-commerce';
  showFiller = false;
  hide = true;
  displayedColumns: string[] = ['position', 'acao', 'nome', 'email', 'cargo'];
  dataSource = ELEMENT_DATA;
}
