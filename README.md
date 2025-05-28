
# 🏙️ City Lockers - Luggage Storage Booking App

This is a full-stack luggage storage booking system built with **React**, **Node.js**, **Express**, and **PostgreSQL**. Users can browse storage units, search by criteria, book units for specific date ranges, and view bookings with user info.

---

## 📦 Tech Stack

- **Frontend**: React + Bootstrap
- **Backend**: Node.js + Express
- **Database**: PostgreSQL
- **Date Handling**: date-fns

---

## 🚀 Features

- 🔍 Search for available storage units by name, location, or size
- 📆 Book a unit for a date range
- 👤 View all bookings with user and unit info
- 🔄 Automatically re-mark units as available when bookings end
- 🚫 Prevents double bookings via backend date range conflict detection

---

## ⚙️ Project Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/city-lockers.git
cd city-lockers
```

---

## 🛠️ Backend Setup (Node.js + PostgreSQL)

### 2. Navigate to Server Folder

```bash
cd server
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Create PostgreSQL Database

```sql
CREATE DATABASE citylockers;
```

### 5. Create Tables

```sql
-- storageunits table
CREATE TABLE storageunits (
  unitId SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  location TEXT NOT NULL,
  size TEXT,
  pricePerDay NUMERIC,
  isAvailable BOOLEAN DEFAULT true
);

-- bookings table
CREATE TABLE bookings (
  id SERIAL PRIMARY KEY,
  userName TEXT NOT NULL,
  unitId INTEGER REFERENCES storageunits(unitId),
  startDate DATE NOT NULL,
  endDate DATE NOT NULL
);
```

### 6. Seed Sample Data

```sql
INSERT INTO storageunits (name, location, size, pricePerDay)
VALUES 
  ('Locker A', 'NYC Grand Central', 'Small', 10),
  ('Locker B', 'Boston South Station', 'Medium', 12),
  ('Locker C', 'San Francisco Ferry Terminal', 'Large', 15);
```

### 7. Start the Backend Server

```bash
npm run dev
```

Runs on `http://localhost:3001`

---

## 📁 Backend API Endpoints

### Storage Units

| Endpoint                          | Method | Description                        |
|-----------------------------------|--------|------------------------------------|
| `/storageunits`                  | GET    | Get all storage units              |
| `/storageunits/search?query=abc` | GET    | Search units by name/location/size |

### Bookings

| Endpoint          | Method | Description                            |
|-------------------|--------|----------------------------------------|
| `/bookings`       | GET    | Get all bookings with unit info        |
| `/bookings?userName=John` | GET | Filter bookings by user name        |
| `/bookings/:id`   | GET    | Get a single booking                   |
| `/bookings`       | POST   | Create new booking (with conflict check) |
| `/bookings/:id`   | PUT    | Update a booking                       |
| `/bookings/:id`   | DELETE | Delete a booking                       |

---

## 🌐 Frontend Setup (React)

### 1. Navigate to Client Folder

```bash
cd ../client
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start React App

```bash
npm start
```

Runs on `http://localhost:3000`

---

## 🧩 Key Frontend Features

### 🔍 `SearchInput.js`

- Search by name, location, or size
- List all units
- Book units directly via button
- See real-time availability
- View all bookings with user names

### 📅 `Book.js`

- Fetch unit info via `unitId` query
- Date range selection with validation
- Submits booking to `/bookings`
- Redirects to bookings page filtered by user

---

## 🧠 Booking Conflict Prevention

Booking conflict check on the backend:

```sql
SELECT * FROM bookings
WHERE unitId = $1
AND NOT ($3 < startDate OR $2 > endDate)
```

This prevents overlapping bookings for the same unit.

---

## 💡 Auto-Release of Units

Expired bookings (past end date) are detected and the related unit is re-marked as available in `/bookings` route.

---

## 📸 UI Highlights

- ✅ Elegant Bootstrap styling
- 🔍 Live search
- 📆 Interactive booking form
- 📄 Bookings list view
- 🧠 Smart conflict prevention

---

## 🔧 VS Code Extensions Recommended

- Prettier – Code formatter
- ESLint – JavaScript linting
- REST Client – Test API endpoints
- PostgreSQL – DB explorer

---

## 📝 License

MIT License. Free to use, fork, and improve.

---

## 👨‍💻 Author

Made with ❤️ by [Your Name]

---

## 🔗 Optional Improvements

- 🛡 Add JWT user authentication
- 📅 Use date pickers for booking
- 📊 Add dashboard analytics
- 🌍 Deploy with Render, Vercel, or Heroku
