from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from typing import List, Dict

app = FastAPI()



app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # React dev server URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dummy data to return when "Review" is clicked
data = [
    # {"project_no": "302546", "project_name": "PAJV ESRSC MACINVERT", "client_name": "Plexus-Ayuda Joint Venture, LLC", "funding": "$42,912", "days": "35", "schedule": "On Schedule"},
    {"project_no": "302547", "project_name": "New Project 1", "client_name": "Company A", "funding": "$32,000", "days": "30", "schedule": "On Hold"},
    {"project_no": "302548", "project_name": "New Project 2", "client_name": "Company B", "funding": "$52,000", "days": "40", "schedule": "Delayed"},
    {"project_no": "302547", "project_name": "New Project 1", "client_name": "Company A", "funding": "$32,000", "days": "30", "schedule": "On Hold"},
    {"project_no": "302548", "project_name": "New Project 2", "client_name": "Company B", "funding": "$52,000", "days": "40", "schedule": "Delayed"},
    {"project_no": "302547", "project_name": "New Project 1", "client_name": "Company A", "funding": "$32,000", "days": "30", "schedule": "On Hold"},
    {"project_no": "302548", "project_name": "New Project 2", "client_name": "Company B", "funding": "$52,000", "days": "40", "schedule": "Delayed"},
    {"project_no": "302547", "project_name": "New Project 1", "client_name": "Company A", "funding": "$32,000", "days": "30", "schedule": "On Hold"},
    {"project_no": "302548", "project_name": "New Project 2", "client_name": "Company B", "funding": "$52,000", "days": "40", "schedule": "Delayed"},
    {"project_no": "302547", "project_name": "New Project 1", "client_name": "Company A", "funding": "$32,000", "days": "30", "schedule": "On Hold"},
    {"project_no": "302548", "project_name": "New Project 2", "client_name": "Company B", "funding": "$52,000", "days": "40", "schedule": "Delayed"},
    {"project_no": "302547", "project_name": "New Project 1", "client_name": "Company A", "funding": "$32,000", "days": "30", "schedule": "On Hold"},
    {"project_no": "302548", "project_name": "New Project 2", "client_name": "Company B", "funding": "$52,000", "days": "40", "schedule": "Delayed"},
    {"project_no": "302547", "project_name": "New Project 1", "client_name": "Company A", "funding": "$32,000", "days": "30", "schedule": "On Hold"},
    {"project_no": "302548", "project_name": "New Project 2", "client_name": "Company B", "funding": "$52,000", "days": "40", "schedule": "Delayed"},
    {"project_no": "302547", "project_name": "New Project 1", "client_name": "Company A", "funding": "$32,000", "days": "30", "schedule": "On Hold"},
    {"project_no": "302548", "project_name": "New Project 2", "client_name": "Company B", "funding": "$52,000", "days": "40", "schedule": "Delayed"},
    {"project_no": "302547", "project_name": "New Project 1", "client_name": "Company A", "funding": "$32,000", "days": "30", "schedule": "On Hold"},
    {"project_no": "302548", "project_name": "New Project 2", "client_name": "Company B", "funding": "$52,000", "days": "40", "schedule": "Delayed"},
    {"project_no": "302547", "project_name": "New Project 1", "client_name": "Company A", "funding": "$32,000", "days": "30", "schedule": "On Hold"},
    {"project_no": "302548", "project_name": "New Project 2", "client_name": "Company B", "funding": "$52,000", "days": "40", "schedule": "Delayed"},
    {"project_no": "302547", "project_name": "New Project 1", "client_name": "Company A", "funding": "$32,000", "days": "30", "schedule": "On Hold"},
    {"project_no": "302548", "project_name": "New Project 2", "client_name": "Company B", "funding": "$52,000", "days": "40", "schedule": "Delayed"},
    {"project_no": "302547", "project_name": "New Project 1", "client_name": "Company A", "funding": "$32,000", "days": "30", "schedule": "On Hold"},
    {"project_no": "302548", "project_name": "New Project 2", "client_name": "Company B", "funding": "$52,000", "days": "40", "schedule": "Delayed"}
]

@app.get("/get-top-10")
async def get_top_10():
    """
    Endpoint to return mock data for projects pending enrollment
    """
    return data
