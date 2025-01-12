'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('UserProjects', [
      { UserId: 1, ProjectId: 1, createdAt: new Date(), updatedAt: new Date() },
      { UserId: 1, ProjectId: 2, createdAt: new Date(), updatedAt: new Date() },
      { UserId: 2, ProjectId: 1, createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('UserProjects', null, {});
  },
};
