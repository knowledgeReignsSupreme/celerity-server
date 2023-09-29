exports.getNewKey = async function (schema, { schemaName, keyField = "key" }) {
  schema.pre("save", async function () {
    const model = this.model(schemaName);

    const latestDocument = await model.findOne({}).sort({ _id: -1 }).lean();

    this[keyField] = latestDocument?.[keyField] + 1 || 0;
  });
};
