from fastapi import FastAPI
from .routes import users_routes, health_check_routes

app = FastAPI()

app.include_router(health_check_routes.router)
app.include_router(users_routes.router)
