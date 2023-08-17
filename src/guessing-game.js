class GuessingGame {
  constructor() {
    this.min = 0;
    this.max = 0;
  }

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    return (this.average = Math.ceil((this.min + this.max) / 2));
  }

  lower() {
    return (this.max = this.average);
  }

  greater() {
    return (this.min = this.average);
  }
}

module.exports = GuessingGame;
