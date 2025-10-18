# Backend Wizards — Stage 0 Task

## 📘 Description
A simple REST API endpoint that returns my profile info and a dynamic cat fact.

## 🚀 Endpoint
**GET** `/me`

### Example Response
```json
{
  "status": "success",
  "user": {
    "email": "ovedheo@gmail.com",
    "name": "Orevaoghene Ovedhe",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-18T19:30:00.000Z",
  "fact": "Cats sleep for 70% of their lives."
}
