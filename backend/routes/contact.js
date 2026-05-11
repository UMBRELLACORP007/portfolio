const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST /api/contact — submit contact form
router.post('/', async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and message are required',
      });
    }

    const contact = await Contact.create({
      name,
      email,
      subject: subject || 'Portfolio Contact',
      message,
      ipAddress: req.ip || '',
    });

    res.status(201).json({
      success: true,
      message: 'Message received! I will get back to you soon.',
      data: { id: contact._id },
    });
  } catch (err) {
    next(err);
  }
});

// GET /api/contact — get all messages (admin use)
router.get('/', async (req, res, next) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json({ success: true, count: messages.length, data: messages });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
