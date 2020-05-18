import "./";
import test from "ava";

test("They have a same id", (t) => {
  const a = {};
  const b = a;
  t.true(a.__id === b.__id);
});

test("They have differenct ids", (t) => {
  const a = {};
  const b = {};
  t.false(a.__id === b.__id);
});
