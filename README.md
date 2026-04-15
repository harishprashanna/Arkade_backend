# Arkade Backend (Full-Stack Assignment)

A full-stack e-commerce backend system built with Node.js, Express, MongoDB, and a simple frontend interface.

## Features

### Authentication
- User Registration
- User Login
- JWT-based authentication

### Products
- Get all products
- Get product by ID
- Search products using query (`?search=`)

### Orders
- Create order (protected route)
- Get user orders (protected route)
- Update order status (bonus feature)

---

## Tech Stack

- **Backend:** Node.js, Express  
- **Database:** MongoDB (Atlas)  
- **Authentication:** JWT  
- **Frontend:** HTML, CSS, JavaScript (Vanilla)  
- **Other:** bcrypt, express-async-handler  

---

## Project Structure

Arkade_backend/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   ├── data/
│   ├── server.js
│
├── frontend/
│   └── index.html
│
└── README.md

---

## Setup Instructions

### 1. Clone the repository
git clone https://github.com/harishprashanna/Arkade_backend.git
cd Arkade_backend  

### 2. Install dependencies
cd backend  
npm install  

### 3. Create `.env` file

Create a `.env` file inside `backend/`:

PORT=5000
MONGO_URI=mongodb+srv://arkade:arkade123@cluster0.ca4h1j0.mongodb.net/?appName=Cluster0
JWT_SECRET=arkade_super_secret_key_2026_secure_random_string  

### 4. Run the server
npm run dev  

Server will run on:  
http://localhost:5000  

### 5. Run frontend

Open the following file in your browser:  
frontend/index.html  

## API Endpoints

### Auth
- POST /api/auth/register  
- POST /api/auth/login  

### Products
- GET /api/products  
- GET /api/products/:id  
- GET /api/products?search=keyword  

### Orders
- POST /api/orders (Protected)  
- GET /api/orders/myorders (Protected)  
- PATCH /api/orders/:id/status (Bonus)  

## Protected Routes

Require header:  
Authorization: Bearer <token>  

## Design Decisions

- Used JWT authentication to secure order-related routes  
- Implemented MongoDB transactions to safely reduce stock during order creation  
- Used modular structure (controllers, routes, models) for scalability  
- Implemented search filtering using MongoDB regex queries  
- Frontend uses fetch API to interact with backend  
- Initial mock data was removed and replaced with real API integration  

## Bonus Features Implemented

- Product search (`?search=`)  
- Order status update endpoint  

## Notes

- Backend must be running before using the frontend  
- MongoDB Atlas is used for database hosting  
- Ensure `.env` variables are correctly configured  

## Author

Harish Prashanna
