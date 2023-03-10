'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Content extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Content is associated to ContentType
      Content.belongsTo(models.ContentType, {
        foreignKey: 'contentTypeId',
      });
    }
  }
  Content.init({
    name: DataTypes.STRING,
    contentTypeId: DataTypes.INTEGER,
    website: DataTypes.STRING,
    contact: DataTypes.STRING,
    data: DataTypes.JSON
  }, {
    sequelize,
    modelName: 'Content',
  });
  return Content;
};