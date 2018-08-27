import {BingoCell} from './bingo-cell';

export class BingoCard {
  cells: BingoCell[][];

  constructor() {
    this.cells = [];
    this.fillInCard();
  }


  fillInCard() {
    let idCounter = 0;
    let additions = [];
    for(let i = 0; i < 5; i++){
      additions.push(this.getRandomColumnNumbers());
    }

    for (let i = 0; i < 5; i++) {
      this.cells[i] = [];

      for (let j = 0; j < 5; j++) {
        this.cells[i][j] = new BingoCell(idCounter++, (j * 15 + additions[j][i]));
      }
    }

    this.cells[2][2] = new BingoCell(this.cells[2][2].id, 'Free');
  }

  getRandomColumnNumbers(): number[] {
    let colNumbers = [];
    while (colNumbers.length < 5) {
      let num = Math.floor(Math.random() * 15) + 1;
      if (!this.contains(colNumbers, num)) {
        colNumbers.push(num);
      }
    }
    return colNumbers;

  }

  contains(numArray: number[], num: number): boolean {
    for (let i = 0; i < numArray.length; i++) {
      if (num == numArray[i]) {
        return true;
      }
    }

    return false;
  }

  hasBingo(): boolean {
    return false;
  }
}
