'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'ChildAllergies',
      [
        {
          childId: 1,
          allergy: 'Peanuts',
        },
        {
          childId: 2,
          allergy: 'Peanuts',
        },
        {
          childId: 1,
          allergy: 'Pineapple',
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
