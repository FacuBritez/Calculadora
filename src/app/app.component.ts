import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  title = 'Calculadora';

  displayValorAnterior: HTMLElement | null = null;
  displayValorActual: HTMLElement | null = null;
  botonesNumeros: NodeListOf<Element> = document.querySelectorAll('.numero');
  botonesOperadores: NodeListOf<Element> = document.querySelectorAll('.operador');

  //Es para que se ejecute despues de que se cargue el DOM, sino se asignan cosas vacias.
  ngAfterViewInit() {
    this.displayValorAnterior = document.getElementById('valor-anterior');
    this.displayValorActual = document.getElementById('valor-actual');
    this.display.displayValorActual = this.displayValorActual;
    this.display.displayValorAnterior = this.displayValorAnterior;
    console.log(this.displayValorActual);
    this.botonesNumeros = document.querySelectorAll('.numero');
    this.botonesOperadores = document.querySelectorAll('.operador');

    this.botonesNumeros.forEach(boton => {
      boton.addEventListener('click', () => this.display.agregarNumero(boton.innerHTML));
    });


    //Console.log() para ver el valor de los operadores
    this.botonesOperadores.forEach((boton) => {
      if (boton instanceof HTMLButtonElement) {
        console.log(boton.value);
      }
    });


    this.botonesOperadores.forEach((boton) => {
      if (boton instanceof HTMLButtonElement) {
        boton.addEventListener('click', () => this.display.computar(boton.value));
      }
    });
  }

  valorAnterior: number | null = null;
  valorActual: number | null = null;

  display = {

    calculadora: {
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
    },

    signos: {
      sumar: '+',
      dividir: '%',
      multiplicar: 'x',
      restar: '-',
    },

    tipoOperacion: '',
    valorActual: '',
    valorAnterior: '',

    borrar() {
      this.valorActual = this.valorActual.toString().slice(0, -1)
      this.imprimirValores();
      console.log("borrar()")
    },

    borrarTodo() {
      this.valorActual = '';
      this.valorAnterior = '';
      this.tipoOperacion = '';
      this.imprimirValores();
      console.log("borrarTodo()")
    },

    computar(operador: string) {
      if (this.tipoOperacion !== 'igual') {this.calcular()}
      this.tipoOperacion = operador;

      this.valorAnterior = this.valorActual || this.valorAnterior;

      this.valorActual = '';
      this.imprimirValores();
      console.log("computar()" + operador);
    },

    agregarNumero(numero: string) {
      if (numero == '.' && this.valorActual.includes('.')) return
      this.valorActual += numero;
      this.imprimirValores();
      console.log("agregarNumero() el numero actual es " + this.valorActual)
    },

    displayValorActual: this.displayValorActual,
    displayValorAnterior: this.displayValorAnterior,

    imprimirValores() {

      console.log("imprimirValores()")
      console.log("imprimirValores() valores antes del if: " + this.displayValorActual + ' ' + this.displayValorAnterior)

      if (this.displayValorActual == null || this.displayValorAnterior == null) return

      this.displayValorActual.textContent = this.valorActual;
      this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion as keyof typeof this.signos] || ''}`;
    },

    calcular() {
      const valorAnterior = parseFloat(this.valorAnterior);
      const valorActual = parseFloat(this.valorActual);

      console.log("calcular() " + this.tipoOperacion)

      if (isNaN(valorActual) || isNaN(valorAnterior) ) return
      this.valorActual = this.calculadora[this.tipoOperacion as keyof typeof this.signos](valorAnterior, valorActual).toString();
      console.log("calcular()");
    }
  }
}