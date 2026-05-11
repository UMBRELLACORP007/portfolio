# Dikshant Shinde — Portfolio

A full-stack portfolio website built with **React**, **Node.js**, **Express.js**, and **MongoDB**.

---

## Tech Stack

| Layer     | Technology                  |
|-----------|-----------------------------|
| Frontend  | React.js, CSS (custom)      |
| Backend   | Node.js, Express.js         |
| Database  | MongoDB (Mongoose ODM)      |
| Deploy    | Vercel (frontend) + Railway (backend) |

---

## Project Structure

```
portfolio/
├── backend/
│   ├── config/db.js          # MongoDB connection
│   ├── middleware/
│   │   └── errorHandler.js   # Global error handler
│   ├── models/
│   │   ├── Project.js        # Project schema
│   │   └── Contact.js        # Contact form schema
│   ├── routes/
│   │   ├── projects.js       # /api/projects CRUD
│   │   └── contact.js        # /api/contact POST
│   ├── seed.js               # Seed sample projects
│   ├── server.js             # Entry point
│   └── .env.example
│
├── frontend/
│   ├── public/index.html
│   └── src/
│       ├── components/
│       │   ├── Navbar.jsx
│       │   ├── Hero.jsx
│       │   ├── About.jsx
│       │   ├── Skills.jsx
│       │   ├── Projects.jsx   # Fetches from MongoDB API
│       │   ├── Learning.jsx
│       │   ├── Education.jsx
│       │   ├── Contact.jsx    # Posts to MongoDB API
│       │   └── Footer.jsx
│       ├── services/api.js    # Axios API service layer
│       ├── App.js
│       ├── index.js
│       └── index.css          # Global design system
│
└── README.md
```

---

## Quick Start

### Prerequisites
- Node.js v18+
- MongoDB (local) OR MongoDB Atlas (cloud)
- npm

---

### 1. Clone and install

```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

---

### 2. Configure environment

```bash
cd backend
cp .env.example .env
```

Edit `.env`:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio_db
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
```

> For **MongoDB Atlas**, replace the URI with your Atlas connection string.

---

### 3. Seed the database (optional)

```bash
cd backend
npm run seed
```

This inserts 5 sample projects into MongoDB so the Projects section has content right away.

---

### 4. Run the project

**Terminal 1 — Backend:**
```bash
cd backend
npm run dev
# Server running on http://localhost:5000
```

**Terminal 2 — Frontend:**
```bash
cd frontend
npm start
# App running on http://localhost:3000
```

---

## API Endpoints

| Method | Endpoint           | Description                    |
|--------|--------------------|--------------------------------|
| GET    | /api/projects      | Get all projects               |
| GET    | /api/projects/:id  | Get single project             |
| POST   | /api/projects      | Create project                 |
| PUT    | /api/projects/:id  | Update project                 |
| DELETE | /api/projects/:id  | Delete project                 |
| POST   | /api/contact       | Submit contact form            |
| GET    | /api/health        | Server health check            |

### Filter by category
```
GET /api/projects?category=fullstack
GET /api/projects?featured=true
```

---

## Adding a New Project

Use Postman or curl:

```bash
curl -X POST http://localhost:5000/api/projects \
  -H "Content-Type: application/json" \
  -d '{
    "title": "My New Project",
    "description": "A short description of the project.",
    "technologies": ["React", "Node.js", "MongoDB"],
    "category": "fullstack",
    "githubLink": "https://github.com/UMBRELLACORP007/project",
    "liveLink": "https://yourproject.vercel.app",
    "featured": true,
    "status": "completed"
  }'
```

**Category options:** `fullstack`, `frontend`, `backend`, `bot`, `tool`, `other`  
**Status options:** `completed`, `in-progress`, `archived`

---

## Deployment

### Frontend → Vercel
1. Push frontend folder to GitHub
2. Import repo in [vercel.com](https://vercel.com)
3. Set root directory to `frontend`
4. Add env var: `REACT_APP_API_URL=https://your-backend-url.railway.app/api`

### Backend → Railway
1. Push backend folder to GitHub
2. Create new project in [railway.app](https://railway.app)
3. Add a MongoDB plugin OR use MongoDB Atlas URI
4. Set env vars: `MONGODB_URI`, `PORT`, `NODE_ENV=production`, `FRONTEND_URL`

---

## Design System

| Token           | Value           |
|-----------------|-----------------|
| Background      | `#080c14`       |
| Surface         | `#0d1220`       |
| Card            | `#111827`       |
| Accent (lime)   | `#a8ff3e`       |
| Blue            | `#4f8eff`       |
| Text primary    | `#e8edf5`       |
| Text secondary  | `#8899aa`       |
| Font display    | Syne (800)      |
| Font mono/body  | DM Mono         |

---

## Contact

- Email: dikshant2426D@gmail.com
- GitHub: [UMBRELLACORP007](https://github.com/UMBRELLACORP007)
