import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jason-component',
  templateUrl: './jason-component.component.html',
  styleUrls: ['./jason-component.component.css']
})
export class JasonComponentComponent implements OnInit {
  numberA: number = 1;
  numberB: number = 2;
  numberC: number;
  lastOp: string = '+';
  db;

  constructor() { }

  ngOnInit() {
  }

  // resultAddition() {
  //   this.numberC=(1*(this.numberA))+(1*(this.numberB))
  // }

  // resultMultiplication() {
  //   this.numberC=(1*(this.numberA))*(1*(this.numberB))
  // }

  calculator3() {
    this.calculator(this.lastOp);
  }

  calculator2(event: any) { 
    this.calculator((<HTMLInputElement>event.target).value);
   }
  
  calculator(event: string) {
    this.db = `lastOp=${this.lastOp},event=${event},numberA=${this.numberA},numberB=${this.numberB},`
    this.lastOp = event;
    switch (event) {
      case '+':
        this.numberC = (1 * this.numberA) + (1 * this.numberB);
        break;
      case '-':
        this.numberC = (1 * this.numberA) - (1 * this.numberB);
        break;
      case '*':
        this.numberC = (1 * this.numberA) * (1 * this.numberB);
        break;
      case '/':
        this.numberC = (1 * this.numberA) / (1 * this.numberB);
        break;
      case '%':
        this.numberC = (1 * this.numberA) % (1 * this.numberB);
        break;
    }
    this.db += `numberC=${this.numberC}`
  }
}
