import * as uuid from "uuid";

declare global {
  interface Object {
    __id(): string;
  }
}

const ObjectIdMap = new WeakMap();

Object.defineProperty(Object.prototype, "__id", {
  set(id: string) {
    ObjectIdMap.set(this, id);
  },
  get() {
    const objectId = ObjectIdMap.get(this);
    if (objectId) {
      return objectId;
    } else {
      const nextObjectId = uuid.v4().split("-").join("");
      ObjectIdMap.set(this, nextObjectId);
      return nextObjectId;
    }
  },
});
