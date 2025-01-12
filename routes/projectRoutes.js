const express = require('express');
const { createProject, getProjects, getProjectById, updateProject, deleteProject, addUserToProject, getProjectTasks } = require('../controllers/projectController');
const { authenticate } = require('../controllers/authMiddleware');

const router = express.Router();

/**
 * @swagger
 * /projects:
 *   post:
 *     summary: Create a new project
 *     tags: [Projects]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               ownerId:
 *                 type: integer
 *             example:
 *               name: Project Alpha
 *               ownerId: 1
 *     responses:
 *       201:
 *         description: Project created successfully
 *       500:
 *         description: Server error
 */
router.post('/', authenticate, createProject);

/**
 * @swagger
 * /projects:
 *   get:
 *     summary: Get all projects
 *     tags: [Projects]
 *     responses:
 *       200:
 *         description: List of projects
 *       500:
 *         description: Server error
 */
router.get('/', authenticate, getProjects);

/**
 * @swagger
 * /projects/{id}:
 *   get:
 *     summary: Get project by ID
 *     tags: [Projects]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The project ID
 *     responses:
 *       200:
 *         description: Project details
 *       404:
 *         description: Project not found
 *       500:
 *         description: Server error
 */
router.get('/:id', authenticate, getProjectById);

/**
 * @swagger
 * /projects/{id}:
 *   put:
 *     summary: Update a project
 *     tags: [Projects]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The project ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *             example:
 *               name: Updated Project Name
 *     responses:
 *       200:
 *         description: Project updated successfully
 *       404:
 *         description: Project not found
 *       500:
 *         description: Server error
 */
router.put('/:id', authenticate, updateProject);

/**
 * @swagger
 * /projects/{id}:
 *   delete:
 *     summary: Delete a project
 *     tags: [Projects]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The project ID
 *     responses:
 *       200:
 *         description: Project deleted successfully
 *       404:
 *         description: Project not found
 *       500:
 *         description: Server error
 */
router.delete('/:id', authenticate, deleteProject);

/**
 * @swagger
 * /projects/{id}/users:
 *   post:
 *     summary: Add a user to a project
 *     tags: [Projects]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The project ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: integer
 *             example:
 *               userId: 2
 *     responses:
 *       200:
 *         description: User added to project successfully
 *       404:
 *         description: Project or user not found
 *       500:
 *         description: Server error
 */
router.post('/:id/users', authenticate, addUserToProject);

/**
 * @swagger
 * /projects/{id}/tasks:
 *   get:
 *     summary: Get all tasks for a project
 *     tags: [Projects]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The project ID
 *     responses:
 *       200:
 *         description: List of tasks
 *       404:
 *         description: Project not found
 *       500:
 *         description: Server error
 */
router.get('/:id/tasks', authenticate, getProjectTasks);

module.exports = router;
