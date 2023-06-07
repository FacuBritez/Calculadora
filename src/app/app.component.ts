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
  botonesNumeros: NodeListOf<Element> = document.querySelectorAll('numero');
  botonesOperadores: NodeListOf<Element> = document.querySelectorAll('.operador');

  //Es para que se ejecute despues de que se cargue el DOM, sino se asignan cosas vacias.
  ngAfterViewInit() {
    this.displayValorAnterior = document.getElementById('valor-anterior');
    this.displayValorActual = document.getElementById('valor-actual');
    this.botonesNumeros = document.querySelectorAll('.numero');
    this.botonesOperadores = document.querySelectorAll('.operador');

    this.botonesNumeros.forEach(boton => {
      boton.addEventListener('click', () => this.display.agregarNumero(boton.innerHTML));
    });

    this.botonesOperadores.forEach((boton) => {
      if (boton instanceof HTMLButtonElement) {
        boton.addEventListener('click', () => this.display.computar(boton.value));
      }
    });
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

    computar(operador: string) {
      console.log("computar() agregado al boton" + operador)
    },

    agregarNumero(numero: string) {
      console.log("agregarNumero() agregado al boton" + numero)
    },

    calcular() {

    }
  }


  /*
    displayValorAnterior: number = 0;
    displayValorActual: number = 0;
    tipoOperacion: string = '';
  
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
