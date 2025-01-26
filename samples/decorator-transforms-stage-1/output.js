import { g, i } from "decorator-transforms/runtime";
class Demo {
  static {
    g(this.prototype, "foo", [tracked], function () {
      return 0;
    });
  }
  #foo = (i(this, "foo"), void 0);
  inc = () => this.foo++;
}
