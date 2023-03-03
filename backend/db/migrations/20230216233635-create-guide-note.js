'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('GuideNotes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      activityId: {
        type: Sequelize.INTEGER,
      },
      childId: {
        type: Sequelize.INTEGER,
      },
      noteCategory: {
        type: Sequelize.STRING,
      },
      noteDescription: {
        type: Sequelize.STRING,
      },
      pointsToConsider: {
        type: Sequelize.TEXT,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('GuideNotes');
  },
};
