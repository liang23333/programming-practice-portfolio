# 05 - RESTful Task & User API Microservice

> A production-grade backend API service demonstrating REST architecture, request validation, database ORM models, JWT authentication, and interactive API documentation.

---

## 📌 Project Overview & Objectives

Modern backend developers must understand how to architect clean, secure, and documented HTTP services. This project demonstrates:
- Designing idempotent RESTful endpoints according to standard HTTP methods and status codes.
- Request validation, serialization, and database relational modeling with SQLite.
- Token-based authentication using JSON Web Tokens (JWT) and password hashing (bcrypt).
- Automated interactive API documentation (OpenAPI / Swagger).
- Writing integration tests to verify endpoint correctness.

---

## 🛠️ Recommended Tech Stack

You can implement this service using either **Python (FastAPI)** or **Node.js (Express / TypeScript)**:
- **Python Option**: FastAPI, Pydantic, SQLAlchemy / SQLModel, SQLite, Pytest
- **Node.js Option**: Express / Fastify, Prisma / Drizzle ORM, SQLite, Zod, Jest / Supertest

---

## 📡 API Specification

### Authentication Endpoints
| Method | Endpoint | Description | Request Body | Auth Required |
|:------:|:---------|:------------|:-------------|:-------------:|
| `POST` | `/api/v1/auth/register` | Register a new user | `{ "username", "password" }` | No |
| `POST` | `/api/v1/auth/login` | Authenticate & get token | `{ "username", "password" }` | No |

### Task Endpoints
| Method | Endpoint | Description | Request Body / Params | Auth Required |
|:------:|:---------|:------------|:----------------------|:-------------:|
| `GET`  | `/api/v1/tasks` | List user tasks (with pagination & filter) | Query: `?status=pending&page=1` | Yes |
| `POST` | `/api/v1/tasks` | Create a new task | `{ "title", "description", "priority" }` | Yes |
| `GET`  | `/api/v1/tasks/:id` | Get specific task details | URL param `:id` | Yes |
| `PUT`  | `/api/v1/tasks/:id` | Update task details or status | `{ "status", "title" }` | Yes |
| `DELETE`| `/api/v1/tasks/:id` | Delete task | URL param `:id` | Yes |

---

## 📋 Implementation Checklist & Milestones

- [ ] **Milestone 1: Database & ORM Models**
  - Define `User` and `Task` entities with foreign key relationships
- [ ] **Milestone 2: Authentication & Security**
  - Salt & hash passwords with bcrypt
  - Issue and verify signed JWT bearer tokens
- [ ] **Milestone 3: CRUD Routes & Validation**
  - Implement full CRUD operations with schema validation
  - Proper HTTP error handling (400, 401, 403, 404, 500)
- [ ] **Milestone 4: Automated Testing**
  - Write endpoint test suite with clean test database setup/teardown
