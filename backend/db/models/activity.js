'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Activity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Activity.belongsToMany(models.Child, {
        through: models.Child_Activity,
        foreignKey: 'activityId',
      });
      Activity.belongsToMany(Activity, {
        through: models.Prereq,
        foreignKey: 'prereqActivityId',
        as: 'prereq',
      });
      Activity.belongsToMany(Activity, {
        through: models.Prereq,
        foreignKey: 'activityId',
        as: 'activity',
      });
      Activity.belongsTo(models.GuideNote, { foreignKey: 'activityId' });
    }
  }
  Activity.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      area: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      subcategory: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Activity',
    }
  );
  return Activity;
};
