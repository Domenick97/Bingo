import {Component, OnInit} from '@angular/core';
import {BingoCell} from '../models/bingo-cell';

@Component({
  selector: 'app-bingo',
  templateUrl: './bingo.component.html',
  styleUrls: ['./bingo.component.css']
})
export class BingoComponent implements OnInit {

  userCard: BingoCell[][];
  computerCard: BingoCell[][];

  constructor() {
  }

  ngOnInit() {
    console.log("First returned:\n" + this.fillInCard(this.userCard));
    this.fillInCard(this.computerCard);

    // TODO: Remove test
    // Test to see if they update by pass by reference or are they pass by value only
    console.log("Usercard:\n" + this.userCard);
  }

  private fillInCard(card: BingoCell[][]): BingoCell[][]{
    let idCounter = 0;

    for(let cellArray of card){
      for(let cell of cellArray){
        cell.id = idCounter++;
        cell.value = "F";
      }

    }

    return null;
  }

}
