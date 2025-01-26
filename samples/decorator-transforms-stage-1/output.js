import { g, i } from "decorator-transforms/runtime";
class Demo {
  static {
    hi(this, there());
  }
  static {
    g(this.prototype, "foo", [tracked], function () {
      return 0;
    });
  }
  #foo = (i(this, "foo"), void 0);
  inc = () => this.foo++;
  #private() {}
  #privateProperty = 0;
}
