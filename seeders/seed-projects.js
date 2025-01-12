'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Projects', [
      {
        name: 'Project A',
        ownerId: 1, // Assuming user ID 1 owns this project
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Project B',
        ownerId: 2, // Assuming user ID 2 owns this project
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Projects', null, {});
  },
};
