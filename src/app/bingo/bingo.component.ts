import {Component, OnInit} from '@angular/core';
import {BingoCell} from '../models/bingo-cell';
import {BingoCard} from '../models/bingo-card';

@Component({
  selector: 'app-bingo',
  templateUrl: './bingo.component.html',
  styleUrls: ['./bingo.component.css']
})
export class BingoComponent implements OnInit {

  userCard;
  computerCard;

  constructor() {
  }

  ngOnInit() {
    this.userCard = new BingoCard();
    this.computerCard = new BingoCard();
  }

}
