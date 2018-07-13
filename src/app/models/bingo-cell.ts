export class BingoCell {
  id: number;
  selected: boolean;
  value: string;

  constructor(id: number, value: string){
    this.id = id;
    this.value = value;
    this.selected = false;
  }
}
