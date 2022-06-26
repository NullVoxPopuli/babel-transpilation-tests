"use strict";

var _class, _descriptor;

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

function f(target, key, desc) {
  let oldGet = desc.get;

  desc.get = () => {
    console.log('called f on ', key);
    return oldGet();
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
}, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "g", [f], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class);
let a = new A();
console.log(f.g, a.c);
