const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// GET /api/projects — fetch all projects (sorted by order, then newest first)
router.get('/', async (req, res, next) => {
  try {
    const { category, featured } = req.query;
    const filter = {};

    if (category && category !== 'all') filter.category = category;
    if (featured === 'true') filter.featured = true;

    const projects = await Project.find(filter)
      .sort({ featured: -1, order: 1, createdAt: -1 });

    res.json({
      success: true,
      count: projects.length,
      data: projects,
    });
  } catch (err) {
    next(err);
  }
});

// GET /api/projects/:id — get single project
router.get('/:id', async (req, res, next) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ success: false, message: 'Project not found' });
    }
    res.json({ success: true, data: project });
  } catch (err) {
    next(err);
  }
});

// POST /api/projects — create a new project
router.post('/', async (req, res, next) => {
  try {
    const project = await Project.create(req.body);
    res.status(201).json({ success: true, data: project });
  } catch (err) {
    next(err);
  }
});

// PUT /api/projects/:id — update a project
router.put('/:id', async (req, res, next) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!project) {
      return res.status(404).json({ success: false, message: 'Project not found' });
    }
    res.json({ success: true, data: project });
  } catch (err) {
    next(err);
  }
});

// DELETE /api/projects/:id — delete a project
router.delete('/:id', async (req, res, next) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) {
      return res.status(404).json({ success: false, message: 'Project not found' });
    }
    res.json({ success: true, message: 'Project deleted' });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
