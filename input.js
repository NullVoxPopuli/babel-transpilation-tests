function f(target, key, desc) {
  let oldGet = desc.get

  desc.get = () => {
    console.log('called f on ', key);
    return oldGet();
  };
}
class A {
  #a = 'hi';

  get #b() {
    return 'hello' + this.#a;
  }

  get c() { return this.#b; }

  @f g;
}

let a = new A();

console.log(f.g, a.c);
