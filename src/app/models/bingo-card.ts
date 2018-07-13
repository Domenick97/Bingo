import {BingoCell} from './bingo-cell';

export class BingoCard {
  cells: BingoCell[][];

  constructor() {
    this.cells = [];
    this.fillInCard();
  }


  fillInCard() {
    let idCounter = 0;
    for (let i = 0; i < 5; i++) {
      this.cells[i] = [];

      for (let j = 0; j < 5; j++) {
        if (i == 2 && j == 2)
          this.cells[i][j] = new BingoCell(idCounter++, 'Free');
        else
          this.cells[i][j] = new BingoCell(idCounter++, 'F');
      }
    }

  }
}
