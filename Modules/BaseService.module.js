class BaseService {
  constructor(connector, model) {
    this.connector = new connector(model);
  }

  async findAll(parsedRequest) {
    try {
      const documents = await this.connector.findAll(parsedRequest);

      return documents;
    } catch (error) {
      console.log(error, `BaseService findAll Error`);
      throw error;
    }
  }

  async findOne(parsedRequest) {
    try {
      const document = await this.connector.findOne(parsedRequest);

      if (!document) {
        return null;
      }

      return document;
    } catch (error) {
      console.log(error, `BaseService findOne Error`);
      throw error;
    }
  }

  async findOneById(id) {
    try {
      const document = await this.connector.findOneById(id);

      if (!document) {
        return null;
      }

      return document;
    } catch (error) {
      console.log(error, `BaseService findOneById Error`);
      throw error;
    }
  }

  async create(document) {
    try {
      await this.connector.create(document);

      return document;
    } catch (error) {
      console.log(error, `BaseService create Error`);
      throw error;
    }
  }

  async findOneAndUpdate(id, document) {
    try {
      const updpatedDocument = await this.connector.findOneAndUpdate(
        id,
        document
      );

      return updpatedDocument;
    } catch (error) {
      console.log(error, `BaseService findOneAndUpdate Error`);
      throw error;
    }
  }

  async deleteOne(id) {
    try {
      const deleteStatus = await this.connector.deleteOne(id);

      return deleteStatus;
    } catch (error) {
      console.log(error, `BaseService delete Error`);
      throw error;
    }
  }

  async bulkWrite(operations) {
    try {
      await this.connector.bulkWrite(operations);

      return;
    } catch (error) {
      console.log(error, `BaseService bulkWrite Error`);
      throw error;
    }
  }
}

module.exports = {
  BaseService,
};
