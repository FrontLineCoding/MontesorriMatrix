'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GuideNote extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      GuideNote.belongsTo(models.GuideCode, { foreignKey: 'guideNotesId' });
    }
  }
  GuideNote.init(
    {
      activityId: DataTypes.INTEGER,
      childId: DataTypes.INTEGER,
      noteCategory: DataTypes.STRING,
      noteDescription: DataTypes.STRING,
      pointsToConsider: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'GuideNote',
    }
  );
  return GuideNote;
};
