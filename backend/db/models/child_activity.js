'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Child_Activity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Child_Activity.hasOne(models.GuideNote);
    }
  }
  Child_Activity.init(
    {
      activityId: DataTypes.INTEGER,
      childId: DataTypes.INTEGER,
      masteryLevel: DataTypes.STRING,
      guideNotesId: DataTypes.INTEGER,
      date: DataTypes.DATE,
      startTime: DataTypes.DATE,
      endTime: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'Child_Activity',
    }
  );
  return Child_Activity;
};
