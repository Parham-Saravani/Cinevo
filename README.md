# 🎬 Cinevo

Cinevo is a full-stack movie and TV series discovery platform built with React, Node.js, Express.js, and MongoDB.

The platform provides a modern and responsive interface for discovering movies and TV series, exploring trending and popular content, viewing detailed information, and managing personalized content such as favorites and watchlists.

---

## 🛠️ Tech Stack

### Frontend

<p align="left">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/Zod-3E67B1?style=for-the-badge&logo=zod&logoColor=white" alt="Zod">
  <img src="https://img.shields.io/badge/React_Hot_Toast-FF6B6B?style=for-the-badge&logo=react&logoColor=white" alt="React Hot Toast">
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

---

## 📷 Screenshots

### Home

![Cinevo Home](Images/Home.png)

---

## ✨ Features

### 🎬 Content Discovery

* Browse movies and TV series
* Explore trending content
* Discover new releases
* Browse popular movies and series
* Personalized recommendations
* Dynamic hero banners
* Movie and TV series detail pages
* TV series seasons and episodes
* Genre-based content filtering

### 👤 User Features

* User authentication
* User profile
* Favorites
* Watchlist
* Account information
* Protected routes

### ⚡ User Experience

* Responsive design
* Dark-themed modern UI
* Loading states
* Error states
* Empty states
* Toast notifications with React Hot Toast
* Responsive content sliders
* Form validation with Zod

---

## 🧩 Frontend Architecture

The frontend is built with React and organized into reusable components and feature-specific modules.

The application uses:

* React components and props
* React Hooks
* React Router
* Nested routes and layouts
* Protected routes
* Reusable UI components
* Controlled forms
* Client-side validation with Zod
* Asynchronous data fetching
* Loading, error, and empty states
* Responsive UI with Tailwind CSS

---

## 🧠 Challenges & Solutions

### 🔄 Managing Multiple API Requests

The home page requires data from several independent API endpoints, including banners, trending content, new releases, popular content, and recommendations.

Instead of handling each request separately, the frontend uses `Promise.all()` to fetch the required data concurrently and manages the results through a centralized state structure.

This keeps the data flow predictable and makes the loading and error states easier to manage.

---

### ⏳ Handling Loading, Error, and Empty States

Different sections of the application can be in different states depending on the API response.

Reusable loading components, error states, and empty states were created to provide consistent feedback across the application instead of relying on a single global loading state.

This also prevents incomplete API responses from breaking the UI.

---

### 🧭 Managing Complex Routes

Cinevo contains multiple pages and nested sections for movies, series, user profiles, favorites, watchlists, and other application features.

React Router was used with nested routes, layouts, index routes, and protected routes to keep the routing structure organized and maintainable.

---

### 🧩 Building Reusable Components

Repeated UI patterns such as movie cards, sliders, information items, loading cards, empty states, and error states were extracted into reusable React components.

This reduces duplication and makes it easier to maintain consistent UI behavior across different pages.

---

### 📝 Form Validation

User forms require validation before submitting data to the backend.

Zod is used to define validation schemas and validate user input on the client side.

This keeps validation rules centralized and provides clearer feedback when submitted data does not meet the expected format.

---

### 🔔 User Feedback

User actions such as successful operations and errors need immediate feedback.

React Hot Toast is used to provide lightweight notifications for important actions without interrupting the user's workflow.

---

### 📱 Responsive UI

The application needs to work across different screen sizes while maintaining the same visual hierarchy.

Tailwind CSS responsive utilities were used to adapt layouts, spacing, typography, sliders, and content grids across desktop, tablet, and mobile devices.

---

### 🔐 Authentication & Protected Content

Some parts of Cinevo are only available to authenticated users.

Authentication-related routes and user-specific pages are separated from public content, while protected routes prevent unauthorized access to private sections such as profile, favorites, and watchlist.

---

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

The React frontend communicates with the backend through HTTP requests and handles loading, success, error, and empty states accordingly.

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Parham-Saravani/Cinevo.git
cd Cinevo
```

### 2. Install dependencies

Install backend dependencies:

```bash
cd backEnd
npm install
```

Install frontend dependencies:

```bash
cd ../frontEnd
npm install
```

### 3. Configure environment variables

Create the required `.env` files and add your environment variables.

Example:

```env
PORT=64235
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### 4. Run the backend

From the `backEnd` directory:

```bash
npm run dev
```

### 5. Run the frontend

Open another terminal:

```bash
cd frontEnd
npm run dev
```

The frontend will then be available through the local Vite development server.

---

## 📱 Responsive Design

Cinevo is designed to provide a responsive experience across:

* 🖥️ Desktop
* 💻 Laptop
* 📱 Tablet
* 📲 Mobile

---

## 🎯 Project Goals

Cinevo was built to practice and demonstrate:

* Modern React development
* Component-based architecture
* React Router and nested routing
* REST API integration
* Asynchronous data fetching
* Form validation with Zod
* Authentication and protected routes
* State management with React Hooks
* Reusable component design
* Responsive UI development
* Error and loading state handling
* Full-stack application development

---

## 🔮 Future Improvements

* [ ] Advanced search
* [ ] Advanced filtering
* [ ] Rating system
* [ ] Video player
* [ ] Infinite scrolling
* [ ] Performance optimization
* [ ] Production deployment

---

## 👨‍💻 Author

**Parham Saravani**

Junior Frontend Developer focused on React and modern frontend development.

* GitHub: [Parham-Saravani](https://github.com/Parham-Saravani)
* LinkedIn: [Parham Saravani](https://www.linkedin.com/in/parham-saravani-63b56a374)
