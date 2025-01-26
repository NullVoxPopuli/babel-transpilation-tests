import { g, i } from "decorator-transforms/runtime";
function f(target, key, desc) {
  let oldGet = desc.get;
  let oldInit = desc.initializer;
  desc.get = () => {
    console.log('called f on ', key);
    return oldInit?.() || oldGet();
  };
}
class A {
  #a = 'hi';
  get #b() {
    return 'hello' + this.#a;
  }
  get c() {
    return this.#b;
  }
  static {
    g(this.prototype, "g", [f]);
  }
  #g = (i(this, "g"), void 0);
  static {
    g(this.prototype, "h", [f], function () {
      return 2;
    });
  }
  #h = (i(this, "h"), void 0);
  i = 3;
}
let a = new A();
console.log({
  g: f.g,
  c: a.c,
  h: a.h,
  i: a.i
});
