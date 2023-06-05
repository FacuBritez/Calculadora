import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  title = 'Calculadora';

  valorAnterior:number|null = null;
  valorActual:number|null = null;

  borrar() {

  }

  borrarTodo() {

  }

  computar() {

  }

  agregarNumero() {

  }

  calcular() {
    
  }


/*
  displayValorAnterior: number = 0;
  displayValorActual: number = 0;
  tipoOperacion: string = '';

  Calculadora = {
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

  Display = {

    displayValorAnterior: number = 0;
    displayValorActual: number = 0;
    tipoOperacion = '';
    valorActual: number = 0;

    this.displayValorActual = this.displayValorActual,
    this.displayValorAnterior = displayValorAnterior,
    this.calculadora = new this.Calculadora(),
    this.tipoOperacion = undefined,
    this.valorActual = "",
    this.valorAnterior = "",
    this.signos = {
      sumar: '+',
      dividir: '%',
      multiplicar: 'x',
      restar: '-',
    },

    borrar() {
      this.valorActual = this.valorActual.toString().slice(0, -1)
      this.imprimirValores();
    },

    borrarTodo() {
      this.valorActual = '';
      this.valorAnterior = '';
      this.tipoOperacion = undefined;
      this.imprimirValores();
    },

    computar(tipo:string) {
      this.tipoOperacion !== 'igual' && this.calcular()
      this.tipoOperacion = tipo;
      this.valorAnterior = this.valorActual || this.valorAnterior;
      this.valorActual = '';
      this.imprimirValores();
    },

    agregarNumero(numero:string) {
      if (numero == '.' && this.valorActual.includes('.')) return
      this.valorActual = this.valorActual.toString() + numero.toString();
      this.imprimirValores();
    },

    imprimirValores() {
      this.displayValorActual.textContent = this.valorActual;
      this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`;
    },

    calcular() {
      const valorAnterior = parseFloat(this.valorAnterior);
      const valorActual = parseFloat(this.valorActual);

      if (isNaN(valorActual) || isNaN(valorAnterior)) return
      this.valorActual = this.calculadora[this.tipoOperacion](valorAnterior, valorActual);
    }
  }
*/

}
