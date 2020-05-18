# object-uuid-polyfill

![https://github.com/kamataryo/wwwdiff/actions](https://github.com/kamataryo/object-uuid-polyfill/workflows/npmpublish/badge.svg)

Polyfill to extend `Object` with `Object.prototype.__id`.

## Prerequisites

Node.js > 12

## install and usage

```shell
$ yarn add object-uuid-polyfill
```

```javascript
import "object-uuid-polyfill";

const obj1 = {};
const obj2 = {};
const obj3 = obj2;
console.log(obj1.__id);
console.log(obj2.__id);
console.log(obj3.__id);
```

## development

```shell
$ git clone git@github.com:kamataryo/object-uuid-polyfill.git
$ cd object-uuid-polyfill
$ yarn
$ npm test
```
