const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Project extends Model {
    static associate(models) {
      Project.belongsToMany(models.User, { through: 'UserProjects' });
      Project.hasMany(models.Task, { foreignKey: 'projectId' });
    }
  }
  Project.init(
    {
      name: DataTypes.STRING,
      ownerId: DataTypes.INTEGER,
    },
    { sequelize, modelName: 'Project' }
  );
  return Project;
};
