# AI Travel Planner Backend

A backend API for an **AI-powered travel planning application** that helps users create trips, organize itineraries, track expenses, and generate travel plans using AI.

Built with **NestJS, PostgreSQL, Prisma, and Groq LLM APIs**.

---

# Features

### Authentication

* User registration
* JWT-based authentication
* Protected API routes

### Trip Management

* Create trips
* View trips
* Update trip details
* Delete trips

### Itinerary Planning

* Create itinerary days
* Add activities to each day
* Retrieve trip itinerary

### Activity Management

* Add activities to itinerary days
* Remove activities

### Expense Tracking

* Track trip expenses
* Categorize expenses
* View expenses for each trip

### Trip Analytics

Provides a summary of the trip:

* total expenses
* remaining budget
* number of itinerary days
* number of activities

### AI Itinerary Generation

Generate travel itineraries using **Groq LLM (Llama 3 models)**.

Example:

```
POST /ai/generate-itinerary
```

Input:

```
{
  "destination": "Japan",
  "days": 3,
  "interests": ["food", "culture"]
}
```

Output:

```
[
  {
    "day": 1,
    "activities": [
      "Visit Sensoji Temple",
      "Street Food Tour"
    ]
  }
]
```

---

# Tech Stack

Backend Framework

* NestJS

Database

* PostgreSQL

ORM

* Prisma

Authentication

* JWT

AI Integration

* Groq LLM API

Dev Tools

* Docker
* Postman

---

# Project Architecture

```
src
 ├── modules
 │   ├── auth
 │   ├── trips
 │   ├── itinerary
 │   ├── expenses
 │   └── ai
 │
 ├── infrastructure
 │   └── database
 │
 ├── common
 │   └── decorators
 │
 └── main.ts
```

Architecture pattern:

```
Controller
   ↓
Service
   ↓
Repository
   ↓
Prisma ORM
   ↓
PostgreSQL
```

---

# API Endpoints

## Auth

```
POST /auth/register
POST /auth/login
GET  /auth/me
```

## Trips

```
POST /trips
GET  /trips
GET  /trips/:id
PATCH /trips/:id
DELETE /trips/:id
```

## Itinerary

```
POST /trips/:tripId/itinerary
GET  /trips/:tripId/itinerary
```

## Activities

```
POST /activities
DELETE /activities/:id
```

## Expenses

```
POST /expenses
GET  /trips/:tripId/expenses
DELETE /expenses/:id
```

## Analytics

```
GET /trips/:id/summary
```

## AI

```
POST /ai/generate-itinerary
```

---

# Running the Project Locally

### 1. Clone the repository

```
git clone https://github.com/monikashekar/AI_Travel_Planner.git
```

### 2. Install dependencies

```
npm install
```

### 3. Start PostgreSQL with Docker

```
docker-compose up -d
```

### 4. Run database migrations

```
npx prisma migrate dev
```

### 5. Start the server

```
npm run start:dev
```

The API will run at:

```
http://localhost:3000
```

---

# Environment Variables

Create a `.env` file:

```
DATABASE_URL=postgresql://postgres:postgres@localhost:5433/travel_planner

JWT_SECRET=your_jwt_secret

GROQ_API_KEY=your_groq_api_key
```

---

# Example Data Flow

```
User creates trip
        ↓
User adds itinerary days
        ↓
User adds activities
        ↓
User tracks expenses
        ↓
AI generates travel plan
```

---

# Future Improvements

* AI-generated itinerary auto-save
* trip collaboration
* hotel and flight recommendations
* map integration
* caching with Redis
* background jobs for AI processing

---

# Author

Monika Shekar

Backend Developer
Node.js | NestJS | PostgreSQL | Prisma | AI integrations

---




