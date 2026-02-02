
# Hospital Backend

 full-fledged medical management system built with a clean, object-oriented backend architecture. It provides a robust REST API for managing **patient records** and **medical appointments**, with built-in relational logic and conflict detection.

---

##  Architecture (OOP-Based)

This project follows a strict **Controller–Service–Model** pattern to ensure modularity, scalability, and maintainability.

### Layers Overview

- **Models & Interfaces**
  - Defined using **TypeScript interfaces** and **Mongoose schemas**
  - Ensure strong type safety and data integrity

- **Services**
  - Encapsulate all business logic
  - Handle database interactions
  - Implement appointment conflict detection

- **Controllers**
  - Handle HTTP requests and responses
  - Maintain clear separation of concerns

- **Routes**
  - Centralized route management using **Express Router classes**

---

##  Model Relationships

The system implements a **One-to-Many** relationship between **Patients** and **Appointments**.

### 🔗 Relationship Details

- **Referencing**
  - The `Appointment` schema stores a `patientId` as `Schema.Types.ObjectId`
  - Uses `ref` to link to the `Patient` model

- **Population**
  - The service layer uses **Mongoose `.populate()`**
  - Automatically fetches full patient details when retrieving appointments

---

##  Key Features

- **Patient CRUD**
  - Create, read, update, and delete patient profiles

- **Appointment Booking**
  - Schedule appointments with built-in conflict detection
  - Prevents double-booking

- **Type Safety**
  - Fully written in **TypeScript**
  - Predictable, bug-resistant codebase

---

##  Tech Stack

- **Language:** TypeScript  
- **Framework:** Express.js  
- **Database:** MongoDB (Mongoose ODM)  
- **Runtime:** Node.js  

---

##  API Endpoints

###  Patient Routes

| Method | Endpoint           | Description                          |
|------|--------------------|--------------------------------------|
| POST | `/patient`         | Create a new patient record          |
| GET  | `/patient/:id`     | Retrieve specific patient details    |
| PUT  | `/patient/:id`     | Update existing patient information  |
| DELETE | `/patient/:id`   | Remove a patient record              |

---

### Appointment Routes

| Method | Endpoint                              | Description                                  |
|------|---------------------------------------|----------------------------------------------|
| POST | `/appointment`                        | Book a new appointment                       |
| GET  | `/appointment/patient/:patientId`     | List appointments for a specific patient     |
| DELETE | `/appointment/:id`                  | Cancel an existing appointment               |

---

##  Notes

- Designed with **scalability and maintainability** in mind  
- Clean separation between business logic and request handling  
- Ideal foundation for a production-ready medical system  

---


