export interface ICard {
  id: number;
  imageURL: string;
}

export class Card {
  constructor(public id: number,  public imageURL: string) {
      this.id=id
      this.imageURL=imageURL;

  }
}
