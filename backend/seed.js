require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const Project = require('./models/Project');

const sampleProjects = [
  {
    title: 'LMS Reaper — Chrome Extension',
    description:
      'A Chrome extension that auto-downloads PDFs from Parul University\'s LMS portal. Fixed broken Google Cloud Storage URL interception with JWT authentication and duplicate-download prevention.',
    technologies: ['JavaScript', 'Chrome Extension API', 'Google Cloud Storage', 'JWT'],
    category: 'tool',
    githubLink: 'https://github.com/UMBRELLACORP007',
    liveLink: '',
    imageUrl: '',
    featured: true,
    order: 1,
    status: 'completed',
  },
  {
    title: 'SecureChat / undercover00',
    description:
      'A custom secure chat UI with CMD-style aesthetics. Built with a focus on clean terminal-inspired design and real-time messaging capabilities.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js'],
    category: 'fullstack',
    githubLink: 'https://github.com/UMBRELLACORP007',
    liveLink: '',
    imageUrl: '',
    featured: true,
    order: 2,
    status: 'in-progress',
  },
  {
    title: 'AI Terminal (CMD-Based)',
    description:
      'A Windows CMD-based AI assistant interface that provides a terminal-style experience for interacting with AI models. Lightweight and keyboard-driven.',
    technologies: ['Python', 'Windows CMD', 'Batch Script', 'API Integration'],
    category: 'tool',
    githubLink: 'https://github.com/UMBRELLACORP007',
    liveLink: '',
    imageUrl: '',
    featured: false,
    order: 3,
    status: 'in-progress',
  },
  {
    title: 'Voice-Controlled Python Assistant',
    description:
      'A silent, always-on Python voice assistant for Windows automation. Handles file management, app launching, and task execution using voice commands in the background.',
    technologies: ['Python', 'SpeechRecognition', 'PyAutoGUI', 'Windows API'],
    category: 'tool',
    githubLink: 'https://github.com/UMBRELLACORP007',
    liveLink: '',
    imageUrl: '',
    featured: false,
    order: 4,
    status: 'in-progress',
  },
  {
    title: 'Full Stack Portfolio Website',
    description:
      'This portfolio — built with React, Node.js, Express.js, and MongoDB. Features dynamic project fetching via REST APIs, contact form storage, and a responsive dark-themed UI.',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    category: 'fullstack',
    githubLink: 'https://github.com/UMBRELLACORP007',
    liveLink: '',
    imageUrl: '',
    featured: true,
    order: 5,
    status: 'completed',
  },
];

const seedDB = async () => {
  try {
    await connectDB();
    await Project.deleteMany({});
    console.log('🗑️  Cleared existing projects');

    const inserted = await Project.insertMany(sampleProjects);
    console.log(`✅ Seeded ${inserted.length} projects successfully`);

    process.exit(0);
  } catch (err) {
    console.error('❌ Seed failed:', err.message);
    process.exit(1);
  }
};

seedDB();
