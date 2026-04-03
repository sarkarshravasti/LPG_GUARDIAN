# LPG Guardian - Sentinel Intelligence System

This project consists of a **FastAPI backend** and a **Vite/React frontend**.

## 🚀 How to Run the Project

### 1. Start the Backend (API)
The backend manages the core logic, user management, and fraud detection simulation.

1.  Open your terminal in the root directory (`LPG_Guardian`).
2.  Install dependencies (if not already installed):
    ```bash
    pip install fastapi uvicorn
    ```
3.  Run the server:
    ```bash
    python -m uvicorn main:app --reload
    ```
    *The backend will be live at `http://127.0.0.1:8000/`.*

---

### 2. Start the Frontend (Sentinel Dashboard)
The frontend is the high-fidelity intelligence dashboard built with React and Lucide icons.

1.  Open a **new** terminal window and navigate to the `frontend/` folder:
    ```bash
    cd frontend
    ```
2.  Install dependencies (first time only):
    ```bash
    npm install
    ```
3.  Start the development server:
    ```bash
    npm run dev
    ```
4.  Open your browser to: **[http://localhost:5173/](http://localhost:5173/)**

---

## 🔐 Access Credentials
To access the **Sentinel Intelligence Center** (Ministry of Petroleum HQ):
1.  On the login screen, click **Ministry of Petroleum (HQ)**.
2.  Enter the secure PIN: **`999`**.

---

## 📂 Project Structure
- `main.py`: FastAPI backend logic and endpoints.
- `frontend/src/pages/`: Contains the Ministry and User application pages.
- `frontend/src/components/ministry/`: The 8 modular intelligence tabs for the Sentinel dashboard.
