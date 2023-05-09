const { deleteKeysFromObject } = require("../utils/helpers.utils");

export const parseRequest = () => {
  return (req, res, next) => {
    const params = req.params;
    const pageSize = params.pageSize;
    const pageNumber = params.pageNumber;
    const populate = params.populate;

    deleteKeysFromObject(params, ["pageSize", "pageNumber", "populate"]);

    const parsedRequest = {
      ...params,
      pageSize: Number(pageSize),
      pageNumber: Number(pageNumber),
      populate,
    };

    req.parsedRequest = parsedRequest;

    next();
  };
};
