const { deleteKeysFromObject } = require("../utils/helpers.utils");
const { parse } = require("qs");

exports.parseRequest = (req, res, next) => {
  const query = req.query;
  const pageSize = query.pageSize;
  const pageNumber = query.pageNumber;
  const populate = query.populate;

  deleteKeysFromObject(query, ["pageSize", "pageNumber", "populate"]);

  const parsedRequest = {
    // filter: { ...query },
    filter: { ...req.rqlQuery },
    pageSize: Number(pageSize),
    pageNumber: Number(pageNumber),
    populate,
  };

  req.parsedRequest = parsedRequest;

  next();
};
exports.rqlParser = (req, res, next) => {
  const filter = {};
  const parts = req.query.rql.split(";");
  for (const part of parts) {
    const [key, value] = part.split("=");
    const parts = key.split(".");
    let current = filter;
    for (const part of parts) {
      if (!current[part]) {
        current[part] = {};
      }
      current = current[part];
    }
    const operator = parts[parts.length - 1].split("=")[0] || "eq";
    current[operator] = value;
  }

  console.log("fi", filter);
  return filter;
  next();
};
