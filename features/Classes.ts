class vehicle {
  constructor(public name: string) {}

  protected honk(): void {
    console.log('beep');
  }
}

// if it's private, even instance of the class can not access it.
// protected: extended class methods have access.
