from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routes import users_routes, health_check_routes, spreadsheet_routes

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(health_check_routes.router)
app.include_router(users_routes.router)
app.include_router(spreadsheet_routes.router)
