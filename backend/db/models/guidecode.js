'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GuideCode extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      GuideCode.hasOne(models.GuideNote);
    }
  }
  GuideCode.init(
    {
      guideNotesId: DataTypes.INTEGER,
      codeDescription: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'GuideCode',
    }
  );
  return GuideCode;
};
