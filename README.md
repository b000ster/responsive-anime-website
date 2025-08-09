# 🎌 Responsive Anime Website (Anime-Roll) 🎌

[![Project Status](https://img.shields.io/badge/status-production-brightgreen)](https://responsive-anime-website.vercel.app)  
[![MongoDB Atlas](https://img.shields.io/badge/MongoDB-Atlas-blueviolet)](https://cloud.mongodb.com)  
[![Render](https://img.shields.io/badge/Backend-Render-blue)](https://responsive-anime-website.onrender.com)  
[![Vercel](https://img.shields.io/badge/Frontend-Vercel-black)](https://responsive-anime-website.vercel.app)

Responsive Anime-Roll is a modern MERN stack web application that lets users browse, search, and explore a wide collection of anime titles with beautiful banners and categorized sections — fully deployed with a live backend on Render and a React frontend on Vercel.

---

## 🔥 Live Demo

- **Frontend:** [https://responsive-anime-website.vercel.app](https://responsive-anime-website.vercel.app)  
- **Backend API:** [https://responsive-anime-website.onrender.com/api/anime](https://responsive-anime-website.onrender.com/api/anime)

Try browsing all sections, enjoy the banner carousel, and search your favorite anime!

---

## 💡 Project Features

- Responsive React frontend with elegant UI and smooth navigation
- Banner carousel showcasing featured anime titles
- Search and filter anime by title and categorized sections
- Backend REST API with Express.js and Mongoose connected to MongoDB Atlas
- Easily extendable seed script to pre-populate database with rich anime data
- CORS enabled for seamless frontend-backend integration
- Deployment ready with environment variables on Render and Vercel

---

## 🏗️ Technology Stack

| Layer       | Technology                       |
|-------------|---------------------------------|
| Frontend    | React, Axios, Bootstrap, CSS    |
| Backend     | Node.js, Express.js, Mongoose   |
| Database    | MongoDB Atlas (Cloud)            |
| Backend Hosting | [Render](https://render.com) |
| Frontend Hosting| [Vercel](https://vercel.com) |

---

## 🚀 How To Run Locally

### Prerequisites

- Node.js & npm installed on your machine
- MongoDB Atlas account with a cluster & user
- Git installed for cloning

### Clone the Repo

- git clone https://github.com/b000ster/responsive-anime-website.git
- cd responsive-anime-website

### Backend Setup

- cd backend
- npm install
- Create a `.env` file with MongoDB URI:
- MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/responsiveAnimeDB?retryWrites=true&w=majority 
- Seed the database (one-time):

node seedAnime.js

- Start backend server:

node server.js

- Backend listens on http://localhost:5000

### Frontend Setup

cd ../frontend
npm install
- Create `.env` file in frontend folder:

REACT_APP_API_URL=http://localhost:5000
- Start React dev server:

npm start
- Open http://localhost:3000 to view locally.

---

## 📦 Deployment Overview

### Backend (Render)

- Connected to GitHub repo backend folder
- Environment variable `MONGO_URI` set to MongoDB Atlas URI
- Start command: `node server.js`
- IP whitelist set in MongoDB Atlas to allow Render IP or `0.0.0.0/0` for development

### Frontend (Vercel)

- Connected to GitHub repo frontend folder
- Environment variable `REACT_APP_API_URL` set to Render backend URL  
  Example: `https://responsive-anime-website.onrender.com`
- Build command: `npm run build`
- Output directory: `build`

---

## 🛠️ Folder Structure

responsive-anime-website/
│
├── backend/ # Express backend code & MongoDB connection
│ ├── models/ # Mongoose schemas
│ ├── routes/ # API routes
│ ├── seedAnime.js # Database seeding script
│ ├── server.js # Backend server entry
│ └── .env # Backend env variables (gitignored)
│
├── frontend/ # React frontend app
│ ├── public/
│ ├── src/
│ │ ├── components/ # UI components
│ │ ├── App.js # Main app component
│ │ └── ...
│ ├── .env # Frontend env variables (gitignored)
│ ├── package.json
│ └── ...
│
├── .gitignore # Ignored files & folders
└── README.md # This file


---

## 🙏 Acknowledgments

- Built with love and MongoDB Atlas, Render, Vercel hosting platforms
- Inspired by the vibrant anime community and open source MERN projects
- Thanks to all contributors and users who support this project

---

## 📞 Contact

- GitHub Repo: [https://github.com/b000ster/responsive-anime-website](https://github.com/b000ster/responsive-anime-website)
- Backend Live API: [https://responsive-anime-website.onrender.com/api/anime](https://responsive-anime-website.onrender.com/api/anime)
- Frontend Live Site: [https://responsive-anime-website.vercel.app](https://responsive-anime-website.vercel.app)

---

## 📄 License

This project is licensed under MIT License - see the [LICENSE](LICENSE) file for details.

---

Thank you for checking out Responsive Anime Website! Enjoy exploring the world of anime with ease. 🍥✨

---

*Made with ❤️ by b000ster*



