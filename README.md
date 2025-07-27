# 🚨 Incident Monitoring Dashboard

- [view live site](https://fullstack-internship-ta.vercel.app/)

## 🛠️ Tech Stack

- **Frontend**: React (with Vite)
- **Styling**: Tailwind CSS
- **Notifications**: Toastify / Material UI
- **API Handling**: Axios
- **Backend**: Express + Node.js + MongoDB Atlas
- **Deployment**: Vercel

---

## ✨ Features

- Fetch and display incidents from API
- Mark incidents as resolved
- Manage loading states
- Toast notifications for success/failure
- Fully responsive UI

---

## ⚙️ Tech Decisions

- **Frontend Framework**: React (with Vite for faster dev/build times)
- **Backend**: Express (Node.js) with MongoDB Atlas
- **Styling**: Tailwind CSS for utility-first and responsive design
- **HTTP Requests**: Axios
- **State Management**: `useState` , `useEffect` and `useContext`  (no global state library used)
- **Notifications**: Material UI (toast messages positioned top-right)
- **Deployment -Frontend**: Vercel
- **Environment Variables**: Managed via `import.meta.env` (e.g., `VITE_API_URL`)
- **Deployment -Backend**: Render
- **Environment Variables**: Managed via `process.env.MONGODB_URI` (e.g., `MONGODB_URI`)

---

## 🚀 Deployment Instructions

### ✅ Deploying with Vercel

1. Connect your GitHub repo to [Vercel](https://vercel.com)
2. In the Vercel dashboard, set environment variables:
   ```env
   VITE_API_URL=https://your-backend-api.com

## 💻 Run Locally

Follow these steps to run the project locally:

### 🔧 Prerequisites

- Node.js installed
- Backend API accessible (local or deployed)

### 🛠 Steps

1. **Clone the repo**

```bash
git clone https://github.com/disismeg31/fullstack-internship-TA.git
```
2. **Navigate to the project directory**
```
cd frontend
```
3. **Install dependencies**
npm install

4. **Create a .env file and add your backend API URL:**
```
VITE_API_URL=https://your-backend-api.com
```
5. **Run the development server**
```
npm run dev
```



