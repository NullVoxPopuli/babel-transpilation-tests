"use strict";

var _class, _descriptor, _descriptor2;

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

function f(target, key, desc) {
  let oldGet = desc.get;
  let oldInit = desc.initializer;

  desc.get = () => {
    console.log('called f on ', key);
    return oldInit?.() || oldGet();
  };
}

let A = (_class = class A {
  #a = 'hi';

  get #b() {
    return 'hello' + this.#a;
  }

  get c() {
    return this.#b;
  }

  g = _initializerWarningHelper(_descriptor, this);
  h = _initializerWarningHelper(_descriptor2, this);
  i = 3;
}, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "g", [f], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "h", [f], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 2;
  }
})), _class);
let a = new A();
console.log({
  g: f.g,
  c: a.c,
  h: a.h,
  i: a.i
});
