import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  title = 'Calculadora';

  displayValorAnterior: HTMLElement | null;
  displayValorActual: HTMLElement | null;
  botonesNumeros: NodeListOf<Element>;
  botonesOperadores: NodeListOf<Element>;

  constructor() {
    this.displayValorAnterior = document.getElementById('valor-anterior');
    this.displayValorActual = document.getElementById('valor-actual');
    this.botonesNumeros = document.querySelectorAll('.numero');
    this.botonesOperadores = document.querySelectorAll('.operador');

    //display = new Display(displayValorAnterior, displayValorActual);

    console.log(this.botonesNumeros)

    this.botonesNumeros.forEach(boton => {
      boton.addEventListener('click', () => this.display.agregarNumero(boton.innerHTML));
    });

    console.log(this.botonesOperadores)

    /*
    this.botonesOperadores.forEach((boton: HTMLElement) => {
      boton.addEventListener('click', () => this.display.computar(boton.value));
    });
    */
  }

  valorAnterior: number | null = null;
  valorActual: number | null = null;

  calculadora = {
    sumar(num1: number, num2: number) {
      return num1 + num2;
    },

    restar(num1: number, num2: number) {
      return num1 - num2;
    },

    dividir(num1: number, num2: number) {
      return num1 / num2;
    },

    multiplicar(num1: number, num2: number) {
      return num1 * num2;
    }
  }




  display = {
    borrar() {

    },

    borrarTodo() {

    },

    computar(operador:string) {

    },

    agregarNumero(numero:string) {
      console.log("agregarNumero() agregado al boton" + numero)
    },

    calcular() {

    }
  }




}
