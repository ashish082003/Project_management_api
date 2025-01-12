const { Project, User, Task, UserProjects } = require('../models');

// Create a new project
const createProject = async (req, res) => {
  try {
    const { name, ownerId } = req.body;
    const project = await Project.create({ name, ownerId });
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all projects
const getProjects = async (req, res) => {
  try {
    const projects = await Project.findAll();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a project by ID
const getProjectById = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findByPk(id, {
      include: [
        { model: User, through: { attributes: [] } },
        { model: Task },
      ],
    });
    if (!project) return res.status(404).json({ error: 'Project not found' });
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a project
const updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const project = await Project.findByPk(id);
    if (!project) return res.status(404).json({ error: 'Project not found' });
    project.name = name;
    await project.save();
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a project
const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findByPk(id);
    if (!project) return res.status(404).json({ error: 'Project not found' });
    await project.destroy();
    res.status(200).json({ message: 'Project deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add a user to a project
const addUserToProject = async (req, res) => {
  try {
    const { id } = req.params; // project ID
    const { userId } = req.body;
    const project = await Project.findByPk(id);
    const user = await User.findByPk(userId);

    if (!project || !user) return res.status(404).json({ error: 'Project or User not found' });

    await UserProjects.create({ ProjectId: id, UserId: userId });
    res.status(200).json({ message: 'User added to project successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all tasks for a project
const getProjectTasks = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findByPk(id, { include: [Task] });
    if (!project) return res.status(404).json({ error: 'Project not found' });
    res.status(200).json(project.Tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createProject,
  getProjects,
  getProjectById,
  updateProject,
  deleteProject,
  addUserToProject,
  getProjectTasks,
};
