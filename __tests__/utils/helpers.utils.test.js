const { isObject, deleteKeysFromObject } = require("../../utils/helpers.utils");

test("testing isObject function", () => {
  expect(isObject([])).toEqual(false);
  expect(isObject("")).toEqual(false);
  expect(isObject("test")).toEqual(false);
  expect(isObject(1)).toEqual(false);
  expect(isObject(10.1)).toEqual(false);
  expect(isObject({})).toEqual(true);
});

test("testning deleteKeysFromObject function", () => {
  const testObject = { key1: "test", key2: "test" };
  deleteKeysFromObject(testObject, ["key1"]);

  expect(testObject).toEqual({ key2: "test" });

  expect(deleteKeysFromObject([])).toBeNull();
  expect(deleteKeysFromObject("")).toBeNull();
  expect(deleteKeysFromObject("test")).toBeNull();
  expect(deleteKeysFromObject({})).toBeNull();

  expect(deleteKeysFromObject({}, [])).toBeUndefined();
});
