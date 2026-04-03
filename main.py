from fastapi import FastAPI, HTTPException
from datetime import datetime, timedelta
import random

app = FastAPI()


users = {
    1: {"bookings": [], "region": "Chennai"},
}

distributors = {
    1: {
        "name": "Distributor A",
        "region": "Chennai",
        "stock": 500,
        "supply_received": 1000,
        "delivered": 900
    }
}

regions = {
    "Chennai": {
        "avg_demand": 100,
        "current_demand": 120,
        "supply": 110
    }
}


# CORE LOGIC


def detect_user_abuse(user_id):
    bookings = users[user_id]["bookings"]
    recent = [b for b in bookings if b > datetime.now() - timedelta(days=5)]
    return len(recent) > 2


def detect_region_risk(region):
    data = regions[region]
    current = data["current_demand"]
    avg = data["avg_demand"]

    if current > avg * 1.8:
        return "RED"
    elif current > avg * 1.3:
        return "YELLOW"
    else:
        return "GREEN"


def booking_limit(risk):
    if risk == "RED":
        return 1
    elif risk == "YELLOW":
        return 2
    else:
        return 5


def detect_distributor_issue(distributor_id):
    d = distributors[distributor_id]
    if d["supply_received"] - d["delivered"] > 50:
        return True
    return False



# IoT SIMULATION


def simulate_usage():
    return random.randint(10, 100)



# API ENDPOINTS


@app.get("/")
def home():
    return {"message": "LPG Guardian Backend Running"}


# 📍 Get region risk
@app.get("/region-risk/{region}")
def get_region_risk(region: str):
    if region not in regions:
        raise HTTPException(status_code=404, detail="Region not found")

    risk = detect_region_risk(region)

    return {
        "region": region,
        "risk": risk,
        "predicted_shortage_days": random.randint(1, 5)
    }


#  Book cylinder
@app.post("/book-cylinder/{user_id}")
def book_cylinder(user_id: int):
    if user_id not in users:
        raise HTTPException(status_code=404, detail="User not found")

    region = users[user_id]["region"]
    risk = detect_region_risk(region)

    limit = booking_limit(risk)

    recent_bookings = [
        b for b in users[user_id]["bookings"]
        if b > datetime.now() - timedelta(days=5)
    ]

    if len(recent_bookings) >= limit:
        raise HTTPException(
            status_code=403,
            detail=f"Booking limit reached ({limit}) due to {risk} risk"
        )

    if detect_user_abuse(user_id):
        raise HTTPException(
            status_code=403,
            detail="Suspicious activity detected. Booking blocked."
        )

    users[user_id]["bookings"].append(datetime.now())

    return {
        "message": "Booking successful",
        "risk_level": risk
    }


#  Alerts
@app.get("/alerts/{region}")
def get_alerts(region: str):
    risk = detect_region_risk(region)

    alerts = []

    if risk == "RED":
        alerts.append(f"🚨 {region}: High shortage risk")
    elif risk == "YELLOW":
        alerts.append(f"⚠️ {region}: Medium risk")

    return {"alerts": alerts}


#  Distributor update
@app.post("/update-stock/{distributor_id}")
def update_stock(distributor_id: int, stock: int):
    if distributor_id not in distributors:
        raise HTTPException(status_code=404, detail="Distributor not found")

    distributors[distributor_id]["stock"] = stock

    return {"message": "Stock updated"}


#  Distributor fraud check
@app.get("/check-distributor/{distributor_id}")
def check_distributor(distributor_id: int):
    if distributor_id not in distributors:
        raise HTTPException(status_code=404, detail="Distributor not found")

    flagged = detect_distributor_issue(distributor_id)

    return {
        "distributor": distributors[distributor_id]["name"],
        "fraud_detected": flagged
    }


#  IoT usage endpoint
@app.get("/iot-usage/{user_id}")
def get_usage(user_id: int):
    usage = simulate_usage()

    status = "NORMAL"
    if usage < 20:
        status = "REFILL SOON"

    return {
        "user_id": user_id,
        "usage_level": usage,
        "status": status
    }