# DMS DevOps Project

A full-stack Dockerized application deployed on AWS EC2 with automated CI/CD using GitHub Actions.

## Tech Stack

- Frontend: React + Vite
- Backend: Node.js + Express
- Database: MongoDB
- Containerization: Docker + Docker Compose
- Cloud: AWS EC2
- CI/CD: GitHub Actions

## Project Architecture

Browser → EC2 → Docker Compose

Docker Compose runs:
- client
- server
- mongo

GitHub push to `main` triggers GitHub Actions, which connects to EC2 over SSH and redeploys the app automatically.

## Services

- Frontend: port `8080`
- Backend: port `5001`
- MongoDB: port `27017`

## Local Run

```bash
docker compose up --build -d
