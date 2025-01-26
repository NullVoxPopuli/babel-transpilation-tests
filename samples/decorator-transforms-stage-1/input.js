class Demo {
  static {
    hi(this, there())
  }

  @tracked foo = 0;

  inc = () => this.foo++;

  #private() { }
  #privateProperty = 0;
}
