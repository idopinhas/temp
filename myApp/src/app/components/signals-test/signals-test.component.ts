import { Component, Signal, signal } from '@angular/core';

@Component({
  selector: 'app-signals-test',
  templateUrl: './signals-test.component.html',
  styleUrl: './signals-test.component.scss'
})
export class SignalsTestComponent {

  itemList = signal<any>([]);

  constructor() {
    this.itemList.set([
      { id: 1, name: 'ido', company: 'mobileeye' },
      { id: 2, name: 'einat', company: 'intel' },
      { id: 3, name: 'roni', company: 'natural company' },
    ])
    this.TempFunctionTrySignal();
  }

  removeItem(item: any) {
    this.itemList.set(this.itemList().filter((currentItem: any) => {
      return currentItem.id !== item.id;
    }))
  }

  TempFunctionTrySignal() {
    console.log(this.itemList());
  }
}


// C - PUSH TO SOME ARRAY AND SET INTO SIGNAL .
// R - CALL SIGNAL NAME WITH () EG: ItemList().
// U - Update function on signal .
// D - Remove from the array and SET INTO SIGNAL .
