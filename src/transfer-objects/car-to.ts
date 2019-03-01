export class CarTO {
  private carName: string;
  private carId: string;
  constructor(id: string, name: string) {
    this.carId = id;
    this.carName = name;
  }

  public getCarId(): string {
    return `Bonjour, car With id: ${this.carId}!`;
  }

  public getCarName(): string {
    return `Bonjour, ${this.carName}!`;
  }
}
