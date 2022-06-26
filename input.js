function f(target, key, desc) {
  let oldGet = desc.get
  let oldInit = desc.initializer

  desc.get =() => {
    console.log('called f on ', key);
    return oldInit?.() || oldGet();
  }
}
class A {
  #a = 'hi';

  get #b() {
    return 'hello' + this.#a;
  }

  get c() { return this.#b; }

  @f g;

  @f h = 2;

  i = 3;
}

let a = new A();

console.log({ g: f.g, c: a.c, h: a.h, i: a.i });
