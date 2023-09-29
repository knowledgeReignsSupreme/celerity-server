function isObject(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function deleteKeysFromObject(object, keys) {
  if (!isObject(object) || !keys) return null;

  for (const key of keys) {
    delete object[key];
  }
}

module.exports = {
  isObject,
  deleteKeysFromObject,
};
