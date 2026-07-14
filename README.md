# 🐾 Pet Adoption API

A RESTful API developed with Node.js, Express, and MongoDB for managing pet adoption records. This project was created as the final assignment for the **Programación Backend (III): Testing y Escalabilidad Flex** course at Coderhouse.

The application provides a complete CRUD for pet adoptions, includes functional testing using Jest and Supertest with mocked services, and is fully dockerized for easy deployment.

---

## 📌 Features

- REST API with CRUD operations
- Layered architecture (Router → Controller → Service → Model)
- MongoDB integration with Mongoose
- Functional testing using Jest and Supertest
- Mocking of service layer to isolate external dependencies
- Dockerized application
- Code coverage report

---

## 🛠 Technologies

- Node.js
- Express.js
- MongoDB
- Mongoose
- Jest
- Supertest
- Docker

---

## 📁 Project Structure

```
pet-adoption-api
│
├── src
│   ├── config
│   ├── controllers
│   ├── middlewares
│   ├── models
│   ├── routes
│   ├── services
│   ├── utils
│   ├── app.js
│   └── server.js
│
├── test
│   ├── app.test.js
│   └── adoption.routes.test.js
│
├── Dockerfile
├── .dockerignore
├── package.json
├── README.md
└── .env.example
```

---

## ⚙ Installation

Clone the repository:

```bash
git clone https://github.com/JuanParraR14/pet-adoption-api.git

cd pet-adoption-api
```

Install dependencies:

```bash
npm install
```

---

## 🔧 Environment Variables

Create a `.env` file:

```env
PORT=3000
MONGODB_URI=mongodb://127.0.0.1:27017/backend2final
```

---

## ▶ Running the project

Development mode:

```bash
npm run dev
```

Production mode:

```bash
npm start
```

---

## 🧪 Running the tests

Execute all tests:

```bash
npm test
```

Generate code coverage:

```bash
npm run test:coverage
```

Current project coverage:

- Statements: 89.87%
- Branches: 96.66%
- Lines: 91.02%

---

## 🐳 Docker

Build image:

```bash
docker build -t pet-adoption-api .
```

Run container:

```bash
docker run -p 3000:3000 \
-e PORT=3000 \
-e MONGODB_URI=mongodb://host.docker.internal:27017/backend2final \
pet-adoption-api
```

Windows (single line):

```bash
docker run -p 3000:3000 -e PORT=3000 -e MONGODB_URI=mongodb://host.docker.internal:27017/backend2final pet-adoption-api
```

---

## 🐋 Docker Hub

Docker image:

https://hub.docker.com/r/highjm14/pet-adoption-api

---

## 💻 GitHub Repository

https://github.com/JuanParraR14/pet-adoption-api

---

## 📋 API Endpoints

| Method | Endpoint | Description |
|----------|---------------------------|------------------------------|
| GET | /api/adoptions | Get all adoptions |
| GET | /api/adoptions/:id | Get adoption by ID |
| POST | /api/adoptions | Create adoption |
| PUT | /api/adoptions/:id | Update adoption |
| DELETE | /api/adoptions/:id | Delete adoption |

---

## 👨‍💻 Author

Juan Parra

Final Project - Programación Backend (III): Testing y Escalabilidad Flex

Coderhouse