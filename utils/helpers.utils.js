export function isObject(object) {
  return typeof object === "object" && object !== null;
}

export function deleteKeysFromObject(object, keys) {
  if (!isObject(object)) return;

  for (const key of keys) {
    delete object[key];
  }
}
