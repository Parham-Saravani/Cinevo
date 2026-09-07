# 🎬 Cinevo

Cinevo is a full-stack movie and TV series streaming platform built with modern web technologies.

The platform provides an intuitive interface for discovering movies and TV series, browsing popular and trending content, exploring new releases, and finding personalized recommendations.

---

## 🛠️ Tech Stack

### Frontend
<p align="left">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
<img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS">
<img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">
<img src="https://img.shields.io/badge/Swiper-6332F6?style=for-the-badge&logo=swiper&logoColor=white" alt="Swiper">
<img src="https://img.shields.io/badge/React_Icons-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React Icons">
</p>

### Backend
<p align="left">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js">
<img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js">
<img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB">
</p>

### Tools
<p align="left">
  <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git">
<img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
<img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" alt="npm">
<img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white" alt="Postman">
</p>

## 📷 Images
# Home
![Home](Images/Home.png)

## ✨ Features

* 🎬 Browse movies and TV series
* 🔥 Trending movies and series
* 🆕 New releases
* ⭐ Popular content
* 🎯 Recommended content
* 🖼️ Dynamic hero banners
* 🔎 Content discovery
* 🎞️ Movie and TV series details
* 📺 TV series and episode support
* 🎨 Modern dark-themed UI
* 📱 Fully responsive design
* ⚡ RESTful API
* 🔄 Loading states
* ❌ Error handling
* 🎞️ Responsive content sliders

## 🔌 API

Cinevo uses a RESTful API built with Node.js and Express.js.

Example endpoints:

```text
GET /api/banners
GET /api/discover/trending
GET /api/discover/newRelease
GET /api/discover/popular
GET /api/discover/recommend
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Parham-Saravani/Cinevo.git
```

### 2. Install dependencies

Install backend dependencies:

```bash
cd backEnd
npm install
```

Install frontend dependencies:

```bash
cd frontEnd
npm install
```

### 3. Configure environment variables

Create the required `.env` files and add your environment variables.

Example:

```env
PORT=64235
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET = your_jwt_secret
```

> Never commit sensitive credentials or API keys to the repository.

### 4. Run the backend

```bash
npm run dev
```

### 5. Run the frontend

Open another terminal:

```bash
cd frontEnd
npm run dev
```

## 📱 Responsive Design

Cinevo is designed to provide a responsive experience across:

* 🖥️ Desktop
* 💻 Laptop
* 📱 Tablet
* 📲 Mobile

## 🎯 Project Goals

* Build a complete full-stack streaming platform
* Practice modern React development
* Build reusable and maintainable components
* Develop RESTful APIs with Node.js and Express.js
* Create a responsive and modern user interface
* Practice asynchronous data fetching and state management

## 🔮 Future Improvements

* [ ] Complete all frontend pages
* [ ] Add React Router
* [ ] Advanced search and filtering
* [ ] User authentication
* [ ] User profiles
* [ ] Watchlist
* [ ] Favorites
* [ ] Rating system
* [ ] Pagination / Infinite scrolling
* [ ] Video player
* [ ] Performance optimization
* [ ] Deployment

