class A {
  #a = 'hi';

  get #b() {
    return 'hello' + this.#a;
  }

  get c() { return this.#b; }

  @f g;
}
