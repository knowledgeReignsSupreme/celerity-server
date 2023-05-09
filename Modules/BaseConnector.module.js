class BaseConnector {
  constructor(model) {
    this.model = model;
  }

  async findAll(parsedRequest) {
    try {
      let query = this.model.find(
        parsedRequest.query ? parsedRequest.query : {}
      );

      if (parsedRequest.pageSize) {
        query = query.limit(parsedRequest.pageSize);
      }

      if (parsedRequest.pageNumber) {
        const pageSize = parsedRequest.pageSize || 500;
        const skip = parsedRequest.pageNumber * pageSize;
        query = query.skip(skip);
      }

      if (parsedRequest.populate) {
        query = query.populate(parsedRequest.populate);
      }

      const documents = await query;

      return documents;
    } catch (error) {
      console.log(error, `BaseConnector findAll ${this.model.modelName} Error`);
      throw error;
    }
  }

  async findOne(parsedRequest) {
    try {
      const document = await this.model.findOne(parsedRequest.query).lean();

      if (!document) {
        return null;
      }

      return document;
    } catch (error) {
      console.log(error, `BaseConnector findOne ${this.model.modelName} Error`);
      throw error;
    }
  }

  async findOneById(id) {
    try {
      const document = await this.model.findOne({ _id: id }).lean();

      if (!document) {
        return null;
      }

      return document;
    } catch (error) {
      console.log(
        error,
        `BaseConnector findOneById ${this.model.modelName} Error`
      );
      throw error;
    }
  }

  async create(document) {
    try {
      await this.model.create(document);

      return document;
    } catch (error) {
      console.log(error, `BaseConnector create ${this.model.modelName} Error`);
      throw error;
    }
  }

  async findOneAndUpdate(id, document) {
    try {
      const updpatedDocument = await this.model
        .findOneAndUpdate({ _id: id }, { $set: { document } }, { new: true })
        .lean();

      return updpatedDocument;
    } catch (error) {
      console.log(error, `BaseConnector update ${this.model.modelName} Error`);
      throw error;
    }
  }

  async deleteOne(id) {
    try {
      const deleteStatus = await this.model.deleteOne({ _id: id });

      return deleteStatus;
    } catch (error) {
      console.log(error, `BaseConnector delete ${this.model.modelName} Error`);
      throw error;
    }
  }

  async bulkWrite(operations) {
    try {
      await this.model.bulkWrite(operations);

      return;
    } catch (error) {
      console.log(
        error,
        `BaseConnector bulkWrite ${this.model.modelName} Error`
      );
      throw error;
    }
  }
}

module.exports = {
  BaseConnector,
};
