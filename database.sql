CREATE DATABASE citylockers;
CREATE TABLE StorageUnits (
  Unitid SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  size TEXT,
  location TEXT,
  pricePerDay NUMERIC(10,2),
  isAvailable BOOLEAN DEFAULT true
);
CREATE TABLE Bookings (
  Bookid SERIAL PRIMARY KEY,
  userName TEXT NOT NULL,
  unitId INTEGER REFERENCES StorageUnits(id),
  startDate DATE NOT NULL,
  endDate DATE NOT NULL
);
